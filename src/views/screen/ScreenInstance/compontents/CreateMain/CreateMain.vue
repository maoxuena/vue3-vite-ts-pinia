<template>
  <div class="create-main">
    <n-scrollbar x-scrollable style="height: 100%" @scroll="handleScroll">
      <div id="screen-wrap" class="screen-wrap">
        <div class="screen-inner" :style="screenInnerStyle">
          <ruler-comp :h-scroll="hScroll" :v-scroll="vScroll"></ruler-comp>
          <div id="screen-panel" class="screen-panel" :style="screenPanelStyle">
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
import RulerComp from './RulerComp/RulerComp.vue'
import ComponentsContainer from '../ComponentsContainer/ComponentsContainer.vue'

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

const coms = [
  {
    id: '4C9FbF37-AbA5-C7f3-dB3C-67D61180CaDb',
    type: 'com',
    alias: '通用标题',
    name: 'NButton',
    locked: false,
    parentId: null,
    hided: false,
    attr: { opacity: 1, x: 472, w: 300, y: 332, deg: 0, h: 284, filpV: false, filpH: false },
    icon: 'v-icon-title',
    config: {
      title: '我是标题',
      textStyle: { fontFamily: 'Microsoft Yahei', fontSize: 24, color: '#fff', fontWeight: 'normal' },
      textAlign: 'center',
      urlConfig: { url: '', isBlank: false },
      writingMode: 'horizontal-tb',
      letterSpacing: 0,
      ellipsis: false,
      backgroundStyle: { show: false, bgColor: '#008bff', borderRadius: 15, borderColor: '#fff', borderStyle: 'solid', borderWidth: 1 },
    },
    children: null,
    img: '//files.pengxiaotian.com/com-thum/main-title-370-208.png',
    apis: {
      source: {
        autoUpdate: 1,
        description: '',
        fields: {
          title: { type: 'string', path: '', map: '', description: '标题值', optional: true },
          url: { type: 'string', path: '', map: '', description: '超链接', optional: true },
        },
        render: 'render',
        useAutoUpdate: false,
      },
    },
    apiData: {
      source: {
        id: '426ef5b1-24Eb-BBAe-A5c8-8117e56EB2c8',
        type: 'static',
        comId: 'EeBe2B9B-7741-62B9-94Ed-B1f432Cb067c',
        config: { useFilter: false, pageFilters: [], data: '{"title":"我是标题数据","url":""}' },
        pageFilters: [],
      },
    },
    projectId: 1,
    events: [],
    selected: true,
    hovered: true,
  },
]
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
