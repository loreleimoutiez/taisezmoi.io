import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/frontend/Views/HomePage.vue'
import AboutPage from '@/frontend/Views/AboutPage.vue'
import ProjectsPage from '@/frontend/Views/ProjectsPage.vue'
import BlogPage from '@/frontend/Views/BlogPage.vue'
import ContactPage from '@/frontend/Views/ContactPage.vue'
import LoginPage from '@/frontend/Views/LoginPage.vue'
import WriteArticle from '@/frontend/Views/WriteArticle.vue'
import ErrorPage from '@/frontend/Views/ErrorPage.vue'
import TarotReading from '@/frontend/Views/TarotReading.vue'
import ArticlePage from '@/frontend/Views/ArticlePage.vue'
import QuackPage from '@/frontend/Views/QuackPage.vue'
import { checkAuthStatus } from './js/authentication'

const routes = [
  { path: '/', name: 'Accueil', component: HomePage },
  { path: '/about', name: 'À propos', component: AboutPage },
  { path: '/projects', name: 'Projets', component: ProjectsPage },
  { path: '/blog', name: 'Blog', component: BlogPage },
  { path: '/article/:id', name: 'Article', component: ArticlePage, props: true },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/login', name: 'Se connecter', component: LoginPage },
  { path: '/tarot-reading', name: 'Tarot Reading', component: TarotReading },
  { path: '/write', name: 'Écrire un article', component: WriteArticle },
  { path: '/edit/:id', name: 'Modifier un article', component: WriteArticle, props: true },
  { path: '/:pathMatch(.*)*', name: '404', component: ErrorPage },
  { path: '/quack', name: 'Quack', component: QuackPage },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})

const authRequiredRoutes = ['Écrire un article', 'Modifier un article', 'Projets'];

router.beforeEach(async (to, from, next) => {
  if (authRequiredRoutes.includes(to.name)) {
    const isAuthenticated = await checkAuthStatus();
    if (!isAuthenticated) {
      return next({ name: 'Se connecter', query: { redirect: to.fullPath } });
    }
  }
  next();
});

export default router
