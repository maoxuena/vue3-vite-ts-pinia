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
const mapRouter: Array<RouteRecordRaw> = [
  {
    path: '/map',
    name: 'Map',
    meta: {
      title: 'map',
      icon: constantRouterIcon.Map,
      sort: 2,
    },
    redirect: '/map/AMap/index',
    component: Layout,
    children: [
      {
        path: 'AMap/index',
        name: 'AMapPage',
        meta: {
          title: 'AMap',
          sort: 0,
        },
        component: () => import('@/views/map/AMap/AMapPage.vue'),
      },
      {
        path: 'BMap/index',
        name: 'BMapPage',
        meta: {
          title: 'BMap',
          sort: 1,
        },
        component: () => import('@/views/map/BMap/BMapPage.vue'),
      },
      {
        path: 'WebGL/index',
        name: 'WebGLPage',
        meta: {
          title: 'WebGL',
          sort: 2,
        },
        component: () => import('@/views/map/WebGL/WebGLPage.vue'),
      },
    ],
  },
]

export default mapRouter
