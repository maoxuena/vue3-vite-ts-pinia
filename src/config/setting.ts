// 预设 color
export const appThemeList: string[] = ['#155BCD', '#00C1D4', '#FB9300', '#FC5404', '#ff5c93', '#FF3D68', '#9c27b0', '#536dfe']

// :rootList 里配置的变量 key
interface TRoot {
  key: string
  value: number
}
export const rootList: TRoot[] = [
  { key: 'primaryColor', value: 0 },
  { key: 'primaryColorHover', value: 12 },
  { key: 'primaryColorPressed', value: -5 },
  { key: 'primaryColorSuppl', value: 12 },
]

const setting = {
  // 深色主题
  darkTheme: false,
  // 系统主题色
  appTheme: '#155BCD',
  // 系统内置主题色列表
  appThemeList,
  // 主题色不同状态深浅变化配置
  rootList,
  // 语言
  language: 'zh',
  // 导航模式 vertical 左侧菜单模式 horizontal 顶部菜单模式
  navMode: 'vertical',
  // 导航风格 dark 暗色侧边栏 light 白色侧边栏 header-dark 暗色顶栏
  navTheme: 'dark',
  // 是否处于移动端模式
  isMobile: false,
  // 顶部
  headerSetting: {
    // 背景色
    bgColor: '#fff',
    // 固定顶部
    fixed: true,
    // 显示重载按钮
    isReload: true,
  },
  // 页脚
  showFooter: true,
  // 多标签
  multiTabsSetting: {
    // 背景色
    bgColor: '#fff',
    // 是否显示
    show: true,
    // 固定多标签
    fixed: true,
  },
  // 菜单
  menuSetting: {
    // 最小宽度
    minMenuWidth: 64,
    // 菜单宽度
    menuWidth: 200,
    // 固定菜单
    fixed: true,
    // 分割菜单
    mixMenu: false,
    // 触发移动端侧边栏的宽度
    mobileWidth: 800,
  },
  // 面包屑
  crumbsSetting: {
    // 是否显示
    show: true,
    // 显示图标
    showIcon: false,
  },
  // 尺寸
  size: 'medium',
  // 是否开启路由动画
  isPageAnimate: true,
  // 路由动画类型
  pageAnimateType: 'zoom-fade',
}

export default setting
