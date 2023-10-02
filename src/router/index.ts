import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue';
import XPLogin from '@/views/XPLogin.vue';
import MainXP from '@/views/MainXP.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Intro
    },
    {
      path: '/home',
      name: 'intro',
      component: Intro
    },
    {
      path: '/login',
      name: 'portfolioLogin',
      component: XPLogin
    },
    {
      path: '/mainXP',
      name: 'mainPortfolio',
      component: MainXP
    }
  ]
})

export default router
