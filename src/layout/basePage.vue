<template>
  <n-layout class="page-container" has-sider>
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false">
      <AsideLogo :collapsed="collapsed"></AsideLogo>
      <AsideMenu></AsideMenu>
    </n-layout-sider>
    <n-layout>
      <n-layout-header class="layout-header" position="absolute" bordered>
        <PageHeader></PageHeader>
      </n-layout-header>
      <n-layout-content class="layout-content" content-style="padding: 0.24rem;">
        <router-view />
      </n-layout-content>
      <n-layout-footer class="layout-footer" bordered position="absolute"></n-layout-footer>
    </n-layout>
  </n-layout>
  <span class="settings-btn" @click="openSetting">
    <n-icon size="0.24rem">
      <SettingsOutline></SettingsOutline>
    </n-icon>
  </span>
  <!--项目配置-->
  <ProjectSetting ref="drawerSetting" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AsideLogo from './components/AsideLogo/AsideLogo.vue'
import AsideMenu from './components/AsideMenu/AsideMenu.vue'
import PageHeader from './components/PageHeader/PageHeader.vue'
import ProjectSetting from './components/ProjectSetting/ProjectSetting.vue'

// 菜单是否折叠
const collapsed = ref<Boolean>(false)

// 配置抽屉
const drawerSetting = ref(null)
// 打开设置抽屉
const openSetting = (): void => {
  const { openDrawer } = drawerSetting.value
  openDrawer()
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
