import { createRouter, createWebHistory } from 'vue-router'
import HomeViewComponent from '@/views/HomeViewComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewComponent,
    }
  ],
})

export default router
