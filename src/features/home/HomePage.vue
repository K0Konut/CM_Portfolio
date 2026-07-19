<script setup lang="ts">
import BaseButton from '@/design-system/components/BaseButton.vue'
import ContactCTA from '@/design-system/components/ContactCTA.vue'
import SectionTitle from '@/design-system/components/SectionTitle.vue'
import ProjectGrid from '@/features/projects/components/ProjectGrid.vue'
import { featuredProjects } from '@/shared/data/projects'
</script>

<template>
  <section class="home-hero section section--violet">
    <span class="decor-word home-hero__decor" aria-hidden="true">Creative dev</span>
    <div class="container content-layer home-hero__grid">
      <div>
        <p class="home-hero__eyebrow">Creative full-stack playground</p>
        <h1 class="display-word">Costa Maskulov</h1>
        <p class="home-hero__role">Developpeur full-stack</p>
        <p class="home-hero__text">
          Je transforme des idees en interfaces vivantes, creatives et maintenables.
        </p>
        <div class="home-hero__actions">
          <BaseButton href="/projets">Voir mes projets</BaseButton>
          <BaseButton href="/contact" variant="pink">Me contacter</BaseButton>
        </div>
      </div>
      <div class="home-hero__code" aria-hidden="true">
        <pre>const costa = {
  role: "full-stack developer",
  focus: "creative interfaces",
  stack: ["Vue", "Node", "Firebase"]
}</pre>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="container">
      <SectionTitle
        eyebrow="01 - Projets"
        title="Projets, interfaces & experimentations"
        description="Une selection de projets web, applications et interfaces creatives."
      />
      <div class="home-projects">
        <ProjectGrid :projects="featuredProjects" />
      </div>
    </div>
  </section>

  <section class="section section--dark">
    <div class="container">
      <SectionTitle
        eyebrow="02 - Stack"
        title="Une stack moderne pour des interfaces vivantes."
        inverse
      />
    </div>
  </section>

  <ContactCTA />
</template>

<style scoped>
.home-hero {
  min-height: 620px;
}

.home-hero__decor {
  right: 12%;
  top: 12%;
  color: var(--color-brand-deep);
  font-size: 5rem;
  opacity: 0.25;
}

.home-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 520px);
  align-items: center;
  gap: var(--space-4xl);
}

.home-hero__eyebrow,
.home-hero__role {
  color: var(--color-accent-lime);
  font-weight: 950;
}

.home-hero__text {
  max-width: 540px;
  margin-top: var(--space-md);
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.home-hero__code {
  padding: var(--space-xl);
  border: var(--border-strong);
  border-radius: 14px;
  background: var(--color-neutral-black);
  box-shadow: 10px 10px 0 var(--color-neutral-cream);
  color: var(--color-accent-lime);
  transform: rotate(6deg);
}

.home-projects {
  margin-top: var(--space-2xl);
}

@media (max-width: 900px) {
  .home-hero__grid {
    grid-template-columns: 1fr;
  }

  .home-hero__code {
    transform: rotate(0deg);
  }
}
</style>
