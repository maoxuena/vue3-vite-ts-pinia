import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { asyncRoutes, publicRoutes } from '@/router/router'
import { AUTHENTICATION } from '@/config/config'
import { IAsyncRouteState, IUserInfoState } from './types'
import { convertRouter } from '@/utils/route'

/**
 * @description 路由排序
 * @param a
 * @param b
 * @returns
 */
function sortRoute(a: any, b: any) {
  return (a.meta?.sort || 0) - (b.meta?.sort || 0)
}

export const useAsyncRouteStore = defineStore({
  id: 'async-route',
  state: (): IAsyncRouteState => ({
    menus: [],
    routers: publicRoutes,
    addRouters: [],
  }),
  getters: {
    getMenus: (state): RouteRecordRaw[] => state.menus,
  },
  actions: {
    // 设置动态路由
    setRouters(routers: any[]) {
      this.addRouters = routers
      this.routers = publicRoutes.concat(routers)
    },
    // 设置动态菜单
    setMenus(menus: RouteRecordRaw[]) {
      this.menus = menus
    },
    async generateRoutes(data: IUserInfoState) {
      let accessedRouters
      const menuList = data.menu ?? []
      if (AUTHENTICATION === 'all') {
        // 后端导出路由
        const menu = convertRouter(menuList)
        accessedRouters = [...menu, ...publicRoutes]
      } else {
        // 前端导出路由
        // TODO: 根据权限筛选路由
        accessedRouters = [...asyncRoutes, ...publicRoutes]
      }
      accessedRouters = accessedRouters.sort(sortRoute)
      this.setRouters(accessedRouters)
      this.setMenus(accessedRouters)
      return toRaw(accessedRouters)
    },
  },
})
