<template>
  <div class="logo flex-container se-c">
    <img src="@/assets/logo.png" alt="" />
    <h2 v-if="!collapsed" class="title">Snow Admin</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ collapsed: Boolean }>()
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
