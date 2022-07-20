import { RouteRecordRaw } from 'vue-router'
import { Layout, EmptyLayout } from '@/router/constant'
import { constantRouterIcon } from '@/plugins/naive-icon'

/**
 * 组件模块
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 * @param meta.affix 多页签固定
 * @param meta.alwaysShow 是否总是显示
 * @param meta.hidden 是否在菜单中显示
 * */
const screenRouter: Array<RouteRecordRaw> = [
  {
    path: '/screen',
    name: 'Screen',
    meta: {
      title: 'screen',
      icon: constantRouterIcon.Screen,
      sort: 2,
    },
    redirect: '/screen/ScreenDesign/index',
    component: Layout,
    children: [
      {
        path: 'ScreenDesign/index',
        name: 'ScreenDesign',
        meta: {
          title: 'ScreenDesign',
          sort: 0,
        },
        component: () => import('@/views/screen/ScreenDesign/ListPage.vue'),
      },
      {
        path: 'screenA/index',
        name: 'ScreenAPage',
        meta: {
          title: 'screenA',
          sort: 0,
        },
        component: () => import('@/views/screen/ScreenA/ScreenAPage.vue'),
      },
      {
        path: 'screenB/index',
        name: 'ScreenBPage',
        meta: {
          title: 'screenB',
          sort: 1,
        },
        component: () => import('@/views/screen/ScreenB/ScreenBPage.vue'),
      },
    ],
  },
  {
    path: '/screenInstance',
    name: 'ScreenInstance',
    meta: {
      title: 'ScreenInstance',
      sort: 1,
      hidden: true,
    },
    redirect: '/screenInstance/create',
    component: EmptyLayout,
    children: [
      {
        path: 'create',
        name: 'ScreenCreate',
        meta: {
          title: 'ScreenCreate',
          sort: 1,
        },
        component: () => import('@/views/screen/ScreenInstance/CreatePage.vue'),
      },
    ],
  },
]

export default screenRouter
