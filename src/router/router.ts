import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import errorRouter from './modules/error'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'Login' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/IndexPage.vue'), // 注意这里要带上 文件后缀.vue
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  ...errorRouter,
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: { name: '404' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
