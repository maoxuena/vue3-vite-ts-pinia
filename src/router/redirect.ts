import { RouteRecordRaw } from 'vue-router'

// 找不到路由重定向到404页面
export const redirectRouter: RouteRecordRaw = {
  path: '/:pathMatch(.*)',
  redirect: { name: '404' },
}
