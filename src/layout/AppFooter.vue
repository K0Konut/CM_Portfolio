<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const footerVariant = computed(() => {
  if (route.name === 'home') return 'cream'
  if (route.name === 'projects' || route.name === 'project-detail') return 'violet'
  return 'dark'
})

const footerColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', to: '/' },
      { label: 'Projets', to: '/projets' },
      { label: 'A Propos', to: '/a-propos' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Reseaux',
    links: [
      { label: 'GitHub', to: 'https://github.com/' },
      { label: 'LinkedIn', to: 'https://www.linkedin.com/' },
    ],
  },
  {
    title: 'Contact',
    links: [{ label: 'Email', to: 'mailto:contact@example.com' }],
  },
] as const
</script>

<template>
  <footer class="app-footer" :class="`app-footer--${footerVariant}`">
    <div class="app-footer__main">
      <div>
        <p class="app-footer__signature">Costa Maskulov</p>
        <p class="app-footer__caption">
          Developpeur full-stack - interfaces vivantes, creatives et maintenables.
        </p>
      </div>
      <nav class="app-footer__nav" aria-label="Navigation footer">
        <div v-for="column in footerColumns" :key="column.title" class="app-footer__column">
          <p>{{ column.title }}</p>
          <a
            v-for="link in column.links"
            :key="link.label"
            :href="link.to"
          >
            {{ link.label }}
          </a>
        </div>
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
  padding: var(--space-4xl);
}

.app-footer--cream {
  background: var(--color-neutral-cream);
  color: var(--color-neutral-black);
}

.app-footer--violet {
  background: var(--color-brand-electric);
  color: var(--color-neutral-cream);
}

.app-footer--dark {
  background: var(--color-neutral-black);
  color: var(--color-neutral-cream);
}

.app-footer__main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(420px, auto);
  gap: var(--space-4xl);
}

.app-footer__signature {
  font-family: var(--font-display);
  font-size: clamp(5.5rem, 11vw, 10rem);
  line-height: 0.85;
}

.app-footer__caption {
  margin-top: var(--space-md);
  color: rgba(245, 241, 232, 0.72);
}

.app-footer--cream .app-footer__caption {
  color: var(--color-neutral-grey);
}

.app-footer__nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4xl);
}

.app-footer__column {
  display: grid;
  align-content: start;
  gap: var(--space-md);
}

.app-footer__column p {
  color: var(--color-accent-lime);
  font-size: 0.78rem;
  font-weight: 900;
}

.app-footer--cream .app-footer__column p {
  color: var(--color-brand-electric);
}

.app-footer__nav a:hover,
.app-footer__bottom a:hover {
  color: var(--color-accent-lime);
}

.app-footer__bottom {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-5xl);
  font-size: 0.85rem;
  opacity: 0.62;
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

  .app-footer__nav {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}
</style>
