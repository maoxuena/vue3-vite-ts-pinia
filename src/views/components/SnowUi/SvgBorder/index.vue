<!-- SVG 边框1 -->
<template>
  <div ref="svgBorder" class="svg-border-container">
    <component :is="currentComp" :width="width" :height="height" class="svg-bg"></component>
    <div class="svg-border-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, Ref, ref, shallowRef } from 'vue'
import SvgBorder1 from './modules/SvgBorder1.vue'
import SvgBorder2 from './modules/SvgBorder2.vue'

const compMap: any = {
  1: SvgBorder1,
  2: SvgBorder2,
}
// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  type?: number
}
const props = withDefaults(defineProps<ParentProps>(), {
  type: 1,
})

const currentComp = computed(() => {
  // return props.type === 0 ? shallowRef(BorderBox1) : ''
  return compMap[props.type]
})

const svgBorder: Ref<HTMLElement | null> = ref(null)
const width: Ref<Number> = ref(400)
const height: Ref<Number> = ref(300)
onMounted(() => {
  nextTick(() => {
    if (svgBorder.value) {
      width.value = svgBorder.value.offsetWidth
      height.value = svgBorder.value.offsetHeight
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
