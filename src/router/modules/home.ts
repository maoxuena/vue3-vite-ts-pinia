import { RouteRecordRaw } from 'vue-router'

// 首页模块
const homeRouter: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/IndexPage.vue'),
    meta: {
      keepAlive: true,
      requiresAuth: true,
      title: '首页',
      key: 'home',
    },
  },
]

export default homeRouter
