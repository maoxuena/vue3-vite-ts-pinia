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
 * */
const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: '/components',
    name: 'Components',
    meta: {
      title: 'components',
      icon: constantRouterIcon.LogoWebComponent,
      sort: 1,
    },
    redirect: '/components/NaiveUi',
    component: Layout,
    children: [
      {
        path: 'NaiveUi',
        name: 'NaiveUi',
        meta: {
          title: 'NaiveUi',
          sort: 0,
          alwaysShow: true,
        },
        redirect: '/components/NaiveUi/ModalComp',
        component: EmptyLayout,
        children: [
          {
            path: 'ModalComp',
            name: 'ModalComp',
            meta: {
              title: 'ModalComp',
              sort: 0,
            },
            component: () => import('@/views/components/NaiveUi/ModalComp/ModalCompPage.vue'),
          },
        ],
      },
      {
        path: 'SnowUi',
        name: 'SnowUi',
        meta: {
          title: 'SnowUi',
          sort: 0,
          alwaysShow: true,
        },
        redirect: '/components/SnowUi/SvgBorder',
        component: EmptyLayout,
        children: [
          {
            path: 'SvgBorder',
            name: 'SvgBorder',
            meta: {
              title: 'SvgBorder',
              sort: 0,
            },
            component: () => import('@/views/components/SnowUi/SvgBorder/SvgBorderPage.vue'),
          },
          {
            path: 'SvgBg',
            name: 'SvgBg',
            meta: {
              title: 'SvgBg',
              sort: 0,
            },
            component: () => import('@/views/components/SnowUi/SvgBg/SvgBgPage.vue'),
          },
          {
            path: 'CanvasBg',
            name: 'CanvasBg',
            meta: {
              title: 'CanvasBg',
              sort: 1,
            },
            component: () => import('@/views/components/SnowUi/CanvasBg/CanvasBgPage.vue'),
          },
          {
            path: 'CssBg',
            name: 'CssBg',
            meta: {
              title: 'CssBg',
              sort: 1,
            },
            component: () => import('@/views/components/SnowUi/CssBg/CssBgPage.vue'),
          },
          {
            path: 'BadgeTag',
            name: 'BadgeTag',
            meta: {
              title: 'BadgeTag',
              sort: 1,
            },
            component: () => import('@/views/components/SnowUi/BadgeTag/BadgeTagPage.vue'),
          },
        ],
      },
      {
        path: 'SvgIcon',
        name: 'SvgIcon',
        meta: {
          title: 'SvgIcon',
          sort: 0,
          alwaysShow: true,
        },
        component: () => import('@/views/components/SvgIcon/SvgIconPage.vue'),
      },
    ],
  },
]

export default componentsRouter
