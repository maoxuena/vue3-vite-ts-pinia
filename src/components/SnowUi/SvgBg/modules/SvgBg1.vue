<template>
  <svg
    class="move-wrap"
    :height="height"
    :width="width"
    :viewBox="`0 0 ${width} ${height}`"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <g :transform="`scale(${scale.x},${scale.y}) translate(0,0)`">
      <path
        d="M0 150 
                 C30 130,60 130, 90 150
                 S150 170,180 150 
                 S240 130,270 150
                 S330 170,360 150
                 V300 H0 Z"
        fill="rgba(0, 0, 50, .2)"
        stroke-width="3">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          from="0"
          to="-180"
          :dur="`${3 * scale.x}s`"
          repeatCount="indefinite"></animateTransform>
      </path>
      <path
        d="M0 150 
                 C30 135,60 135, 90 150
                 S150 165,180 150 
                 S240 135,270 150
                 S330 165,360 150
                 V300 H0 Z"
        fill="rgba(0, 0, 50, .1)"
        stroke-width="1">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          from="0"
          to="-180"
          :dur="`${1.4 * scale.x}s`"
          repeatCount="indefinite"></animateTransform>
      </path>
      <path
        d="M0 150 
                 C30 120,60 120, 90 150
                 S150 180,180 150 
                 S240 120,270 150
                 S330 180,360 150
                 V300 H0 Z"
        fill="rgba(0, 0, 50, .4)"
        stroke-width="1">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          from="0"
          to="-180"
          :dur="`${2.2 * scale.x}s`"
          repeatCount="indefinite"></animateTransform>
      </path>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  width?: number
  height?: number
}
const props = withDefaults(defineProps<ParentProps>(), {
  width: 400,
  height: 300,
})

const scale = reactive({
  x: 1,
  y: 1,
})
const w = ref<number>(180)
const h = ref<number>(300)
const computedHeight = (width: number, height: number): void => {
  scale.x = width / w.value
  scale.y = height / h.value
}

watch(
  () => [props.width, props.height],
  ([newWidth, newHeight], [oldWidth, oldHeight]) => {
    computedHeight(newWidth, newHeight)
  }
)

onMounted(() => {
  computedHeight(props.width, props.height)
})
</script>

<style scoped>
.move-wrap {
  border: 1px solid #eee;
  background: linear-gradient(to right, rgb(170, 75, 107), rgb(107, 107, 131), rgb(59, 141, 153));
}
</style>
