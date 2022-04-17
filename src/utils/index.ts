import { RouteRecordRaw } from 'vue-router'

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
      label: info.meta?.title,
      key: info.name,
      icon: isRoot ? item.meta?.icon : info.meta?.icon,
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
    return (
      (item.meta?.hidden || false) !== true &&
      !['/:pathMatch(.*)', '/', '/login'].includes(item.path)
    )
  })
}
