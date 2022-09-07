<template>
  <div class="screen-setting-config-wrap">
    <div class="basic-setting-wrap">
      <d-field label="组件尺寸">
        <div class="screen-input-number-wrap">
          <n-input-number v-model:value="attr.width" :min="100" :max="20000" class="screen-input-number" inline />
          <span class="item-describe">宽度</span>
        </div>
        <div class="screen-input-number-wrap">
          <n-input-number v-model:value="attr.height" :min="100" :max="20000" class="screen-input-number" inline />
          <span class="item-describe">高度</span>
        </div>
      </d-field>
      <d-field label="组件位置">
        <div class="screen-input-number-wrap">
          <n-input-number v-model:value="attr.x" class="screen-input-number" inline />
        </div>
        <div class="screen-input-number-wrap">
          <n-input-number v-model:value="attr.y" class="screen-input-number" inline />
        </div>
      </d-field>
      <d-field label="旋转角度">
        <n-input-number v-model:value="attr.deg" :min="0" :max="360" :step="1" inline />
        <div class="flip-wrap">
          <n-tooltip>
            <template #trigger>
              <span class="flip-item hor" :class="{ '--checked': flips.includes('h') }" @click="onFlipChange('h')">
                <svg-icon name="flip-h" />
              </span>
            </template>
            水平翻转
          </n-tooltip>
          <n-tooltip>
            <template #trigger>
              <span class="flip-item ver" :class="{ '--checked': flips.includes('v') }" @click="onFlipChange('v')">
                <svg-icon name="flip-v" />
              </span>
            </template>
            垂直翻转
          </n-tooltip>
        </div>
      </d-field>
      <d-field label="透明度">
        <n-slider v-model:value="attr.opacity" :min="0" :max="1" :step="0.05" />
      </d-field>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ComponentAttr, DatavComponent } from '@/store/modules/types'

type flipType = 'v' | 'h'

const props = defineProps<{
  com: DatavComponent
}>()

const attr = ref<ComponentAttr>({ ...props.com.attr })
const flips = ref<flipType[]>([])

const onFlipChange = (key: flipType) => {
  if (flips.value.includes(key)) {
    flips.value = flips.value.filter((m) => m !== key)
  } else {
    flips.value.push(key)
  }
  attr.value.flipV = flips.value.includes('v')
  attr.value.flipH = flips.value.includes('h')
}
</script>

<style scoped></style>
