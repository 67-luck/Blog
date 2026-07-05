<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import AvatarUploader from "../components/AvatarUploader.vue";
import DigitalClock from "../components/DigitalClock.vue";
import LyricTickerBar from "../components/LyricTickerBar.vue";
import ShimmerButton from "../components/ShimmerButton.vue";
import SparklesText from "../components/SparklesText.vue";
import { aboutData } from "../data/resume";
import { blogPosts } from "../data/blog";
import { notes } from "../data/notes";
import { projects } from "../data/projects";
import { usePlayerStore } from "../stores/player";
import { formatTime } from "../utils/music";

const router = useRouter();
const playerStore = usePlayerStore();
const showEmailPopup = ref(false);

let emailPopupTimer: number | undefined;

const featuredProjects = computed(() => projects.slice(0, 3));
const featuredNotes = computed(() => notes.slice(0, 4));
const featuredPosts = computed(() => blogPosts.slice(0, 2));
const footerLinks = [
  { label: "项目", path: "/projects" },
  { label: "笔记", path: "/notes" },
  { label: "文章", path: "/blog" },
  { label: "音乐", path: "/music" },
];
const internshipPoints = [
  "参与已上线壁纸小程序迭代，负责推荐、分类、我的等核心模块。",
  "搭建壁纸后台管理系统，落地动态路由、按钮权限、CRUD 和图片上传。",
  "独立维护个人 AI 博客，完成前端页面、Node.js 服务、AI API 和 Vercel 部署。",
];
const quickFacts = [
  { label: "学校专业", value: "重庆移通学院 · 计算机科学与技术" },
  { label: "实习公司", value: "福州仓山五米信息技术有限公司" },
  { label: "实习时间", value: "2025/03 - 2025/09" },
];

function handleSeek(event: Event) {
  playerStore.seek(Number((event.target as HTMLInputElement).value));
}

function handleEmailPopup() {
  showEmailPopup.value = true;

  if (emailPopupTimer) {
    window.clearTimeout(emailPopupTimer);
  }

  emailPopupTimer = window.setTimeout(() => {
    showEmailPopup.value = false;
  }, 2600);
}

const lyricPreview = computed(() => {
  const lines = playerStore.currentLyrics;
  const index = playerStore.activeLyricIndex;

  if (!lines.length) {
    return [];
  }

  if (index < 0) {
    return lines.slice(0, 4).map((line, lineIndex) => ({
      ...line,
      active: lineIndex === 0,
    }));
  }

  const start = Math.max(index - 1, 0);
  return lines.slice(start, start + 4).map((line, offset) => ({
    ...line,
    active: start + offset === index,
  }));
});
</script>

