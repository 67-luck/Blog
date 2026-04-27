<script setup lang="ts">
import { computed, ref } from "vue";
import { usePlayerStore } from "../stores/player";
import { formatTime } from "../utils/music";

const playerStore = usePlayerStore();
const activeTab = ref<"lyrics" | "playlist">("lyrics");
const keyword = ref("");
const lastVolume = ref(playerStore.volume || 0.82);

const filteredTracks = computed(() => {
  const value = keyword.value.trim().toLowerCase();

  if (!value) {
    return playerStore.playlist;
  }

  return playerStore.playlist.filter((track) =>
    [track.title, track.artist, track.album, track.summary].join(" ").toLowerCase().includes(value),
  );
});

const progressStyle = computed(() => ({
  background: `linear-gradient(90deg, #7459ff 0%, #7459ff ${playerStore.progress}%, rgba(24, 27, 53, 0.94) ${playerStore.progress}%, rgba(24, 27, 53, 0.94) 100%)`,
}));

const creditLines = computed(() => {
  const keywords = ["作词", "作曲", "编曲", "混音", "演唱", "制作", "和声", "视频"];

  return playerStore.currentLyrics
    .filter((line) => keywords.some((keyword) => line.text.includes(keyword)))
    .slice(0, 4);
});

const lyricLines = computed(() => {
  const creditTexts = new Set(creditLines.value.map((line) => line.text));
  const pureLines = playerStore.currentLyrics.filter((line) => !creditTexts.has(line.text));

  return pureLines.length ? pureLines : playerStore.currentLyrics;
});

const activeDisplayLyricIndex = computed(() => {
  const target = playerStore.currentLyrics[playerStore.activeLyricIndex];

  if (!target) {
    return lyricLines.value.length ? 0 : -1;
  }

  return lyricLines.value.findIndex(
    (line) => line.time === target.time && line.text === target.text,
  );
});

const visibleLyrics = computed(() => {
  const lines = lyricLines.value;

  if (!lines.length) {
    return [];
  }

  const windowSize = 5;
  const activeIndex = activeDisplayLyricIndex.value < 0 ? 0 : activeDisplayLyricIndex.value;
  const maxStart = Math.max(lines.length - windowSize, 0);
  const start = Math.min(Math.max(activeIndex - 2, 0), maxStart);

  return lines.slice(start, start + windowSize).map((line, offset) => ({
    ...line,
    active: start + offset === activeIndex,
  }));
});

const isMuted = computed(() => playerStore.volume <= 0.01);

function handleSeek(event: Event) {
  playerStore.seek(Number((event.target as HTMLInputElement).value));
}

function selectTrack(trackId: number) {
  const targetIndex = playerStore.playlist.findIndex((item) => item.id === trackId);

  if (targetIndex >= 0) {
    playerStore.setTrack(targetIndex, true);
  }
}

function toggleMute() {
  if (isMuted.value) {
    playerStore.setVolume(lastVolume.value || 0.82);
    return;
  }

  lastVolume.value = playerStore.volume || 0.82;
  playerStore.setVolume(0);
}
</script>

