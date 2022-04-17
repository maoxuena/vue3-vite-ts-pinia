<template>
  <n-layout class="page-container" has-sider>
    <n-layout-sider bordered show-trigger collapse-mode="width">
      <Logo></Logo>
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
</template>

<script setup lang="ts">
import Logo from './components/Logo/IndexPage.vue'
import AsideMenu from './components/AsideMenu/IndexPage.vue'
import PageHeader from './components/PageHeader/IndexPage.vue'
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
