<template>
  <n-space justify="end">
    <div class="footer-tool-bar">
      <div class="scale-input-wrap">
        <input v-model="inputScale" type="number" class="scale-input" @keydown.enter="changeScale(0)" />
        <span class="percent">%</span>
        <n-popover
          :width="58"
          placement="top-end"
          trigger="click"
          :show-arrow="false"
          :show="show"
          raw
          :style="{
            '--n-color': 'var(--datav-bg-color-light-6)',
          }">
          <template #trigger>
            <span class="open-icon" @click="show = !show">
              <svg-icon name="arrow-down" />
            </span>
          </template>
          <div class="scale-value-list">
            <div v-for="item in scaleList" :key="item.value" class="scale-value-item" @click="changeScale(item.value)">
              {{ item.label }}
            </div>
          </div>
        </n-popover>
      </div>
      <n-slider v-model:value="scale" class="scale-slider" :min="10" :max="200" :step="5" @update:value="changeScale" />
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useScreenStore } from '@/store/modules/screen'

const screenStore = useScreenStore()

const show = ref(false)
const scale = ref(20)
const inputScale = ref(20)
const scaleList = [
  { label: '200%', value: 200 },
  { label: '150%', value: 150 },
  { label: '100%', value: 100 },
  { label: '50%', value: 50 },
  { label: '自适应', value: -1 },
]

watch(
  () => screenStore.canvas.scale,
  (value) => {
    const val = parseInt((value * 100).toFixed(2))
    scale.value = val
    inputScale.value = val
  }
)

const getPanelOffset = () => ({
  offsetX: screenStore.getPanelOffsetX,
  offsetY: screenStore.getPanelOffsetY,
})

/**
 * 改变缩放比
 * @param { number } value 缩放比
 */
const changeScale = (value: number) => {
  show.value = false
  if (value === -1) {
    screenStore.autoScale(getPanelOffset)
  } else {
    const { offsetX, offsetY } = getPanelOffset()
    screenStore.setScale(value === 0 ? inputScale.value : value, offsetX, offsetY)
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
<style lang="scss">
.scale-value-list {
  font-size: 0.12rem;
  background: var(--datav-bg-color-light-5);
  border: var(--datav-border) !important;
  user-select: none;
  .scale-value-item {
    padding: 0.05rem 0;
    color: var(--datav-font-color);
    text-align: center;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: var(--primary-color-hover);
      background: var(--datav-bg-color);
    }

    &:not(:first-child) {
      border-top: var(--datav-border);
    }
  }
}
</style>
