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
      <path fill-rule="evenodd" fill="url(#linear)" :d="bg" />
      <!-- 左上三角 -->
      <path fill-rule="evenodd" fill="rgb(0, 229, 255)" :d="triangleLT" />
      <!-- 右上三角 -->
      <path fill-rule="evenodd" fill="rgb(0, 229, 255)" :d="triangleRT" />
      <!-- 边框 -->
      <path
        fill-rule="evenodd"
        stroke="rgb(0, 229, 255)"
        stroke-width="1px"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        opacity="0.2"
        fill="none"
        :d="border" />
      <!-- 上左 -->
      <path fill-rule="evenodd" fill="rgb(0, 229, 255)" :d="headerL" />
      <!-- 上右 -->
      <path fill-rule="evenodd" fill="rgb(0, 229, 255)" :d="headerR" />
      <!-- 上中 -->
      <path fill-rule="evenodd" fill="rgb(0, 229, 255)" :d="headerC" />
      <!-- 左侧 -->
      <path fill-rule="evenodd" fill="rgb(0, 229, 255)" :d="sideL" />
      <!-- 右侧 -->
      <path fill-rule="evenodd" fill="rgb(0, 229, 255)" :d="sideR" />
      <!-- 右下点 -->
      <circle
        :cx="circleRB.cx"
        :cy="circleRB.cy"
        :r="state.radius * state.scale"
        stroke-width="0"
        fill="rgb(0, 229, 255)" />
      <!-- 左下点 -->
      <circle
        :cx="circleLB.cx"
        :cy="circleLB.cy"
        :r="state.radius * state.scale"
        stroke-width="0"
        fill="rgb(0, 229, 255)" />
    </svg>
    <div class="svg-border-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
const state = reactive({
  width: 420,
  height: 144,
  margin: [0.5, 0.5, 0.5, 2], // left top right bottom
  radius: 4, // 左下、右下圆半径
  triangle: 7, // 左上、右上三角直角边
  header: {
    // 上方横条尺寸
    height: 9,
    empty: 0.3, // 两侧空 width*header.empty
    sideLRX: 6, // 左右两侧横条左右x距离
    sideTBX: 7, // 左右两侧横条上下x距离
  },
  side: {
    // 侧边竖条尺寸
    width: 5,
    height: 53,
    top: 49,
  },
  scale: 1,
})
const svgBorder = ref(null)

const left = computed(() => {
  return state.margin[0]
})
const top = computed(() => {
  return state.margin[1]
})
const right = computed(() => {
  return state.width - state.margin[2]
})
const bottom = computed(() => {
  return state.height - state.margin[3]
})

const bg = computed(() => {
  return `M${left.value},${top.value}               
          L${state.width * state.header.empty * state.scale},${top.value} 
          L${state.width * state.header.empty * state.scale + state.header.height * state.scale}, ${
    top.value + state.header.height * state.scale
  } 
          L${
            state.width * (1 - state.header.empty * state.scale) - state.header.height * state.scale
          }, ${top.value + state.header.height * state.scale} 
          L${state.width * (1 - state.header.empty * state.scale)},${top.value} 
          L${right.value},${top.value} 
          L${right.value},${bottom.value} 
          L${left.value},${bottom.value} 
          L${left.value},${top.value} Z`
})

const border = computed(() => {
  const lineStart = 0.16
  const emptyStart = 0.14
  const triangleEmpty = 4
  return `M${state.width * lineStart * state.scale},${top.value}
          L${state.width * state.header.empty * state.scale},${top.value} 
          L${state.width * state.header.empty * state.scale + state.header.sideLRX * state.scale},${
    state.header.height * state.scale - top.value
  } 
          L${
            state.width * (1 - state.header.empty * state.scale) -
            state.header.sideLRX * state.scale
          },${state.header.height * state.scale - top.value} 
          L${state.width * (1 - state.header.empty * state.scale)},${top.value} 
          L${state.width * (1 - lineStart * state.scale)},${top.value}
          M${state.width * (1 - emptyStart * state.scale)},${top.value}
          L${right.value - state.triangle * state.scale - triangleEmpty * state.scale},${top.value} 
          L${right.value},${top.value + state.triangle * state.scale + triangleEmpty * state.scale} 
          L${right.value},${bottom.value} 
          L${left.value},${bottom.value} 
          L${left.value},${top.value + state.triangle * state.scale + triangleEmpty * state.scale}
          L${left.value + state.triangle * state.scale + triangleEmpty * state.scale},${top.value}
          L${state.width * emptyStart * state.scale},${top.value}`
})

