<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { blogPosts } from "../data/blog";
import { notes, studyRoadmap } from "../data/notes";
import { projects } from "../data/projects";
import { aboutData } from "../data/resume";
import { usePlayerStore } from "../stores/player";

interface ChatMessage {
  id: number;
  role: "assistant" | "user";
  text: string;
}

interface AssistantResponse {
  code?: string;
  error?: string;
  text?: string;
}

const playerStore = usePlayerStore();
const route = useRoute();

const isOpen = ref(false);
const isThinking = ref(false);
const draft = ref("");
const scrollRef = ref<HTMLElement | null>(null);
const messageId = ref(1);

const messages = ref<ChatMessage[]>([
  {
    id: 0,
    role: "assistant",
    text: "我是站内 AI 助手。你可以问我项目、笔记、文章、联系方式，或者让我结合当前页面帮你整理内容。",
  },
]);

const quickReplies = computed(() => ["介绍项目", "总结文章", "学习笔记", "联系方式"]);

const currentPageHint = computed(() => {
  const currentPost = blogPosts.find((item) => route.path.includes(`/blog/${item.id}`));

  if (currentPost) {
    return `博客详情页 / ${currentPost.title}`;
  }

  const pageMap: Record<string, string> = {
    "/": "首页",
    "/projects": "项目页",
    "/notes": "笔记页",
    "/blog": "文章列表页",
    "/music": "音乐页",
    "/about": "关于我页",
  };

  return pageMap[route.path] ?? route.path;
});

function pushMessage(role: ChatMessage["role"], text: string) {
  messages.value.push({
    id: messageId.value,
    role,
    text,
  });
  messageId.value += 1;
}

function replaceMessage(id: number, text: string) {
  const message = messages.value.find((item) => item.id === id);

  if (message) {
    message.text = text;
  }
}

function buildSiteContext() {
  const projectContext = projects
    .map((item) =>
      [
        `项目：${item.name}`,
        `周期：${item.period}`,
        `类型：${item.type}`,
        `简介：${item.summary}`,
        `职责：${item.role}`,
        `技术栈：${item.techStack.join(" / ")}`,
        `亮点：${item.highlights.join("；")}`,
        `链接：${item.links.map((link) => `${link.label} ${link.url}`).join(" / ")}`,
      ].join("\n"),
    )
    .join("\n\n");

  const noteContext = notes
    .map((item) =>
      [
        `笔记：${item.title}`,
        `分类：${item.category}`,
        `更新时间：${item.updatedAt}`,
        `摘要：${item.summary}`,
        `标签：${item.tags.join(" / ")}`,
        `语雀：${item.yuqueUrl}`,
      ].join("\n"),
    )
    .join("\n\n");

  const blogContext = blogPosts
    .map((item) =>
      [
        `文章：${item.title}`,
        `日期：${item.date}`,
        `摘要：${item.summary}`,
        `标签：${item.tags.join(" / ")}`,
        `正文摘录：${item.content.slice(0, 1200)}`,
      ].join("\n"),
    )
    .join("\n\n");

  const roadmapContext = studyRoadmap
    .map((item) => `${item.phase}：${item.period}，重点 ${item.focus}，产出 ${item.outcome}`)
    .join("\n");

  const track = playerStore.currentTrack;

  return [
    "个人信息",
    `姓名：${aboutData.name}`,
    `定位：${aboutData.role}`,
    `状态：${aboutData.status}`,
    `简介：${aboutData.summary}`,
    `经历：${aboutData.bio.join(" ")}`,
    `核心优势：${aboutData.strengths.join(" ")}`,
    `工作方式：${aboutData.workStyle.join(" ")}`,
    `技能：${aboutData.skillGroups.map((group) => `${group.title}：${group.items.join(" / ")}`).join("；")}`,
    `联系方式：电话 ${aboutData.contact.phone}，邮箱 ${aboutData.contact.email}，GitHub ${aboutData.contact.github}，博客 ${aboutData.contact.blog}，语雀 ${aboutData.contact.yuque}`,
    "",
    "当前音乐",
    `当前播放：${track.title} - ${track.artist}`,
    `专辑：${track.album}`,
    `来源：${track.sourceUrl}`,
    "",
    "学习路线",
    roadmapContext,
    "",
    "项目资料",
    projectContext,
    "",
    "笔记资料",
    noteContext,
    "",
    "文章资料",
    blogContext,
  ].join("\n");
}

