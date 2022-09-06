<template>
  <div class="create-main">
    <n-scrollbar x-scrollable style="height: 100%" @scroll="handleScroll">
      <div id="screen-wrap" class="screen-wrap" @mousedown.stop="cancelSelectCom">
        <div class="screen-inner" :style="screenInnerStyle">
          <ruler-comp :h-scroll="hScroll" :v-scroll="vScroll"></ruler-comp>
          <div id="screen-panel" class="screen-panel" :style="screenPanelStyle" @dragover="dragOver" @drop="dropToAddCom">
            <components-container v-for="com in coms" :key="com.id" :com="com">
              <component
                :is="com.name"
                :com="com"
                :style="{
                  transform: 'translateZ(0px)',
                  opacity: com.attr.opacity,
                }" />
            </components-container>
          </div>
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
import { createComponent } from '@/components/DatavUi/datav'
import RulerComp from './RulerComp/RulerComp.vue'
import ComponentsContainer from '../ComponentsContainer/ComponentsContainer.vue'

const screenStore = useScreenStore()

const { pageConfig, canvas, coms } = storeToRefs(screenStore)

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

const dragOver = (ev: DragEvent) => {
  ev.preventDefault()
  ev.stopPropagation()
  ev.dataTransfer.dropEffect = 'copy'
}

const dropToAddCom = async (event: any) => {
  event.preventDefault()
  try {
    const name = event.dataTransfer.getData('text')
    if (name) {
      screenStore.addLoading()
      const com = await createComponent(name)
      const { scale } = canvas.value
      const offsetX = (event.clientX - screenStore.getPanelOffsetLeft) / scale
      const offsetY = (event.clientY - screenStore.getPanelOffsetTop) / scale
      com.attr.x = Math.round(offsetX - com.attr.width / 2)
      com.attr.y = Math.round(offsetY - com.attr.height / 2)
      await screenStore.addCom(com)
      screenStore.selectCom(com.id)
      screenStore.removeLoading()
    }
  } catch {
    // TODO
  }
}

const cancelSelectCom = () => {
  screenStore.selectCom('')
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
