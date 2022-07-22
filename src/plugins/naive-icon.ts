import { App } from 'vue'
import { ExclamationCircleFilled, FullscreenOutlined, FullscreenExitOutlined, FundProjectionScreenOutlined } from '@vicons/antd'
import {
  Home,
  LogoWebComponent,
  LogOutOutline,
  PersonCircleOutline,
  SettingsOutline,
  Moon,
  SunnySharp,
  Map,
  Language,
  Search,
  Add,
  EyeOffOutline,
  EyeOutline,
} from '@vicons/ionicons5'
import { renderIcon } from '@/utils/route'

// 前端路由图标映射表
export const constantRouterIcon = {
  ExclamationCircleFilled: renderIcon(ExclamationCircleFilled),
  Home: renderIcon(Home),
  LogoWebComponent: renderIcon(LogoWebComponent),
  LogOutOutline: renderIcon(LogOutOutline),
  Map: renderIcon(Map),
  Screen: renderIcon(FundProjectionScreenOutlined),
}

const antdIcon = [ExclamationCircleFilled, FullscreenOutlined, FullscreenExitOutlined, FundProjectionScreenOutlined]
const ionicons5Icon = [
  Home,
  LogoWebComponent,
  LogOutOutline,
  PersonCircleOutline,
  SettingsOutline,
  Moon,
  SunnySharp,
  Map,
  Language,
  Search,
  Add,
  EyeOffOutline,
  EyeOutline,
]
const components = [...antdIcon, ...ionicons5Icon]

export function setupNaiveIcon(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
