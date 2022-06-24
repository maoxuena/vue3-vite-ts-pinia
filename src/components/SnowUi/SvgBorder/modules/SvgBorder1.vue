<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="`0 0 ${state.width} ${state.height}`">
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
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, Ref, ref, watch } from 'vue'
// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  width?: number
  height?: number
}
const props = withDefaults(defineProps<ParentProps>(), {
  width: 400,
  height: 300,
})

watch(
  () => [props.width, props.height],
  ([newWidth, newHeight], [oldWidth, oldHeight]) => {
    computedHeight(newWidth, newHeight)
  }
)

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

// 顶部左侧横条最左侧点x坐标（即顶部左右两侧的空余宽度）
const topEmptyWidth = computed(() => {
  return state.width * state.header.empty
})

// 顶部左右两侧横条宽度
const topLRWidth = computed(() => {
  return state.header.sideLRX * state.scale
})

// 顶部左右两侧横条高度
const topLRHeight = computed(() => {
  return state.header.sideTBX * state.scale
})

// 顶部横条高度
const topLineHeight = computed(() => {
  return state.header.height * state.scale
})

// 两侧竖条顶部最高点距离顶部的距离（即Y坐标值）
const sidesTopY = computed(() => {
  return top.value + state.height * state.side.top
})

// 两侧竖条底部最高点距离顶部的距离（即Y坐标值）
const sidesBottomY = computed(() => {
  return top.value + state.height * (state.side.top + state.side.height)
})

// 背景
const bg = computed(() => {
  const empty = 3
  return `M${left.value},${top.value + (state.triangle + empty) * state.scale}
          L${left.value + (state.triangle + empty) * state.scale},${top.value}
          L${topEmptyWidth.value},${top.value} 
          L${topEmptyWidth.value + topLineHeight.value}, ${top.value + topLineHeight.value} 
          L${state.width - topEmptyWidth.value - topLineHeight.value}, ${top.value + topLineHeight.value} 
          L${state.width - topEmptyWidth.value},${top.value} 
          L${right.value - (state.triangle + empty) * state.scale},${top.value}
          L${right.value},${top.value + (state.triangle + empty) * state.scale} 
          L${right.value},${bottom.value} 
          L${left.value},${bottom.value} 
          L${left.value},${top.value} Z`
})

// 顶部
const headerL = computed(() => {
  return `M${topEmptyWidth.value},${top.value}
          L${topEmptyWidth.value + topLRWidth.value},${top.value} 
          L${topEmptyWidth.value + topLRHeight.value + topLRWidth.value},${top.value + topLineHeight.value} 
          L${topEmptyWidth.value + topLRHeight.value},${top.value + topLineHeight.value} 
          L${topEmptyWidth.value},${top.value} Z`
})
const headerR = computed(() => {
  return `M${state.width - topEmptyWidth.value},${top.value}
          L${state.width - topEmptyWidth.value - topLRWidth.value},${top.value} 
          L${state.width - topEmptyWidth.value - topLRHeight.value - topLRWidth.value},${top.value + topLineHeight.value} 
          L${state.width - topEmptyWidth.value - topLRHeight.value},${top.value + topLineHeight.value} 
          L${state.width - topEmptyWidth.value},${top.value} Z`
})
const headerC = computed(() => {
  return `M${topEmptyWidth.value + topLRWidth.value * 2},${top.value}
          L${state.width - topEmptyWidth.value - topLRWidth.value * 2},${top.value} 
          L${state.width - topEmptyWidth.value - topLRWidth.value * 2 - topLRHeight.value},${top.value + topLineHeight.value} 
          L${topEmptyWidth.value + topLRWidth.value * 2 + topLRHeight.value},${top.value + topLineHeight.value} 
          L${topEmptyWidth.value + topLRWidth.value * 2},${top.value} Z`
})
// 左右两侧竖条
const sideL = computed(() => {
  return `M${left.value},${sidesTopY.value} 
          L${left.value + state.side.width * state.scale},${sidesTopY.value + state.side.width * state.scale} 
          L${left.value + state.side.width * state.scale},${sidesBottomY.value + state.side.width * state.scale} 
          L${left.value},${sidesBottomY.value} 
          L${left.value},${sidesTopY.value} Z`
})
const sideR = computed(() => {
  return `M${right.value},${sidesTopY.value} 
          L${right.value - state.side.width * state.scale},${sidesTopY.value + state.side.width * state.scale}
          L${right.value - state.side.width * state.scale},${sidesBottomY.value + state.side.width * state.scale} 
          L${right.value},${sidesBottomY.value}
          L${right.value},${sidesTopY.value} Z`
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
  computedHeight(props.width, props.height)
})
</script>

<style scoped></style>
