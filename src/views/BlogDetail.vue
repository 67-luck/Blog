<script setup lang="ts">
import { computed, ref, watch } from "vue";
import MarkdownIt from "markdown-it";
import { useRoute, useRouter } from "vue-router";
import type { BlogPost } from "../data/blog";
import { blogPosts } from "../data/blog";

const route = useRoute();
const router = useRouter();
const md = new MarkdownIt();

const post = computed(() => {
  const id = route.params.id as string;
  return blogPosts.find((item) => item.id === id) ?? null;
});

const renderedContent = computed(() => (post.value ? md.render(post.value.content) : ""));
const summary = ref("");
const summaryError = ref("");
const isSummarizing = ref(false);
const yuqueUrl = ref("");

const summaryButtonText = computed(() => {
  if (isSummarizing.value) {
    return "总结中...";
  }

  return summary.value ? "重新总结" : "AI 总结这篇文章";
});

function buildArticleContext(article: BlogPost) {
  return [
    `标题：${article.title}`,
    `日期：${article.date}`,
    `摘要：${article.summary}`,
    `标签：${article.tags.join(" / ")}`,
    "正文：",
    article.content,
  ].join("\n\n");
}

async function summarizeArticle() {
  if ((!post.value && !yuqueUrl.value.trim()) || isSummarizing.value) {
    return;
  }

  const sourceUrl = yuqueUrl.value.trim();
  const isRemoteSummary = Boolean(sourceUrl);

  isSummarizing.value = true;
  summaryError.value = "";

  try {
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pageHint: isRemoteSummary
          ? `语雀文章总结 / ${sourceUrl}`
          : `博客详情页 / ${post.value?.title ?? ""}`,
        siteContext: !isRemoteSummary && post.value ? buildArticleContext(post.value) : "",
        sourceUrl: isRemoteSummary ? sourceUrl : undefined,
        messages: [
          {
            role: "user",
            text: isRemoteSummary
              ? "请抓取这个公开语雀页面的正文并总结。先用一小段概括主题，再列出 3 到 5 条要点，最后补一句适合谁阅读。不要脱离原文发挥。"
              : "请总结这篇博客文章。先用一小段概括主题，再列出 3 到 5 条要点，最后补一句这篇文章适合谁阅读。不要脱离原文发挥。",
          },
        ],
      }),
    });

    const data = (await response.json().catch(() => ({}))) as {
      code?: string;
      error?: string;
      text?: string;
    };

    if (!response.ok) {
      throw new Error([data.error, data.code].filter(Boolean).join(" ") || "AI 总结暂时不可用。");
    }

    if (!data.text?.trim()) {
      throw new Error("AI 没有返回摘要内容。");
    }

    summary.value = data.text.trim();
  } catch (error) {
    summaryError.value = error instanceof Error ? error.message : "AI 总结暂时不可用。";
  } finally {
    isSummarizing.value = false;
  }
}

watch(
  () => post.value?.id,
  () => {
    summary.value = "";
    summaryError.value = "";
    isSummarizing.value = false;
  },
);
</script>

<template>
  <section v-if="post" class="detail-shell">
    <button type="button" class="back-link" @click="router.push('/blog')">返回文章列表</button>

    <p class="detail-date">{{ post.date }}</p>
    <h1>{{ post.title }}</h1>

    <div class="detail-tags">
      <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
    </div>

    <section class="summary-card">
      <div class="summary-head">
        <div>
          <p class="summary-eyebrow">AI Summary</p>
          <h2>先看一版文章总结</h2>
        </div>
        <button type="button" class="summary-action" :disabled="isSummarizing" @click="summarizeArticle">
          {{ summaryButtonText }}
        </button>
      </div>

      <p class="summary-hint">默认总结当前博客正文。也可以粘贴公开语雀链接，服务端会先抓正文再总结。</p>

      <div class="summary-source">
        <input
          v-model="yuqueUrl"
          type="url"
          placeholder="可选：粘贴公开语雀文章链接，如 https://www.yuque.com/..."
        />
      </div>

      <p v-if="isSummarizing" class="summary-state">正在整理文章主线和关键信息...</p>
      <p v-else-if="summaryError" class="summary-state error">{{ summaryError }}</p>
      <pre v-else-if="summary" class="summary-output">{{ summary }}</pre>
      <p v-else class="summary-state muted">点击按钮，让大模型先帮你读完这篇文章。</p>
    </section>

    <div class="detail-content" v-html="renderedContent"></div>
  </section>

  <section v-else class="detail-shell empty">
    <h1>文章不存在</h1>
  </section>