<template>
  <section class="home-page">
    <div class="home-inner">
      <section class="hero">
        <article class="hero-card intro-card hover-card">
          <SparklesText
            text="Frontend Intern Portfolio"
            :colors="{ first: '#88d4ff', second: '#ff9dcf' }"
            :sparkles-count="12"
            class="welcome-text"
          />

          <div class="identity-row">
            <AvatarUploader />

            <div class="identity-copy">
              <div class="hero-status-row">
                <span>{{ aboutData.status }}</span>
              </div>
              <h1>{{ aboutData.name }}</h1>
              <h2>{{ aboutData.role }}</h2>
            </div>
          </div>

          <p class="summary">{{ aboutData.summary }}</p>

          <div class="action-strip">
            <div class="cta-row">
              <button
                type="button"
                class="primary-btn"
                @click="router.push('/projects')"
              >
                查看项目
              </button>
              <button
                type="button"
                class="link-btn cta-secondary"
                @click="router.push('/notes')"
              >
                技术笔记
              </button>
            </div>

            <div class="contact-actions">
              <transition name="email-pop">
                <div v-if="showEmailPopup" class="email-popup">
                  <strong>QQ 邮箱</strong>
                  <span>{{ aboutData.contact.email }}</span>
                </div>
              </transition>

              <a
                class="contact-btn hover-card"
                :href="aboutData.contact.github"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2C6.477 2 2 6.596 2 12.264c0 4.534 2.865 8.381 6.839 9.739.5.096.682-.223.682-.495 0-.244-.009-.891-.014-1.75-2.782.617-3.369-1.387-3.369-1.387-.455-1.183-1.11-1.498-1.11-1.498-.908-.637.069-.624.069-.624 1.004.072 1.532 1.054 1.532 1.054.892 1.565 2.341 1.113 2.91.851.091-.664.35-1.113.636-1.369-2.221-.259-4.555-1.139-4.555-5.07 0-1.12.39-2.037 1.029-2.755-.103-.26-.446-1.307.098-2.724 0 0 .84-.276 2.75 1.052A9.35 9.35 0 0 1 12 6.844c.85.004 1.706.117 2.505.344 1.909-1.328 2.748-1.052 2.748-1.052.546 1.417.203 2.464.1 2.724.64.718 1.028 1.635 1.028 2.755 0 3.941-2.337 4.808-4.565 5.062.359.318.679.946.679 1.907 0 1.377-.012 2.487-.012 2.826 0 .274.18.595.688.494C19.138 20.642 22 16.797 22 12.264 22 6.596 17.523 2 12 2Z"
                  />
                </svg>
              </a>

              <button
                type="button"
                class="contact-btn hover-card"
                aria-label="QQ 邮箱"
                title="QQ 邮箱"
                @click="handleEmailPopup"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2.05 6.13 4.7a1.1 1.1 0 0 0 1.34 0l6.13-4.7a1.25 1.25 0 0 0-1.05-.55H6.25c-.39 0-.76.2-1.05.55Zm13.55 2.08-5.17 3.96a2.85 2.85 0 0 1-3.46 0L4.95 8.88v8.37c0 .44.36.8.8.8h12.5c.44 0 .8-.36.8-.8V8.88Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="highlight-grid">
            <article
              v-for="item in aboutData.highlights"
              :key="item.label"
              class="highlight-item hover-card"
            >
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </article>
          </div>
        </article>

        <article class="hero-card career-card hover-card">
          <div class="career-top">
            <p class="eyebrow">Internship</p>
            <span>{{ aboutData.status }}</span>
          </div>

          <h3>6 个月前端实习，把项目从开发推进到上线</h3>
          <p class="career-summary">
            实习内容覆盖 UniApp 小程序、Vue3 后台管理系统和 AI 博客全栈实践，重点展示真实业务里的页面开发、接口联调、权限控制、上传处理和部署能力。
          </p>

          <div class="fact-list">
            <div v-for="fact in quickFacts" :key="fact.label">
              <span>{{ fact.label }}</span>
              <strong>{{ fact.value }}</strong>
            </div>
          </div>

          <ul class="career-list">
            <li v-for="item in internshipPoints" :key="item">{{ item }}</li>
          </ul>

          <div class="career-actions">
            <button type="button" class="primary-btn" @click="router.push('/projects')">
              看实习项目
            </button>
            <button type="button" class="link-btn" @click="router.push('/about')">
              查看关于我
            </button>
          </div>
        </article>
      </section>

      <section class="section-block">
        <div class="section-head">
          <div>
            <p class="eyebrow">Tech Stack</p>
            <h2>我能稳定输出的前端能力</h2>
          </div>
          <button type="button" class="link-btn" @click="router.push('/about')">
            查看完整介绍
          </button>
        </div>

        <div class="skills-grid">
          <article
            v-for="group in aboutData.skillGroups"
            :key="group.title"
            class="skill-card hover-card"
          >
            <h3>{{ group.title }}</h3>
            <div class="chip-row">
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-head">
          <div>
            <p class="eyebrow">Projects</p>
            <h2>围绕实习与上线项目讲清能力</h2>
          </div>
          <button
            type="button"
            class="link-btn"
            @click="router.push('/projects')"
          >
            全部项目
          </button>
        </div>

        <div class="projects-grid">
          <article
            v-for="project in featuredProjects"
            :key="project.id"
            class="project-card hover-card"
          >
            <div class="project-top">
              <span>{{ project.type }}</span>
              <small>{{ project.period }}</small>
            </div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.summary }}</p>
            <div class="chip-row">
              <span v-for="tech in project.techStack" :key="tech">{{
                tech
              }}</span>
            </div>
            <ul class="highlight-list">
              <li
                v-for="(item, itemIndex) in project.highlights.slice(0, 3)"
                :key="item"
                :style="{ '--item-index': String(itemIndex + 1) }"
              >
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section class="lyric-stage">
        <LyricTickerBar />
      </section>

      <section class="section-block music-resume-block">
        <article class="hero-card player-card hover-card">
          <div class="player-top">
            <p class="eyebrow">Music</p>
            <button
              type="button"
              class="link-btn"
              @click="router.push('/music')"
            >
              进入音乐页
            </button>
          </div>

          <div class="player-main">
            <div class="track-copy">
              <h3>{{ playerStore.currentTrack.title }}</h3>
              <p>{{ playerStore.currentTrack.artist }} · 网易云音乐</p>
              <span>{{ playerStore.currentTrack.summary }}</span>
            </div>
          </div>

          <div class="progress-block">
            <input
              class="progress-range"
              type="range"
              min="0"
              :max="Math.max(playerStore.duration, 1)"
              :value="playerStore.currentTime"
              @input="handleSeek"
            />
            <div class="progress-meta">
              <small>{{ formatTime(playerStore.currentTime) }}</small>
              <small>{{ formatTime(playerStore.duration) }}</small>
            </div>
          </div>

          <div class="control-row">
            <button type="button" @click="playerStore.prevTrack">上一首</button>
            <button
              type="button"
              class="primary-btn"
              @click="playerStore.togglePlay"
            >
              {{ playerStore.isPlaying ? "暂停播放" : "开始播放" }}
            </button>
            <button type="button" @click="playerStore.nextTrack">下一首</button>
          </div>

          <div class="lyric-preview">
            <p
              v-for="line in lyricPreview"
              :key="`${line.time}-${line.text}`"
              :class="{ active: line.active }"
            >
              {{ line.text }}
            </p>
          </div>

          <p v-if="playerStore.errorMessage" class="error-copy">
            {{ playerStore.errorMessage }}
          </p>
        </article>
      </section>

      <section class="section-block split-grid">
        <article class="content-card hover-card">
          <div class="section-head compact">
            <div>
              <p class="eyebrow">Notes</p>
              <h2>技术笔记直接跳语雀</h2>
            </div>
            <button
              type="button"
              class="link-btn"
              @click="router.push('/notes')"
            >
              全部笔记
            </button>
          </div>

          <div class="notes-list">
            <a
              v-for="note in featuredNotes"
              :key="note.id"
              class="mini-link hover-card"
              :href="note.yuqueUrl"
              target="_blank"
              rel="noreferrer"
            >
              <strong>{{ note.title }}</strong>
              <span>{{ note.summary }}</span>
              <small>{{ note.category }} · {{ note.updatedAt }}</small>
            </a>
          </div>
        </article>

        <article class="content-card hover-card">
          <div class="section-head compact">
            <div>
              <p class="eyebrow">Articles</p>
              <h2>项目复盘与前端思考</h2>
            </div>
            <button
              type="button"
              class="link-btn"
              @click="router.push('/blog')"
            >
              全部文章
            </button>
          </div>

          <div class="notes-list">
            <button
              v-for="post in featuredPosts"
              :key="post.id"
              type="button"
              class="mini-link article-link hover-card"
              @click="router.push(`/blog/${post.id}`)"
            >
              <strong>{{ post.title }}</strong>
              <span>{{ post.summary }}</span>
              <small>{{ post.date }}</small>
            </button>
          </div>
        </article>
      </section>

      <section class="clock-section">
        <DigitalClock />
      </section>

      <section class="home-footer-nav">
        <ShimmerButton
          v-for="item in footerLinks"
          :key="item.path"
          shimmer-size="2px"
          @click="router.push(item.path)"
        >
          {{ item.label }}
        </ShimmerButton>
      </section>
    </div>
  </section>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
}

