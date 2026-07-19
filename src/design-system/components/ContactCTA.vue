<script setup lang="ts">
import BaseButton from './BaseButton.vue'
</script>

<template>
  <section class="contact-cta section section--dark">
    <span class="decor-word contact-cta__decor" aria-hidden="true">LET'S TALK</span>
    <div class="container content-layer">
      <h2 class="contact-cta__title">Une idee, une opportunite, un projet ?</h2>
      <p>
        Je suis disponible pour echanger autour d'une alternance, d'un projet web
        ou d'une collaboration creative.
      </p>
      <div class="contact-cta__actions">
        <BaseButton href="/contact">Me contacter</BaseButton>
        <BaseButton href="https://github.com/" variant="pink">Voir mon GitHub</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-cta {
  min-height: 422px;
  display: flex;
  align-items: center;
  border-top: 0;
}

.contact-cta__decor {
  right: 8%;
  top: 20%;
  color: var(--color-neutral-cream);
  font-size: 8.5rem;
  opacity: 0.05;
  transform: rotate(-5deg);
}

.contact-cta__title {
  width: max-content;
  max-width: 250%;
  color: var(--color-neutral-cream);
  font-family: var(--font-display);
  font-size: clamp(5.5rem, 9vw, 8.5rem);
  line-height: 0.85;
  letter-spacing: 0;
  white-space: nowrap;
  text-transform: uppercase;
  transform: scaleX(0.4);
  transform-origin: left center;
}

.contact-cta p {
  margin-top: var(--space-md);
  max-width: 820px;
  color: rgba(245, 241, 232, 0.78);
}

.contact-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

@media (max-width: 767px) {
  .contact-cta__title {
    width: auto;
    max-width: 100%;
    font-size: clamp(4.25rem, 18vw, 6rem);
    white-space: normal;
    transform: none;
  }
}
</style>
