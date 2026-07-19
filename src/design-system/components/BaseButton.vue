<script setup lang="ts">
defineProps<{
  href?: string
  variant?: 'lime' | 'pink' | 'dark' | 'cream'
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    class="base-button"
    :class="`base-button--${variant ?? 'lime'}`"
    :href="href"
  >
    <slot />
  </component>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 22px;
  border: var(--border-strong);
  border-radius: 8px;
  box-shadow: 5px 5px 0 var(--color-neutral-black);
  color: var(--color-neutral-black);
  cursor: pointer;
  font-weight: 800;
  transition:
    transform var(--motion-duration-fast) var(--motion-ease-snappy),
    box-shadow var(--motion-duration-fast) var(--motion-ease-snappy);
}

.base-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--color-neutral-black);
}

.base-button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--color-neutral-black);
}

.base-button:focus-visible {
  outline: 3px solid var(--color-accent-pink);
  outline-offset: 3px;
}

.base-button--lime {
  background: var(--color-accent-lime);
}

.base-button--pink {
  background: var(--color-accent-pink);
}

.base-button--dark {
  background: var(--color-neutral-black);
  color: var(--color-neutral-cream);
}

.base-button--cream {
  background: var(--color-neutral-cream);
}
</style>
