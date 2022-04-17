<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#155BCD',
    primaryColorHover: '#84A9FF',
    primaryColorPressed: '#84A9FF',
  },
}
</script>

<style>
.n-config-provider {
  height: 100%;
}
</style>
