<template>
  <n-space justify="end">
    <div class="tool-item">
      <div class="scale-input-wrap">
        <input v-model="inputScale" type="number" class="scale-input" @keydown.enter="changeScale(0)" />
        <span class="percent">%</span>
        <n-popover
          :width="58"
          placement="top-end"
          trigger="click"
          :show-arrow="false"
          raw
          :style="{
            '--n-color': 'var(--datav-component-bg)',
          }">
          <template #trigger>
            <span class="open-icon">
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
import { ref } from 'vue'
import { useScreenStore } from '@/store/modules/screen'

const screenStore = useScreenStore()

const scale = ref(100)
const inputScale = ref(200)
const scaleList = [
  { label: '200%', value: 200 },
  { label: '150%', value: 150 },
  { label: '100%', value: 100 },
  { label: '50%', value: 50 },
  { label: '自适应', value: -1 },
]

/**
 * 改变缩放比
 * @param { number } value 缩放比
 */
const changeScale = (value: number) => {
  console.log('改变缩放比', value)
}

const autoScale = () => {
  console.log('自适应')
}
</script>

<style lang="scss"></style>
