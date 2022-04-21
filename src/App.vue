<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <AppProvider>
      <router-view></router-view>
    </AppProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import AppProvider from '@/components/AppProvider/index.vue'
import { useSettingStore } from './store/modules/setting'
import { lighten } from '@/utils/theme'

// 系统配置
const settingStore = useSettingStore()

const themeOverrides = computed((): GlobalThemeOverrides => {
  const appTheme = settingStore.appTheme
  const lightenStr = lighten(settingStore.appTheme, 6)
  return {
    common: {
      primaryColor: appTheme,
      primaryColorHover: lightenStr,
      primaryColorPressed: lightenStr,
    },
    LoadingBar: {
      colorLoading: appTheme,
    },
  }
})
</script>

<style>
.n-config-provider {
  height: 100%;
}
</style>
