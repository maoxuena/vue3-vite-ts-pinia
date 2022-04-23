<template>
  <n-drawer v-model:show="isDrawer" :width="width" :placement="placement">
    <n-drawer-content :title="title" :native-scrollbar="false">
      <n-divider title-placement="center">主题配置</n-divider>
      <div class="setting-item flex-container sb-c theme-switch">
        <div class="setting-item-title">主题</div>
        <div class="setting-item-action" style="font-size: 0">
          <n-tooltip placement="bottom">
            <template #trigger>
              <n-switch v-model:value="settingStore.darkTheme" @update:value="handleChangeTheme">
                <template #checked>
                  <n-icon size="0.14rem" color="#ffd93b">
                    <Moon />
                  </n-icon>
                </template>
                <template #unchecked>
                  <n-icon size="0.14rem" color="#ffd93b">
                    <SunnySharp />
                  </n-icon>
                </template>
              </n-switch>
            </template>
            <span>{{ settingStore.darkTheme ? '深' : '浅' }}色主题</span>
          </n-tooltip>
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">主题色</div>
        <div class="setting-item-action" style="font-size: 0">
          <n-color-picker
            v-model:value="color"
            :swatches="colorList"
            @update:value="handleChangeColor" />
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'
import { darkTheme } from 'naive-ui'
import { useSettingStore } from '@/store/modules/setting'
import { updateRoot } from '@/utils/theme'

// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  width?: number
  title?: string
}
const props = withDefaults(defineProps<ParentProps>(), {
  width: 280,
  title: '项目配置',
})

// 系统配置
const settingStore = useSettingStore()
// 改变主题
const handleChangeTheme = async (value: any): Promise<void> => {
  await settingStore.setDarkTheme(value)
}
// 主题色
const state = reactive({
  color: settingStore.getAppTheme,
  colorList: settingStore.getAppThemeList,
})
const { color, colorList } = toRefs(state)
// 改变主题色
const handleChangeColor = async (value: any): Promise<void> => {
  await settingStore.setAppTheme(value)
  updateRoot(value)
}

const isDrawer = ref<Boolean>(false)
const placement = ref<String>('right')

// 打开抽屉
const openDrawer = (): void => {
  isDrawer.value = true
}

// 关闭抽屉
const closeDrawer = (): void => {
  isDrawer.value = false
}

// 显示暴露的数据，才可以在父组件拿到
defineExpose({
  openDrawer,
  closeDrawer,
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
