import { App } from 'vue'

import { permission } from '@/directives/permission'
import ClickOutside from '@/directives/clickOutside'

/**
 * 注册全局自定义指令
 * @param app
 */
export function setupDirectives(app: App): void {
  // 按钮级权限控制指令
  app.directive('permission', permission)
  // 点击当前区域之外的位置指令
  app.directive('clickOutside', ClickOutside)
}