.home-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

.hero {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 24px;
}

.hero-card,
.skill-card,
.project-card,
.content-card {
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), transparent 44%),
    rgba(12, 17, 34, 0.56);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 48px rgba(5, 10, 24, 0.2);
}

.intro-card {
  position: relative;
  overflow: hidden;
}

.intro-card::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 4px;
  background: linear-gradient(90deg, #37c9a7, #6d78ff, #ff9dcf);
}

.intro-card,
.career-card,
.player-card,
.content-card {
  padding: 28px;
}

.eyebrow {
  margin: 0 0 12px;
  color: #98a5ff;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.76rem;
}

.identity-row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 18px;
}

.welcome-text {
  margin-top: 6px;
}

.identity-copy {
  min-width: 0;
}

.hero-status-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.hero-status-row span {
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.07);
  color: rgba(248, 251, 255, 0.78);
  font-size: 0.78rem;
}

.hero-status-row span:first-child {
  border-color: rgba(55, 201, 167, 0.28);
  background: rgba(55, 201, 167, 0.13);
  color: #b7ffeb;
}

.identity-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  line-height: 0.96;
}

.identity-copy h2 {
  margin: 14px 0 0;
  font-size: clamp(1.3rem, 2.4vw, 2rem);
  color: rgba(248, 251, 255, 0.78);
}

