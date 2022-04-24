// 预设 color
export const appThemeList: string[] = [
  '#155BCD',
  '#00C1D4',
  '#FB9300',
  '#FC5404',
  '#ff5c93',
  '#FF3D68',
  '#9c27b0',
  '#536dfe',
]

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
  rootList,
  language: 'zh',
}

export default setting
