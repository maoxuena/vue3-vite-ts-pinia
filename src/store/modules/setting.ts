import { defineStore } from 'pinia'
import { createStorage } from '@/utils/storage'
import setting from '@/config/setting'
import { IcrumbsSetting, IheaderSetting, ImenuSetting, ImultiTabsSetting } from './types'
import { size as sizeMap } from '@/config/sizeSetting'

const {
  darkTheme,
  appTheme,
  appThemeList,
  language,
  navMode,
  navTheme,
  isMobile,
  headerSetting,
  showFooter,
  multiTabsSetting,
  menuSetting,
  crumbsSetting,
  size,
  isPageAnimate,
  pageAnimateType,
} = setting

const Storage = createStorage({ storage: localStorage })
interface SettingState {
  // 深色主题
  darkTheme: boolean
  // 系统主题色
  appTheme: string
  // 系统内置主题色列表
  appThemeList: string[]
  // 语言
  language: string
  // 导航模式
  navMode: string
  // 导航风格
  navTheme: string
  // 是否处于移动端模式
  isMobile: boolean
  // 顶部设置
  headerSetting: IheaderSetting
  // 页脚
  showFooter: boolean
  // 多标签
  multiTabsSetting: ImultiTabsSetting
  // 菜单
  menuSetting: ImenuSetting
  // 面包屑
  crumbsSetting: IcrumbsSetting
  // 尺寸
  size: string
  // 是否开启路由动画
  isPageAnimate: boolean
  // 路由动画类型
  pageAnimateType: string
  // 左侧菜单收缩状态
  collapsed: boolean
}

export const useSettingStore = defineStore({
  id: 'setting',
  state: (): SettingState => ({
    darkTheme: Storage.get('DARK-THEME', darkTheme),
    appTheme: Storage.get('APP-THEME', appTheme),
    appThemeList,
    language: Storage.get('APP-LANGUAGE', language),
    navMode: Storage.get('APP-NAVMODE', navMode),
    navTheme: Storage.get('APP-NAVTHEME', navTheme),
    isMobile,
    headerSetting: Storage.get('APP-HEADERSETTING', headerSetting),
    showFooter: Storage.get('APP-SHOWFOOTER', showFooter),
    multiTabsSetting: Storage.get('APP-MULTITABSSETTING', multiTabsSetting),
    menuSetting: Storage.get('APP-MENUSETTING', menuSetting),
    crumbsSetting: Storage.get('APP-CRUMBSSETTING', crumbsSetting),
    size: Storage.get('APP-SIZE', size),
    isPageAnimate: Storage.get('APP-ISPAGEANIMATE', isPageAnimate),
    pageAnimateType: Storage.get('APP-PAGEANIMATETYPE', pageAnimateType),
    collapsed: Storage.get('APP-COLLAPSED', false),
  }),
  getters: {
    getDarkTheme(): boolean {
      return this.darkTheme
    },
    getAppTheme(): string {
      return this.appTheme
    },
    getAppThemeList(): string[] {
      return this.appThemeList
    },
    getNavMode(): string {
      return this.navMode
    },
    getNavTheme(): string {
      return this.navTheme
    },
    getHeaderSetting(): IheaderSetting {
      return this.headerSetting
    },
    getShowFooter(): boolean {
      return this.showFooter
    },
    getMultiTabsSetting(): ImultiTabsSetting {
      return this.multiTabsSetting
    },
    getMenuSetting(): ImenuSetting {
      return this.menuSetting
    },
    getCrumbsSetting(): string {
      return this.navMode
    },
    getSize(): string {
      return this.size
    },
    getIsPageAnimate(): boolean {
      return this.isPageAnimate
    },
    getPageAnimateType(): string {
      return this.pageAnimateType
    },
    getCollapsed(): boolean {
      return this.collapsed
    },
  },
  actions: {
    // 更新主题
    async setDarkTheme(darkTheme: boolean) {
      Storage.set('DARK-THEME', darkTheme)
      this.darkTheme = darkTheme
    },
    // 更新主题色
    async setAppTheme(appTheme: string) {
      Storage.set('APP-THEME', appTheme)
      this.appTheme = appTheme
    },
    setAppThemeList(appThemeList: string[]) {
      this.appThemeList = appThemeList
    },
    // 更新语言
    async setLanguage(language: string) {
      Storage.set('APP-LANGUAGE', language)
      this.language = language
    },
    // 更新导航模式
    async setNavMode(navMode: string) {
      Storage.set('APP-NAVMODE', navMode)
      this.navMode = navMode
    },
    // 更新导航风格
    async setNavTheme(navTheme: string) {
      Storage.set('APP-NAVTHEME', navTheme)
      this.navTheme = navTheme
    },
    // 更新顶部设置
    async setHeaderSetting(headerSetting: IheaderSetting) {
      Storage.set('APP-HEADERSETTING', headerSetting)
      this.headerSetting = headerSetting
    },
    // 更新页脚设置
    async setShowFooter(showFooter: boolean) {
      Storage.set('APP-SHOWFOOTER', showFooter)
      this.showFooter = showFooter
    },
    // 更新多标签设置
    async setMultiTabsSetting(multiTabsSetting: ImultiTabsSetting) {
      Storage.set('APP-MULTITABSSETTING', multiTabsSetting)
      this.multiTabsSetting = multiTabsSetting
    },
    // 更新菜单设置
    async setMenuSetting(menuSetting: ImenuSetting) {
      Storage.set('APP-MENUSETTING', menuSetting)
      this.menuSetting = menuSetting
    },
    // 更新面包屑设置
    async setCrumbsSetting(crumbsSetting: IcrumbsSetting) {
      Storage.set('APP-CRUMBSSETTING', crumbsSetting)
      this.crumbsSetting = crumbsSetting
    },
    // 更新尺寸
    async setSize(size: string) {
      Storage.set('APP-SIZE', size)
      this.size = size
      const temp = sizeMap.filter((item) => item.value === size)
      document.documentElement.style.setProperty('font-size', temp[0]?.size ?? '100px')
    },
    // 更新路由动画设置
    async setIsPageAnimate(isPageAnimate: boolean) {
      Storage.set('APP-ISPAGEANIMATE', isPageAnimate)
      this.isPageAnimate = isPageAnimate
    },
    // 更新路由动画类型
    async setPageAnimateType(pageAnimateType: string) {
      Storage.set('APP-PAGEANIMATETYPE', pageAnimateType)
      this.pageAnimateType = pageAnimateType
    },
    // 更新左侧菜单收缩状态
    async setCollapsed(collapsed: boolean) {
      Storage.set('APP-COLLAPSED', collapsed)
      this.collapsed = collapsed
    },
  },
})
