<template>
  <div class="datav-wrap" :style="titleStyle">
    <template v-if="urlText">
      <a :href="urlText" :target="urlTarget" :style="urlStyle">
        {{ titleText }}
      </a>
    </template>
    <template v-else>
      <span :style="wordStyle">
        {{ titleText }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { toRef, computed } from 'vue'
import type { CSSProperties } from 'vue'
import { BasicText } from './BasicText'

const props = defineProps<{
  com: BasicText
}>()

const config = toRef(props.com, 'config')

const attr = toRef(props.com, 'attr')

const titleStyle = computed(() => {
  const style = {
    width: `${attr.value.width}px`,
    height: `${attr.value.height}px`,
    'font-family': `${config.value.textStyle.fontFamily}, Arial, sans-serif`,
    'font-size': `${config.value.textStyle.fontSize}px`,
    'font-weight': config.value.textStyle.fontWeight,
    'justify-content': config.value.textAlign,
    'writing-mode': config.value.writingMode,
    'letter-spacing': `${config.value.letterSpacing}px`,
    'background-color': 'initial',
    border: 'none',
    'border-radius': '0px',
    transform: 'translateZ(0px)',
    display: 'flex',
    'align-items': 'center',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    overflow: 'hidden',
  }
  if (config.value.backgroundStyle.show) {
    const bgs = config.value.backgroundStyle
    style['background-color'] = bgs.bgColor
    style.border = `${bgs.borderWidth}px ${bgs.borderStyle} ${bgs.borderColor}`
    style['border-radius'] = `${bgs.borderRadius}px`
  }
  return style as CSSProperties
})

const wordStyle = computed(() => {
  const style = {
    color: config.value.textStyle.color,
    overflow: 'unset',
    'text-overflow': 'unset',
    'white-space': 'unset',
    'background-image': 'none',
    'background-clip': 'unset',
    '-webkit-text-fill-color': 'initial',
  }

  if (config.value.ellipsis) {
    style.overflow = 'hidden'
    style['text-overflow'] = 'ellipsis'
    style['white-space'] = 'nowrap'
  }

  return style as CSSProperties
})

const urlStyle = computed(() => {
  const style = {
    display: 'block',
    'text-decoration': 'none',
    color: config.value.textStyle.color,
    overflow: 'unset',
    'text-overflow': 'unset',
    'white-space': 'unset',
    'background-image': 'none',
    'background-clip': 'unset',
    '-webkit-text-fill-color': 'initial',
  }

  if (config.value.ellipsis) {
    style.overflow = 'hidden'
    style['text-overflow'] = 'ellipsis'
    style['white-space'] = 'nowrap'
  }

  return style as CSSProperties
})

const titleText = computed(() => {
  return config.value.title
})

const urlText = computed(() => {
  return config.value.urlConfig.url
})

const urlTarget = computed(() => (config.value.urlConfig.isBlank ? '_blank' : '_self'))
</script>

<style scoped></style>
