<script setup lang="ts">
import type { Project } from '@/shared/types/project'

import ProjectCard from './ProjectCard.vue'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="project-grid">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :variant="index === 0 ? 'violet' : index === 2 ? 'dark' : 'cream'"
    />
    <article class="project-grid__soon">
      <h3>03 projets et d'autres a venir.</h3>
      <p>Cette selection evoluera avec mes prochaines interfaces et applications.</p>
      <span class="decor-word" aria-hidden="true">MORE SOON</span>
    </article>
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-2xl);
}

.project-grid__soon {
  position: relative;
  overflow: hidden;
  min-height: 520px;
  padding: var(--space-2xl);
  border: var(--border-strong);
  border-radius: 22px;
  background: var(--color-accent-pink);
  box-shadow: 8px 8px 0 var(--color-neutral-black);
}

.project-grid__soon h3 {
  max-width: 360px;
  font-family: var(--font-display);
  font-size: 5.5rem;
  line-height: 0.85;
  text-transform: uppercase;
}

.project-grid__soon p {
  margin-top: var(--space-xl);
  max-width: 420px;
}

.project-grid__soon .decor-word {
  right: 8%;
  bottom: 6%;
  color: var(--color-brand-deep);
  font-size: 6rem;
  opacity: 0.1;
  transform: rotate(4deg);
}

@media (max-width: 900px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
