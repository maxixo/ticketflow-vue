import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import AuthPage from '../components/AuthPage.vue'
import Dashboard from '../components/Dashboard.vue'
import TicketManagement from '../components/TicketManagement.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/auth/login',
      name: 'login',
      component: AuthPage,
      props: { mode: 'login' }
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: AuthPage,
      props: { mode: 'signup' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketManagement,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const session = localStorage.getItem('ticketapp_session')
  if (to.meta.requiresAuth && !session) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router