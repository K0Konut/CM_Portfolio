<template>
  <footer class="app-footer">
    <div class="app-footer__main">
      <div>
        <p class="app-footer__signature">Costa Maskulov</p>
        <p class="app-footer__caption">
          Developpeur full-stack — interfaces vivantes, creatives et maintenables.
        </p>
      </div>
      <nav class="app-footer__nav" aria-label="Navigation footer">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/projets">Projets</RouterLink>
        <RouterLink to="/a-propos">A propos</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
    <div class="app-footer__bottom">
      <span>© 2026 Costa Maskulov</span>
      <a href="#app">Retour en haut</a>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 4px solid var(--color-accent-lime);
  background: var(--color-neutral-black);
  color: var(--color-neutral-cream);
  padding: var(--space-4xl);
}

.app-footer__main {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-4xl);
}

.app-footer__signature {
  font-family: var(--font-display);
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 0.85;
}

.app-footer__caption {
  margin-top: var(--space-md);
  color: rgba(245, 241, 232, 0.72);
}

.app-footer__nav {
  display: grid;
  gap: var(--space-md);
}

.app-footer__nav a:hover,
.app-footer__bottom a:hover {
  color: var(--color-accent-lime);
}

.app-footer__bottom {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-5xl);
  color: rgba(245, 241, 232, 0.62);
  font-size: 0.85rem;
}

@media (max-width: 767px) {
  .app-footer {
    padding: var(--space-3xl) var(--space-lg);
  }

  .app-footer__main,
  .app-footer__bottom {
    grid-template-columns: 1fr;
    flex-direction: column;
    gap: var(--space-xl);
  }
}
</style>
