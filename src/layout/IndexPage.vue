<template>
  <n-layout class="page-container" has-sider>
    <n-layout-sider>
      <Logo></Logo>
      <AsideMenu></AsideMenu>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view />
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import Logo from './components/Logo/IndexPage.vue'
import AsideMenu from './components/AsideMenu/IndexPage.vue'
</script>

<style lang="scss" scoped></style>
