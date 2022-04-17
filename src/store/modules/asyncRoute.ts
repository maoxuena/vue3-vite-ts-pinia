import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { asyncRoutes, publicRoutes } from '@/router/router'

export interface IAsyncRouteState {
  menus: RouteRecordRaw[]
  routers: any[]
  addRouters: any[]
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
    async generateRoutes() {
      const accessedRouters = [...asyncRoutes, ...publicRoutes]
      // TODO: 根据权限过滤菜单路由
      this.setRouters(accessedRouters)
      this.setMenus(accessedRouters)
      return toRaw(accessedRouters)
    },
  },
})
