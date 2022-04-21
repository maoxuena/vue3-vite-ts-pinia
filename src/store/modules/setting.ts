import { defineStore } from 'pinia'
import setting from '@/config/setting'

const { darkTheme, appTheme, appThemeList } = setting

interface SettingState {
  // 深色主题
  darkTheme: boolean
  // 系统主题色
  appTheme: string
  // 系统内置主题色列表
  appThemeList: string[]
}

export const useSettingStore = defineStore({
  id: 'setting',
  state: (): SettingState => ({
    darkTheme,
    appTheme,
    appThemeList,
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
  },
  actions: {
    setDarkTheme(darkTheme: boolean) {
      this.darkTheme = darkTheme
    },
    async setAppTheme(appTheme: string) {
      this.appTheme = appTheme
    },
    setAppThemeList(appThemeList: string[]) {
      this.appThemeList = appThemeList
    },
  },
})
