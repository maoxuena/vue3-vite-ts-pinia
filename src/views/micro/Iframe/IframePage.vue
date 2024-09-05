<!--
 * @Author: maoxuena
 * @Date: 2024-09-03 10:05:22
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-09-04 10:52:00
 * @FilePath: \vue3-vite-ts-pinia\src\views\micro\Iframe\IframePage.vue
 * @Description:
-->

<template>
  <div class="full-container full">
    <!-- 弹窗，缓存 -->
    <iframe :src="url" style="width: 100%; height: 100%"></iframe>
  </div>
</template>

<script setup lang="ts">
// const url = 'https://ythcs.nbport.com.cn/ui/user/login'
const url = 'http://localhost:8080/#/system/user'
</script>

<style scoped></style>
