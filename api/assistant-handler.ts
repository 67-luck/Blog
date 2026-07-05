export interface JsonRequest {
  method?: string;
  body?: unknown;
}

export interface JsonResponse {
  status(code: number): JsonResponse;
  json(payload: unknown): void;
  setHeader?(name: string, value: string): void;
  write?(chunk: string): void;
  end?(chunk?: string): void;
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
  stream?: boolean;
  messages?: ChatMessage[];
}

interface ModelProvider {
  name: string;
  baseUrl: string;
  path: string;
  apiKey: string;
  model: string;
  supportsThinkingToggle: boolean;
}

const DEFAULT_MODEL = "Qwen/Qwen3.6-35B-A3B";
const DEFAULT_BASE_URL = "https://api.siliconflow.cn";
const DEFAULT_DEEPSEEK_BASE_URL = "https://api.deepseek.com";
const DEFAULT_DEEPSEEK_MODEL = "deepseek-chat";
const FALLBACK_TEXT = "AI 助手暂时没有生成稳定回答，请换个说法再问一次。";
const PROVIDER_ERROR_TEXT = "AI 服务当前波动，请稍后再试。";
const STREAM_FALLBACK_CHUNK_SIZE = 8;

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
    "你是王浩个人博客的 AI 助手。",
    "王浩是计算机科学与技术专业在读学生，求职方向是前端开发实习，具备 Vue3、UniApp、小程序、后台管理系统和 AI API 对接项目经验。",
    "回答必须优先基于提供的博客文章、远程正文或站内上下文，不要编造不存在的信息。",
    "如果用户要求总结文章，请先给出简短总览，再列出 3 到 5 条要点，最后补一句适合谁阅读。",
    "只要用户在请求总结，直接输出总结结果，不要先做自我介绍，不要寒暄。",
    "不要输出推理过程、思考过程或 reasoning 内容，只输出最终回答。",
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

function reinforceFinalAnswer(messages: Array<{ role: string; content: string }>) {
  const reinforcedMessages = messages.map((message, index) => {
    if (index !== 0 || message.role !== "system") {
      return message;
    }

    return {
      ...message,
      content: `${message.content}\n\n重要：上一次模型可能只返回了 reasoning_content。请关闭思考模式，只在 content 字段输出最终回答。`,
    };
  });

  return [
    ...reinforcedMessages,
    {
      role: "user",
      content: "请直接回答上一条用户问题，只输出最终答案，不要输出思考过程。",
    },
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

function resolveProviders(requestedModel?: string): ModelProvider[] {
  const providers: ModelProvider[] = [];
  const primaryApiKey = resolveApiKey();

  if (primaryApiKey) {
    providers.push({
      name: "primary",
      baseUrl: resolveBaseUrl(),
      path: process.env.AI_API_PATH || process.env.LONGCAT_API_PATH || "/v1/chat/completions",
      apiKey: primaryApiKey,
      model: resolveModel(requestedModel),
      supportsThinkingToggle: true,
    });
  }

  if (process.env.DEEPSEEK_API_KEY) {
    providers.push({
      name: "deepseek",
      baseUrl: normalizeBaseUrl(process.env.DEEPSEEK_API_BASE_URL || DEFAULT_DEEPSEEK_BASE_URL),
      path: process.env.DEEPSEEK_API_PATH || "/chat/completions",
      apiKey: process.env.DEEPSEEK_API_KEY,
      model: process.env.DEEPSEEK_MODEL || DEFAULT_DEEPSEEK_MODEL,
      supportsThinkingToggle: false,
    });
  }

  return providers;
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
  const choice = data?.choices?.[0];
  const message = choice?.message;
  const content = message?.content;

  if (typeof content === "string" && content.trim()) {
    return content.trim();
  }

  if (Array.isArray(content)) {
    return content
      .map((item: Record<string, any>) => item?.text ?? "")
      .join("")
      .trim();
  }

  if (typeof choice?.text === "string" && choice.text.trim()) {
    return choice.text.trim();
  }

  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  if (typeof data.text === "string" && data.text.trim()) {
    return data.text.trim();
  }

  return "";
}

async function requestCompletion(
  provider: ModelProvider,
  messages: Array<{ role: string; content: string }>,
) {
  const response = await fetch(`${provider.baseUrl}${provider.path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${provider.apiKey}`,
    },
    body: JSON.stringify({
      model: provider.model,
      messages,
      temperature: 0.4,
      max_tokens: 1000,
      stream: false,
      ...(provider.supportsThinkingToggle ? { enable_thinking: false } : {}),
    }),
  });

  const data = (await response.json().catch(() => ({}))) as Record<string, any>;

  return {
    data,
    response,
    text: response.ok ? extractResponseText(data) : "",
  };
}

