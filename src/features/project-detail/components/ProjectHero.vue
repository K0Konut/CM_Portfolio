<script setup lang="ts">
import BaseButton from '@/design-system/components/BaseButton.vue'
import StackTag from '@/design-system/components/StackTag.vue'
import StatusBadge from '@/design-system/components/StatusBadge.vue'
import type { Project } from '@/shared/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <section class="project-hero section section--dark">
    <span class="decor-word project-hero__decor" aria-hidden="true">CASE STUDY</span>
    <div class="container content-layer">
      <div class="project-hero__meta">
        <StatusBadge label="Prototype" tone="violet" />
        <span>{{ project.type }} - {{ project.year }}</span>
      </div>
      <h1 class="project-hero__title">{{ project.title }}</h1>
      <h2>{{ project.subtitle }}</h2>
      <p>{{ project.shortDescription }}</p>
      <div class="project-hero__tags">
        <StackTag v-for="item in project.stack" :key="item.name" :label="item.name" />
      </div>
      <div class="project-hero__actions">
        <BaseButton :href="project.links.demo" variant="lime">Voir la demo</BaseButton>
        <BaseButton :href="project.links.github" variant="pink">GitHub</BaseButton>
      </div>
      <div class="project-hero__media" aria-hidden="true"></div>
    </div>
  </section>
</template>

<style scoped>
.project-hero__decor {
  right: 8%;
  top: 10%;
  color: var(--color-neutral-cream);
  font-size: 8rem;
  opacity: 0.05;
  transform: rotate(5deg);
}

.project-hero__meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.9rem;
}

.project-hero__title {
  margin-top: var(--space-lg);
  font-family: var(--font-display);
  font-size: clamp(5rem, 9vw, 10rem);
  line-height: 0.85;
}

.project-hero h2 {
  margin-top: var(--space-lg);
  max-width: 920px;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.1;
}

.project-hero p {
  margin-top: var(--space-md);
  color: rgba(245, 241, 232, 0.76);
}

.project-hero__tags,
.project-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}

.project-hero__media {
  min-height: 520px;
  margin-top: var(--space-3xl);
  border: 3px solid var(--color-neutral-cream);
  border-radius: 18px;
  background: var(--color-neutral-grey);
  box-shadow: 10px 10px 0 var(--color-accent-lime);
}
</style>