</template>

<style scoped>
.detail-shell {
  max-width: 900px;
  margin: 0 auto;
  color: #f8fbff;
}

.back-link {
  border: none;
  background: transparent;
  color: #98a5ff;
  cursor: pointer;
  padding: 0;
}

.detail-date {
  margin: 18px 0 0;
  color: rgba(248, 251, 255, 0.64);
}

h1 {
  margin: 10px 0 0;
  font-size: clamp(2.3rem, 4vw, 3.4rem);
  line-height: 1.2;
}

.detail-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.detail-tags span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(114, 102, 255, 0.14);
  color: #d9d4ff;
  font-size: 0.8rem;
}

.summary-card {
  margin-top: 28px;
  padding: 24px;
  border-radius: 28px;
  border: 1px solid rgba(111, 135, 255, 0.24);
  background:
    radial-gradient(circle at top right, rgba(84, 196, 255, 0.12), transparent 34%),
    rgba(10, 18, 38, 0.78);
  box-shadow: 0 18px 38px rgba(10, 18, 38, 0.24);
}

.summary-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.summary-eyebrow {
  margin: 0;
  color: #8ec5ff;
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.summary-head h2 {
  margin: 8px 0 0;
  font-size: 1.35rem;
}

.summary-action {
  min-width: 132px;
  min-height: 44px;
  padding: 0 18px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, #6f87ff, #37c9a7);
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  white-space: nowrap;
}

.summary-action:disabled {
  opacity: 0.7;
  cursor: wait;
}

.summary-hint,
.summary-state {
  margin: 16px 0 0;
  line-height: 1.8;
  color: rgba(248, 251, 255, 0.76);
}

.summary-source {
  margin-top: 16px;
}

.summary-source input {
  width: 100%;
  min-height: 48px;
  padding: 0 14px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: inherit;
}

.summary-state.muted {
  color: rgba(248, 251, 255, 0.62);
}

.summary-state.error {
  color: #ffb2b2;
}

.summary-output {
  margin: 16px 0 0;
  white-space: pre-wrap;
  font: inherit;
  line-height: 1.9;
  color: #f8fbff;
}

.detail-content {
  margin-top: 28px;
  padding: 28px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(12, 17, 34, 0.5);
  line-height: 1.9;
}

.detail-content :deep(h1),
.detail-content :deep(h2),
.detail-content :deep(h3) {
  margin-top: 1.6em;
  margin-bottom: 0.7em;
}

.detail-content :deep(p) {
  margin: 0 0 1em;
}

.detail-content :deep(ul),
.detail-content :deep(ol) {
  padding-left: 1.2rem;
}

.empty {
  text-align: center;
}

:global(.light) .detail-shell {
  color: #162033;
}

:global(.light) .detail-date {
  color: rgba(22, 32, 51, 0.64);
}

:global(.light) .detail-tags span {
  background: rgba(109, 120, 255, 0.12);
  color: #4c54c8;
}

:global(.light) .summary-card {
  border-color: rgba(75, 95, 146, 0.16);
  background:
    radial-gradient(circle at top right, rgba(84, 196, 255, 0.12), transparent 34%),
    rgba(255, 255, 255, 0.86);
  box-shadow: 0 18px 38px rgba(75, 95, 146, 0.1);
}

:global(.light) .summary-hint,
:global(.light) .summary-state {
  color: rgba(22, 32, 51, 0.72);
}

:global(.light) .summary-source input {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(72, 96, 164, 0.06);
}

:global(.light) .summary-state.muted {
  color: rgba(22, 32, 51, 0.56);
}

:global(.light) .summary-state.error {
  color: #c0392b;
}

:global(.light) .summary-output {
  color: #162033;
}

:global(.light) .detail-content {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(255, 255, 255, 0.72);
}

@media (max-width: 720px) {
  .summary-head {
    flex-direction: column;
  }

  .summary-action {
    width: 100%;
  }
}
</style>