<template>
  <section class="music-page">
    <div class="music-shell">
      <article class="player-card hover-card">
        <div class="disc-stage">
          <div class="disc-ring" :class="{ playing: playerStore.isPlaying }">
            <div class="disc-cover">
              <img :src="playerStore.currentTrack.coverUrl" :alt="playerStore.currentTrack.title" />
            </div>
          </div>
        </div>

        <div class="track-copy">
          <h2>{{ playerStore.currentTrack.title }}</h2>
          <p>{{ playerStore.currentTrack.artist }}</p>
        </div>

        <div class="progress-block">
          <input
            class="progress-range"
            type="range"
            min="0"
            :max="Math.max(playerStore.duration, 1)"
            :value="playerStore.currentTime"
            :style="progressStyle"
            @input="handleSeek"
          />

          <div class="progress-meta">
            <span>{{ formatTime(playerStore.currentTime) }}</span>
            <span>{{ formatTime(playerStore.duration) }}</span>
          </div>
        </div>

        <div class="control-row">
          <button type="button" class="icon-btn subtle" aria-label="循环模式">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M17 17H7.83l1.58 1.59L8 20l-4-4 4-4 1.41 1.41L7.83 15H17a3 3 0 0 0 0-6h-1V7h1a5 5 0 1 1 0 10ZM7 7h9.17l-1.58-1.59L16 4l4 4-4 4-1.41-1.41L16.17 9H7a3 3 0 0 0 0 6h1v2H7A5 5 0 1 1 7 7Z"
              />
            </svg>
          </button>

          <button type="button" class="icon-btn" aria-label="上一首" @click="playerStore.prevTrack">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 5h2v14H6zM18.5 6.5v11L9.5 12l9-5.5Z" />
            </svg>
          </button>

          <button
            type="button"
            class="play-btn"
            :aria-label="playerStore.isPlaying ? '暂停' : '播放'"
            @click="playerStore.togglePlay"
          >
            <span v-if="!playerStore.isPlaying" class="play-triangle"></span>
            <span v-else class="pause-bars"><i></i><i></i></span>
          </button>

          <button type="button" class="icon-btn" aria-label="下一首" @click="playerStore.nextTrack">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 5h2v14h-2zM5.5 6.5 14.5 12l-9 5.5v-11Z" />
            </svg>
          </button>

          <button
            type="button"
            class="icon-btn subtle"
            :aria-label="isMuted ? '取消静音' : '静音'"
            @click="toggleMute"
          >
            <svg v-if="!isMuted" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14 5.23v13.54a1 1 0 0 1-1.64.77L7.7 16H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3.7l4.66-3.54A1 1 0 0 1 14 5.23Zm3.54 2.05 1.42 1.42a5 5 0 0 1 0 7.07l-1.42-1.42a3 3 0 0 0 0-4.24Zm-2.83 2.83 1.41 1.41a1 1 0 0 1 0 1.42l-1.41 1.41a3 3 0 0 0 0-4.24Z"
              />
            </svg>
            <svg v-else viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14 5.23v4.36l-2-2V7.4L7.7 11H4v2h3.7l2.03 1.54 1.41 1.41-.78.59A1 1 0 0 1 9 15.77V16l-1.64 1.25A1 1 0 0 1 6 16.46V8.54a1 1 0 0 1 1.36-.93L12 9.4V4.46a1 1 0 0 1 1.64-.77L14 5.23Zm5.71 3.06L18.29 9.7 16.59 8l-1.41 1.41 1.7 1.59-1.7 1.59L16.59 14l1.7-1.71 1.42 1.42 1.41-1.41L19.41 11l1.71-1.71-1.41-1.41Z"
              />
            </svg>
          </button>
        </div>

        <a
          class="source-link"
          :href="playerStore.currentTrack.sourceUrl"
          target="_blank"
          rel="noreferrer"
        >
          打开网易云原曲页面
        </a>

        <p v-if="playerStore.errorMessage" class="error-copy">
          {{ playerStore.errorMessage }}
        </p>
      </article>

      <article class="detail-card hover-card">
        <div class="tab-switch">
          <button
            type="button"
            :class="{ active: activeTab === 'lyrics' }"
            @click="activeTab = 'lyrics'"
          >
            歌词
          </button>
          <button
            type="button"
            :class="{ active: activeTab === 'playlist' }"
            @click="activeTab = 'playlist'"
          >
            歌单
          </button>
        </div>

        <div v-if="activeTab === 'lyrics'" class="lyrics-panel">
          <div v-if="creditLines.length" class="credit-list">
            <p v-for="line in creditLines" :key="`${line.time}-${line.text}`">
              {{ line.text }}
            </p>
          </div>

          <p class="lyrics-divider">--------</p>

          <div class="lyrics-window">
            <p
              v-for="line in visibleLyrics"
              :key="`${line.time}-${line.text}`"
              :class="{ active: line.active }"
            >
              {{ line.text }}
            </p>
          </div>
        </div>

        <div v-else class="playlist-panel">
          <label class="search-box">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.43 4.43 1.06-1.06-4.43-4.43A6.5 6.5 0 0 0 10.5 4Zm0 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
              />
            </svg>

            <input
              v-model="keyword"
              type="text"
              placeholder="搜索音轨或艺人..."
            />
          </label>

          <div class="playlist-toolbar">
            <p>{{ keyword.trim() ? `搜索结果 ${filteredTracks.length} 首` : `当前歌单 ${filteredTracks.length} 首` }}</p>
            <span class="playlist-tip">滚动查找更多歌曲</span>
          </div>

          <div class="playlist-list">
            <button
              v-for="track in filteredTracks"
              :key="track.id"
              type="button"
              class="track-item"
              :class="{ active: track.id === playerStore.currentTrack.id }"
              @click="selectTrack(track.id)"
            >
              <img :src="track.coverUrl" :alt="track.title" />
              <div class="track-info">
                <strong>{{ track.title }}</strong>
                <span>{{ track.artist }}</span>
              </div>
              <small>{{ formatTime(track.duration) }}</small>
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.music-page {
  max-width: 1480px;
  margin: 0 auto;
  color: #f8fbff;
}

