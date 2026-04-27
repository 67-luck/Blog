<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { blogPosts } from "../data/blog";
import { notes } from "../data/notes";
import { projects } from "../data/projects";
import { aboutData } from "../data/resume";
import { usePlayerStore } from "../stores/player";

interface ChatMessage {
  id: number;
  role: "assistant" | "user";
  text: string;
}

const playerStore = usePlayerStore();
const isOpen = ref(false);
const draft = ref("");
const scrollRef = ref<HTMLElement | null>(null);
const messageId = ref(1);

const messages = ref<ChatMessage[]>([
  {
    id: 0,
    role: "assistant",
    text: "我是站内 AI 助手。你可以直接问我项目、笔记、文章、联系方式，或者让我帮你查当前歌曲。",
  },
]);

const quickReplies = computed(() => ["查项目", "查笔记", "查文章", "联系方式"]);

function pushMessage(role: ChatMessage["role"], text: string) {
  messages.value.push({
    id: messageId.value,
    role,
    text,
  });
  messageId.value += 1;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function extractKeyword(value: string, pattern: RegExp) {
  return normalize(value.replace(pattern, ""));
}

function formatResults(
  title: string,
  items: Array<{
    title: string;
    summary: string;
    extra?: string;
  }>,
  emptyText: string,
) {
  if (!items.length) {
    return emptyText;
  }

  return `${title}\n${items
    .slice(0, 4)
    .map((item) => `- ${item.title}${item.extra ? `（${item.extra}）` : ""}\n  ${item.summary}`)
    .join("\n")}`;
}

function searchProjects(keyword: string) {
  const q = extractKeyword(keyword, /帮我|帮忙|查找|搜索|看看|一下|关于|项目|作品|的|吧|呀|啊|查/g);

  return (q ? projects : projects.slice(0, 3)).filter((item) =>
    [item.name, item.summary, item.role, ...item.techStack, ...item.highlights]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

function searchNotes(keyword: string) {
  const q = extractKeyword(
    keyword,
    /帮我|帮忙|查找|搜索|看看|一下|关于|笔记|学习|的|吧|呀|啊|查/g,
  );

  return (q ? notes : notes.slice(0, 4)).filter((item) =>
    [item.title, item.summary, item.category, ...item.tags].join(" ").toLowerCase().includes(q),
  );
}

function searchArticles(keyword: string) {
  const q = extractKeyword(
    keyword,
    /帮我|帮忙|查找|搜索|看看|一下|关于|文章|博客|复盘|的|吧|呀|啊|查/g,
  );

  return (q ? blogPosts : blogPosts.slice(0, 3)).filter((item) =>
    [item.title, item.summary, ...item.tags].join(" ").toLowerCase().includes(q),
  );
}

function replyFor(query: string) {
  const text = normalize(query);

  if (!text) {
    return "可以直接输入关键词，比如“Vue”“播放器”“项目”“联系方式”。";
  }

  if (/(联系|邮箱|qq|github)/.test(text)) {
    return `联系我可以用这两个方式：\n- QQ 邮箱：${aboutData.contact.email}\n- GitHub：${aboutData.contact.github}`;
  }

  if (/(音乐|歌曲|歌单|播放|正在听|当前歌曲)/.test(text)) {
    return `当前播放：${playerStore.currentTrack.title} - ${playerStore.currentTrack.artist}\n来源：${playerStore.currentTrack.sourceUrl}`;
  }

  if (/(项目|作品)/.test(text)) {
    return formatResults(
      "我帮你找到这些项目：",
      searchProjects(text).map((item) => ({
        title: item.name,
        summary: item.summary,
        extra: item.period,
      })),
      "没有找到匹配的项目。你可以试试输入 Vue、后台、博客、工程化 这类关键词。",
    );
  }

  if (/(笔记|学习|vue|javascript|typescript|webpack|axios|node)/.test(text)) {
    return formatResults(
      "这些笔记和你的关键词最接近：",
      searchNotes(text).map((item) => ({
        title: item.title,
        summary: item.summary,
        extra: item.category,
      })),
      "没有找到匹配的笔记。你可以试试 Vue、JavaScript、TypeScript、工程化 这些词。",
    );
  }

  if (/(文章|博客|复盘|播放器|状态|架构)/.test(text)) {
    return formatResults(
      "这些文章和你的关键词最接近：",
      searchArticles(text).map((item) => ({
        title: item.title,
        summary: item.summary,
        extra: item.date,
      })),
      "没有找到匹配的文章。你可以试试 首页、播放器、复盘、架构 这些词。",
    );
  }

  const globalMatches = [
    ...projects.map((item) => ({
      type: "项目",
      title: item.name,
      summary: item.summary,
    })),
    ...notes.map((item) => ({
      type: "笔记",
      title: item.title,
      summary: item.summary,
    })),
    ...blogPosts.map((item) => ({
      type: "文章",
      title: item.title,
      summary: item.summary,
    })),
  ].filter((item) => `${item.title} ${item.summary}`.toLowerCase().includes(text));

  if (globalMatches.length) {
    return `我查到这些站内内容：\n${globalMatches
      .slice(0, 5)
      .map((item) => `- [${item.type}] ${item.title}`)
      .join("\n")}`;
  }

  return "我目前只做站内对话和内容查找。你可以问我项目、笔记、文章、联系方式或当前歌曲。";
}

async function scrollToBottom(behavior: ScrollBehavior = "auto") {
  await nextTick();

  scrollRef.value?.scrollTo({
    top: scrollRef.value.scrollHeight,
    behavior,
  });
}

async function sendMessage(text = draft.value) {
  const value = text.trim();

  if (!value) {
    return;
  }

  pushMessage("user", value);
  draft.value = "";
  pushMessage("assistant", replyFor(value));
  await scrollToBottom("smooth");
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
            <p class="panel-title">🤖 AI 助手</p>
            <p class="panel-subtitle">只做站内问答和内容查找</p>
          </div>
          <button class="panel-close" type="button" @click="isOpen = false">×</button>
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
            @click="sendMessage(reply)"
          >
            {{ reply }}
          </button>
        </div>

        <div class="composer">
          <input
            v-model="draft"
            type="text"
            placeholder="输入你想查找的内容"
            @keydown.enter.prevent="sendMessage()"
          />
          <button type="button" @click="sendMessage()">发送</button>
        </div>
      </section>
    </transition>

    <button class="assistant-trigger" type="button" @click="isOpen = !isOpen">
      <span>🤖</span>
      <strong>AI 助手</strong>
      <small>站内对话</small>
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
  font-size: 1.55rem;
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
