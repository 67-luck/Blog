<script setup lang="ts">
import { useRouter } from "vue-router";
import { usePlayerStore } from "../stores/player";
import { useThemeStore } from "../stores/theme";
import { formatTime } from "../utils/music";

const router = useRouter();
const playerStore = usePlayerStore();
const themeStore = useThemeStore();
</script>

<template>
  <div class="dock" :class="{ light: !themeStore.isDark }">
    <button class="dock-cover" type="button" @click="router.push('/music')">
      <img :src="playerStore.currentTrack.coverUrl" :alt="playerStore.currentTrack.title" />
      <span class="cover-ring" :class="{ playing: playerStore.isPlaying }"></span>
    </button>

    <button class="dock-copy" type="button" @click="router.push('/music')">
      <small class="dock-label">Now Playing</small>
      <strong>{{ playerStore.currentTrack.title }}</strong>
      <span>{{ playerStore.currentTrack.artist }}</span>
      <div class="dock-progress">
        <i class="dock-progress-bar" :style="{ width: `${playerStore.progress}%` }"></i>
      </div>
      <small>{{ formatTime(playerStore.currentTime) }} / {{ formatTime(playerStore.duration) }}</small>
    </button>

    <div class="dock-actions">
      <button type="button" class="mini-btn" @click="playerStore.prevTrack">⏮</button>
      <button type="button" class="primary" @click="playerStore.togglePlay">
        {{ playerStore.isPlaying ? "❚❚" : "▶" }}
      </button>
      <button type="button" class="mini-btn" @click="playerStore.nextTrack">⏭</button>
    </div>
  </div>
</template>

<style scoped>
.dock {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 90;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  width: min(438px, calc(100vw - 24px));
  padding: 12px 14px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(circle at top left, rgba(255, 100, 160, 0.12), transparent 34%),
    rgba(13, 17, 34, 0.88);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 46px rgba(8, 10, 24, 0.3);
}

.dock.light {
  border-color: rgba(52, 72, 118, 0.12);
  background:
    radial-gradient(circle at top left, rgba(255, 100, 160, 0.08), transparent 34%),
    rgba(255, 255, 255, 0.82);
}

.dock-cover,
.dock-copy,
.dock-actions button {
  border: none;
  color: inherit;
}

.dock-cover {
  position: relative;
  width: 56px;
  height: 56px;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

.dock-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-ring {
  position: absolute;
  inset: -4px;
  border-radius: 24px;
  border: 1px solid rgba(255, 79, 192, 0.28);
  opacity: 0;
}

.cover-ring.playing {
  opacity: 1;
  animation: pulse 1.8s ease-in-out infinite;
}

.dock-copy {
  display: grid;
  justify-items: start;
  gap: 4px;
  padding: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.dock-label {
  color: rgba(248, 251, 255, 0.56);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.dock-copy strong {
  font-size: 1rem;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dock-copy span,
.dock-copy small {
  opacity: 0.72;
}

.dock-copy span {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dock-progress {
  width: 100%;
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
}

.dock-progress-bar {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #ff8a5b, #ff4fc0, #6d78ff);
}

.dock-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dock-actions button {
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
}

.dock.light .dock-actions button,
.dock.light .dock-progress {
  background: rgba(53, 72, 118, 0.08);
}

.dock-actions .primary {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #ff8a5b, #ff4fc0);
  color: #fff;
}

.mini-btn {
  font-size: 1rem;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}

@media (max-width: 768px) {
  .dock {
    left: 12px;
    right: 12px;
    bottom: 12px;
    width: auto;
    grid-template-columns: auto 1fr;
  }

  .dock-actions {
    grid-column: 1 / -1;
    justify-content: flex-end;
  }
}
</style>
