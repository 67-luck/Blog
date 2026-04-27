<script setup lang="ts">
import { computed } from "vue";
import { usePlayerStore } from "../stores/player";

const props = withDefaults(
  defineProps<{
    compact?: boolean;
    title?: string;
    subtitle?: string;
  }>(),
  {
    compact: false,
    title: "Live Lyrics",
    subtitle: "歌词追踪中",
  },
);

const playerStore = usePlayerStore();
const bars = Array.from({ length: 18 }, (_, index) => index);

const lyricWindow = computed(() => {
  const lines = playerStore.currentLyrics;
  const activeIndex = playerStore.activeLyricIndex;

  if (!lines.length) {
    return [];
  }

  if (activeIndex < 0) {
    return lines.slice(0, 3).map((line, index) => ({
      ...line,
      active: index === 0,
    }));
  }

  const start = Math.max(activeIndex - 1, 0);

  return lines.slice(start, start + 3).map((line, offset) => ({
    ...line,
    active: start + offset === activeIndex,
  }));
});
</script>

<template>
  <section class="lyric-wave" :class="{ compact: props.compact, playing: playerStore.isPlaying }">
    <div class="lyric-head">
      <div>
        <p>{{ props.title }}</p>
        <h3>{{ playerStore.currentTrack.title }}</h3>
      </div>
      <span>{{ props.subtitle }}</span>
    </div>

    <div class="wave-row" aria-hidden="true">
      <span
        v-for="bar in bars"
        :key="bar"
        class="wave-bar"
        :style="{
          animationDelay: `${bar * 0.08}s`,
          height: `${28 + (bar % 6) * 8}px`,
        }"
      ></span>
    </div>

    <div class="lyric-lines">
      <p
        v-for="line in lyricWindow"
        :key="`${line.time}-${line.text}`"
        :class="{ active: line.active }"
      >
        {{ line.text }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.lyric-wave {
  display: grid;
  gap: 18px;
  padding: 24px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(circle at top left, rgba(255, 100, 160, 0.12), transparent 34%),
    radial-gradient(circle at top right, rgba(86, 120, 255, 0.12), transparent 28%),
    rgba(12, 17, 34, 0.56);
  backdrop-filter: blur(18px);
}

.lyric-wave.compact {
  padding: 20px;
}

.lyric-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.lyric-head p,
.lyric-head span {
  margin: 0;
  color: rgba(248, 251, 255, 0.68);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.lyric-head h3 {
  margin: 10px 0 0;
  font-size: clamp(1.35rem, 3vw, 2rem);
}

.wave-row {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  min-height: 92px;
  padding: 14px 0 4px;
}

.wave-bar {
  flex: 1;
  min-width: 6px;
  border-radius: 999px;
  background: linear-gradient(180deg, #ff8a5b 0%, #ff4fc0 55%, #6d78ff 100%);
  opacity: 0.3;
  transform-origin: bottom;
}

.playing .wave-bar {
  animation: dance 1.2s ease-in-out infinite;
  opacity: 0.92;
}

.lyric-lines {
  display: grid;
  gap: 10px;
}

.lyric-lines p {
  margin: 0;
  padding: 14px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(248, 251, 255, 0.52);
  line-height: 1.8;
}

.lyric-lines p.active {
  color: #fff;
  background: rgba(109, 120, 255, 0.18);
  box-shadow: inset 0 0 0 1px rgba(255, 79, 192, 0.18);
}

@keyframes dance {
  0%,
  100% {
    transform: scaleY(0.42);
  }
  35% {
    transform: scaleY(1);
  }
  70% {
    transform: scaleY(0.68);
  }
}

:global(.light) .lyric-wave {
  border-color: rgba(75, 95, 146, 0.12);
  background:
    radial-gradient(circle at top left, rgba(255, 100, 160, 0.08), transparent 34%),
    radial-gradient(circle at top right, rgba(86, 120, 255, 0.08), transparent 28%),
    rgba(255, 255, 255, 0.78);
}

:global(.light) .lyric-head p,
:global(.light) .lyric-head span,
:global(.light) .lyric-lines p {
  color: rgba(22, 32, 51, 0.64);
}

:global(.light) .lyric-lines p {
  background: rgba(75, 95, 146, 0.08);
}

:global(.light) .lyric-lines p.active {
  color: #1a2140;
}
</style>
