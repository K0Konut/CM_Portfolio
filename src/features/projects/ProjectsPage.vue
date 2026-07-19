<script setup lang="ts">
import ContactCTA from '@/design-system/components/ContactCTA.vue'
import ProjectFilters from '@/features/projects/components/ProjectFilters.vue'
import ProjectGrid from '@/features/projects/components/ProjectGrid.vue'
import { projects } from '@/shared/data/projects'
</script>

<template>
  <section class="projects-hero section section--violet">
    <div class="container content-layer">
      <p class="projects-hero__eyebrow">Tous les projets</p>
      <h1 class="display-word">Projets, interfaces & experimentations</h1>
      <p>
        Une selection de projets web, applications et interfaces creatives ou
        j'explore le developpement full-stack.
      </p>
    </div>
  </section>

  <section class="section section--cream">
    <div class="container projects-list">
      <ProjectFilters />
      <ProjectGrid :projects="projects" />
    </div>
  </section>

  <ContactCTA />
</template>

<style scoped>
.projects-hero__eyebrow {
  color: var(--color-accent-lime);
  font-weight: 950;
  text-transform: uppercase;
}

.projects-hero p:last-child {
  max-width: 760px;
  margin-top: var(--space-lg);
  font-size: 1.25rem;
}

.projects-list {
  display: grid;
  gap: var(--space-3xl);
}
</style>
