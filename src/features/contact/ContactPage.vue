<script setup lang="ts">
import BaseButton from '@/design-system/components/BaseButton.vue'
import { contactLinks } from '@/shared/data/contact'

import ContactCard from './components/ContactCard.vue'
</script>

<template>
  <section class="section section--cream contact-hero">
    <span class="decor-word contact-hero__decor" aria-hidden="true">LET'S TALK</span>
    <div class="container contact-hero__grid content-layer">
      <div>
        <p class="contact-hero__eyebrow">Contact</p>
        <h1>On construit quelque chose ensemble ?</h1>
        <p>
          Tu veux discuter d'une alternance, d'un projet ou simplement echanger ?
          Je suis ouvert aux opportunites.
        </p>
        <div class="contact-hero__actions">
          <BaseButton :href="contactLinks.email">M'envoyer un mail</BaseButton>
          <BaseButton :href="contactLinks.linkedin" variant="pink">
            Voir mon LinkedIn
          </BaseButton>
        </div>
      </div>
      <aside class="contact-hero__availability">
        <h2>Disponible pour</h2>
        <p>Stage front-end / web</p>
        <p>Projet UI / integration</p>
        <p>Echange autour d'une opportunite</p>
      </aside>
    </div>
  </section>

  <section class="section section--dark">
    <div class="container contact-links">
      <div>
        <p class="contact-links__eyebrow">02 - Moyens de contact</p>
        <h2>Les bons liens, sans detour.</h2>
        <p>
          Email, LinkedIn, GitHub ou CV : choisis le canal le plus simple pour
          echanger.
        </p>
      </div>
      <div class="contact-links__grid">
        <ContactCard
          eyebrow="Email"
          title="Le plus direct"
          description="Pour une alternance, une opportunite ou un projet concret."
          cta="M'envoyer un email"
          :href="contactLinks.email"
          variant="cream"
        />
        <ContactCard
          eyebrow="LinkedIn"
          title="Pour le contexte pro"
          description="Le bon endroit pour echanger et suivre mon parcours."
          cta="Voir mon LinkedIn"
          :href="contactLinks.linkedin"
          variant="violet"
        />
        <ContactCard
          eyebrow="GitHub"
          title="Pour voir le code"
          description="Quelques projets et bases de travail cote developpement."
          cta="Voir mon GitHub"
          :href="contactLinks.github"
          variant="dark"
        />
        <ContactCard
          eyebrow="CV"
          title="Pour garder une trace"
          description="Une version courte de mon profil et de mon parcours."
          cta="Telecharger mon CV"
          :href="contactLinks.cv"
          variant="pink"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-hero__decor {
  right: 26%;
  bottom: 6%;
  color: var(--color-neutral-black);
  font-size: 8rem;
  opacity: 0.04;
  transform: rotate(6deg);
}

.contact-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 460px);
  align-items: center;
  gap: var(--space-4xl);
}

.contact-hero__eyebrow,
.contact-links__eyebrow {
  display: inline-flex;
  padding: 4px 12px;
  border: 2px solid var(--color-neutral-black);
  border-radius: 6px;
  background: var(--color-accent-lime);
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.contact-hero h1 {
  max-width: 660px;
  margin-top: var(--space-lg);
  font-family: var(--font-display);
  font-size: clamp(5rem, 8vw, 9rem);
  line-height: 0.85;
  text-transform: uppercase;
}

.contact-hero p {
  max-width: 560px;
  margin-top: var(--space-lg);
}

.contact-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.contact-hero__availability {
  padding: var(--space-xl);
  border: var(--border-strong);
  border-radius: 14px;
  background: var(--color-brand-electric);
  box-shadow: 8px 8px 0 var(--color-neutral-black);
  color: var(--color-neutral-cream);
}

.contact-links {
  display: grid;
  gap: var(--space-3xl);
}

.contact-links h2 {
  margin-top: var(--space-md);
  max-width: 560px;
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 0.95;
}

.contact-links p {
  max-width: 520px;
  margin-top: var(--space-md);
}

.contact-links__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-xl);
}

@media (max-width: 900px) {
  .contact-hero__grid,
  .contact-links__grid {
    grid-template-columns: 1fr;
  }
}
</style>
