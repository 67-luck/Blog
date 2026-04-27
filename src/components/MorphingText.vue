<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    texts: string[];
    interval?: number;
  }>(),
  {
    interval: 2600,
  },
);

const activeIndex = ref(0);
let timer: number | undefined;

const currentText = computed(() => props.texts[activeIndex.value] ?? "");

onMounted(() => {
  if (props.texts.length <= 1) {
    return;
  }

  timer = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.texts.length;
  }, props.interval);
});

onBeforeUnmount(() => {
  if (timer) {
    window.clearInterval(timer);
  }
});
</script>

<template>
  <Transition name="morph" mode="out-in">
    <p :key="activeIndex" class="morphing-text">
      {{ currentText }}
    </p>
  </Transition>
</template>

<style scoped>
.morphing-text {
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 2.4rem);
  font-weight: 700;
  line-height: 1.1;
  color: #f8fbff;
  letter-spacing: 0.02em;
}

.morph-enter-active,
.morph-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease, filter 0.35s ease;
}

.morph-enter-from,
.morph-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
  filter: blur(8px);
}

:global(.light) .morphing-text {
  color: #101828;
}
</style>
