<script setup lang="ts">
import { useRouter } from "vue-router";
import PageHero from "../components/PageHero.vue";
import { blogPosts } from "../data/blog";

const router = useRouter();
</script>

<template>
  <section class="page-shell">
    <PageHero
      eyebrow="Articles"
      title="文章与复盘"
      description="本页只放“文章与复盘”主题内容，重点记录信息架构、播放器状态边界、学习沉淀和项目表达方式的迭代思考。"
    />

    <div class="cards-grid">
      <article
        v-for="post in blogPosts"
        :key="post.id"
        class="post-card hover-card"
        @click="router.push(`/blog/${post.id}`)"
      >
        <p class="post-date">{{ post.date }}</p>
        <h2>{{ post.title }}</h2>
        <p class="post-summary">{{ post.summary }}</p>
        <div class="tag-row">
          <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  color: #f8fbff;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.post-card {
  padding: 24px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(12, 17, 34, 0.5);
  backdrop-filter: blur(18px);
  cursor: pointer;
}

.post-date,
.post-summary {
  margin: 0;
  color: rgba(248, 251, 255, 0.72);
  line-height: 1.8;
}

.post-card h2 {
  margin: 12px 0;
  font-size: 1.2rem;
  line-height: 1.6;
}

.tag-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.tag-row span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(114, 102, 255, 0.14);
  color: #d9d4ff;
  font-size: 0.78rem;
}

:global(.light) .page-shell {
  color: #162033;
}

:global(.light) .post-date,
:global(.light) .post-summary {
  color: rgba(22, 32, 51, 0.72);
}

:global(.light) .post-card {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(255, 255, 255, 0.72);
}

:global(.light) .tag-row span {
  background: rgba(109, 120, 255, 0.12);
  color: #4c54c8;
}
</style>
