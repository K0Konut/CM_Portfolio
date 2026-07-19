<script setup lang="ts">
import ContactCTA from '@/design-system/components/ContactCTA.vue'
import SectionTitle from '@/design-system/components/SectionTitle.vue'
</script>

<template>
  <section class="section section--violet">
    <div class="container content-layer">
      <p class="about-hero__eyebrow">01 - A propos</p>
      <h1>
        Je construis des interfaces avec du caractere et une structure propre
        derriere.
      </h1>
      <p>
        Je suis Costa Maskulov, developpeur full-stack en formation
        d'ingenierie informatique.
      </p>
    </div>
  </section>

  <section class="section section--cream">
    <div class="container about-path">
      <SectionTitle
        eyebrow="02 - Parcours"
        title="En formation, en construction, en recherche d'alternance."
      />
      <div class="about-path__timeline">
        <article v-for="item in 5" :key="item">
          <strong>2025</strong>
          <div>
            <h3>Nom de l'ecole / entreprise</h3>
            <p>Formation informatique / Developpeur web / Stage / Alternance</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section--dark">
    <div class="container">
      <SectionTitle
        eyebrow="03 - Ce que j'aime construire"
        title="Des interfaces modernes, des systemes modulaires et des experiences web qui restent en memoire."
        inverse
      />
    </div>
  </section>

  <ContactCTA />
</template>

<style scoped>
.about-hero__eyebrow {
  color: var(--color-accent-lime);
  font-weight: 900;
}

.about-hero h1,
.about-hero__eyebrow + h1 {
  max-width: 980px;
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.95;
}

.about-path {
  display: grid;
  gap: var(--space-3xl);
}

.about-path__timeline {
  display: grid;
}

.about-path__timeline article {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: var(--space-xl);
  padding: var(--space-lg) 0;
  border-top: 1px solid rgba(16, 17, 19, 0.2);
}

.about-path__timeline strong {
  color: var(--color-brand-electric);
  font-family: var(--font-display);
  font-size: 3.5rem;
  line-height: 0.8;
}
</style>
