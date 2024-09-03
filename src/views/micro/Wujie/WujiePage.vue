<!--
 * @Author: maoxuena
 * @Date: 2024-09-03 11:17:55
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-09-03 13:21:49
 * @FilePath: \vue3-vite-ts-pinia\src\views\micro\Wujie\WujiePage.vue
 * @Description:
-->

<template>
  <div class="full-container full">
    <!-- alive：保活模式（子应用的 alive 设置为true时进入保活模式，内部的数据和路由的状态不会随着页面切换而丢失） -->
    <!-- sync： 路由同步（路由同步会将子应用路径的path+query+hash通过window.encodeURIComponent编码后挂载在主应用url的查询参数上，其中key值为子应用的 name）-->
    <WujieVue
      width="100%"
      height="100%"
      name="wujieChild"
      url="https://ythcs.nbport.com.cn/ui/user/login"
      :alive="true"
      :sync="false"
      :before-load="beforeLoad"
      :before-mount="beforeMount"
      :after-mount="afterMount"
      :before-unmount="beforeUnmount"
      :after-unmount="afterUnmount"
      :activated="activated"
      :deactivated="deactivated"
      :load-error="loadError" />
  </div>
</template>

<script setup lang="ts">
const beforeLoad = () => {
  console.log('子应用开始加载静态资源前触发')
}
const beforeMount = () => {
  console.log('子应用渲染（调用window.__WUJIE_MOUNT）前触发')
}
const afterMount = () => {
  console.log('子应用渲染（调用window.__WUJIE_MOUNT）后触发')
}
const beforeUnmount = () => {
  console.log('子应用卸载（调用window.__WUJIE_UNMOUNT）前触发')
}
const afterUnmount = () => {
  console.log('子应用卸载（调用window.__WUJIE_UNMOUNT）后触发')
}
const activated = () => {
  console.log('子应用激活（调用window.__WUJIE_ACTIVATED）后触发，即子应用保活模式下，进入时触发')
}
const deactivated = () => {
  console.log('子应用失活（调用window.__WUJIE_DEACTIVATED）后触发 ，即子应用保活模式下，离开时触发')
}
const loadError = () => {
  console.log('子应用加载资源失败后触发')
}
</script>

<style scoped></style>
