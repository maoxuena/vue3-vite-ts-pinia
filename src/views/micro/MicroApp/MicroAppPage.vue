<!--
 * @Author: maoxuena
 * @Date: 2024-09-02 09:40:59
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-09-03 11:04:07
 * @FilePath: \vue3-vite-ts-pinia\src\views\micro\MicroApp\MicroAppPage.vue
 * @Description:
-->
<template>
  <div class="full-container full">
    <!-- 弹窗 -->
    <!-- destroy：开启destroy，子应用在卸载后会清空缓存的静态资源和沙箱数据。默认：false -->
    <!-- keep-alive：开启keep-alive后，应用卸载时会进入缓存，而不是销毁它们，以便保留应用的状态和提升重复渲染的性能。默认：false。keep-alive的优先级小于destroy，当两者同时存在时，keep-alive将失效。 -->
    <!-- router-mode：search、native、native-scope、pure、state -->
    <micro-app name="childApp" url="https://ythcs.nbport.com.cn/ui/user/login" keep-alive router-mode="state"></micro-app>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
micro-app {
  height: 100%;
}
</style>
