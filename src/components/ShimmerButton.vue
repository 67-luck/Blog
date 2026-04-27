<script setup lang="ts">
withDefaults(
  defineProps<{
    active?: boolean;
    shimmerSize?: string;
  }>(),
  {
    active: false,
    shimmerSize: "2px",
  },
);
</script>

<template>
  <button class="shimmer-button" :class="{ active }" type="button">
    <span class="shimmer-surface" :style="{ '--shimmer-size': shimmerSize }">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.shimmer-button {
  position: relative;
  border: none;
  padding: 0;
  border-radius: 999px;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.22s ease;
}

.shimmer-surface {
  --shimmer-size: 2px;
  position: relative;
  display: inline-flex;
  min-height: 64px;
  min-width: 124px;
  align-items: center;
  justify-content: center;
  padding: 0 26px;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background:
    linear-gradient(135deg, rgba(17, 23, 46, 0.96), rgba(35, 45, 77, 0.9));
  color: #fff;
  font-size: 0.96rem;
  font-weight: 700;
  box-shadow: 0 18px 32px rgba(7, 10, 26, 0.22);
}

.shimmer-surface::before {
  content: "";
  position: absolute;
  top: -30%;
  left: -35%;
  width: 40%;
  height: 160%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.78),
    rgba(255, 255, 255, 0.08),
    transparent
  );
  transform: rotate(18deg);
  animation: shimmer 3.2s linear infinite;
}

.shimmer-surface::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: var(--shimmer-size);
  background:
    linear-gradient(115deg, rgba(255, 90, 179, 0.92), rgba(115, 131, 255, 0.92), rgba(91, 228, 179, 0.92));
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.shimmer-button:hover,
.shimmer-button.active {
  transform: translateY(-2px);
}

.shimmer-button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.74);
  outline-offset: 4px;
}

:global(.light) .shimmer-surface {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(237, 243, 255, 0.92));
  color: #162033;
  border-color: rgba(75, 95, 146, 0.12);
}

@keyframes shimmer {
  from {
    transform: translateX(-15%) rotate(18deg);
  }

  to {
    transform: translateX(320%) rotate(18deg);
  }
}
</style>
