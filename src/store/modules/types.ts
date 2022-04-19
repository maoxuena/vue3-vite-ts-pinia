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
