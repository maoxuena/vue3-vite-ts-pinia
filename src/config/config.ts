// 全局配置项 只做导出不修改

// 首页地址（默认）
export const HOME_URL = '/home/index'

// 白名单地址
export const WHITE_PATH_LIST: string[] = ['/401', '/403', '/404', '/500', '/login']

// 路由导出方式（all：后端导出路由；intelligence：前端导出路由）
export const AUTHENTICATION = 'intelligence'
