import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue';
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';

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
      path: '/skills',
      component: Skills
    },
    {
      path: '/projects',
      component: Projects
    }
  ]
})

export default router
