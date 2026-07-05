<script setup lang="ts">
import { computed, ref } from "vue";
import PageHero from "../components/PageHero.vue";
import { projects } from "../data/projects";

const allLabel = "全部";
const activeType = ref(allLabel);
const types = computed(() => [allLabel, ...new Set(projects.map((project) => project.type))]);

const filteredProjects = computed(() => {
  if (activeType.value === allLabel) {
    return projects;
  }

  return projects.filter((project) => project.type === activeType.value);
});
</script>

<template>
  <section class="page-shell">
    <PageHero
      eyebrow="Projects"
      title="项目经历"
      description="围绕实习项目、上线经验和 AI 全栈实践整理，按项目背景、我的职责、技术栈、核心功能与难点展开，方便面试时快速讲清真实贡献。"
    />

    <div class="filters">
      <button
        v-for="type in types"
        :key="type"
        type="button"
        :class="{ active: activeType === type }"
        @click="activeType = type"
      >
        {{ type }}
      </button>
    </div>

    <div class="cards-grid">
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-card hover-card"
      >
        <div class="card-top">
          <span>{{ project.type }}</span>
          <small>{{ project.period }}</small>
        </div>

        <h2>{{ project.name }}</h2>
        <div class="block compact-block">
          <strong>项目简介</strong>
          <p class="summary">{{ project.summary }}</p>
        </div>

        <div class="block compact-block">
          <strong>我的职责</strong>
          <p class="role">{{ project.role }}</p>
        </div>

        <div class="block">
          <strong>项目技术栈</strong>
          <div class="tag-row">
            <span v-for="tech in project.techStack" :key="tech">{{ tech }}</span>
          </div>
        </div>

        <div class="block">
          <strong>核心功能与难点</strong>
          <ul>
            <li v-for="item in project.highlights" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="link-row">
          <a
            v-for="link in project.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noreferrer"
          >
            {{ link.label }}
          </a>
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

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.filters button,
.link-row a {
  min-height: 40px;
  padding: 0 14px;
  border-radius: 999px;
}

.filters button {
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  cursor: pointer;
}

.filters button.active {
  background: linear-gradient(135deg, #6d78ff, #835cff);
  color: #fff;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

.project-card {
  position: relative;
  overflow: hidden;
  padding: 24px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), transparent 42%),
    rgba(12, 17, 34, 0.56);
  backdrop-filter: blur(18px);
}

.project-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #37c9a7, #6d78ff, #835cff);
}

.card-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.card-top span,
.card-top small,
.summary,
.role {
  color: rgba(248, 251, 255, 0.72);
}

.card-top span {
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(55, 201, 167, 0.12);
  color: #b7ffeb;
  font-size: 0.78rem;
}

.project-card h2 {
  margin: 14px 0 12px;
  font-size: 1.35rem;
}

.summary,
.role {
  margin: 0;
  line-height: 1.8;
}

.role {
  margin-top: 10px;
}

.block {
  margin-top: 18px;
}

.compact-block {
  padding: 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.045);
}

.block strong {
  display: block;
  margin-bottom: 12px;
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

ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 0;
  list-style: none;
  line-height: 1.75;
}

li {
  position: relative;
  padding-left: 18px;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #37c9a7, #6d78ff);
}

.link-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.link-row a {
  display: inline-flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.07);
}

.link-row a:first-child {
  border-color: rgba(55, 201, 167, 0.22);
  background:
    linear-gradient(135deg, rgba(55, 201, 167, 0.2), rgba(109, 120, 255, 0.16));
}

:global(.light) .page-shell {
  color: #162033;
}

:global(.light) .project-card {
  border-color: rgba(75, 95, 146, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.68)),
    rgba(255, 255, 255, 0.72);
}

:global(.light) .card-top span,
:global(.light) .card-top small,
:global(.light) .summary,
:global(.light) .role {
  color: rgba(22, 32, 51, 0.72);
}

:global(.light) .filters button,
:global(.light) .link-row a {
  background: rgba(75, 95, 146, 0.08);
}

:global(.light) .compact-block {
  background: rgba(75, 95, 146, 0.07);
}

:global(.light) .card-top span {
  background: rgba(55, 169, 145, 0.12);
  color: #087864;
}

:global(.light) .link-row a:first-child {
  border-color: rgba(55, 169, 145, 0.18);
  background: rgba(55, 169, 145, 0.1);
}

:global(.light) .tag-row span {
  background: rgba(109, 120, 255, 0.12);
  color: #4c54c8;
}
</style>
