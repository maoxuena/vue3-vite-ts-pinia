import { watch } from 'vue'
import { useSettingStore } from '@/store/modules/setting'
import i18n from '@/i18n/index'
export function generateTitle(title: string) {
  return i18n.global.t('route.' + title)
}

/**
 *
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs: any[]) {
  const settingStore = useSettingStore()
  watch(
    () => settingStore.language,
    () => {
      cbs.forEach((cb) => cb(settingStore.language))
    }
  )
}
