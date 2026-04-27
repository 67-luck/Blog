<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { usePlayerStore } from "../stores/player";

const playerStore = usePlayerStore();
const audioRef = ref<HTMLAudioElement | null>(null);

function handleLoadedMetadata() {
  if (audioRef.value) {
    playerStore.syncDuration(audioRef.value.duration);
  }
}

function handleTimeUpdate() {
  if (audioRef.value) {
    playerStore.syncCurrentTime(audioRef.value.currentTime);
  }
}

function handlePlay() {
  playerStore.syncPlayState(true);
}

function handlePause() {
  playerStore.syncPlayState(false);
}

function handleEnded() {
  playerStore.handleTrackEnd();
}

function handleError() {
  playerStore.setError("当前歌曲外链不可用，可替换为你自己的网易云歌单链接。");
  playerStore.syncPlayState(false);
}

onMounted(() => {
  if (audioRef.value) {
    playerStore.bindAudioElement(audioRef.value);
  }
});

onUnmounted(() => {
  playerStore.unbindAudioElement();
});
</script>

<template>
  <audio
    ref="audioRef"
    preload="metadata"
    @loadedmetadata="handleLoadedMetadata"
    @timeupdate="handleTimeUpdate"
    @play="handlePlay"
    @pause="handlePause"
    @ended="handleEnded"
    @error="handleError"
  />
</template>
