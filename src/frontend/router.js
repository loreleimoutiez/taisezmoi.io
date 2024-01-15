import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/frontend/Views/HomePage.vue'
import AboutPage from '@/frontend/Views/AboutPage.vue'
import ProjectsPage from '@/frontend/Views/ProjectsPage.vue'
import BlogPage from '@/frontend/Views/BlogPage.vue'
import LoginPage from '@/frontend/Views/LoginPage.vue'
import ErrorPage from '@/frontend/Views/ErrorPage.vue'

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
      path: '/login',
      name: 'Se connecter',
      component: LoginPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorPage,
    }
]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
})

export default router
