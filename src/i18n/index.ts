import { createI18n } from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'
import setting from '@/config/setting'
import { createStorage, storage } from '@/utils/storage'
const Storage = createStorage({ storage: localStorage })

/**
 * 返回当前 lang
 */
function getLanguage() {
  const language = Storage.get('APP-LANGUAGE', setting.language) // 默认中文
  return language
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages: {
    en,
    zh,
  },
})

export default i18n
