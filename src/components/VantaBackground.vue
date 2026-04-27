<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useThemeStore } from "../stores/theme";

const themeStore = useThemeStore();
const canvasRef = ref<HTMLCanvasElement | null>(null);

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

let context: CanvasRenderingContext2D | null = null;
let animationFrame = 0;
let particles: Particle[] = [];
let resizeTimer = 0;

function createParticles(width: number, height: number) {
  const count = Math.max(48, Math.floor((width * height) / 26000));

  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    size: 1.2 + Math.random() * 2.4,
  }));
}

function resizeCanvas() {
  const canvas = canvasRef.value;

  if (!canvas) {
    return;
  }

  const ratio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  createParticles(width, height);
}

function render() {
  const canvas = canvasRef.value;

  if (!canvas || !context) {
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const particleColor = themeStore.isDark ? "255,255,255" : "24,44,89";
  const lineColor = themeStore.isDark ? "127,190,255" : "88,114,196";

  context.clearRect(0, 0, width, height);

  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < -40) particle.x = width + 40;
    if (particle.x > width + 40) particle.x = -40;
    if (particle.y < -40) particle.y = height + 40;
    if (particle.y > height + 40) particle.y = -40;

    context.beginPath();
    context.fillStyle = `rgba(${particleColor}, ${themeStore.isDark ? 0.75 : 0.5})`;
    context.shadowBlur = 18;
    context.shadowColor = `rgba(${lineColor}, 0.28)`;
    context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    context.fill();
  }

  context.shadowBlur = 0;

  for (let index = 0; index < particles.length; index += 1) {
    const source = particles[index];

    for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
      const target = particles[nextIndex];
      const distanceX = source.x - target.x;
      const distanceY = source.y - target.y;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance > 140) {
        continue;
      }

      context.beginPath();
      context.strokeStyle = `rgba(${lineColor}, ${(1 - distance / 140) * (themeStore.isDark ? 0.22 : 0.16)})`;
      context.lineWidth = 1;
      context.moveTo(source.x, source.y);
      context.lineTo(target.x, target.y);
      context.stroke();
    }
  }

  animationFrame = window.requestAnimationFrame(render);
}

function handleResize() {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    resizeCanvas();
  }, 120);
}

onMounted(() => {
  resizeCanvas();
  render();
  window.addEventListener("resize", handleResize);
});

watch(
  () => themeStore.isDark,
  () => {
    resizeCanvas();
  },
);

onBeforeUnmount(() => {
  window.cancelAnimationFrame(animationFrame);
  window.removeEventListener("resize", handleResize);
  window.clearTimeout(resizeTimer);
});
</script>

<template>
  <div class="particles-background" :class="{ light: !themeStore.isDark }">
    <div class="image-layer"></div>
    <div class="image-overlay"></div>
    <div class="glow glow-a"></div>
    <div class="glow glow-b"></div>
    <div class="glow glow-c"></div>
    <canvas ref="canvasRef" class="particle-canvas"></canvas>
  </div>
</template>

<style scoped>
.particles-background {
  position: fixed;
  inset: 0;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 18%, rgba(86, 120, 255, 0.28), transparent 28%),
    radial-gradient(circle at 80% 22%, rgba(39, 199, 172, 0.2), transparent 24%),
    linear-gradient(180deg, #050916 0%, #09101f 42%, #060a13 100%);
}

.particles-background.light {
  background:
    radial-gradient(circle at 20% 18%, rgba(106, 135, 255, 0.18), transparent 28%),
    radial-gradient(circle at 80% 22%, rgba(20, 184, 166, 0.12), transparent 24%),
    linear-gradient(180deg, #f7faff 0%, #eef4ff 42%, #edf5ff 100%);
}

.image-layer,
.image-overlay,
.glow {
  position: absolute;
}

.image-layer,
.image-overlay {
  inset: -4%;
}

.image-layer {
  background-image:
    url("https://images.unsplash.com/photo-1730137626347-94d0fdd0f8d4?fm=jpg&q=80&w=1920&fit=max");
  background-position: center;
  background-size: cover;
  opacity: 0.28;
  filter: saturate(1.08) contrast(1.06) brightness(0.58);
  transform: scale(1.08);
}

.image-overlay {
  background:
    radial-gradient(circle at 24% 20%, rgba(68, 102, 255, 0.22), transparent 24%),
    radial-gradient(circle at 80% 18%, rgba(35, 211, 186, 0.14), transparent 26%),
    linear-gradient(180deg, rgba(5, 9, 22, 0.42), rgba(6, 10, 19, 0.72));
  mix-blend-mode: screen;
  opacity: 0.88;
}

.particles-background.light .image-layer {
  opacity: 0.18;
  filter: saturate(1.02) contrast(1) brightness(0.92);
}

.particles-background.light .image-overlay {
  background:
    radial-gradient(circle at 24% 20%, rgba(88, 119, 255, 0.12), transparent 24%),
    radial-gradient(circle at 80% 18%, rgba(42, 190, 172, 0.1), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(238, 244, 255, 0.62));
  mix-blend-mode: multiply;
  opacity: 0.9;
}

.glow {
  border-radius: 999px;
  filter: blur(90px);
  opacity: 0.54;
  animation: drift 18s ease-in-out infinite;
}

.glow-a {
  width: 32rem;
  height: 32rem;
  top: -10rem;
  left: -8rem;
  background: rgba(95, 117, 255, 0.34);
}

.glow-b {
  width: 28rem;
  height: 28rem;
  top: 24%;
  right: -10rem;
  background: rgba(45, 212, 191, 0.2);
  animation-delay: -7s;
}

.glow-c {
  width: 40rem;
  height: 40rem;
  left: 35%;
  bottom: -24rem;
  background: rgba(251, 146, 60, 0.14);
  animation-delay: -11s;
}

.particle-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(28px, -24px, 0) scale(1.08);
  }
}
</style>
