<script setup lang="ts">
import AppFooter from '@/layout/AppFooter.vue'
import AppHeader from '@/layout/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main class="site-main">
    <RouterView />
  </main>
  <AppFooter />
</template>
