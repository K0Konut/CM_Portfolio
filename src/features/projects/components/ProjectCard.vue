<script setup lang="ts">
import BaseButton from '@/design-system/components/BaseButton.vue'
import StackTag from '@/design-system/components/StackTag.vue'
import StatusBadge from '@/design-system/components/StatusBadge.vue'
import type { Project } from '@/shared/types/project'

defineProps<{
  project: Project
  variant?: 'violet' | 'cream' | 'dark'
}>()
</script>

<template>
  <article class="project-card" :class="`project-card--${variant ?? 'cream'}`">
    <div class="project-card__image" aria-hidden="true"></div>
    <div class="project-card__meta">
      <StatusBadge :label="project.status === 'prototype' ? 'Prototype' : 'Termine'" />
      <span>{{ project.year }}</span>
    </div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.shortDescription }}</p>
    <div class="project-card__tags">
      <StackTag
        v-for="item in project.stack.slice(0, 3)"
        :key="item.name"
        :label="item.name"
        :tone="item.name === 'TypeScript' ? 'lime' : 'cream'"
      />
    </div>
    <BaseButton :href="`/projets/${project.slug}`">Voir le projet</BaseButton>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  min-height: 640px;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl);
  border: var(--border-strong);
  border-radius: 24px;
  box-shadow: 8px 8px 0 var(--color-neutral-black);
  transition:
    transform var(--motion-duration-default) var(--motion-ease-snappy),
    box-shadow var(--motion-duration-default) var(--motion-ease-snappy);
}

.project-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 var(--color-neutral-black);
}

.project-card--cream {
  background: var(--color-neutral-sand);
}

.project-card--violet {
  background: var(--color-brand-electric);
  color: var(--color-neutral-cream);
}

.project-card--dark {
  background: var(--color-neutral-black);
  color: var(--color-neutral-cream);
}

.project-card__image {
  aspect-ratio: 338 / 288;
  border: 3px solid var(--color-neutral-black);
  border-radius: 15px;
  background: var(--color-neutral-grey);
}

.project-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-card h3 {
  font-size: clamp(1.9rem, 2.4vw, 2.45rem);
  line-height: 1;
}

.project-card p {
  max-width: 52ch;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.project-card .base-button {
  align-self: flex-start;
  margin-top: auto;
}

@media (max-width: 767px) {
  .project-card {
    min-height: auto;
    padding: var(--space-lg);
  }
}
</style>
