<template>
  <div class="header-wrap">
    <div class="header-left">
      <div class="tool-wrap">
        <div class="tool-item" :class="{ active: panel.left === '1' }" @click="changeLeftPanel">
          <n-tooltip :delay="500" placement="bottom" class="screen-tip">
            <template #trigger>
              <i class="tool-icon">
                <svg-icon name="left-panel"></svg-icon>
              </i>
            </template>
            左侧面板
          </n-tooltip>
        </div>
        <div class="tool-item" :class="{ active: panel.right === '1' }" @click="changeRightPanel">
          <n-tooltip :delay="500" placement="bottom" class="screen-tip">
            <template #trigger>
              <i class="tool-icon">
                <svg-icon name="right-panel"></svg-icon>
              </i>
            </template>
            右侧面板
          </n-tooltip>
        </div>
      </div>
    </div>
    <div class="header-center">{{ screen.name }}</div>
    <div class="header-right"></div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useScreenStore } from '@/store/modules/screen'

const screenStore = useScreenStore()
const { screen, panel } = storeToRefs(screenStore)

const changeLeftPanel = () => {
  screenStore.setEditorOption({ panel: { left: panel.value.left === '1' ? '0' : '1' } })
}
const changeRightPanel = () => {
  screenStore.setEditorOption({ panel: { right: panel.value.right === '1' ? '0' : '1' } })
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
