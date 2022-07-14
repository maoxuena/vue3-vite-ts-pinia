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
    redirect: '/components/naiveui',
    component: Layout,
    children: [
      {
        path: 'naiveui',
        name: 'NaiveUi',
        meta: {
          title: 'naiveui',
          sort: 0,
          alwaysShow: true,
        },
        redirect: '/components/naiveui/modalcomp',
        component: EmptyLayout,
        children: [
          {
            path: 'modalcomp',
            name: 'ModalComp',
            meta: {
              title: 'modalcomp',
              sort: 0,
            },
            component: () => import('@/views/components/NaiveUi/ModalComp/ModalCompPage.vue'),
          },
        ],
      },
      {
        path: 'snowui',
        name: 'SnowUi',
        meta: {
          title: 'snowui',
          sort: 0,
          alwaysShow: true,
        },
        redirect: '/components/snowui/svgborder',
        component: EmptyLayout,
        children: [
          {
            path: 'svgborder',
            name: 'SvgBorder',
            meta: {
              title: 'svgborder',
              sort: 0,
            },
            component: () => import('@/views/components/SnowUi/SvgBorder/SvgBorderPage.vue'),
          },
          {
            path: 'svgbg',
            name: 'SvgBg',
            meta: {
              title: 'svgbg',
              sort: 0,
            },
            component: () => import('@/views/components/SnowUi/SvgBg/SvgBgPage.vue'),
          },
          {
            path: 'canvasbg',
            name: 'CanvasBg',
            meta: {
              title: 'canvasbg',
              sort: 1,
            },
            component: () => import('@/views/components/SnowUi/CanvasBg/CanvasBgPage.vue'),
          },
          {
            path: 'cssbg',
            name: 'CssBg',
            meta: {
              title: 'cssbg',
              sort: 1,
            },
            component: () => import('@/views/components/SnowUi/CssBg/CssBgPage.vue'),
          },
          {
            path: 'badgetag',
            name: 'BadgeTag',
            meta: {
              title: 'badgetag',
              sort: 1,
            },
            component: () => import('@/views/components/SnowUi/BadgeTag/BadgeTagPage.vue'),
          },
        ],
      },
      {
        path: 'svgicon',
        name: 'SvgIcon',
        meta: {
          title: 'svgicon',
          sort: 0,
          alwaysShow: true,
        },
        component: () => import('@/views/components/SvgIcon/SvgIconPage.vue'),
      },
    ],
  },
]

export default componentsRouter
