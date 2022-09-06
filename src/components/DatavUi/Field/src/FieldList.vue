<template>
  <div class="field-item">
    <div class="field-label">
      <template v-if="tooltip">
        <n-tooltip placement="top" class="screen-tip">
          <template #trigger>
            <label class="field-title has-description" :title="label">
              {{ label }}
            </label>
          </template>
          <span v-html="tooltip"></span>
        </n-tooltip>
      </template>
      <label v-else class="field-title" :title="label">
        {{ label }}
      </label>
    </div>
    <div class="field-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  tooltip?: string
}>()
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
