<template>
  <div class="d-nested-loading d-async-loading">
    <div v-if="spinning" class="d-loading-mask" :style="spinning ? spinContentStyle : {}">
      <div class="d-loading">
        <div v-if="type === 'dna'" class="dna-loading">
          <div v-for="i in 60" :key="i" class="dna-ele">
            <div class="dna-dot"></div>
          </div>
        </div>
        <div v-else-if="type === 'square'" class="square-loading">
          <i class="loading-icon validating"></i>
          <i class="loading-icon validating"></i>
          <i class="loading-icon validating"></i>
        </div>
        <div v-else>
          {{ type }}
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, PropType, ref } from 'vue'

const type = ref('square')
const spinning = ref(true)
const theme = ref('dark')
const opacity = ref(1)

const spinContentStyle = computed(() => {
  const background = theme.value === 'dark' ? `rgba(23,27,34,${opacity.value})` : `rgba(255, 255, 255, ${opacity.value})`
  return background
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
