import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/views/main.vue')
  },

  {
    path: '/pattern',
    component: () => import('@/views/Pattern/PatternView.vue')
  },
  {
    path: '/treasure',
    component: () => import('@/views/Treasure/TreasureView.vue')
  },
  {
    path: '/china',
    component: () => import('@/views/Treasure/ChinaView.vue')
  },
  {
    path: '/load',
    component: () => import('@/views/Treasure/LoadView.vue')
  },
  {
    path: '/monster',
    component: () => import('@/views/Monster/MonsterView.vue')
  },
  {
    path: '/color',
    component: () => import('@/views/Color/ColorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