async function scrollToBottom(behavior: ScrollBehavior = "auto") {
  await nextTick();

  scrollRef.value?.scrollTo({
    top: scrollRef.value.scrollHeight,
    behavior,
  });
}

async function readAssistantError(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const data = (await response.json().catch(() => ({}))) as AssistantResponse;
    const detail = [data.error, data.code].filter(Boolean).join(" ");

    return detail || `AI 服务请求失败：${response.status}`;
  }

  const text = await response.text().catch(() => "");

  return text.trim() || `AI 服务请求失败：${response.status}`;
}

async function sendMessage(text = draft.value) {
  const value = text.trim();

  if (!value || isThinking.value) {
    return;
  }

  pushMessage("user", value);
  draft.value = "";
  isThinking.value = true;

  const thinkingId = messageId.value;
  pushMessage("assistant", "正在思考中...");
  await scrollToBottom("smooth");

  try {
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stream: true,
        pageHint: currentPageHint.value,
        siteContext: buildSiteContext(),
        messages: messages.value
          .filter((message) => message.id !== thinkingId)
          .slice(-10)
          .map((message) => ({
            role: message.role,
            text: message.text,
          })),
      }),
    });

    if (!response.ok) {
      throw new Error(await readAssistantError(response));
    }

    let answer = "";

    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        answer += decoder.decode(value, { stream: true });
        replaceMessage(thinkingId, answer || "正在思考中...");
        await scrollToBottom();
      }

      answer += decoder.decode();
    } else {
      const data = (await response.json().catch(() => ({}))) as AssistantResponse;
      answer = data.text || data.error || "";
    }

    if (!answer.trim()) {
      answer = response.ok ? "AI 助手暂时没有生成内容，请再试一次。" : "AI 服务当前波动，请稍后再试。";
    }

    replaceMessage(thinkingId, answer.trim());
  } catch (error) {
    replaceMessage(
      thinkingId,
      error instanceof Error
        ? `AI 助手连接失败：${error.message}`
        : "AI 助手连接失败，请稍后再试。",
    );
  } finally {
    isThinking.value = false;
    await scrollToBottom("smooth");
  }
}

watch(
  () => messages.value.length,
  async () => {
    await scrollToBottom();
  },
);
</script>

<template>
  <div class="assistant-root">
    <transition name="bubble">
      <section v-if="isOpen" class="assistant-panel">
        <div class="panel-top">
          <div>
            <p class="panel-title">AI 助手</p>
            <p class="panel-subtitle">已接入大模型，可结合站内内容回答</p>
          </div>
          <button class="panel-close" type="button" @click="isOpen = false">x</button>
        </div>

        <div ref="scrollRef" class="message-list">
          <article
            v-for="message in messages"
            :key="message.id"
            class="message-item"
            :class="message.role"
          >
            {{ message.text }}
          </article>
        </div>

        <div class="quick-list">
          <button
            v-for="reply in quickReplies"
            :key="reply"
            type="button"
            :disabled="isThinking"
            @click="sendMessage(reply)"
          >
            {{ reply }}
          </button>
        </div>

        <div class="composer">
          <input
            v-model="draft"
            type="text"
            :disabled="isThinking"
            placeholder="输入你想问的内容"
            @keydown.enter.prevent="sendMessage()"
          />
          <button type="button" :disabled="isThinking" @click="sendMessage()">
            {{ isThinking ? "等待" : "发送" }}
          </button>
        </div>
      </section>
    </transition>

    <button class="assistant-trigger" type="button" @click="isOpen = !isOpen">
      <span>AI</span>
      <strong>AI 助手</strong>
      <small>大模型对话</small>
    </button>
  </div>
