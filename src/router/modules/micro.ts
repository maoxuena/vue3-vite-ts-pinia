/*
 * @Author: maoxuena
 * @Date: 2024-09-02 11:04:20
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-09-03 11:21:27
 * @FilePath: \vue3-vite-ts-pinia\src\router\modules\micro.ts
 * @Description:
 */
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
const microRouter: Array<RouteRecordRaw> = [
  {
    path: '/micro',
    name: 'Micro',
    meta: {
      title: 'micro',
      icon: constantRouterIcon.LogoMicrosoft,
      sort: 2,
    },
    redirect: '/micro/Iframe/index',
    component: Layout,
    children: [
      {
        path: 'Iframe/index',
        name: 'IframePage',
        meta: {
          title: 'Iframe',
          sort: 0,
        },
        component: () => import('@/views/micro/Iframe/IframePage.vue'),
      },
      {
        path: 'MicroApp/index',
        name: 'MicroAppPage',
        meta: {
          title: 'MicroApp',
          sort: 0,
        },
        component: () => import('@/views/micro/MicroApp/MicroAppPage.vue'),
      },
      {
        path: 'Wujie/index',
        name: 'WujiePage',
        meta: {
          title: 'Wujie',
          sort: 0,
        },
        component: () => import('@/views/micro/Wujie/WujiePage.vue'),
      },
    ],
  },
]

export default microRouter
