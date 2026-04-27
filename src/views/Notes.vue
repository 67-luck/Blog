<script setup lang="ts">
import { computed, ref } from "vue";
import PageHero from "../components/PageHero.vue";
import { noteCategoryOrder, notes, studyRoadmap } from "../data/notes";

const activeCategory = ref("全部");
const categories = computed(() => ["全部", ...noteCategoryOrder]);
const filteredNotes = computed(() =>
  activeCategory.value === "全部"
    ? notes
    : notes.filter((note) => note.category === activeCategory.value),
);
</script>

<template>
  <section class="page-shell">
    <PageHero
      eyebrow="Notes"
      title="技术笔记导航"
      description="这里不放完整正文，而是作为技术笔记入口，方便快速跳转到语雀原文，展示持续学习和知识沉淀。"
    />

    <div class="filters">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        :class="{ active: activeCategory === category }"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <section class="roadmap-card hover-card">
      <div class="roadmap-head">
        <div>
          <p>学习规划</p>
          <h2>按基础语言 → 工程化 → 框架生态推进</h2>
        </div>
        <span>2025 学习路线</span>
      </div>

      <div class="roadmap-grid">
        <article v-for="item in studyRoadmap" :key="item.phase" class="roadmap-item">
          <strong>{{ item.phase }}</strong>
          <small>{{ item.period }}</small>
          <p>{{ item.focus }}</p>
          <span>{{ item.outcome }}</span>
        </article>
      </div>
    </section>

    <div class="cards-grid">
      <a
        v-for="note in filteredNotes"
        :key="note.id"
        class="note-card hover-card"
        :href="note.yuqueUrl"
        target="_blank"
        rel="noreferrer"
      >
        <div class="card-top">
          <span>{{ note.category }}</span>
          <small>{{ note.updatedAt }}</small>
        </div>
        <h2>{{ note.title }}</h2>
        <p>{{ note.summary }}</p>
        <div class="tag-row">
          <span v-for="tag in note.tags" :key="tag">{{ tag }}</span>
        </div>
        <strong>打开语雀原文</strong>
      </a>
    </div>
  </section>
</template>

<style scoped>
.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  color: #f8fbff;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.filters button {
  min-height: 40px;
  padding: 0 14px;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  cursor: pointer;
}

.filters button.active {
  background: linear-gradient(135deg, #6d78ff, #835cff);
  color: #fff;
}

.roadmap-card {
  padding: 26px;
  margin-bottom: 18px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(12, 17, 34, 0.5);
  backdrop-filter: blur(18px);
}

.roadmap-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.roadmap-head p,
.roadmap-head span,
.roadmap-item small,
.roadmap-item span {
  color: rgba(248, 251, 255, 0.68);
}

.roadmap-head p {
  margin: 0;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.roadmap-head h2 {
  margin: 8px 0 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.roadmap-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.roadmap-item {
  display: grid;
  gap: 10px;
  padding: 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
}

.roadmap-item strong,
.roadmap-item p {
  margin: 0;
}

.roadmap-item p,
.roadmap-item span {
  line-height: 1.8;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.note-card {
  display: grid;
  gap: 14px;
  padding: 24px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(12, 17, 34, 0.5);
  backdrop-filter: blur(18px);
  color: inherit;
  text-decoration: none;
}

.card-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.card-top span,
.card-top small,
.note-card p {
  color: rgba(248, 251, 255, 0.72);
}

.note-card h2,
.note-card p,
.note-card strong {
  margin: 0;
}

.note-card p {
  line-height: 1.8;
}

.tag-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag-row span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(114, 102, 255, 0.14);
  color: #d9d4ff;
  font-size: 0.8rem;
}

:global(.light) .page-shell {
  color: #162033;
}

:global(.light) .note-card {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(255, 255, 255, 0.72);
}

:global(.light) .roadmap-card {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(255, 255, 255, 0.72);
}

:global(.light) .card-top span,
:global(.light) .card-top small,
:global(.light) .note-card p,
:global(.light) .roadmap-head p,
:global(.light) .roadmap-head span,
:global(.light) .roadmap-item small,
:global(.light) .roadmap-item span {
  color: rgba(22, 32, 51, 0.72);
}

:global(.light) .filters button {
  background: rgba(75, 95, 146, 0.08);
}

:global(.light) .roadmap-item {
  background: rgba(75, 95, 146, 0.08);
}

:global(.light) .tag-row span {
  background: rgba(109, 120, 255, 0.12);
  color: #4c54c8;
}

@media (max-width: 980px) {
  .roadmap-grid {
    grid-template-columns: 1fr;
  }
}
</style>