</template>

<style scoped>
.assistant-root {
  position: fixed;
  right: 22px;
  top: 138px;
  z-index: 96;
  display: grid;
  justify-items: end;
  gap: 14px;
}

.assistant-panel {
  width: min(400px, calc(100vw - 24px));
  height: min(68vh, 580px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto auto;
  gap: 14px;
  padding: 20px;
  overflow: hidden;
  border-radius: 30px;
  border: 1px solid rgba(255, 124, 180, 0.24);
  background:
    radial-gradient(circle at top, rgba(255, 112, 181, 0.14), transparent 38%),
    rgba(10, 14, 30, 0.96);
  color: #f4f7ff;
  backdrop-filter: blur(22px);
  box-shadow: 0 22px 46px rgba(255, 79, 192, 0.18);
}

.panel-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.panel-title {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 800;
}

.panel-subtitle {
  margin: 6px 0 0;
  opacity: 0.8;
  line-height: 1.6;
}

.panel-close,
.quick-list button,
.composer button {
  border: none;
  color: inherit;
  font: inherit;
}

.panel-close {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
}

.message-list {
  min-height: 0;
  overflow: auto;
  display: grid;
  gap: 10px;
  padding-right: 6px;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

.message-item {
  margin: 0;
  padding: 12px 14px;
  border-radius: 18px;
  line-height: 1.7;
  font-size: 0.95rem;
  white-space: pre-wrap;
}

.message-item.assistant {
  background: rgba(255, 255, 255, 0.06);
}

.message-item.user {
  background: rgba(109, 120, 255, 0.22);
}

.quick-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.quick-list button {
  min-height: 38px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
}

.quick-list button:disabled,
.composer button:disabled,
.composer input:disabled {
  opacity: 0.64;
  cursor: wait;
}

.composer {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
}

.composer input {
  width: 100%;
  min-height: 48px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: inherit;
  padding: 0 14px;
}

.composer button {
  min-width: 76px;
  border-radius: 18px;
  background: linear-gradient(135deg, #ff8a5b, #ff4fc0);
  color: #fff;
  cursor: pointer;
}

.assistant-trigger {
  min-width: 154px;
  min-height: 76px;
  display: grid;
  place-items: center;
  gap: 2px;
  padding: 10px 22px;
  border: 1px solid rgba(255, 124, 180, 0.34);
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(255, 138, 91, 0.96), rgba(255, 79, 192, 0.92)),
    linear-gradient(135deg, rgba(86, 120, 255, 0.5), rgba(55, 201, 167, 0.4));
  color: #fff;
  box-shadow:
    0 24px 42px rgba(255, 79, 192, 0.22),
    0 10px 22px rgba(255, 138, 91, 0.18);
  cursor: pointer;
}

.assistant-trigger span {
  font-size: 1.05rem;
  font-weight: 900;
}

.assistant-trigger strong {
  font-size: 1rem;
}

.assistant-trigger small {
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  opacity: 0.9;
  text-transform: uppercase;
}

.bubble-enter-active,
.bubble-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.bubble-enter-from,
.bubble-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

:global(.light) .assistant-panel {
  border-color: rgba(255, 124, 180, 0.16);
  background:
    radial-gradient(circle at top, rgba(255, 112, 181, 0.08), transparent 38%),
    rgba(255, 255, 255, 0.92);
  color: #162033;
}

:global(.light) .message-item.assistant,
:global(.light) .quick-list button,
:global(.light) .composer input,
:global(.light) .panel-close {
  background: rgba(75, 95, 146, 0.08);
}

@media (max-width: 768px) {
  .assistant-root {
    right: 12px;
    top: auto;
    bottom: 84px;
  }

  .assistant-panel {
    height: min(62vh, 520px);
  }

  .composer {
    grid-template-columns: 1fr;
  }
}
</style>