.page-head {
  padding: 12px 8px 26px;
}

.page-head h1 {
  margin: 0;
  font-size: clamp(3.8rem, 7vw, 5.4rem);
  line-height: 0.94;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.page-head p {
  margin: 18px 0 0;
  font-size: 1.22rem;
  color: rgba(220, 226, 252, 0.62);
}

.music-shell {
  display: grid;
  grid-template-columns: minmax(320px, 0.88fr) minmax(420px, 1.12fr);
  gap: 24px;
  align-items: stretch;
}

.player-card,
.detail-card {
  min-height: 680px;
  border-radius: 34px;
  border: 1px solid rgba(147, 164, 228, 0.12);
  background:
    radial-gradient(circle at top center, rgba(126, 94, 255, 0.1), transparent 34%),
    linear-gradient(180deg, rgba(54, 57, 85, 0.86), rgba(46, 42, 68, 0.84));
  backdrop-filter: blur(26px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 58px rgba(12, 14, 32, 0.2);
}

.player-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 30px 28px;
}

.disc-stage {
  display: grid;
  place-items: center;
  width: 100%;
}

.disc-ring {
  padding: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 123, 203, 0.56), rgba(100, 123, 203, 0.16));
  box-shadow:
    0 18px 42px rgba(11, 14, 35, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.disc-cover {
  position: relative;
  width: min(18vw, 250px);
  height: min(18vw, 250px);
  min-width: 180px;
  min-height: 180px;
  border-radius: 50%;
  overflow: hidden;
}

.disc-cover::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18%;
  height: 18%;
  border-radius: 50%;
  background: #313755;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 16px rgba(255, 255, 255, 0.04);
}

.disc-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.disc-ring.playing .disc-cover img {
  animation: rotateDisc 18s linear infinite;
}

.track-copy {
  margin-top: 28px;
  text-align: center;
}

.track-copy h2 {
  margin: 0;
  font-size: clamp(2.1rem, 3.8vw, 3rem);
  line-height: 1.05;
}

.track-copy p {
  margin: 12px 0 0;
  font-size: 1.08rem;
  color: rgba(220, 226, 252, 0.66);
}

.progress-block {
  width: 100%;
  margin-top: 28px;
}

.progress-range {
  width: 100%;
  appearance: none;
  height: 8px;
  border-radius: 999px;
  outline: none;
}

.progress-range::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #755aff;
  box-shadow: 0 0 0 8px rgba(117, 90, 255, 0.14);
}

.progress-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: rgba(205, 213, 246, 0.7);
  font-size: 1rem;
  font-weight: 600;
}

.control-row {
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  gap: 14px;
  margin-top: auto;
  padding-top: 28px;
}

.icon-btn,
.play-btn,
.track-item,
.tab-switch button {
  border: none;
  color: inherit;
  font: inherit;
}

.icon-btn {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}

.icon-btn svg {
  width: 26px;
  height: 26px;
  fill: rgba(229, 234, 252, 0.9);
}

.icon-btn.subtle svg {
  fill: rgba(159, 173, 220, 0.72);
}

.play-btn {
  width: 92px;
  height: 92px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #7156ff, #7e66ff);
  box-shadow:
    0 18px 34px rgba(114, 86, 255, 0.34),
    0 0 32px rgba(114, 86, 255, 0.22);
  cursor: pointer;
}

.play-triangle {
  width: 0;
  height: 0;
  margin-left: 6px;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  border-left: 22px solid #fff;
}

.pause-bars {
  display: flex;
  gap: 10px;
}

.pause-bars i {
  display: block;
  width: 7px;
  height: 28px;
  border-radius: 999px;
  background: #fff;
}

