<template>
  <div>
    <div style="width: 300px; height: 200px">
      <svg-border>内容</svg-border>
    </div>
    <div style="width: 200px; height: 100px">
      <svg-border :type="2">内容</svg-border>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgBorder from '@/components/SvgBorder/index.vue'
</script>

<style scoped></style>
