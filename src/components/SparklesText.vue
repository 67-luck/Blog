<script setup lang="ts">
import { computed } from "vue";

interface SparklesColors {
  first?: string;
  second?: string;
}

const props = withDefaults(
  defineProps<{
    text: string;
    colors?: SparklesColors;
    sparklesCount?: number;
  }>(),
  {
    colors: () => ({
      first: "#9E7AFF",
      second: "#FE8BBB",
    }),
    sparklesCount: 10,
  },
);

const sparkles = computed(() =>
  Array.from({ length: props.sparklesCount }, (_, index) => {
    const angle = (Math.PI * 2 * index) / props.sparklesCount;
    const radius = 18 + ((index * 11) % 54);
    const size = 8 + (index % 3) * 4;
    const delay = `${(index % 6) * 0.35}s`;
    const duration = `${2.8 + (index % 4) * 0.55}s`;

    return {
      id: index,
      style: {
        left: `calc(50% + ${Math.cos(angle) * radius}px)`,
        top: `calc(50% + ${Math.sin(angle) * radius}px)`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: delay,
        animationDuration: duration,
        background: `radial-gradient(circle, ${
          index % 2 === 0 ? props.colors.first : props.colors.second
        } 0%, rgba(255,255,255,0.92) 42%, transparent 74%)`,
      },
    };
  }),
);

const textStyle = computed(() => ({
  backgroundImage: `linear-gradient(135deg, ${props.colors.first}, ${props.colors.second})`,
}));
</script>

<template>
  <div class="sparkles-text">
    <span
      v-for="sparkle in sparkles"
      :key="sparkle.id"
      class="sparkle"
      :style="sparkle.style"
      aria-hidden="true"
    ></span>
    <h2 class="sparkles-copy" :style="textStyle">{{ text }}</h2>
  </div>
</template>

<style scoped>
.sparkles-text {
  position: relative;
  display: inline-grid;
  place-items: center;
  isolation: isolate;
}

.sparkles-copy {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0 0 24px rgba(158, 122, 255, 0.16);
}

.sparkle {
  position: absolute;
  z-index: 0;
  border-radius: 999px;
  transform: translate(-50%, -50%);
  filter: blur(0.2px);
  animation: sparklePulse 3s ease-in-out infinite;
  opacity: 0;
}

@keyframes sparklePulse {
  0%,
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.4);
  }

  35% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  60% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.7);
  }
}
</style>
