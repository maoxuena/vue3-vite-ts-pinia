import { App } from 'vue'
import { ExclamationCircleFilled } from '@vicons/antd'
import { Home, LogoWebComponent } from '@vicons/ionicons5'
import { renderIcon } from '@/utils/index'

// 前端路由图标映射表
export const constantRouterIcon = {
  ExclamationCircleFilled: renderIcon(ExclamationCircleFilled),
  Home: renderIcon(Home),
  LogoWebComponent: renderIcon(LogoWebComponent),
}

const antdIcon = [ExclamationCircleFilled]
const ionicons5Icon = [Home, LogoWebComponent]
const components = [...antdIcon, ...ionicons5Icon]

export function setupNaiveIcon(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
