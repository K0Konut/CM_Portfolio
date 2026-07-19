<script setup lang="ts">
const filters = ['Tous', 'Front-end', 'Full-stack', 'Creative']
</script>

<template>
  <div class="project-filters" aria-label="Filtres projets">
    <button
      v-for="(filter, index) in filters"
      :key="filter"
      class="project-filters__button"
      :class="{ 'is-active': index === 0 }"
      type="button"
    >
      {{ filter }}
    </button>
  </div>
</template>

<style scoped>
.project-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.project-filters__button {
  min-height: 40px;
  padding: 0 18px;
  border: var(--border-strong);
  border-radius: 999px;
  background: var(--color-neutral-cream);
  box-shadow: 4px 4px 0 var(--color-neutral-black);
  cursor: pointer;
  font-weight: 900;
}

.project-filters__button.is-active {
  background: var(--color-accent-lime);
}
</style>
