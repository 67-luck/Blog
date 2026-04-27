<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const pointer = {
  x: typeof window === "undefined" ? 0 : window.innerWidth / 2,
  y: typeof window === "undefined" ? 0 : window.innerHeight / 2,
  active: false,
};

let context: CanvasRenderingContext2D | null = null;
let frameId = 0;
let lines: Point[][] = [];

function createLines() {
  lines = Array.from({ length: 16 }, () =>
    Array.from({ length: 24 }, () => ({
      x: pointer.x,
      y: pointer.y,
      vx: 0,
      vy: 0,
    })),
  );
}

function resizeCanvas() {
  const canvas = canvasRef.value;

  if (!canvas) {
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function updatePointer(event: MouseEvent | TouchEvent) {
  pointer.active = true;

  if ("touches" in event) {
    if (!event.touches.length) {
      return;
    }

    pointer.x = event.touches[0].clientX;
    pointer.y = event.touches[0].clientY;
    return;
  }

  pointer.x = event.clientX;
  pointer.y = event.clientY;
}

function drawLine(path: Point[], index: number) {
  if (!context) {
    return;
  }

  let spring = 0.32 + index * 0.012;

  path[0].vx += (pointer.x - path[0].x) * spring;
  path[0].vy += (pointer.y - path[0].y) * spring;

  for (let pointIndex = 0; pointIndex < path.length; pointIndex += 1) {
    const point = path[pointIndex];

    if (pointIndex > 0) {
      const previous = path[pointIndex - 1];
      point.vx += (previous.x - point.x) * spring;
      point.vy += (previous.y - point.y) * spring;
      point.vx += previous.vx * 0.18;
      point.vy += previous.vy * 0.18;
    }

    point.vx *= 0.62;
    point.vy *= 0.62;
    point.x += point.vx;
    point.y += point.vy;
    spring *= 0.92;
  }

  context.beginPath();
  context.moveTo(path[0].x, path[0].y);

  for (let pointIndex = 1; pointIndex < path.length - 1; pointIndex += 1) {
    const point = path[pointIndex];
    const next = path[pointIndex + 1];
    const midX = (point.x + next.x) * 0.5;
    const midY = (point.y + next.y) * 0.5;
    context.quadraticCurveTo(point.x, point.y, midX, midY);
  }

  const last = path[path.length - 1];
  context.lineTo(last.x, last.y);
  context.stroke();
}

function render() {
  if (!context || !canvasRef.value) {
    return;
  }

  context.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  if (pointer.active) {
    context.globalCompositeOperation = "lighter";

    lines.forEach((line, index) => {
      context!.strokeStyle = `hsla(${238 + index * 4}, 86%, 68%, ${0.18 + index * 0.012})`;
      context!.lineWidth = 1;
      drawLine(line, index);
    });
  }

  frameId = window.requestAnimationFrame(render);
}

onMounted(() => {
  const canvas = canvasRef.value;

  if (!canvas) {
    return;
  }

  context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  resizeCanvas();
  createLines();
  render();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", updatePointer, { passive: true });
  window.addEventListener("touchstart", updatePointer, { passive: true });
  window.addEventListener("touchmove", updatePointer, { passive: true });
});

onUnmounted(() => {
  window.cancelAnimationFrame(frameId);
  window.removeEventListener("resize", resizeCanvas);
  window.removeEventListener("mousemove", updatePointer);
  window.removeEventListener("touchstart", updatePointer);
  window.removeEventListener("touchmove", updatePointer);
});
</script>

<template>
  <canvas ref="canvasRef" class="sleek-cursor"></canvas>
</template>

<style scoped>
.sleek-cursor {
  position: fixed;
  inset: 0;
  z-index: 52;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
