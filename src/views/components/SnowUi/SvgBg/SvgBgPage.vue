<template>
  <div>
    <n-form ref="formRef" inline :label-width="80" :size="settingStore.size">
      <n-form-item label="宽度">
        <n-input-number v-model:value="width" placeholder="输入宽度" />
      </n-form-item>
      <n-form-item label="高度">
        <n-input-number v-model:value="height" placeholder="输入高度" />
      </n-form-item>
      <n-form-item label="类型（1-2之间的整数，包含1、2）">
        <n-input-number v-model:value="type" placeholder="输入类型" />
      </n-form-item>
    </n-form>
    <div :style="{ width: `${width}px`, height: `${height}px` }">
      <svg-bg :type="type">内容</svg-bg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SvgBg from '@/components/SnowUi/SvgBg/index.vue'
import { useSettingStore } from '@/store/modules/setting'

// 系统配置
const settingStore = useSettingStore()

const type = ref<number>(1)
const width = ref<number>(600)
const height = ref<number>(400)
</script>

<style scoped></style>
