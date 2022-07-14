<template>
  <div class="login-container page-container flex-container c-c" :class="{ 'dark-bg': settingStore.darkTheme }">
    <div class="login-box flex-container c-c">
      <n-grid cols="6" item-responsive responsive="screen">
        <!-- m 以下：不显示，m 到 l：占据空间 3，l 以上：占据空间 4 -->
        <n-grid-item span="0 m:3 l:4">
          <div class="login-left flex-container c-c">
            <svg-icon class="login-illustration" name="illustration"></svg-icon>
          </div>
        </n-grid-item>
        <!-- m 以下：占据空间 6，m 到 l：占据空间 3，l 以上：占据空间 2 -->
        <n-grid-item span="6 m:3 l:2">
          <div class="login-right flex-container c-c">
            <div class="login-form">
              <div class="login-title flex-container c-c">
                <svg-icon name="logo"></svg-icon>
                <p class="logo-text">Snow-Admin</p>
              </div>
              <LoginForm></LoginForm>
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSettingStore } from '@/store/modules/setting'

import LoginForm from './components/LoginForm.vue'

// 系统配置

const settingStore = useSettingStore()
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
