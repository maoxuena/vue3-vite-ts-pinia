<template>
  <div class="header-wrap">
    <div class="header-left">
      <tool-bar v-if="toolLeft.length > 0" :list="toolLeft"></tool-bar>
    </div>
    <div class="header-center">{{ screen.name }}</div>
    <div class="header-right">
      <tool-bar v-if="toolRight.length > 0" :list="toolRight"></tool-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { cloneDeep } from 'lodash-es'
import { useScreenStore } from '@/store/modules/screen'
import ToolBar from './ToolBar.vue'
import { tool } from './tool.ts'

const screenStore = useScreenStore()
const { screen } = storeToRefs(screenStore)

type ToolType = typeof tool[0]
const cloneTool: ToolType[] = cloneDeep(tool)

const toolLeft = computed(() => {
  const list: ToolType[] = cloneTool
  return list.filter((item) => item.type === 'panel')
})

const toolRight = computed(() => {
  const list: ToolType[] = cloneTool
  return list.filter((item) => item.type === 'publish')
})
</script>

<style lang="scss" scoped></style>