async function streamCompletion(
  provider: ModelProvider,
  messages: Array<{ role: string; content: string }>,
  onText: (chunk: string) => void,
) {
  const response = await fetch(`${provider.baseUrl}${provider.path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${provider.apiKey}`,
    },
    body: JSON.stringify({
      model: provider.model,
      messages,
      temperature: 0.4,
      max_tokens: 1000,
      stream: true,
      ...(provider.supportsThinkingToggle ? { enable_thinking: false } : {}),
    }),
  });

  if (!response.ok || !response.body) {
    const data = (await response.json().catch(() => ({}))) as Record<string, any>;

    return {
      ok: false,
      status: response.status,
      error: data?.error?.message ?? PROVIDER_ERROR_TEXT,
      code: data?.error?.code ?? "provider_request_failed",
      hadContent: false,
      hadReasoning: false,
    };
  }

  const decoder = new TextDecoder();
  const reader = response.body.getReader();
  let buffer = "";
  let hadContent = false;
  let hadReasoning = false;

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      const trimmed = line.trim();

      if (!trimmed.startsWith("data:")) {
        continue;
      }

      const payload = trimmed.slice(5).trim();

      if (!payload || payload === "[DONE]") {
        continue;
      }

      try {
        const data = JSON.parse(payload) as Record<string, any>;
        const delta = data?.choices?.[0]?.delta ?? {};
        const text =
          typeof delta.content === "string"
            ? delta.content
            : typeof data?.choices?.[0]?.message?.content === "string"
              ? data.choices[0].message.content
              : "";

        if (text) {
          hadContent = true;
          onText(text);
        }

        if (typeof delta.reasoning_content === "string" && delta.reasoning_content.trim()) {
          hadReasoning = true;
        }
      } catch {
        continue;
      }
    }
  }

  return {
    ok: true,
    status: response.status,
    error: "",
    code: "",
    hadContent,
    hadReasoning,
  };
}

async function resolveFallbackText(
  providers: ModelProvider[],
  messages: Array<{ role: string; content: string }>,
) {
  for (const provider of providers) {
    let completion = await requestCompletion(provider, reinforceFinalAnswer(messages));
    let { response, text } = completion;

    if (!response.ok) {
      continue;
    }

    if (!text) {
      completion = await requestCompletion(provider, [
        {
          role: "system",
          content: "你是站内 AI 助手。请用简洁中文直接回答，不要输出思考过程。",
        },
        {
          role: "user",
          content: "请回复：我已收到你的问题，但当前模型没有稳定生成答案。请换个说法再问一次。",
        },
      ]);

      response = completion.response;
      text = completion.text;
    }

    if (response.ok && text) {
      return text;
    }
  }

  return FALLBACK_TEXT;
}

async function writeTextInChunks(text: string, write: (chunk: string) => void) {
  for (let index = 0; index < text.length; index += STREAM_FALLBACK_CHUNK_SIZE) {
    write(text.slice(index, index + STREAM_FALLBACK_CHUNK_SIZE));
    await new Promise((resolve) => setTimeout(resolve, 12));
  }
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
      "User-Agent": "Mozilla/5.0 WangHaoBlogAI/1.0",
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

  const body = parseBody(req.body);
  const providers = resolveProviders(body.model);

  if (!providers.length) {
    res.status(500).json({
      error: "服务端未配置 AI API Key。",
      code: "missing_server_key",
    });
    return;
  }

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

  const messages = buildMessages({
    ...body,
    siteContext,
  });

  try {
    if (body.stream) {
      if (!res.setHeader || !res.write || !res.end) {
        res.status(500).json({
          error: "当前运行环境不支持流式输出。",
          code: "stream_not_supported",
        });
        return;
      }

      res.status(200);
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("X-Accel-Buffering", "no");

      let wroteText = false;
      let hasCompleted = false;

      for (const provider of providers) {
        let result = await streamCompletion(provider, messages, (chunk) => {
          wroteText = true;
          res.write?.(chunk);
        });

        if (result.ok && result.hadContent) {
          hasCompleted = true;
          break;
        }

        result = await streamCompletion(provider, reinforceFinalAnswer(messages), (chunk) => {
          wroteText = true;
          res.write?.(chunk);
        });

        if (result.ok && result.hadContent) {
          hasCompleted = true;
          break;
        }
      }

      if (!hasCompleted || !wroteText) {
        const fallbackText = await resolveFallbackText(providers, messages);
        await writeTextInChunks(fallbackText, (chunk) => res.write?.(chunk));
      }

      res.end();
      return;
    }

    for (const provider of providers) {
      let completion = await requestCompletion(provider, messages);
      let { response, text } = completion;

      if (!response.ok) {
        continue;
      }

      if (!text) {
        completion = await requestCompletion(provider, reinforceFinalAnswer(messages));
        response = completion.response;
        text = completion.text;
      }

      if (response.ok && text) {
        res.status(200).json({ text });
        return;
      }
    }

    res.status(200).json({
      text: await resolveFallbackText(providers, messages),
    });
  } catch (error) {
    console.error(error);
    res.status(503).json({
      error: "AI 服务当前不可用。",
      code: "server_unavailable",
    });
  }
}