.source-link {
  margin-top: 20px;
  color: rgba(220, 226, 252, 0.68);
  text-decoration: none;
}

.error-copy {
  margin: 14px 0 0;
  color: #ffd5df;
  line-height: 1.7;
  text-align: center;
}

.detail-card {
  display: flex;
  flex-direction: column;
  padding: 28px 30px;
}

.tab-switch {
  width: min(380px, 100%);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin: 0 auto;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(29, 35, 66, 0.84);
}

.tab-switch button {
  min-height: 54px;
  border-radius: 999px;
  background: transparent;
  color: rgba(221, 227, 252, 0.4);
  font-size: 1.18rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.24s ease, color 0.24s ease, box-shadow 0.24s ease;
}

.tab-switch button.active {
  background: linear-gradient(135deg, #6f59ff, #7f65ff);
  color: #fff;
  box-shadow: 0 10px 24px rgba(113, 89, 255, 0.2);
}

.playlist-panel,
.lyrics-panel {
  display: flex;
  flex: 1;
  min-height: 0;
  flex-direction: column;
}

.playlist-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 18px;
}

.playlist-toolbar p {
  margin: 0;
  color: rgba(215, 222, 249, 0.62);
  font-size: 0.95rem;
}

.playlist-tip {
  color: rgba(215, 222, 249, 0.46);
  font-size: 0.88rem;
  white-space: nowrap;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 60px;
  margin-top: 24px;
  padding: 0 18px;
  border-radius: 999px;
  background: rgba(21, 27, 55, 0.92);
}

.search-box svg {
  width: 30px;
  height: 30px;
  fill: rgba(212, 219, 248, 0.72);
  flex-shrink: 0;
}

.search-box input {
  width: 100%;
  border: none;
  background: transparent;
  color: inherit;
  font-size: 1.16rem;
  outline: none;
}

.search-box input::placeholder {
  color: rgba(212, 219, 248, 0.46);
}

.playlist-list {
  display: grid;
  gap: 14px;
  flex: none;
  min-height: 0;
  height: calc(5 * 96px + 4 * 14px);
  margin-top: 16px;
  padding-right: 10px;
  overflow: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: rgba(136, 149, 214, 0.6) rgba(255, 255, 255, 0.04);
}

.playlist-list::-webkit-scrollbar {
  width: 8px;
}

.playlist-list::-webkit-scrollbar-track {
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
}

.playlist-list::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(136, 149, 214, 0.62);
}

.track-item {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 22px;
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: background 0.24s ease, box-shadow 0.24s ease;
}

.track-item.active {
  background: rgba(126, 145, 210, 0.18);
  box-shadow: inset 0 0 0 1px rgba(98, 111, 255, 0.34);
}

.track-item img {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  object-fit: cover;
}

.track-info {
  min-width: 0;
}

