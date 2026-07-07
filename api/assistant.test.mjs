import assert from "node:assert/strict";
import test from "node:test";
import handleAssistant from "./assistant.ts";

function createStream(chunks) {
  const encoder = new TextEncoder();

  return new ReadableStream({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk));
      }

      controller.close();
    },
  });
}

function createResponse() {
  const chunks = [];

  return {
    chunks,
    statusCode: 200,
    headers: {},
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      chunks.push(JSON.stringify(payload));
    },
    setHeader(name, value) {
      this.headers[name] = value;
    },
    write(chunk) {
      chunks.push(chunk);
    },
    end(chunk = "") {
      if (chunk) {
        chunks.push(chunk);
      }
    },
  };
}

test("streaming assistant builds a site-context answer when providers return no final content", async () => {
  process.env.AI_API_KEY = "test-key";
  process.env.AI_MODEL = "test-model";
  process.env.AI_API_BASE_URL = "https://example.test";

  const originalFetch = globalThis.fetch;
  let callCount = 0;

  globalThis.fetch = async () => {
    callCount += 1;

    if (callCount <= 2) {
      return new Response(createStream(['data: {"choices":[{"delta":{"reasoning_content":"thinking"}}]}\n\n', "data: [DONE]\n\n"]), {
        status: 200,
        headers: { "content-type": "text/event-stream" },
      });
    }

    return new Response(
      JSON.stringify({
        choices: [
          {
            message: {
              reasoning_content: "thinking",
              content: "",
            },
          },
        ],
      }),
      {
        status: 200,
        headers: { "content-type": "application/json" },
      },
    );
  };

  try {
    const response = createResponse();

    await handleAssistant(
      {
        method: "POST",
        body: {
          stream: true,
          pageHint: "项目页",
          siteContext: [
            "项目资料",
            "项目：个人博客系统",
            "周期：2026",
            "类型：全栈项目",
            "简介：支持技术笔记分享、项目经验展示，并内置 AI 助手。",
            "职责：负责 Vue3 前端、Node.js 接口与 AI API 对接。",
            "技术栈：Vue3 / Node.js / Vercel",
            "亮点：流式对话；内容检索",
          ].join("\n"),
          messages: [{ role: "user", text: "介绍项目" }],
        },
      },
      response,
    );

    const text = response.chunks.join("");

    assert.equal(response.statusCode, 200);
    assert.match(text, /个人博客系统/);
    assert.match(text, /Vue3/);
    assert.doesNotMatch(text, /没有生成稳定回答/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("non-streaming assistant reads provider output content blocks", async () => {
  process.env.AI_API_KEY = "test-key";
  process.env.AI_MODEL = "test-model";
  process.env.AI_API_BASE_URL = "https://example.test";

  const originalFetch = globalThis.fetch;

  globalThis.fetch = async () =>
    new Response(
      JSON.stringify({
        output: [
          {
            content: [
              { type: "output_text", text: "Provider block answer" },
              { type: "text", text: " with details" },
            ],
          },
        ],
      }),
      {
        status: 200,
        headers: { "content-type": "application/json" },
      },
    );

  try {
    const response = createResponse();

    await handleAssistant(
      {
        method: "POST",
        body: {
          stream: false,
          messages: [{ role: "user", text: "hello" }],
        },
      },
      response,
    );

    const payload = JSON.parse(response.chunks.join(""));

    assert.equal(response.statusCode, 200);
    assert.equal(payload.text, "Provider block answer with details");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("streaming assistant reads delta content blocks", async () => {
  process.env.AI_API_KEY = "test-key";
  process.env.AI_MODEL = "test-model";
  process.env.AI_API_BASE_URL = "https://example.test";

  const originalFetch = globalThis.fetch;

  globalThis.fetch = async () =>
    new Response(
      createStream([
        'data: {"choices":[{"delta":{"content":[{"type":"text","text":"Stream block"},{"type":"output_text","text":" answer"}]}}]}\n\n',
        "data: [DONE]\n\n",
      ]),
      {
        status: 200,
        headers: { "content-type": "text/event-stream" },
      },
    );

  try {
    const response = createResponse();

    await handleAssistant(
      {
        method: "POST",
        body: {
          stream: true,
          messages: [{ role: "user", text: "hello" }],
        },
      },
      response,
    );

    assert.equal(response.statusCode, 200);
    assert.equal(response.chunks.join(""), "Stream block answer");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
