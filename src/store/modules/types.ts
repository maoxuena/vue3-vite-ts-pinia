import { RouteRecordRaw } from 'vue-router'
import { generateId } from '@/utils/index'
import { findComByName } from '@/data/datav'

/**
 * user
 */
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

/**
 * asyncRoute
 */
// Route
export interface IAsyncRouteState {
  menus: RouteRecordRaw[]
  routers: any[]
  addRouters: any[]
}

/**
 * setting
 */
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

/**
 * screen
 */

enum ZoomMode {
  // 全屏铺满
  auto,
  // 等比缩放宽度铺满
  width,
  // 等比缩放高度铺满
  height,
  // 等比缩放高度铺满并且可以左右移动
  full,
  // 不缩放
  disabled,
}

export interface Project {
  id: number
  name: string
  share: string
  thumbnail: string
  groupId: number
  createAt: string
  updateAt: string
  config?: any
}

interface PageStyleFilter {
  enable: boolean
  hue: number
  saturate: number
  brightness: number
  contrast: number
  opacity: number
}

export interface PageConfig {
  width: number
  height: number
  bgcolor: string
  bgimage: string
  grid: number
  screenshot: string
  zoomMode: ZoomMode
  useWatermark: boolean
  styleFilterParams: PageStyleFilter
}

export interface ComponentAttr {
  x: number
  y: number
  width: number
  height: number
  deg: number
  opacity: number
  flipV: boolean
  flipH: boolean
}

export abstract class DatavComponent {
  id: string
  readonly name: string

  alias: string
  icon: string
  img: string

  locked = false
  hided = false

  // 以下几个状态可以不进行持久化，为了操作方便在此声明
  selected = false
  hovered = false
  renameing = false

  attr: ComponentAttr = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    deg: 0,
    opacity: 1,
    flipV: false,
    flipH: false,
  }

  projectId = 0
  parentId?: string

  abstract config: Record<string, any>

  constructor(name: string, attr: Partial<ComponentAttr>) {
    this.id = generateId(name)
    this.name = `D${name}`

    const obj = findComByName(this.name)!
    this.alias = obj.com.alias
    this.icon = obj.category.icon
    this.img = obj.com.img

    this.attr = { ...this.attr, ...attr }
  }
}

export interface AlignLine {
  top: number
  bottom: number
  left: number
  right: number
  vertical: number
  horizontal: number
  enable: boolean
  show: boolean
}

export interface ScreenState {
  editMode: boolean
  screen: Partial<Project>
  pageConfig: PageConfig
  canvas: {
    scale: number
    width: number
    height: number
  }
  guideLine: {
    h: number[]
    v: number[]
  }
  referLine: {
    enable: boolean
  }
  alignLine: AlignLine
  panel: {
    left?: string
    right?: string
  }
  isNormalResizeMode: boolean
  coms: DatavComponent[]
  loading: number
}
