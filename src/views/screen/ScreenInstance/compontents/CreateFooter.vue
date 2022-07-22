<template>
  <n-space justify="end">
    <div class="tool-item">
      <span class="label">参考线</span>
      <n-switch v-model:value="referenceLine" />
    </div>
    <div class="tool-item">
      <span class="label">指示线</span>
      <n-switch v-model:value="indicatorLine" />
    </div>
    <div class="tool-item">
      <span class="label" style="margin-right: 15px">缩放比例</span>
      <n-slider v-model:value="scale" class="screen-create-scale" :min="20" :max="200" :step="10" />
      <span class="tool-btn" @click="autoCanvasScale">自适应</span>
      <span class="tool-btn" @click="scale = 100">实际大小</span>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const referenceLine = ref(true)
const indicatorLine = ref(true)
const scale = ref(100)

const autoCanvasScale = () => {
  console.log('自适应')
}
</script>

<style lang="scss" scoped></style>
