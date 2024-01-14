import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inicio',
      name: 'HomeView',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/galeria',
      name: 'GalleryView',
      component: () => import('@/views/GalleryView.vue')
    },
    {
      path: '/conoce',
      name: 'KnowSchool',
      component: () => import('@/views/KnowSchool.vue')
    },
    {
      path: '/historia',
      name: 'HistoryView',
      component: () => import('@/views/HistoryView.vue')
    },
    {
      path: '/simbolos',
      name: 'SymbolsView',
      component: () => import('@/views/SymbolsView.vue')
    },

    {
      path: '/matriculas',
      name: 'EnrollmentView',
      component: () => import('@/views/EnrollmentView.vue')
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/inicio'
    }
  ]
})

export default router
