import { RouteRecordRaw } from 'vue-router'

// User
export interface IUserState {
  token: string
  username: string
  welcome: string
  avatar: string
  permissions: any[]
  info: any
}

export interface IUserInfoState {
  email: string
  username: string
  auth: any[]
  menu: any[]
}

// Route
export interface IAsyncRouteState {
  menus: RouteRecordRaw[]
  routers: any[]
  addRouters: any[]
}

// 顶部
export interface IheaderSetting {
  bgColor: string
  fixed: boolean
  isReload: boolean
}

// 多标签
export interface ImultiTabsSetting {
  bgColor: string
  fixed: boolean
  show: boolean
}

// 菜单
export interface ImenuSetting {
  minMenuWidth: number
  menuWidth: number
  fixed: boolean
  mixMenu: boolean
  mobileWidth: number
}

// 面包屑
export interface IcrumbsSetting {
  show: boolean
  showIcon: boolean
}
