<script setup lang="ts">
defineProps<{
  label: string
  tone?: 'lime' | 'pink' | 'violet' | 'dark'
}>()
</script>

<template>
  <span class="status-badge" :class="`status-badge--${tone ?? 'lime'}`">
    {{ label }}
  </span>
</template>

<style scoped>
.status-badge {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  min-height: 22px;
  padding: 3px 10px;
  border: 2px solid var(--color-neutral-black);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 900;
  line-height: 1;
}

.status-badge--lime {
  background: var(--color-accent-lime);
  color: var(--color-neutral-black);
}

.status-badge--pink {
  background: var(--color-accent-pink);
  color: var(--color-neutral-black);
}

.status-badge--violet {
  background: var(--color-brand-electric);
  color: var(--color-neutral-cream);
}

.status-badge--dark {
  background: var(--color-neutral-black);
  color: var(--color-neutral-cream);
}
</style>
