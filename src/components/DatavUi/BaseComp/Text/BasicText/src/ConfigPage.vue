<template>
  <div class="setting-panel-wrap">
    <d-field tooltip="支持从数据中获取标题内容，详见数据面板" label="标题内容">
      <n-input v-model="config.title" />
    </d-field>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { BasicText } from './BasicText'

const props = defineProps<{
  com: BasicText
}>()

const config = toRef(props.com, 'config')
</script>

<style scoped></style>
