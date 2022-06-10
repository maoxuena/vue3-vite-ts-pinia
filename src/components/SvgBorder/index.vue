<!-- SVG 边框 -->
<template>
  <div ref="svgBorder" class="svg-border-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="svg-bg"
      :viewBox="`0 0 ${state.width} ${state.height}`">
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgb(0, 229, 255)" stop-opacity="0.18" />
          <stop offset="100%" stop-color="rgb(0, 229, 255)" stop-opacity="0.102" />
        </linearGradient>
      </defs>
      <!-- 背景 -->
      <path
        fill-rule="evenodd"
        stroke="rgb(0, 229, 255)"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-opacity="0.2"
        fill="url(#linear)"
        :d="bg" />
      <!-- 左上三角 -->
      <path fill-rule="evenodd" stroke-width="1" stroke="rgb(0, 229, 255)" fill="rgb(0, 229, 255)" :d="triangleLT" />
      <!-- 右上三角 -->
      <path fill-rule="evenodd" stroke-width="1" stroke="rgb(0, 229, 255)" fill="rgb(0, 229, 255)" :d="triangleRT" />
      <!-- 上左 -->
      <path fill-rule="evenodd" stroke-width="1" stroke="rgb(0, 229, 255)" fill="rgb(0, 229, 255)" :d="headerL" />
      <!-- 上右 -->
      <path fill-rule="evenodd" stroke-width="1" stroke="rgb(0, 229, 255)" fill="rgb(0, 229, 255)" :d="headerR" />
      <!-- 上中 -->
      <path fill-rule="evenodd" stroke-width="1" stroke="rgb(0, 229, 255)" fill="rgb(0, 229, 255)" :d="headerC" />
      <!-- 左侧 -->
      <path fill-rule="evenodd" stroke-width="1" stroke="rgb(0, 229, 255)" fill="rgb(0, 229, 255)" :d="sideL" />
      <!-- 右侧 -->
      <path fill-rule="evenodd" stroke-width="1" stroke="rgb(0, 229, 255)" fill="rgb(0, 229, 255)" :d="sideR" />
      <!-- 右下点 -->
      <circle :cx="circleRB.cx" :cy="circleRB.cy" :r="state.radius * state.scale" stroke-width="0" fill="rgb(0, 229, 255)" />
      <!-- 左下点 -->
      <circle :cx="circleLB.cx" :cy="circleLB.cy" :r="state.radius * state.scale" stroke-width="0" fill="rgb(0, 229, 255)" />
    </svg>
    <div class="svg-border-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, Ref, ref } from 'vue'
const state = reactive({
  width: 400,
  height: 100,
  margin: [1, 1, 2, 1], // top right bottom left
  radius: 4, // 左下、右下圆半径
  triangle: 8, // 左上、右上三角直角边
  header: {
    // 上方横条尺寸
    height: 8,
    empty: 0.3, // 两侧空 width*header.empty
    sideLRX: 8, // 左右两侧横条左右x距离
    sideTBX: 8, // 左右两侧横条上下x距离
  },
  side: {
    // 侧边竖条尺寸
    width: 5,
    height: 0.3,
    top: 0.3,
  },
  scale: 1,
})
const svgBorder: Ref<HTMLElement | null> = ref(null)

const left = computed(() => {
  return state.margin[3] * state.scale
})
const top = computed(() => {
  return state.margin[0] * state.scale
})
const right = computed(() => {
  return state.width - state.margin[1] * state.scale
})
const bottom = computed(() => {
  return state.height - state.margin[2] * state.scale
})

// 背景
const bg = computed(() => {
  const empty = 3
  return `M${left.value},${top.value + (state.triangle + empty) * state.scale}
          L${left.value + (state.triangle + empty) * state.scale},${top.value}
          L${state.width * state.header.empty},${top.value} 
          L${state.width * state.header.empty + state.header.height * state.scale}, ${top.value + state.header.height * state.scale} 
          L${state.width * (1 - state.header.empty) - state.header.height * state.scale}, ${top.value + state.header.height * state.scale} 
          L${state.width * (1 - state.header.empty)},${top.value} 
          L${right.value - (state.triangle + empty) * state.scale},${top.value}
          L${right.value},${top.value + (state.triangle + empty) * state.scale} 
          L${right.value},${bottom.value} 
          L${left.value},${bottom.value} 
          L${left.value},${top.value} Z`
})

