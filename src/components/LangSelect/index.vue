<!-- 语言选择 -->
<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSetLanguage">
    <n-icon class="language" size="0.24rem">
      <Language></Language>
    </n-icon>
  </n-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMessage } from 'naive-ui'
import { useSettingStore } from '@/store/modules/setting'
import language from '@/config/language'
import useCurrentInstance from '@/hooks/useCurrentInstance'

const settingStore = useSettingStore()

// 获取当前语言
const lang = computed(() => settingStore.language)

// 获取下拉菜单数据
const options = computed(() => {
  const tempOptions: any[] = []
  Object.keys(language).forEach((key) => {
    tempOptions.push({
      label: language[key].label,
      key: key,
      disabled: lang.value === key,
    })
  })
  return tempOptions
})

const { proxy } = useCurrentInstance()
const message = useMessage()
// 切换语言的方法
const handleSetLanguage = async (key: string) => {
  // 切换 i18n 的 locale
  proxy.$i18n.locale = key
  // 修改 vuex 中保存的 language
  await settingStore.setLanguage(key)
  // 提示
  message.success(proxy.$t('toast.switchLangSuccess'))
  // 暂时不刷新语言无法切换
  window.location.reload()
}
</script>
<style lang="scss" scoped>
.language {
  margin-left: 0.1rem;
}
</style>
