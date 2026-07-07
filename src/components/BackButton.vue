<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  if (window.history.length > 1) {
    router.back();
    return;
  }

  router.push("/");
}
</script>

<template>
  <button type="button" class="back-button" @click="goBack">
    ← 返回上一级
  </button>
</template>

<style scoped>
.back-button {
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 86;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(10, 14, 30, 0.62);
  color: #f8fbff;
  backdrop-filter: blur(18px);
  cursor: pointer;
}

:global(.light) .back-button {
  border-color: rgba(75, 95, 146, 0.12);
  background: rgba(255, 255, 255, 0.82);
  color: #162033;
}

@media (max-width: 768px) {
  .back-button {
    left: 12px;
    bottom: 174px;
  }
}
</style>