// 顶部
const headerL = computed(() => {
  return `M${state.width * state.header.empty},${top.value}
          L${state.width * state.header.empty + state.header.sideLRX * state.scale},${top.value} 
          L${state.width * state.header.empty + state.header.sideTBX * state.scale + state.header.sideLRX * state.scale},${
    top.value + state.header.height * state.scale
  } 
          L${state.width * state.header.empty + state.header.sideTBX * state.scale},${top.value + state.header.height * state.scale} 
          L${state.width * state.header.empty},${top.value} Z`
})
const headerR = computed(() => {
  return `M${state.width * (1 - state.header.empty)},${top.value}
          L${state.width * (1 - state.header.empty) - state.header.sideLRX * state.scale},${top.value} 
          L${state.width * (1 - state.header.empty) - state.header.sideTBX * state.scale - state.header.sideLRX * state.scale},${
    top.value + state.header.height * state.scale
  } 
          L${state.width * (1 - state.header.empty) - state.header.sideTBX * state.scale},${top.value + state.header.height * state.scale} 
          L${state.width * (1 - state.header.empty)},${top.value} Z`
})
const headerC = computed(() => {
  return `M${state.width * state.header.empty + state.header.sideLRX * state.scale * 2},${top.value}
        L${state.width * (1 - state.header.empty) - state.header.sideLRX * state.scale * 2},${top.value} 
        L${state.width * (1 - state.header.empty) - state.header.sideLRX * state.scale * 2 - state.header.sideTBX * state.scale},${
    top.value + state.header.height * state.scale
  } 
        L${state.width * state.header.empty + state.header.sideLRX * state.scale * 2 + state.header.sideTBX * state.scale},${
    top.value + state.header.height * state.scale
  } 
        L${state.width * state.header.empty + state.header.sideLRX * state.scale * 2},${top.value} Z`
})
// 左右两侧竖条
const sideL = computed(() => {
  return `M${left.value},${top.value + state.height * state.side.top} 
          L${left.value + state.side.width * state.scale},${top.value + state.height * state.side.top + state.side.width * state.scale} 
          L${left.value + state.side.width * state.scale},${
    top.value + state.height * (state.side.top + state.side.height) + state.side.width * state.scale
  } 
          L${left.value},${top.value + state.height * (state.side.top + state.side.height)} 
          L${left.value},${top.value + state.height * state.side.top} Z`
})
const sideR = computed(() => {
  return `M${right.value},${top.value + state.height * state.side.top} 
          L${right.value - state.side.width * state.scale},${top.value + state.height * state.side.top + state.side.width * state.scale}
          L${right.value - state.side.width * state.scale},${
    top.value + state.height * (state.side.top + state.side.height) + state.side.width * state.scale
  } 
          L${right.value},${top.value + state.height * (state.side.top + state.side.height)}
          L${right.value},${top.value + state.height * state.side.top} Z`
})
// 圆
const circleLB = computed(() => {
  return {
    cx: state.radius * state.scale,
    cy: state.height - state.radius * state.scale,
  }
})
const circleRB = computed(() => {
  return {
    cx: state.width - state.radius * state.scale,
    cy: state.height - state.radius * state.scale,
  }
})
// 三角形
const triangleLT = computed(() => {
  return `M${left.value},${top.value + state.triangle * state.scale} 
          L${left.value},${top.value} 
          L${left.value + state.triangle * state.scale},${top.value}`
})
const triangleRT = computed(() => {
  return `M${right.value},${top.value + state.triangle * state.scale} 
          L${right.value},${top.value}
          L${right.value - state.triangle * state.scale},${top.value}`
})

const computedHeight = (width: number, height: number): void => {
  state.scale = state.width / width
  state.height = height * state.scale
}

onMounted(() => {
  nextTick(() => {
    if (svgBorder.value) {
      const width = svgBorder.value.offsetWidth
      const height = svgBorder.value.offsetHeight
      computedHeight(width, height)
    }
  })
})
</script>

<style lang="scss" scoped>
.svg-border-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  .svg-bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .svg-border-content {
    position: relative;
    z-index: 9;
    height: 100%;
  }
}
</style>
