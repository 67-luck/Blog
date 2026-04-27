<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const startedAt = new Date("2026-03-22T08:00:00+08:00").getTime();
const now = ref(Date.now());
let timer: number | undefined;

const timeText = computed(() => {
  const current = new Date(now.value);
  const hours = current.getHours().toString().padStart(2, "0");
  const minutes = current.getMinutes().toString().padStart(2, "0");
  const seconds = current.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
});

const runtime = computed(() => {
  const diff = Math.max(now.value - startedAt, 0);
  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  return {
    days,
    hours,
  };
});

onMounted(() => {
  timer = window.setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer) {
    window.clearInterval(timer);
  }
});
</script>

<template>
  <div class="status-bar hover-card">
    <div class="time-panel">
      <strong>{{ timeText }}</strong>
    </div>

    <div class="runtime-panel">
      <span class="runtime-dot"></span>
      <p>
        系统已稳定运行：
        <strong>{{ runtime.days }}天 {{ runtime.hours }}小时</strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
.status-bar {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(240px, 330px) 1fr;
  overflow: hidden;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(90deg, rgba(13, 14, 18, 0.98) 0 22%, rgba(58, 69, 104, 0.9) 22%, rgba(87, 71, 124, 0.86) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 18px 40px rgba(11, 14, 28, 0.18);
}

.time-panel,
.runtime-panel {
  min-height: 118px;
  display: flex;
  align-items: center;
}

.time-panel {
  justify-content: center;
  padding: 0 24px;
  background: rgba(8, 10, 14, 0.92);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.time-panel strong {
  font-size: clamp(2.7rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #8b81ff;
  text-shadow: 0 0 20px rgba(139, 129, 255, 0.12);
}

.runtime-panel {
  gap: 16px;
  padding: 0 34px;
  color: #eef3ff;
}

.runtime-dot {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #16c25f;
  box-shadow: 0 0 0 8px rgba(22, 194, 95, 0.12);
}

.runtime-panel p {
  margin: 0;
  font-size: clamp(1rem, 2.4vw, 1.34rem);
  line-height: 1.6;
  font-weight: 700;
}

.runtime-panel strong {
  margin-left: 6px;
  color: #8b81ff;
  font-size: 1.12em;
}

:global(.light) .status-bar {
  border-color: rgba(75, 95, 146, 0.12);
  box-shadow: 0 18px 32px rgba(95, 116, 170, 0.12);
}

@media (max-width: 768px) {
  .status-bar {
    grid-template-columns: 1fr;
    border-radius: 24px;
  }

  .time-panel,
  .runtime-panel {
    min-height: 82px;
  }

  .time-panel {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .time-panel strong {
    font-size: clamp(2rem, 10vw, 2.8rem);
  }

  .runtime-panel {
    padding: 0 20px;
  }

  .runtime-panel p {
    font-size: 0.98rem;
  }
}
</style>
