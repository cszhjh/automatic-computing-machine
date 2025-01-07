import { createRouter, createWebHashHistory } from 'vue-router'

const HomeRouter = () => import(/* vitePrefetch: true */ '@/views/home/home-router.vue')
const AboutRouter = () => import(/* vitePreload: true */ '@/views/about/about-router.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeRouter },
  { path: '/about', component: AboutRouter },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
