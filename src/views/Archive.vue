<script setup lang="ts">
import { ElCard } from 'element-plus'
</script>

<template>
  <div class="archive-page">
    <h1 class="page-title">归档</h1>
    <ElCard class="archive-card">
      <p class="placeholder-text">归档页面建设中...</p>
    </ElCard>
  </div>
</template>

<style scoped>
.archive-page {
  padding-bottom: 3rem;
}

.page-title {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.archive-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 4rem 2rem;
}

.placeholder-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  margin: 0;
}
</style>
