import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/assets/frontend/Views/HomePage.vue'
import AboutPage from '@/assets/frontend/Views/AboutPage.vue'
import ProjectsPage from '@/assets/frontend/Views/ProjectsPage.vue'
import BlogPage from '@/assets/frontend/Views/BlogPage.vue'
import ErrorPage from '@/assets/frontend/Views/ErrorPage.vue'

const routes = [
    {
      path: '/',
      name: 'Accueil',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'À propos',
      component: AboutPage,
    },
    {
      path: '/projects',
      name: 'Projets',
      component: ProjectsPage,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorPage,
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router
