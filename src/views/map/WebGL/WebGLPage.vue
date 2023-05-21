<template>
  <div class="full-container full">
    <div id="cesium-viewer" ref="cesiumViewer">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineEmits } from 'vue'
import * as Cesium from 'cesium'

const cesiumViewer = ref<HTMLDivElement>()
onMounted(() => {
  const viewer = new Cesium.Viewer(cesiumViewer.value, {
    infoBox: false,
  })
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
