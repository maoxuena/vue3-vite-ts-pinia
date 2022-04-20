import { App } from 'vue'
import { ExclamationCircleFilled, FullscreenOutlined, FullscreenExitOutlined } from '@vicons/antd'
import { Home, LogoWebComponent, LogOutOutline, PersonCircleOutline } from '@vicons/ionicons5'
import { renderIcon } from '@/utils/index'

// 前端路由图标映射表
export const constantRouterIcon = {
  ExclamationCircleFilled: renderIcon(ExclamationCircleFilled),
  Home: renderIcon(Home),
  LogoWebComponent: renderIcon(LogoWebComponent),
  LogOutOutline: renderIcon(LogOutOutline),
  PersonCircleOutline: renderIcon(PersonCircleOutline),
  FullscreenOutlined: renderIcon(FullscreenOutlined),
  FullscreenExitOutlined: renderIcon(FullscreenExitOutlined),
}

const antdIcon = [ExclamationCircleFilled, FullscreenOutlined, FullscreenExitOutlined]
const ionicons5Icon = [Home, LogoWebComponent, PersonCircleOutline]
const components = [...antdIcon, ...ionicons5Icon]

export function setupNaiveIcon(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