.track-info strong {
  display: block;
  font-size: 1.08rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-info span,
.track-item small {
  color: rgba(215, 222, 249, 0.68);
}

.track-info span {
  display: block;
  margin-top: 8px;
}

.credit-list {
  display: grid;
  gap: 18px;
  margin-top: 28px;
  text-align: center;
}

.credit-list p {
  margin: 0;
  color: rgba(220, 226, 252, 0.22);
  font-weight: 700;
}

.lyrics-divider {
  margin: 22px 0 0;
  text-align: center;
  color: rgba(220, 226, 252, 0.26);
  letter-spacing: 0.3em;
}

.lyrics-window {
  display: grid;
  gap: 14px;
  flex: 1;
  min-height: 0;
  align-content: center;
  margin-top: 22px;
  padding: 0 8px;
}

.lyrics-window p {
  margin: 0;
  padding: 15px 18px;
  border-radius: 20px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(220, 226, 252, 0.28);
  font-weight: 600;
  transition: background 0.24s ease, color 0.24s ease, box-shadow 0.24s ease;
}

.lyrics-window p.active {
  background: rgba(255, 255, 255, 0.1);
  color: #8d79ff;
  box-shadow: inset 0 0 0 1px rgba(132, 111, 255, 0.18);
}

@keyframes rotateDisc {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

:global(.light) .music-page {
  color: #162033;
}

:global(.light) .page-head p,
:global(.light) .track-copy p,
:global(.light) .progress-meta,
:global(.light) .source-link,
:global(.light) .track-info span,
:global(.light) .track-item small {
  color: rgba(22, 32, 51, 0.62);
}

:global(.light) .player-card,
:global(.light) .detail-card {
  border-color: rgba(75, 95, 146, 0.14);
  background:
    radial-gradient(circle at top center, rgba(126, 94, 255, 0.08), transparent 34%),
    linear-gradient(180deg, rgba(241, 245, 255, 0.92), rgba(229, 234, 248, 0.92));
}

:global(.light) .tab-switch {
  border-color: rgba(75, 95, 146, 0.16);
  background: rgba(226, 233, 248, 0.96);
}

:global(.light) .tab-switch button {
  color: rgba(22, 32, 51, 0.38);
}

:global(.light) .search-box,
:global(.light) .track-item,
:global(.light) .lyrics-window p,
:global(.light) .progress-range {
  background: rgba(75, 95, 146, 0.08);
}

:global(.light) .playlist-toolbar p {
  color: rgba(22, 32, 51, 0.58);
}

:global(.light) .playlist-tip {
  color: rgba(22, 32, 51, 0.46);
}

:global(.light) .playlist-list {
  scrollbar-color: rgba(95, 113, 184, 0.72) rgba(75, 95, 146, 0.08);
}

:global(.light) .playlist-list::-webkit-scrollbar-track {
  background: rgba(75, 95, 146, 0.08);
}

:global(.light) .playlist-list::-webkit-scrollbar-thumb {
  background: rgba(95, 113, 184, 0.72);
}

:global(.light) .search-box svg,
:global(.light) .icon-btn.subtle svg {
  fill: rgba(22, 32, 51, 0.56);
}

:global(.light) .icon-btn svg {
  fill: rgba(22, 32, 51, 0.84);
}

:global(.light) .search-box input::placeholder {
  color: rgba(22, 32, 51, 0.44);
}

:global(.light) .credit-list p,
:global(.light) .lyrics-divider {
  color: rgba(22, 32, 51, 0.18);
}

:global(.light) .lyrics-window p {
  color: rgba(22, 32, 51, 0.34);
}

@media (max-width: 1220px) {
  .music-shell {
    grid-template-columns: 1fr;
  }

  .player-card,
  .detail-card {
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .page-head {
    padding-bottom: 18px;
  }

  .page-head p {
    font-size: 1rem;
  }

  .player-card,
  .detail-card {
    padding: 24px 18px;
    border-radius: 28px;
  }

  .disc-cover {
    min-width: 170px;
    min-height: 170px;
  }

  .track-copy {
    margin-top: 22px;
  }

  .track-copy p {
    font-size: 1.06rem;
  }

  .progress-block {
    margin-top: 32px;
  }

  .control-row {
    gap: 12px;
    padding-top: 34px;
  }

  .icon-btn {
    width: 48px;
    height: 48px;
  }

  .icon-btn svg {
    width: 24px;
    height: 24px;
  }

  .play-btn {
    width: 92px;
    height: 92px;
  }

  .play-triangle {
    margin-left: 6px;
    border-top-width: 14px;
    border-bottom-width: 14px;
    border-left-width: 22px;
  }

  .pause-bars i {
    width: 7px;
    height: 26px;
  }

  .tab-switch {
    width: 100%;
  }

  .tab-switch button {
    min-height: 46px;
    font-size: 1rem;
  }

  .search-box {
    min-height: 58px;
    margin-top: 24px;
    padding: 0 18px;
  }

  .playlist-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .search-box svg {
    width: 24px;
    height: 24px;
  }

  .playlist-list {
    height: calc(5 * 88px + 4 * 12px);
    margin-top: 22px;
    gap: 12px;
  }

  .track-item {
    grid-template-columns: 56px minmax(0, 1fr);
    gap: 14px;
    padding: 16px;
  }

  .track-item img {
    width: 56px;
    height: 56px;
    border-radius: 16px;
  }

  .track-item small {
    display: none;
  }

  .credit-list {
    gap: 14px;
    margin-top: 24px;
  }

  .lyrics-window {
    gap: 12px;
    margin-top: 22px;
  }

  .lyrics-window p {
    padding: 14px 16px;
    font-size: 0.98rem;
  }
}
</style>