.summary {
  max-width: 62ch;
  margin: 20px 0 0;
  line-height: 1.8;
  color: rgba(248, 251, 255, 0.8);
}

.action-strip {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-top: 24px;
}

.cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.contact-actions {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-btn {
  width: 56px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(
    180deg,
    rgba(71, 80, 116, 0.42),
    rgba(45, 52, 78, 0.34)
  );
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.18);
  color: #eef3ff;
  cursor: pointer;
  transition: transform 0.22s ease, border-color 0.22s ease,
    background 0.22s ease;
}

.contact-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(152, 165, 255, 0.34);
  background: linear-gradient(
    180deg,
    rgba(83, 94, 137, 0.42),
    rgba(54, 63, 95, 0.36)
  );
}

.contact-btn svg {
  width: 25px;
  height: 25px;
  fill: currentColor;
}

.email-popup {
  position: absolute;
  right: 0;
  bottom: calc(100% + 16px);
  min-width: 220px;
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(16, 22, 43, 0.96);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(18px);
}

.email-popup strong,
.email-popup span {
  display: block;
}

.email-popup strong {
  font-size: 0.88rem;
  color: #9aa7ff;
}

.email-popup span {
  margin-top: 6px;
  color: #f5f8ff;
  line-height: 1.6;
}

.primary-btn,
.control-row button,
.link-btn,
.article-link {
  border: none;
  cursor: pointer;
  font: inherit;
}

.primary-btn {
  min-height: 46px;
  padding: 0 20px;
  border-radius: 999px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.16), transparent 36%),
    linear-gradient(135deg, #37c9a7, #6d78ff 58%, #835cff);
  color: #fff;
  box-shadow: 0 14px 28px rgba(55, 201, 167, 0.18);
}

.cta-secondary {
  min-height: 46px;
  display: inline-flex;
  align-items: center;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.highlight-item {
  padding: 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
}

.highlight-item span {
  display: block;
  opacity: 0.62;
  font-size: 0.82rem;
}

.highlight-item strong {
  display: block;
  margin-top: 8px;
  line-height: 1.5;
}

.career-card {
  display: grid;
  align-content: start;
  gap: 18px;
}

.career-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.career-top span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(55, 201, 167, 0.14);
  color: #a9ffe8;
  font-size: 0.82rem;
}

