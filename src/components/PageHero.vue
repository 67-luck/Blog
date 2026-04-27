<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <header class="page-hero">
    <div class="copy">
      <p>{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <span v-if="description">{{ description }}</span>
    </div>

    <div v-if="$slots.actions" class="actions">
      <slot name="actions" />
    </div>
  </header>
</template>

<style scoped>
.page-hero {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.copy {
  display: grid;
  gap: 10px;
}

.copy p {
  margin: 0;
  color: #98a5ff;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.copy h1 {
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  line-height: 1.08;
}

.copy span {
  max-width: 72ch;
  line-height: 1.8;
  color: rgba(248, 251, 255, 0.72);
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

:global(.light) .copy span {
  color: rgba(22, 32, 51, 0.72);
}

@media (max-width: 768px) {
  .page-hero {
    display: grid;
    align-items: start;
  }
}
</style>
