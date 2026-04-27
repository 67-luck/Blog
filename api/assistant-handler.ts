export interface JsonRequest {
  method?: string;
  body?: unknown;
}

export interface JsonResponse {
  status(code: number): JsonResponse;
  json(payload: unknown): void;
}

interface ChatMessage {
  role: "assistant" | "system" | "user";
  text: string;
}

interface AssistantBody {
  model?: string;
  pageHint?: string;
  siteContext?: string;
  sourceUrl?: string;
  messages?: ChatMessage[];
}

const DEFAULT_MODEL = "LongCat-Flash-Chat";
const DEFAULT_BASE_URL = "https://api.longcat.chat/openai";

function parseBody(body: unknown): AssistantBody {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as AssistantBody;
    } catch {
      return {};
    }
  }

  if (body && typeof body === "object") {
    return body as AssistantBody;
  }

  return {};
}

function buildInstructions(body: AssistantBody) {
  return [
    "你是 Luck67 博客的 AI 助手。",
    "回答必须优先基于提供的博客文章、远程正文或站内上下文，不要编造不存在的信息。",
    "如果用户要求总结文章，请先给出简短总览，再列出 3 到 5 条要点，最后补一句适合谁阅读。",
    "只要用户在请求总结，直接输出总结结果，不要先做自我介绍，不要寒暄。",
    "默认使用简洁中文回答。",
    `当前页面提示：${body.pageHint ?? "未提供"}`,
    "",
    "下面是当前可用上下文：",
    (body.siteContext ?? "").slice(0, 12000),
  ].join("\n");
}

function buildMessages(body: AssistantBody) {
  const recentMessages = (body.messages ?? [])
    .filter((message) => message?.text?.trim())
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: message.text,
    }));

  return [
    {
      role: "system",
      content: buildInstructions(body),
    },
    ...recentMessages,
  ];
}

function normalizeBaseUrl(value: string) {
  return value.replace(/\/+$/, "");
}

function resolveApiKey() {
  return (
    process.env.AI_API_KEY ||
    process.env.LONGCAT_API_KEY ||
    process.env.VITE_LONGCAT_API_KEY ||
    process.env.OPENAI_API_KEY
  );
}

function resolveBaseUrl() {
  return normalizeBaseUrl(
    process.env.AI_API_BASE_URL ||
      process.env.LONGCAT_API_BASE_URL ||
      process.env.VITE_LONGCAT_BASE_URL ||
      DEFAULT_BASE_URL,
  );
}

function resolveModel(requestedModel?: string) {
  return (
    requestedModel ||
    process.env.AI_MODEL ||
    process.env.LONGCAT_MODEL ||
    process.env.VITE_LONGCAT_MODEL ||
    DEFAULT_MODEL
  );
}

function extractResponseText(data: Record<string, any>) {
  const content = data?.choices?.[0]?.message?.content;

  if (typeof content === "string" && content.trim()) {
    return content.trim();
  }

  if (Array.isArray(content)) {
    return content
      .map((item: Record<string, any>) => item?.text ?? "")
      .join("")
      .trim();
  }

  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  return "";
}

function decodeHtmlEntities(text: string) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripHtml(html: string) {
  return decodeHtmlEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|section|article|li|h1|h2|h3|h4|h5|h6)>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/\r/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim(),
  );
}

function extractArticleHtml(html: string) {
  const patterns = [
    /<article[\s\S]*?>([\s\S]*?)<\/article>/i,
    /<div[^>]+class="[^"]*(?:ne-viewer-body|lake-content|yuque-content)[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<main[\s\S]*?>([\s\S]*?)<\/main>/i,
    /<body[\s\S]*?>([\s\S]*?)<\/body>/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);

    if (match?.[1]?.trim()) {
      return match[1];
    }
  }

  return html;
}

function isAllowedRemoteUrl(value: string) {
  try {
    const url = new URL(value);
    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      /(^|\.)yuque\.com$/i.test(url.hostname)
    );
  } catch {
    return false;
  }
}

async function fetchRemoteArticleContext(sourceUrl: string) {
  if (!isAllowedRemoteUrl(sourceUrl)) {
    throw new Error("目前只支持抓取公开的语雀文章链接。");
  }

  const response = await fetch(sourceUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 Luck67BlogAI/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`抓取语雀正文失败，状态码 ${response.status}。`);
  }

  const html = await response.text();
  const articleText = stripHtml(extractArticleHtml(html)).slice(0, 12000);

  if (!articleText) {
    throw new Error("没有从语雀页面提取到可用正文。");
  }

  return `远程文章来源：${sourceUrl}\n\n正文：\n${articleText}`;
}

export default async function handleAssistant(req: JsonRequest, res: JsonResponse) {
  if (req.method !== "POST") {
    res.status(405).json({
      error: "Method Not Allowed",
      code: "method_not_allowed",
    });
    return;
  }

  const apiKey = resolveApiKey();

  if (!apiKey) {
    res.status(500).json({
      error: "服务端未配置 LongCat API Key。",
      code: "missing_server_key",
    });
    return;
  }

  const body = parseBody(req.body);
  let siteContext = body.siteContext ?? "";

  if (!siteContext.trim() && body.sourceUrl) {
    try {
      siteContext = await fetchRemoteArticleContext(body.sourceUrl);
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "抓取远程文章失败。",
        code: "remote_content_unavailable",
      });
      return;
    }
  }

  const baseUrl = resolveBaseUrl();
  const model = resolveModel(body.model);

  try {
    const response = await fetch(`${baseUrl}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: buildMessages({
          ...body,
          siteContext,
        }),
        temperature: 0.4,
        max_tokens: 420,
        stream: false,
      }),
    });

    const data = (await response.json().catch(() => ({}))) as Record<string, any>;

    if (!response.ok) {
      res.status(response.status).json({
        error: data?.error?.message ?? "模型请求失败。",
        code: data?.error?.code ?? "provider_request_failed",
      });
      return;
    }

    const text = extractResponseText(data);

    if (!text) {
      res.status(502).json({
        error: "模型返回为空。",
        code: "empty_response",
      });
      return;
    }

    res.status(200).json({ text });
  } catch (error) {
    console.error(error);
    res.status(503).json({
      error: "AI 服务当前不可用。",
      code: "server_unavailable",
    });
  }
}
