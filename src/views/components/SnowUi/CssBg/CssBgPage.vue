<template>
  <div>
    <n-form ref="formRef" inline :label-width="80" :size="settingStore.size">
      <n-form-item label="宽度">
        <n-input-number v-model:value="width" disabled placeholder="输入宽度" />
      </n-form-item>
      <n-form-item label="高度">
        <n-input-number v-model:value="height" disabled placeholder="输入高度" />
      </n-form-item>
      <n-form-item label="类型（1-2之间的整数，包含1、2）">
        <n-input-number v-model:value="type" placeholder="输入类型" />
      </n-form-item>
    </n-form>
    <div :style="{ width: `${width}px`, height: `${height}px` }">
      <css-bg :type="type">内容</css-bg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CssBg from '@/components/SnowUi/CssBg/index.vue'
import { useSettingStore } from '@/store/modules/setting'

// 系统配置
const settingStore = useSettingStore()

const type = ref<number>(1)
const width = ref<number>(500)
const height = ref<number>(300)
</script>

<style scoped></style>
