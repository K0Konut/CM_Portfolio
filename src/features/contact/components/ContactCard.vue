<script setup lang="ts">
import BaseButton from '@/design-system/components/BaseButton.vue'

defineProps<{
  eyebrow: string
  title: string
  description: string
  cta: string
  href: string
  variant?: 'cream' | 'violet' | 'dark' | 'pink'
}>()
</script>

<template>
  <article class="contact-card" :class="`contact-card--${variant ?? 'cream'}`">
    <p>{{ eyebrow }}</p>
    <h3>{{ title }}</h3>
    <span>{{ description }}</span>
    <BaseButton :href="href" :variant="variant === 'dark' ? 'pink' : 'lime'">
      {{ cta }}
    </BaseButton>
  </article>
</template>

<style scoped>
.contact-card {
  display: flex;
  min-height: 220px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
  padding: var(--space-xl);
  border: 3px solid var(--color-neutral-cream);
  border-radius: 14px;
  box-shadow: 8px 8px 0 var(--color-neutral-cream);
}

.contact-card p {
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
}

.contact-card h3 {
  font-size: 1.7rem;
  line-height: 1;
}

.contact-card span {
  font-weight: 700;
}

.contact-card .base-button {
  margin-top: auto;
}

.contact-card--cream {
  background: var(--color-neutral-cream);
  color: var(--color-neutral-black);
  box-shadow: 8px 8px 0 var(--color-accent-lime);
}

.contact-card--violet {
  background: var(--color-brand-electric);
}

.contact-card--dark {
  background: var(--color-neutral-black);
}

.contact-card--pink {
  background: var(--color-accent-pink);
  color: var(--color-neutral-black);
}
</style>
