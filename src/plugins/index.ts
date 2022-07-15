import { App } from 'vue'
import { setupNaive } from './naive'
import { setupNaiveIcon } from './naive-icon'
import { setupElement } from './element'
import { setupDirectives } from './directives'
export function setupApp(app: App): void {
  // 注册全局常用的 naive-ui 组件
  setupNaive(app)
  // 注册全局常用的 naive-ui 图标
  setupNaiveIcon(app)
  // 注册全局常用的 element-plus 组件
  setupElement(app)
  // 注册全局自定义指令，如：v-permission权限指令
  setupDirectives(app)
}
