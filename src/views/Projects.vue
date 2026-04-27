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
      description="每个项目都按简介、角色、技术栈和亮点拆开整理，方便快速讲清楚项目目标、难点和解决方式。"
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
        <p class="summary">{{ project.summary }}</p>
        <p class="role">{{ project.role }}</p>

        <div class="block">
          <strong>项目技术栈</strong>
          <div class="tag-row">
            <span v-for="tech in project.techStack" :key="tech">{{ tech }}</span>
          </div>
        </div>

        <div class="block">
          <strong>项目亮点</strong>
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
  padding: 24px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(12, 17, 34, 0.5);
  backdrop-filter: blur(18px);
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
  margin: 0;
  padding-left: 1.15rem;
  line-height: 1.8;
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
  background: rgba(255, 255, 255, 0.08);
}

:global(.light) .page-shell {
  color: #162033;
}

:global(.light) .project-card {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(255, 255, 255, 0.72);
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

:global(.light) .tag-row span {
  background: rgba(109, 120, 255, 0.12);
  color: #4c54c8;
}
</style>
