<template>
  <div class="logo flex-container se-c">
    <img src="@/assets/logo.png" alt="" />
    <h2 v-if="!collapsed" class="title">Snow Admin</h2>
  </div>
</template>

<script setup lang="ts">
// 接收父组件参数（采用ts专有声明，无默认值）
defineProps<{ collapsed: Boolean }>()
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
