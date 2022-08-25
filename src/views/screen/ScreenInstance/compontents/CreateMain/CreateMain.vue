<template>
  <div class="create-main">
    <div id="screen-wrap" class="screen-wrap">
      <ruler-comp></ruler-comp>
      <div id="screen-panel" class="screen-panel" :style="screenPanelStyle"></div>
    </div>
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

const screenPanelStyle = computed(() => {
  return {
    position: 'absolute',
    width: `${pageConfig.value.width}px`,
    height: `${pageConfig.value.height}px`,
    transform: `scale(${canvas.value.scale}) translate(0px, 0px)`,
    backgroundColor: pageConfig.value.bgcolor,
  } as CSSProperties
})
</script>

<style lang="scss" scoped>
.create-main {
  position: relative;
  display: flex;
  height: 100%;
  padding: 0;
  user-select: none;
  flex-basis: auto;
  overflow: auto;
  background: url('@/assets/images/screen/bg-canvas.png');
}
.screen-wrap {
  position: relative;
  width: 100%;
  height: calc(100% - 32px);
  overflow: auto;

  .screen-panel {
    top: 60px;
    left: 60px;
    background-position: center, right bottom;
    background-repeat: no-repeat, no-repeat;
    background-size: cover, contain;
    box-shadow: rgb(0 0 0 / 50%) 0 0 30px 0;
    transition: 0.2s all ease-in-out;
    transform-origin: 0 0;
  }
}
</style>
