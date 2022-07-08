<!-- SVG 边框1 -->
<template>
  <div ref="SvgBg" class="svg-bg-container">
    <component :is="currentComp" :width="width" :height="height" class="svg-bg"></component>
    <div class="svg-bg-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, Ref, ref, shallowRef, watch } from 'vue'
import SvgBg1 from './modules/SvgBg1.vue'

const compMap: any = {
  1: SvgBg1,
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

const SvgBg: Ref<HTMLElement | null> = ref(null)
const width: Ref<number> = ref(400)
const height: Ref<number> = ref(300)

const initWH = (): void => {
  nextTick(() => {
    if (SvgBg.value) {
      width.value = SvgBg.value.offsetWidth
      height.value = SvgBg.value.offsetHeight
    }
  })
}
watch(
  () => props.type,
  (newValue, oldValue) => {
    initWH()
  }
)

onMounted(() => {
  initWH()
})
</script>

<style lang="scss" scoped>
.svg-bg-container {
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
  .svg-bg-content {
    position: relative;
    z-index: 9;
    height: 100%;
  }
}
</style>