.career-card h3 {
  margin: 0;
  font-size: clamp(1.7rem, 3vw, 2.35rem);
  line-height: 1.25;
}

.career-summary {
  margin: 0;
  line-height: 1.8;
  color: rgba(248, 251, 255, 0.76);
}

.fact-list {
  display: grid;
  gap: 10px;
}

.fact-list div {
  display: grid;
  gap: 6px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
}

.fact-list span {
  color: rgba(248, 251, 255, 0.55);
  font-size: 0.8rem;
}

.fact-list strong {
  line-height: 1.5;
}

.career-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 1.1rem;
  color: rgba(248, 251, 255, 0.82);
  line-height: 1.75;
}

.career-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.player-top,
.section-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.player-main {
  margin-top: 18px;
}

.track-copy h3 {
  margin: 0;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-copy p,
.track-copy span {
  margin: 10px 0 0;
  line-height: 1.7;
  color: rgba(248, 251, 255, 0.74);
}

.progress-block {
  margin-top: 18px;
}

.progress-range {
  width: 100%;
}

.progress-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  opacity: 0.7;
}

.control-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.control-row button {
  min-height: 44px;
  padding: 0 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
}

.control-row .primary-btn {
  background: linear-gradient(135deg, #6d78ff, #835cff);
}

.lyric-preview {
  display: grid;
  gap: 8px;
  margin-top: 18px;
}

.lyric-preview p {
  margin: 0;
  padding: 12px 14px;
  border-radius: 18px;
  line-height: 1.7;
  color: rgba(248, 251, 255, 0.5);
  background: rgba(255, 255, 255, 0.04);
  text-align: left;
}

.lyric-preview p.active {
  color: #fff;
  background: rgba(109, 120, 255, 0.18);
  box-shadow: inset 0 0 0 1px rgba(133, 92, 255, 0.24);
}

.error-copy {
  margin: 14px 0 0;
  color: #ffb4c0;
  line-height: 1.7;
}

.section-block {
  display: grid;
  gap: 18px;
}

.music-resume-block {
  max-width: 920px;
  margin: 0 auto;
  width: 100%;
}

.lyric-stage {
  display: grid;
}

.section-head h2,
.content-card h2 {
  margin: 6px 0 0;
  font-size: clamp(1.7rem, 3vw, 2.4rem);
}

.section-head.compact h2 {
  font-size: 1.5rem;
}

.link-btn {
  min-height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  color: inherit;
  background: rgba(255, 255, 255, 0.06);
}

.skills-grid,
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.skill-card,
.project-card {
  position: relative;
  overflow: hidden;
  padding: 24px;
}

.project-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(180deg, #37c9a7, #6d78ff);
}

.skill-card h3,
.project-card h3 {
  margin: 0 0 14px;
  font-size: 1.15rem;
}

.chip-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chip-row span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(114, 102, 255, 0.14);
  color: #d9d4ff;
  font-size: 0.8rem;
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.project-top span,
.project-top small,
.project-card p {
  color: rgba(248, 251, 255, 0.72);
}

.project-top span {
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(55, 201, 167, 0.12);
  color: #b7ffeb;
  font-size: 0.78rem;
}

.project-card p {
  line-height: 1.8;
}

.highlight-list {
  display: grid;
  gap: 10px;
  margin: 18px 0 0;
  padding-left: 0;
  list-style: none;
  color: rgba(248, 251, 255, 0.82);
  line-height: 1.7;
}

.highlight-list li {
  position: relative;
  padding-left: 34px;
}

.highlight-list li::before {
  content: "0" var(--item-index);
  position: absolute;
  left: 0;
  top: 0.1rem;
  color: #8ff0d5;
  font-size: 0.72rem;
  font-weight: 700;
}

.split-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.notes-list {
  display: grid;
  gap: 14px;
  margin-top: 8px;
}

.mini-link {
  display: grid;
  gap: 8px;
  padding: 18px;
  border-radius: 22px;
  color: inherit;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.04);
}

