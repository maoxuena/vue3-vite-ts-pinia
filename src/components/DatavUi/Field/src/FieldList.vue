<template>
  <div class="field-item">
    <div class="field-label">{{ label }}</div>
    <div class="field-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
