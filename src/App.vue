<template>
  <n-config-provider :theme="getDarkTheme" :theme-overrides="themeOverrides">
    <AppProvider>
      <router-view></router-view>
    </AppProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NConfigProvider, GlobalThemeOverrides, darkTheme } from 'naive-ui'
import AppProvider from '@/components/AppProvider/index.vue'
import { useSettingStore } from './store/modules/setting'
import { lighten } from '@/utils/theme'

// 系统配置
const settingStore = useSettingStore()
// 具体主题变量
const themeOverrides = computed((): GlobalThemeOverrides => {
  const appTheme = settingStore.appTheme
  const lightenStr = lighten(settingStore.appTheme, 12)
  const darkStr = lighten(settingStore.appTheme, -5)
  return {
    common: {
      primaryColor: appTheme,
      primaryColorHover: lightenStr,
      primaryColorPressed: darkStr,
      primaryColorSuppl: lightenStr,
    },
    LoadingBar: {
      colorLoading: appTheme,
    },
  }
})
// 获取主题
const getDarkTheme = computed(() => (settingStore.darkTheme ? darkTheme : undefined))
</script>

<style>
.n-config-provider {
  height: 100%;
}
</style>
