<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import ProjectHero from '@/features/project-detail/components/ProjectHero.vue'
import { getProjectBySlug } from '@/shared/data/projects'

const route = useRoute()
const router = useRouter()
const project = computed(() => getProjectBySlug(String(route.params.slug)))

if (!project.value) {
  router.replace('/projets')
}
</script>

<template>
  <template v-if="project">
    <ProjectHero :project="project" />
    <section class="section section--cream">
      <div class="container detail-context">
        <h2>Creer une interface de streaming sombre, claire et structuree.</h2>
        <div>
          <p>{{ project.context }}</p>
          <ol>
            <li v-for="objective in project.objectives" :key="objective">
              {{ objective }}
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section class="section section--dark">
      <div class="container detail-role">
        <div>
          <p class="detail-role__eyebrow">03 - Role & fonctionnalites</p>
          <h2>De la direction d'interface a l'integration des contenus.</h2>
          <p>{{ project.longDescription }}</p>
        </div>
        <div class="detail-role__cards">
          <article>
            <h3>Mon role</h3>
            <ul>
              <li v-for="item in project.role" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article>
            <h3>Fonctionnalites</h3>
            <ul>
              <li v-for="item in project.features" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </template>
</template>

<style scoped>
.detail-context {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr);
  gap: var(--space-5xl);
}

.detail-context h2,
.detail-role h2 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 0.95;
}

.detail-context ol {
  display: grid;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
  padding-left: var(--space-lg);
}

.detail-role {
  display: grid;
  gap: var(--space-3xl);
}

.detail-role__eyebrow {
  color: var(--color-accent-lime);
  font-weight: 900;
}

.detail-role__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-lg);
}

.detail-role__cards article {
  padding: var(--space-xl);
  border: 3px solid var(--color-neutral-cream);
  border-radius: 14px;
  background: var(--color-brand-electric);
  box-shadow: 7px 7px 0 var(--color-accent-lime);
}

.detail-role__cards article:nth-child(2) {
  background: var(--color-neutral-cream);
  color: var(--color-neutral-black);
  box-shadow: 7px 7px 0 var(--color-accent-pink);
}

@media (max-width: 900px) {
  .detail-context,
  .detail-role__cards {
    grid-template-columns: 1fr;
  }
}
</style>
