<template>
  <div class="ruler-wrap">
    <!-- 水平方向 -->
    <div ref="hRulerRef" class="ruler h-container" :style="`transform: translateX(-${hScroll}px);`"></div>
    <!-- 垂直方向 -->
    <div ref="vRulerRef" class="ruler v-container" :style="`transform: rotate(90deg) translateX(-${vScroll}px);`"></div>
    <div title="切换参考线" class="ruler-corner" @click="toggleGuides">
      <svg-icon v-if="visible" name="line-show" />
      <svg-icon v-else name="line-hide" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useScreenStore } from '@/store/modules/screen'
import { RulerBuilder } from './index'

// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  hScroll: number
  vScroll: number
}
const props = withDefaults(defineProps<ParentProps>(), {
  hScroll: 0,
  vScroll: 0,
})

const screenStore = useScreenStore()

const hRulerRef = ref<any>(null)
const vRulerRef = ref<any>(null)
const hRuler = ref<RulerBuilder | null>(null)
const vRuler = ref<RulerBuilder | null>(null)
const visible = ref(true)

const cw = document.documentElement.clientWidth

watchEffect(() => {
  if (hRulerRef.value && vRulerRef.value) {
    const { canvas, guideLine } = screenStore
    const hWidth = Math.max(canvas.width, cw)
    if (hRuler.value) {
      hRuler.value.setSize(hWidth, 20, canvas.scale)
    } else {
      hRuler.value = new RulerBuilder(hRulerRef.value, {
        direction: 'TB',
        width: hWidth,
        scale: canvas.scale,
        coorChange: (action, nCoor, oCoor) => {
          if (action === 'add') {
            guideLine.h.push(nCoor)
          } else if (action === 'update' && nCoor !== oCoor) {
            guideLine.h = guideLine.h.filter((m) => m !== oCoor)
            guideLine.h.push(nCoor)
          } else if (action === 'delete') {
            guideLine.h = guideLine.h.filter((m) => m !== nCoor)
          }
        },
      })
      hRuler.value.setGuideLines(guideLine.h)
    }
    if (vRuler.value) {
      vRuler.value.setSize(canvas.height, 20, canvas.scale)
    } else {
      vRuler.value = new RulerBuilder(vRulerRef.value, {
        direction: 'LR',
        width: canvas.height,
        scale: canvas.scale,
        coorChange: (action, nCoor, oCoor) => {
          if (action === 'add') {
            guideLine.v.push(nCoor)
          } else if (action === 'update' && nCoor !== oCoor) {
            guideLine.v = guideLine.v.filter((m) => m !== oCoor)
            guideLine.v.push(nCoor)
          } else if (action === 'delete') {
            guideLine.v = guideLine.v.filter((m) => m !== nCoor)
          }
        },
      })
      vRuler.value.setGuideLines(guideLine.v)
    }
  }
})

/**
 * @description 切换参考线显示隐藏
 */
const toggleGuides = () => {
  if (hRuler.value && vRuler.value) {
    visible.value = !visible.value
    hRuler.value.toggleGuide(visible.value)
    vRuler.value.toggleGuide(visible.value)
  }
}
</script>

<style lang="scss">
$line-border-1: 1px solid rgb(0 173 255 / 84%);
$line-border-2: 1px dashed rgb(0 173 255 / 84%);
$line-border-3: 1px solid rgb(161 174 179 / 80%);
.ruler-wrap {
  position: fixed;
  z-index: 1;

  .ruler {
    position: absolute;
    height: 20px;
  }

  .ruler-line {
    position: absolute;

    .line-action {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      color: #fff;
      padding: 0 4px;
      border-radius: 1px;
      box-shadow: 0 0 5px -3px #000;
      background: rgb(64 116 180 / 100%);

      .line-value {
        pointer-events: none;
      }
    }
  }

  .ruler-indicator {
    position: absolute;
    pointer-events: none;

    .indicator-value {
      position: absolute;
      background: rgb(64 116 180 / 100%);
      color: #fff;
      border-radius: 1px;
      padding: 0 4px;
    }
  }

  .h-container {
    left: 20px;
    cursor: ew-resize;
    transform: translateX(0);

    .ruler-line {
      top: 0;
      height: 100vh;
      padding-left: 5px;
      border-left: $line-border-1;

      .line-action {
        top: 5px;
      }
    }

    .ruler-indicator {
      border-left: $line-border-2;
      top: 0;
      height: 100vw;

      .indicator-value {
        left: 10px;
        top: 5px;
      }
    }
  }

  .v-container {
    cursor: ns-resize;
    transform: rotate(90deg) translateX(0);
    transform-origin: 0 100% 0;

    .lines-wrapper {
      transform: rotate(-90deg);
      transform-origin: 0 100% 0;
    }

    .ruler-line {
      left: 3px;
      width: 100vw;
      border-top: $line-border-1;

      .line-action {
        top: 10px;
        left: 5px;
        transform: rotate(90deg);
      }
    }

    .ruler-indicator {
      border-bottom: $line-border-2;
      width: 100vw;
      bottom: 1px;
      transform: rotate(-90deg);
      transform-origin: 1px 100% 0;

      .indicator-value {
        transform-origin: 0 0;
        transform: rotate(90deg);
        top: 10px;
        left: 25px;
      }
    }
  }

  .ruler-corner {
    position: fixed;
    z-index: 999;
    display: flex;
    width: 20px;
    height: 20px;
    font-size: 16px;
    color: var(--datav-font-color);
    cursor: pointer;
    background: var(--datav-bg-color-light-2);
    border-right: $line-border-3;
    border-bottom: $line-border-3;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #fff;
    }
  }
}
</style>
