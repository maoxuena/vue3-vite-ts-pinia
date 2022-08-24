<template>
  <div class="create-main">
    <div id="screen-wrap" class="screen-wrap">
      <ruler-comp></ruler-comp>
    </div>
  </div>
</template>

<script setup lang="ts">
import RulerComp from './RulerComp/RulerComp.vue'
</script>

<style lang="scss" scoped>
.create-main {
  position: relative;
  display: flex;
  height: 100%;
  padding: 0;
  user-select: none;
  flex-basis: auto;
  overflow: auto;
  background: url('@/assets/images/screen/bg-canvas.png');
}
.screen-wrap {
  position: relative;
  width: 100%;
  height: calc(100% - 32px);
  overflow: auto;
}
</style>
