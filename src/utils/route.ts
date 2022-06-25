import { Component, h } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { NIcon } from 'naive-ui'
import { constantRouterIcon } from '@/plugins/naive-icon'
import { generateTitle } from '@/utils/i18n'

/**
 * 返回所有子集路由
 */
const getChildrenRoutes = (routerMap: RouteRecordRaw[]) => {
  const result: any[] = []
  routerMap.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

/**
 * 处理脱离层级的路由：某个一级路由为其他子路由，则剔除该一级路由，保留路由层级
 * @param {*} routes router.getRoutes()
 */
export const filterRouters = (routerMap: RouteRecordRaw[]) => {
  // 所有的子集路由
  const childrenRoutes = getChildrenRoutes(filterRouter(routerMap))
  // 根据子集路由进行查重操作
  return routerMap.filter((route) => {
    // 根据 route 在 childrenRoutes 中进行查重，把所有重复路由表剔除
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

/**
 * 递归处理菜单数据格式
 */
export function generatorMenu(routerMap: RouteRecordRaw[]) {
  return filterRouter(routerMap).map((item) => {
    const isRoot = isRootRouter(item)
    const info = isRoot ? item.children[0] : item
    const currentMenu = {
      ...info,
      ...info.meta,
      label: generateTitle(info.meta?.title),
      key: info.name,
      icon: isRoot ? item.meta?.icon : info.meta?.icon,
    }
    if (currentMenu.meta?.title) {
      const title = currentMenu.meta.title
      currentMenu.title = generateTitle(title)
    }
    // 是否有子菜单，并递归处理
    if (info.children && info.children.length > 0) {
      // 递归
      currentMenu.children = generatorMenu(info.children)
    }
    return currentMenu
  })
}

/**
 * 判断根路由 Router，当只有一个子级菜单，父级菜单 alwaysShow 不为 true 时，只显示子菜单
 */
export function isRootRouter(item: RouteRecordRaw) {
  return item.meta?.alwaysShow !== true && item.children?.length === 1
}

/**
 * 排除Router
 */
export function filterRouter(routerMap: Array<any>) {
  return routerMap.filter((item) => {
    return (item.meta?.hidden || false) !== true && !['/:pathMatch(.*)', '/', '/login'].includes(item.path)
  })
}

/**
 * render 图标
 * */
export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

/**
 * @description all模式渲染后端返回路由
 * @param constantRoutes
 * @returns {*}
 */
// Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
const modules = import.meta.glob('../views/**/**.vue')
export function convertRouter(asyncRoutes: any[]) {
  return asyncRoutes.map((route) => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = () => import('@/layout/basePage.vue')
      } else if (route.component === 'EmptyLayout') {
        route.component = () => import('@/layout/EmptyPage.vue')
      } else {
        route.component = modules[`../views/${route.component}.vue`]
      }
    }
    if (route.meta?.icon) {
      const icon = route.meta.icon
      route.meta.icon = constantRouterIcon[icon as keyof typeof constantRouterIcon]
    }
    if (route.children && route.children.length) {
      route.children = convertRouter(route.children)
    }
    if (route.children && route.children.length === 0) {
      delete route.children
    }
    return route
  })
}
