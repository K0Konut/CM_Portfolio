<script setup lang="ts">
defineProps<{
  label: string
  tone?: 'cream' | 'lime' | 'pink' | 'violet' | 'dark'
}>()
</script>

<template>
  <span class="stack-tag" :class="`stack-tag--${tone ?? 'cream'}`">
    {{ label }}
  </span>
</template>

<style scoped>
.stack-tag {
  display: inline-flex;
  align-items: center;
  min-height: 20px;
  padding: 2px 10px;
  border: 2px solid var(--color-neutral-black);
  border-radius: 999px;
  color: var(--color-neutral-black);
  cursor: default;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1;
}

.stack-tag--cream {
  background: var(--color-neutral-cream);
}

.stack-tag--lime {
  background: var(--color-accent-lime);
}

.stack-tag--pink {
  background: var(--color-accent-pink);
}

.stack-tag--violet {
  background: var(--color-brand-electric);
  color: var(--color-neutral-cream);
}

.stack-tag--dark {
  background: var(--color-neutral-black);
  color: var(--color-neutral-cream);
}
</style>
