import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { musicTracks, playlistMeta, type MusicTrack } from "../data/music";

const fallbackTrack: MusicTrack = {
  id: 0,
  title: "等待播放",
  artist: "王浩的歌单",
  album: "NetEase Cloud Music",
  coverUrl:
    "https://p1.music.126.net/eKyQ97HJprWjcIYKfXAbqA==/109951172214310562.jpg",
  audioUrl: "",
  sourceUrl: playlistMeta.sourceUrl,
  duration: 0,
  summary: "歌单已同步，选择一首歌曲开始播放。",
  lyricsRaw: "",
  lyrics: [],
};

export const usePlayerStore = defineStore("player", () => {
  const playlist = musicTracks;
  const audioElement = ref<HTMLAudioElement | null>(null);
  const currentTrackIndex = ref(0);
  const isPlaying = ref(false);
  const currentTime = ref(0);
  const duration = ref(playlist[0]?.duration ?? 0);
  const volume = ref(0.82);
  const errorMessage = ref("");

  const currentTrack = computed(() => playlist[currentTrackIndex.value] ?? fallbackTrack);
  const progress = computed(() =>
    duration.value > 0 ? Math.min((currentTime.value / duration.value) * 100, 100) : 0,
  );
  const currentLyrics = computed(() =>
    currentTrack.value.lyrics.length
      ? currentTrack.value.lyrics
      : [
          {
            time: 0,
            text: "当前歌曲暂无同步歌词，可以点开网易云原页面继续查看。",
          },
        ],
  );
  const activeLyricIndex = computed(() => {
    const lines = currentLyrics.value;
    let index = -1;

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      if (currentTime.value >= lines[lineIndex].time) {
        index = lineIndex;
      } else {
        break;
      }
    }

    return index;
  });

  function bindAudioElement(element: HTMLAudioElement) {
    audioElement.value = element;
    audioElement.value.volume = volume.value;
    duration.value = currentTrack.value.duration;

    if (playlist.length) {
      syncTrackSource(false);
    }
  }

  function unbindAudioElement() {
    audioElement.value = null;
  }

  function syncTrackSource(autoplay: boolean) {
    const audio = audioElement.value;
    duration.value = currentTrack.value.duration;
    currentTime.value = 0;
    errorMessage.value = "";

    if (!audio) {
      isPlaying.value = autoplay;
      return;
    }

    if (!currentTrack.value.audioUrl) {
      audio.pause();
      isPlaying.value = false;
      return;
    }

    audio.pause();
    audio.src = currentTrack.value.audioUrl;
    audio.load();

    if (autoplay) {
      void play();
    } else {
      isPlaying.value = false;
    }
  }

  async function play() {
    const audio = audioElement.value;

    if (!currentTrack.value.audioUrl) {
      errorMessage.value = "当前歌单里还没有可播放的歌曲数据。";
      return;
    }

    if (!audio) {
      isPlaying.value = true;
      return;
    }

    try {
      await audio.play();
      isPlaying.value = true;
      errorMessage.value = "";
    } catch (error) {
      isPlaying.value = false;
      errorMessage.value =
        "当前歌曲外链播放失败，可能是版权限制。你仍然可以点开网易云原页面继续播放。";
      console.error(error);
    }
  }

  function pause() {
    audioElement.value?.pause();
    isPlaying.value = false;
  }

  function togglePlay() {
    if (isPlaying.value) {
      pause();
      return;
    }

    void play();
  }

  function setTrack(index: number, autoplay = true) {
    if (!playlist.length) {
      return;
    }

    const nextIndex = (index + playlist.length) % playlist.length;
    currentTrackIndex.value = nextIndex;
    syncTrackSource(autoplay);
  }

  function nextTrack() {
    setTrack(currentTrackIndex.value + 1, true);
  }

  function prevTrack() {
    if (currentTime.value > 4) {
      seek(0);
      return;
    }

    setTrack(currentTrackIndex.value - 1, true);
  }

  function seek(time: number) {
    const audio = audioElement.value;
    currentTime.value = time;

    if (audio) {
      audio.currentTime = time;
    }
  }

  function setVolume(value: number) {
    volume.value = value;

    if (audioElement.value) {
      audioElement.value.volume = value;
    }
  }

  function syncCurrentTime(value: number) {
    currentTime.value = value;
  }

  function syncDuration(value: number) {
    duration.value = Number.isFinite(value) && value > 0 ? value : currentTrack.value.duration;
  }

  function syncPlayState(value: boolean) {
    isPlaying.value = value;
  }

  function handleTrackEnd() {
    nextTrack();
  }

  function setError(message: string) {
    errorMessage.value = message;
  }

  return {
    playlist,
    playlistMeta,
    currentTrackIndex,
    currentTrack,
    currentLyrics,
    activeLyricIndex,
    currentTime,
    duration,
    progress,
    volume,
    isPlaying,
    errorMessage,
    bindAudioElement,
    unbindAudioElement,
    togglePlay,
    play,
    pause,
    setTrack,
    nextTrack,
    prevTrack,
    seek,
    setVolume,
    syncCurrentTime,
    syncDuration,
    syncPlayState,
    handleTrackEnd,
    setError,
  };
});