.mini-link strong {
  font-size: 1rem;
}

.mini-link span,
.mini-link small {
  line-height: 1.7;
  color: rgba(248, 251, 255, 0.7);
}

.article-link {
  width: 100%;
  text-align: left;
}

.clock-section {
  padding-bottom: 16px;
}

.home-footer-nav {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  padding-bottom: 24px;
}

:global(.light) .hero-card,
:global(.light) .skill-card,
:global(.light) .project-card,
:global(.light) .content-card {
  border-color: rgba(75, 95, 146, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.66)),
    rgba(255, 255, 255, 0.7);
  box-shadow: 0 18px 40px rgba(99, 118, 170, 0.12);
}

:global(.light) .summary,
:global(.light) .identity-copy h2,
:global(.light) .career-summary,
:global(.light) .career-list,
:global(.light) .track-copy p,
:global(.light) .track-copy span,
:global(.light) .project-card p,
:global(.light) .project-top span,
:global(.light) .project-top small,
:global(.light) .mini-link span,
:global(.light) .mini-link small {
  color: rgba(22, 32, 51, 0.72);
}

:global(.light) .link-btn,
:global(.light) .control-row button,
:global(.light) .highlight-item,
:global(.light) .fact-list div,
:global(.light) .mini-link,
:global(.light) .lyric-preview p {
  background: rgba(75, 95, 146, 0.08);
}

:global(.light) .career-top span {
  background: rgba(20, 162, 128, 0.12);
  color: #087864;
}

:global(.light) .fact-list span {
  color: rgba(22, 32, 51, 0.55);
}

:global(.light) .contact-btn {
  border-color: rgba(75, 95, 146, 0.16);
  background: linear-gradient(
    180deg,
    rgba(238, 243, 255, 0.88),
    rgba(220, 228, 247, 0.76)
  );
  color: #36415f;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 16px 30px rgba(99, 118, 170, 0.12);
}

:global(.light) .contact-btn:hover {
  border-color: rgba(109, 120, 255, 0.26);
}

:global(.light) .hero-status-row span {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(75, 95, 146, 0.08);
  color: rgba(22, 32, 51, 0.72);
}

:global(.light) .hero-status-row span:first-child,
:global(.light) .project-top span {
  border-color: rgba(55, 169, 145, 0.16);
  background: rgba(55, 169, 145, 0.12);
  color: #087864;
}

:global(.light) .email-popup {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 18px 34px rgba(99, 118, 170, 0.16);
}

:global(.light) .email-popup span {
  color: #162033;
}

:global(.light) .chip-row span {
  background: rgba(109, 120, 255, 0.12);
  color: #4c54c8;
}

:global(.light) .lyric-preview p {
  color: rgba(22, 32, 51, 0.48);
}

:global(.light) .lyric-preview p.active {
  color: #1a2140;
}

.email-pop-enter-active,
.email-pop-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.email-pop-enter-from,
.email-pop-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 1100px) {
  .hero,
  .skills-grid,
  .projects-grid,
  .split-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .home-inner {
    gap: 18px;
  }

  .identity-row,
  .action-strip {
    display: grid;
    justify-items: start;
  }

  .intro-card,
  .career-card,
  .player-card,
  .content-card,
  .skill-card,
  .project-card {
    padding: 20px;
  }

  .highlight-grid {
    grid-template-columns: 1fr;
  }

  .contact-actions {
    gap: 12px;
  }

  .contact-btn {
    width: 72px;
    height: 72px;
    border-radius: 20px;
  }

  .contact-btn svg {
    width: 30px;
    height: 30px;
  }
}
</style>
