import { RouteRecordRaw } from 'vue-router'
// 错误页面模块
const errorRouter: Array<RouteRecordRaw> = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403Page.vue'),
    meta: {
      requiresAuth: true,
      title: '403页面',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404Page.vue'),
    meta: {
      requiresAuth: false,
      title: '404页面',
    },
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/error/500Page.vue'),
    meta: {
      requiresAuth: false,
      title: '500页面',
    },
  },
]

export default errorRouter
