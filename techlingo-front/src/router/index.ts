import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

const LandingPage = defineAsyncComponent(() => import('@/views/LandingPage/LandingPage.vue'));
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    
  ]
})

export default router
