<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
  inverse?: boolean
}>()
</script>

<template>
  <header class="section-title" :class="{ 'section-title--inverse': inverse }">
    <p v-if="eyebrow" class="section-title__eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-title__description">{{ description }}</p>
  </header>
</template>

<style scoped>
.section-title {
  max-width: 680px;
}

.section-title__eyebrow {
  margin-bottom: var(--space-xs);
  color: var(--color-brand-electric);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.section-title--inverse .section-title__eyebrow {
  color: var(--color-accent-lime);
}

.section-title h2 {
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  font-weight: 950;
  line-height: 0.95;
  letter-spacing: 0;
}

.section-title__description {
  margin-top: var(--space-md);
  color: var(--color-neutral-grey);
  font-size: 1rem;
  max-width: 58ch;
}

.section-title--inverse .section-title__description {
  color: rgba(245, 241, 232, 0.78);
}
</style>
