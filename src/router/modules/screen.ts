import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/router/constant'
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
    redirect: '/screen/screenA/index',
    component: Layout,
    children: [
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
]

export default screenRouter
