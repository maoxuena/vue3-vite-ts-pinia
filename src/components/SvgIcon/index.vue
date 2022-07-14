<template>
  <component :is="currentComponent" v-if="currentComponent" ref="svgRef" v-bind="$attrs" class="svg-icon" :name="name" />
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { computed, getCurrentInstance, nextTick, ref, useAttrs, watch } from 'vue'
const modules = import.meta.globEager('@/assets/svg/**/*.svg', {
  as: 'component',
})

const props = withDefaults(defineProps<{ name: string }>(), {})
const attrs = useAttrs()
const instance = getCurrentInstance()

const svgRef = ref()

const currentComponent = computed<Component | undefined>(() => {
  const fileName = '/' + props.name + '.svg'
  for (const path in modules) {
    const mod = modules[path]
    if (path.endsWith(fileName)) {
      return mod as Component
    }
  }
  console.log('not found svg file:' + fileName)
  return undefined
})

// data-v-hash
let scopeId = ''
if (instance?.type) {
  // __scopeId 存在的条件是 <style scoped>
  const __scopeId = (instance?.type as { __scopeId?: string })?.__scopeId
  if (__scopeId) {
    scopeId = __scopeId
  }
}

const attachAttr = async () => {
  await nextTick()
  // 取到 svg dom
  const cpt = svgRef.value
  if (!cpt) {
    return
  }
  const svg = cpt.$el as Element | undefined
  if (!(svg instanceof Element)) {
    return
  }

  /**
   * 由于 svg 不在 vue_template 里,
   * 所以初始没有添加样式隔离,
   * 需要手动给svg和所有子dom添加 data-v-hash
   */
  if (scopeId) {
    svg.setAttribute(scopeId, '')
    svg.querySelectorAll('*').forEach((element) => {
      element.setAttribute(scopeId, '')
    })
  }
}

watch(
  () => props.name,
  async () => {
    await nextTick()
    attachAttr()
  },
  {
    immediate: true,
  }
)
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
svg,
path {
  /* 颜色渐变效果 */
  transition: fill 250ms;
}
</style>
