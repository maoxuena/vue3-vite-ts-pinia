<template>
  <div class="full-container full">
    <!-- 弹窗，缓存 -->
    <iframe :src="url" style="width: 100%; height: 100%"></iframe>
  </div>
</template>

<script setup lang="ts">
// const url = 'https://ythcs.nbport.com.cn/ui/user/login'
const url = 'http://localhost:8080/#/article/ranking'
</script>

<style scoped></style>
