<script setup lang="ts">
const links = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/a-propos', label: 'A propos' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="app-header">
    <RouterLink to="/" class="app-header__brand">Costa Maskulov</RouterLink>
    <nav class="app-header__nav" aria-label="Navigation principale">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="app-header__link"
      >
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0 var(--space-4xl);
  border-bottom: 2px solid var(--color-neutral-black);
  background: var(--color-neutral-cream);
}

.app-header__brand {
  font-weight: 950;
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.app-header__link {
  font-weight: 700;
  transition: color var(--motion-duration-fast) var(--motion-ease-default);
}

.app-header__link:hover,
.app-header__link.router-link-active {
  color: var(--color-brand-electric);
}

@media (max-width: 767px) {
  .app-header {
    min-height: 68px;
    padding: 0 var(--space-lg);
  }

  .app-header__nav {
    gap: var(--space-sm);
    font-size: 0.85rem;
  }
}
</style>
