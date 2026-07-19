import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from '@/features/about/AboutPage.vue'
import ContactPage from '@/features/contact/ContactPage.vue'
import HomePage from '@/features/home/HomePage.vue'
import ProjectDetailPage from '@/features/project-detail/ProjectDetailPage.vue'
import ProjectsPage from '@/features/projects/ProjectsPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/projets', name: 'projects', component: ProjectsPage },
    { path: '/projets/:slug', name: 'project-detail', component: ProjectDetailPage },
    { path: '/a-propos', name: 'about', component: AboutPage },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
