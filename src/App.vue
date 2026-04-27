<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AIAssistant from "./components/AIAssistant.vue";
import BackButton from "./components/BackButton.vue";
import FloatingMusicDock from "./components/FloatingMusicDock.vue";
import GlobalAudioPlayer from "./components/GlobalAudioPlayer.vue";
import ShimmerButton from "./components/ShimmerButton.vue";
import SleekLineCursor from "./components/SleekLineCursor.vue";
import VantaBackground from "./components/VantaBackground.vue";
import { useAvatarProfile } from "./composables/useAvatarProfile";
import { useThemeStore } from "./stores/theme";

const router = useRouter();
const route = useRoute();
const themeStore = useThemeStore();
const { avatarSrc } = useAvatarProfile();

const menuItems = [
  { path: "/", name: "首页" },
  { path: "/projects", name: "项目" },
  { path: "/notes", name: "笔记" },
  { path: "/blog", name: "文章" },
  { path: "/music", name: "音乐" },
  { path: "/about", name: "关于我" },
];

const statusText = computed(() =>
  themeStore.isDark ? "Open to Work" : "Frontend Portfolio",
);

const headerVisible = ref(true);
let lastScrollY = 0;

function isActive(path: string) {
  if (path === "/blog") {
    return route.path.startsWith("/blog");
  }

  return route.path === path;
}

function handleScroll() {
  const current = window.scrollY;
  const delta = current - lastScrollY;

  if (current < 32) {
    headerVisible.value = true;
    lastScrollY = current;
    return;
  }

  if (Math.abs(delta) < 10) {
    return;
  }

  headerVisible.value = delta < 0;
  lastScrollY = current;
}

onMounted(() => {
  lastScrollY = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="app-shell" :class="{ light: !themeStore.isDark }">
    <VantaBackground />
    <SleekLineCursor />
    <GlobalAudioPlayer />

    <header class="site-header" :class="{ hidden: !headerVisible }">
      <button class="brand" type="button" @click="router.push('/')">
        <span class="brand-mark">
          <img v-if="avatarSrc" :src="avatarSrc" alt="Luck67 avatar" class="brand-avatar" />
          <span v-else>L</span>
        </span>
        <span class="brand-copy">
          <strong>Luck67</strong>
        </span>
      </button>

      <nav class="site-nav" aria-label="主导航">
        <ShimmerButton
          v-for="item in menuItems"
          :key="item.path"
          :active="isActive(item.path)"
          shimmer-size="2px"
          @click="router.push(item.path)"
        >
          {{ item.name }}
        </ShimmerButton>
      </nav>

      <div class="site-tools">
        <span class="status-pill">{{ statusText }}</span>
        <label class="switch">
          <input
            type="checkbox"
            :checked="themeStore.isDark"
            :aria-label="themeStore.isDark ? '切换到浅色模式' : '切换到深色模式'"
            @change="themeStore.toggleTheme"
          />
          <span class="slider"></span>
        </label>
      </div>
    </header>

    <BackButton />

    <main class="site-main">
      <router-view />
    </main>

    <AIAssistant />
    <FloatingMusicDock />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  position: relative;
  color: #f8fbff;
}

.app-shell.light {
  color: #162033;
}

.site-header {
  position: fixed;
  top: 18px;
  left: 24px;
  right: 24px;
  z-index: 60;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 18px;
  padding: 14px 18px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(10, 14, 30, 0.56);
  backdrop-filter: blur(20px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  transition: transform 0.28s ease, opacity 0.28s ease;
}

.site-header.hidden {
  opacity: 0;
  transform: translateY(-140%);
  pointer-events: none;
}

.app-shell.light .site-header {
  border-color: rgba(66, 88, 136, 0.12);
  background: rgba(255, 255, 255, 0.72);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-weight: 700;
  background: linear-gradient(135deg, #6f87ff, #37c9a7);
  color: #fff;
  box-shadow: 0 12px 26px rgba(74, 127, 255, 0.28);
  overflow: hidden;
}

.brand-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-copy {
  display: flex;
  align-items: center;
  line-height: 1;
}

.brand-copy strong {
  font-size: 1rem;
}

.site-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.site-tools {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-pill {
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.82rem;
}

.app-shell.light .status-pill {
  background: rgba(72, 96, 164, 0.08);
  border-color: rgba(72, 96, 164, 0.12);
}

.switch {
  position: relative;
  display: inline-block;
  width: 3.4rem;
  height: 1.95rem;
}

.switch input {
  width: 0;
  height: 0;
  opacity: 0;
}

.slider {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: rgba(116, 134, 183, 0.36);
  cursor: pointer;
  transition: background 0.3s ease;
}

.slider::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 4px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff2b0, #ffd166);
  transition: transform 0.3s ease, background 0.3s ease;
}

.switch input:checked + .slider {
  background: rgba(120, 145, 201, 0.62);
}

.switch input:checked + .slider::before {
  transform: translateX(22px);
  background: linear-gradient(135deg, #eff5ff, #c5d7ff);
}

.site-main {
  min-height: 100vh;
  padding: 112px 24px 120px;
  position: relative;
  z-index: 1;
}

@media (max-width: 1100px) {
  .site-header {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .site-tools {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .site-header {
    top: 12px;
    left: 12px;
    right: 12px;
    padding: 12px;
    gap: 12px;
  }

  .status-pill {
    display: none;
  }

  .site-main {
    padding: 136px 12px 126px;
  }
}
</style>
