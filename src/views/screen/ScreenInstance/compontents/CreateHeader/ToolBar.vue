<template>
  <div class="tool-wrap">
    <div v-for="(item, index) in list" :key="index" class="tool-item">
      <n-tooltip :delay="500" placement="bottom" class="screen-tip">
        <template #trigger>
          <i class="tool-icon">
            <svg-icon :name="item.icon"></svg-icon>
          </i>
        </template>
        {{ item.name }}
      </n-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
type ToolType = {
  name: string
  icon: string
  type: string
}

defineProps<{ list: ToolType[] }>()
</script>

<style scoped></style>
