<script setup lang="ts">
import { computed } from "vue";
import { usePlayerStore } from "../stores/player";

const playerStore = usePlayerStore();

const currentLine = computed(() => {
  const lines = playerStore.currentLyrics.filter((line) => line.text.trim());
  const activeIndex = playerStore.activeLyricIndex;

  if (!lines.length) {
    return "正在等待歌词同步";
  }

  if (activeIndex < 0) {
    return lines[0].text;
  }

  return lines[Math.min(activeIndex, lines.length - 1)]?.text ?? lines[0].text;
});
</script>

<template>
  <section class="ticker-bar hover-card" :class="{ playing: playerStore.isPlaying }">
    <div class="dot-wave" aria-hidden="true">
      <span v-for="dot in 5" :key="dot"></span>
    </div>

    <p class="ticker-copy">{{ currentLine }}</p>

    <div class="ticker-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path
          d="M16.5 3.5v10.2a3.7 3.7 0 1 1-1.4-2.9V6.1l6.4-1.6v7.7a3.7 3.7 0 1 1-1.4-2.9V3.5l-3.6.9Z"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.ticker-bar {
  min-height: 118px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 20px;
  padding: 0 38px;
  border-radius: 34px;
  border: 1px solid rgba(113, 130, 255, 0.18);
  background:
    linear-gradient(90deg, rgba(18, 22, 53, 0.98), rgba(10, 13, 39, 0.98)),
    radial-gradient(circle at top right, rgba(144, 101, 255, 0.16), transparent 30%);
  box-shadow: 0 24px 44px rgba(7, 9, 24, 0.24);
}

.dot-wave {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot-wave span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(169, 189, 255, 0.46);
  opacity: 0.36;
}

.playing .dot-wave span {
  animation: pulse 1.25s ease-in-out infinite;
}

.playing .dot-wave span:nth-child(2) {
  animation-delay: 0.12s;
}

.playing .dot-wave span:nth-child(3) {
  animation-delay: 0.24s;
}

.playing .dot-wave span:nth-child(4) {
  animation-delay: 0.36s;
}

.playing .dot-wave span:nth-child(5) {
  animation-delay: 0.48s;
}

.ticker-copy {
  margin: 0;
  text-align: center;
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  font-weight: 700;
  color: #f5f7ff;
  line-height: 1.4;
}

.ticker-icon {
  width: 34px;
  height: 34px;
  color: rgba(113, 130, 255, 0.32);
}

.ticker-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

@keyframes pulse {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.32;
  }
  50% {
    transform: translateY(-4px) scale(1.15);
    opacity: 0.95;
  }
}

:global(.light) .ticker-bar {
  border-color: rgba(75, 95, 146, 0.14);
  background:
    linear-gradient(90deg, rgba(11, 14, 39, 0.96), rgba(21, 25, 58, 0.94)),
    radial-gradient(circle at top right, rgba(144, 101, 255, 0.12), transparent 30%);
}

@media (max-width: 768px) {
  .ticker-bar {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 24px 20px;
    gap: 14px;
  }

  .ticker-copy {
    font-size: 1.1rem;
  }
}
</style>
