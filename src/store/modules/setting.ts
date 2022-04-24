import { defineStore } from 'pinia'
import { createStorage, storage } from '@/utils/storage'
import setting from '@/config/setting'

const { darkTheme, appTheme, appThemeList, language } = setting

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
}

export const useSettingStore = defineStore({
  id: 'setting',
  state: (): SettingState => ({
    darkTheme: Storage.get('DARK-THEME', darkTheme),
    appTheme: Storage.get('APP-THEME', appTheme),
    appThemeList,
    language: Storage.get('APP-LANGUAGE', language),
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
  },
})
