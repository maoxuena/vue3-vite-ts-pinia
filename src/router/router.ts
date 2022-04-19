import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Layout } from '@/router/constant'

import { constantRouterIcon } from '@/plugins/naive-icon'

// 导入所有router
const modules = import.meta.globEager('./modules/*.ts')

// 处理路由
const routerArray: RouteRecordRaw[] = []
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routerArray.push(...modList)
})

// 设置默认打开页面
const rootRoute: RouteRecordRaw = {
  path: '/',
  redirect: { name: 'Login' },
}

// 登录页面模块
const loginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/IndexPage.vue'), // 注意这里要带上 文件后缀.vue
  meta: {
    title: '登录页',
  },
}

// 首页
const homeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  meta: {
    title: '首页',
    icon: constantRouterIcon.Home,
    sort: 0,
    permissions: ['HomeIndex'],
  },
  redirect: '/home/index',
  component: Layout,
  children: [
    {
      path: 'index',
      name: 'HomeIndex',
      meta: {
        title: '首页',
        permissions: ['HomeIndex'],
        affix: true,
      },
      component: () => import('@/views/home/IndexPage.vue'),
    },
  ],
}

// 错误页面模块
const errorRouter: RouteRecordRaw = {
  path: '/error',
  name: 'Error',
  meta: {
    title: '错误页面',
    icon: constantRouterIcon.ExclamationCircleFilled,
    sort: 9,
  },
  redirect: '/error/404',
  component: Layout,
  children: [
    {
      path: '401',
      name: '401',
      component: () => import('@/views/error/401Page.vue'),
      meta: {
        title: '401页面',
        sort: 0,
      },
    },
    {
      path: '403',
      name: '403',
      component: () => import('@/views/error/403Page.vue'),
      meta: {
        title: '403页面',
        sort: 1,
      },
    },
    {
      path: '404',
      name: '404',
      component: () => import('@/views/error/404Page.vue'),
      meta: {
        title: '404页面',
        sort: 2,
      },
    },
    {
      path: '500',
      name: '500',
      component: () => import('@/views/error/500Page.vue'),
      meta: {
        title: '500页面',
        sort: 3,
      },
    },
  ],
}

// 私有路由表，需要验证权限
export const asyncRoutes = [...routerArray]

// 公开路由表，无需验证权限
export const publicRoutes: RouteRecordRaw[] = [rootRoute, loginRoute, homeRoute, errorRouter]

const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes,
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
