<template>
  <div class="components-container" :class="containerClass" :style="containerStyle">
    <refer-line v-if="referLine.enable && com.selected" :attr="com.attr" :scale="scale" />
    <div :class="['components-scale', { hovered: com.hovered }]" :style="hideStyle">
      <div class="container-handler" :class="handlerClass" :style="handlerStyle">
        <div class="container-com" :style="comStyle">
          <slot></slot>
          <div class="container-wrapper-event-disable" :style="wrapperStyle"></div>
        </div>
        <template v-for="(v, k) in points" :key="k">
          <i v-if="v.rotateStyle" :class="`${v.name}-handler`" data-html2canvas-ignore>
            <span class="rotate-handler" :style="v.rotateStyle">
              <span class="control-point" :style="v.style"></span>
            </span>
          </i>
          <i v-else :class="`${v.name}-handler`" data-html2canvas-ignore>
            <span class="control-point" :style="v.style"></span>
          </i>
        </template>
        <div class="container-bg"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { useScreenStore } from '@/store/modules/screen'
import { Direction, getCursors } from './index'
import ReferLine from './ReferLine.vue'
interface DatavComponent {
  id: string
  type: string
  alias: string
  name: string
  locked: boolean
  parentId: number
  hided: boolean
  attr: {
    opacity: number
    x: number
    w: number
    y: number
    deg: number
    h: number
    filpV: boolean
    filpH: boolean
  }
  icon: string
  config: {
    title: string
    textStyle: {
      fontFamily: string
      fontSize: number
      color: string
      fontWeight: string
    }
    textAlign: string
    urlConfig: {
      url: string
      isBlank: boolean
    }
    writingMode: string
    letterSpacing: number
    ellipsis: boolean
    backgroundStyle: {
      show: boolean
      bgColor: string
      borderRadius: number
      borderColor: string
      borderStyle: string
      borderWidth: number
    }
  }
  children: any[]
  img: string
  apis: {
    source: {
      autoUpdate: number
      description: string
      fields: {
        title: {
          type: string
          path: string
          map: string
          description: string
          optional: boolean
        }
        url: {
          type: string
          path: string
          map: string
          description: string
          optional: boolean
        }
      }
      render: string
      useAutoUpdate: boolean
    }
  }
  apiData: {
    source: {
      id: string
      type: string
      comId: string
      config: {
        useFilter: boolean
        pageFilters: any[]
        data: string
      }
      pageFilters: any[]
    }
  }
  projectId: number
  events: any[]
  selected: boolean
  hovered: boolean
}

const props = defineProps<{
  com: DatavComponent
}>()

const screenStore = useScreenStore()
const referLine = computed(() => screenStore.referLine)
const scale = computed(() => screenStore.canvas.scale)

const containerClass = computed(() => ({
  selected: props.com.selected,
  hided: props.com.hided,
  locked: props.com.locked,
}))

const containerStyle = computed(() => ({
  top: 0,
  left: 0,
  width: `${props.com.attr.w}px`,
  height: `${props.com.attr.h}px`,
  transform: `translate(${props.com.attr.x}px, ${props.com.attr.y}px)`,
}))

const hideStyle = computed(() => ({
  display: props.com.hided ? 'none' : 'block',
}))

const handlerClass = computed(() => ({
  hided: !props.com.selected || props.com.locked,
}))

const handlerStyle = computed(() => ({
  cursor: 'move',
  transform: `rotate(${props.com.attr.deg}deg)`,
}))

const comStyle = computed(() => {
  const { hided, attr } = props.com
  const sf = screenStore.pageConfig.styleFilterParams
  let filter = ''
  if (sf.enable) {
    filter = `hue-rotate(${sf.hue}deg) contrast(${sf.contrast}%) opacity(${sf.opacity}%) saturate(${sf.saturate}%) brightness(${sf.brightness}%)`
  }
  return {
    display: hided ? 'none' : 'block',
    transform: `scaleX(${attr.filpH ? -1 : 1}) scaleY(${attr.filpV ? -1 : 1}) rotateZ(360deg)`,
    filter,
  }
})

const wrapperStyle = computed(() => ({
  width: `${props.com.attr.w}px`,
  height: `${props.com.attr.h}px`,
}))

const cursor = computed(() => getCursors(props.com.attr.deg))

const points = computed<{
  [k in Direction]: {
    name: string
    style: Partial<CSSProperties>
    rotateStyle?: Partial<CSSProperties>
  }
}>(() => {
  const transform = `scale(${1 / scale.value}, ${1 / scale.value})`
  return {
    t: {
      name: 'top',
      style: { cursor: cursor.value.t, transform },
    },
    rt: {
      name: 'top-right',
      style: { cursor: cursor.value.rt },
      rotateStyle: { 'transform-origin': '25% 75%', transform },
    },
    r: {
      name: 'right',
      style: { cursor: cursor.value.r, transform },
    },
    rb: {
      name: 'bottom-right',
      style: { cursor: cursor.value.rb },
      rotateStyle: { 'transform-origin': '25% 25%', transform },
    },
    b: {
      name: 'bottom',
      style: { cursor: cursor.value.b, transform },
    },
    lb: {
      name: 'bottom-left',
      style: { cursor: cursor.value.lb },
      rotateStyle: { 'transform-origin': '75% 25%', transform },
    },
    l: {
      name: 'left',
      style: { cursor: cursor.value.l, transform },
    },
    lt: {
      name: 'top-left',
      style: { cursor: cursor.value.lt },
      rotateStyle: { 'transform-origin': '75% 75%', transform },
    },
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
