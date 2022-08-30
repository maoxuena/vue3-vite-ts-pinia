<template>
  <div class="create-main">
    <n-scrollbar x-scrollable style="height: 100%" @scroll="handleScroll">
      <div id="screen-wrap" class="screen-wrap">
        <div class="screen-inner" :style="screenInnerStyle">
          <ruler-comp :h-scroll="hScroll" :v-scroll="vScroll"></ruler-comp>
          <div id="screen-panel" class="screen-panel" :style="screenPanelStyle"></div>
        </div>
      </div>
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CSSProperties } from 'vue'
import { storeToRefs } from 'pinia'
import { useScreenStore } from '@/store/modules/screen'
import RulerComp from './RulerComp/RulerComp.vue'

const screenStore = useScreenStore()

const { pageConfig, canvas } = storeToRefs(screenStore)

const screenInnerStyle = computed(() => {
  return {
    width: `${canvas.value.width}px`,
    height: `${canvas.value.height}px`,
  } as CSSProperties
})

const screenPanelStyle = computed(() => {
  return {
    position: 'absolute',
    width: `${pageConfig.value.width}px`,
    height: `${pageConfig.value.height}px`,
    transform: `scale(${canvas.value.scale}) translate(0px, 0px)`,
    backgroundColor: pageConfig.value.bgcolor,
    backgroundImage: `url(${pageConfig.value.bgimage})`,
  } as CSSProperties
})

const hScroll = ref(0)
const vScroll = ref(0)
const handleScroll = (e: Event) => {
  const target = e.target as HTMLInputElement
  hScroll.value = target.scrollLeft
  vScroll.value = target.scrollTop
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