const headerL = computed(() => {
  return `M${state.width * state.header.empty * state.scale},${top.value}
          L${state.width * state.header.empty * state.scale + state.header.sideLRX * state.scale},${
    top.value
  } 
          L${
            state.width * state.header.empty * state.scale +
            state.header.sideTBX * state.scale +
            state.header.sideLRX * state.scale
          },${top.value + state.header.height * state.scale} 
          L${state.width * state.header.empty * state.scale + state.header.sideTBX * state.scale},${
    top.value + state.header.height * state.scale
  } 
          L${state.width * state.header.empty * state.scale},${top.value} Z`
})

const headerR = computed(() => {
  return `M${state.width * (1 - state.header.empty * state.scale)},${top.value}
          L${
            state.width * (1 - state.header.empty * state.scale) -
            state.header.sideLRX * state.scale
          },${top.value} 
          L${
            state.width * (1 - state.header.empty * state.scale) -
            state.header.sideTBX * state.scale -
            state.header.sideLRX * state.scale
          },${top.value + state.header.height * state.scale} 
          L${
            state.width * (1 - state.header.empty * state.scale) -
            state.header.sideTBX * state.scale
          },${top.value + state.header.height * state.scale} 
          L${state.width * (1 - state.header.empty * state.scale)},${top.value} Z`
})

const headerC = computed(() => {
  return `M${
    state.width * state.header.empty * state.scale + state.header.sideLRX * state.scale * 2
  },${top.value}
        L${
          state.width * (1 - state.header.empty * state.scale) -
          state.header.sideLRX * state.scale * 2
        },${top.value} 
        L${
          state.width * (1 - state.header.empty * state.scale) -
          state.header.sideLRX * state.scale * 2 -
          state.header.sideTBX * state.scale
        },${state.header.height * state.scale - top.value} 
        L${
          state.width * state.header.empty * state.scale +
          state.header.sideLRX * state.scale * 2 +
          state.header.sideTBX * state.scale
        },${state.header.height * state.scale - top.value} 
        L${
          state.width * state.header.empty * state.scale + state.header.sideLRX * state.scale * 2
        },${top.value} Z`
})

const sideL = computed(() => {
  return `M${left.value},${top.value + state.side.top * state.scale} 
          L${left.value + state.side.width * state.scale},${
    top.value + state.side.top * state.scale + state.side.width * state.scale
  } 
          L${left.value + state.side.width * state.scale},${
    top.value +
    state.side.top * state.scale +
    state.side.width * state.scale +
    state.side.height * state.scale
  } 
          L${left.value},${
    top.value + state.side.top * state.scale + state.side.height * state.scale
  } 
          L${left.value},${top.value + state.side.top * state.scale} Z`
})

const sideR = computed(() => {
  return `M${right.value - 1},${top.value + state.side.top * state.scale} 
          L${right.value - state.side.width * state.scale - 1},${
    top.value + state.side.top * state.scale + state.side.width * state.scale
  } 
          L${right.value - state.side.width * state.scale - 1},${
    top.value +
    state.side.top * state.scale +
    state.side.width * state.scale +
    state.side.height * state.scale
  } 
          L${right.value - 1},${
    top.value + state.side.top * state.scale + state.side.height * state.scale
  } 
          L${right.value - 1},${top.value + state.side.top * state.scale} Z`
})

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

const triangleLT = computed(() => {
  return `M${left.value},${top.value + state.triangle * state.scale} L${left.value},${top.value} L${
    left.value + state.triangle * state.scale
  },${top.value}`
})

const triangleRT = computed(() => {
  return `M${right.value},${top.value + state.triangle * state.scale} L${right.value},${
    top.value
  } L${right.value - state.triangle * state.scale},${top.value}`
})

const computedHeight = (width: Number, height: Number): void => {
  state.scale = state.width / width
  state.height = height * state.scale
}

onMounted(() => {
  nextTick(() => {
    const width = svgBorder.value.offsetWidth
    const height = svgBorder.value.offsetHeight
    computedHeight(width, height)
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
