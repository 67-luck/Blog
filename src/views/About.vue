<script setup lang="ts">
import PageHero from "../components/PageHero.vue";
import { aboutData } from "../data/resume";
</script>

<template>
  <section class="page-shell">
    <PageHero
      eyebrow="About"
      :title="`${aboutData.name} · ${aboutData.role}`"
      description=""
    />

    <div class="about-grid">
      <article class="about-card intro-card hover-card">
        <h2>个人介绍</h2>
        <p v-for="paragraph in aboutData.bio" :key="paragraph">{{ paragraph }}</p>
      </article>

      <article class="about-card hover-card">
        <h2>我的优势</h2>
        <ul>
          <li v-for="item in aboutData.strengths" :key="item">{{ item }}</li>
        </ul>
      </article>

      <article class="about-card hover-card">
        <h2>技术栈概览</h2>
        <div
          v-for="group in aboutData.skillGroups"
          :key="group.title"
          class="skill-group"
        >
          <strong>{{ group.title }}</strong>
          <div class="tag-row">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </div>
      </article>

      <article class="about-card hover-card">
        <h2>工作习惯</h2>
        <ul>
          <li v-for="item in aboutData.workStyle" :key="item">{{ item }}</li>
        </ul>
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

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.about-card {
  padding: 24px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(12, 17, 34, 0.5);
  backdrop-filter: blur(18px);
}

.intro-card {
  grid-column: span 2;
}

.about-card h2 {
  margin: 0 0 16px;
}

.about-card p,
.about-card a,
.about-card li {
  line-height: 1.8;
}

.about-card p,
.about-card li {
  color: rgba(248, 251, 255, 0.76);
}

.about-card a {
  display: block;
  color: inherit;
  text-decoration: none;
  margin-bottom: 10px;
}

.about-card ul {
  margin: 0;
  padding-left: 1.15rem;
}

.skill-group + .skill-group {
  margin-top: 16px;
}

.skill-group strong {
  display: block;
  margin-bottom: 10px;
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

:global(.light) .about-card p,
:global(.light) .about-card li {
  color: rgba(22, 32, 51, 0.72);
}

:global(.light) .about-card {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(255, 255, 255, 0.72);
}

:global(.light) .tag-row span {
  background: rgba(109, 120, 255, 0.12);
  color: #4c54c8;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .intro-card {
    grid-column: auto;
  }
}
</style>
