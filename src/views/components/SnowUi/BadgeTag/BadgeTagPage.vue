<template>
  <div>
    <n-form ref="formRef" :label-width="80" :size="settingStore.size">
      <n-grid :cols="24" :x-gap="24">
        <n-form-item-gi :span="6" label="宽度">
          <n-input-number v-model:value="width" placeholder="输入宽度" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="高度">
          <n-input-number v-model:value="height" placeholder="输入高度" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="类型（1-2之间的整数，包含1、2）">
          <n-input-number v-model:value="type" placeholder="输入类型" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="文本">
          <n-input v-model:value="text" type="text" :size="settingStore.size" placeholder="输入文本" />
        </n-form-item-gi>
        <n-form-item-gi :span="3" label="文本颜色">
          <n-color-picker v-model:value="textColor" :show-alpha="false" :size="settingStore.size" />
        </n-form-item-gi>
        <n-form-item-gi :span="3" label="背景颜色">
          <n-color-picker v-model:value="bgColor" :show-alpha="false" :size="settingStore.size" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="尺寸大小">
          <n-select
            v-model:value="size"
            size="small"
            :options="[
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'medium',
                value: 'medium',
              },
              {
                label: 'large',
                value: 'large',
              },
            ]" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="位置">
          <n-select
            v-model:value="placement"
            size="small"
            :options="[
              {
                label: '左上',
                value: 'leftTop',
              },
              {
                label: '右上',
                value: 'rightTop',
              },
            ]" />
        </n-form-item-gi>
      </n-grid>
    </n-form>
    <div :style="{ width: `${width}px`, height: `${height}px` }">
      <badge-tag :text="text" :placement="placement" :size="size" :bg-color="bgColor" :text-color="textColor">
        <div style="height: 100%; background: #000"></div>
      </badge-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BadgeTag from '@/components/SnowUi/BadgeTag/index.vue'
import { useSettingStore } from '@/store/modules/setting'

// 系统配置
const settingStore = useSettingStore()

const type = ref<number>(1)
const width = ref<number>(100)
const height = ref<number>(150)
const text = ref<string>('')
const placement = ref<string>('leftTop')
const size = ref<string>('small')
const textColor = ref<string>('#fff')
const bgColor = ref<string>('#ea3447') // #feb826 #428cf2
</script>

<style scoped></style>
