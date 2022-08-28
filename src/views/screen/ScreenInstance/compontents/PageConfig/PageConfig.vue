<template>
  <div class="page-config-wrap">
    <div class="config-field">
      <div class="config-label">屏幕大小</div>
      <div class="config-container">
        <div class="config-item">
          <n-input-number
            v-model:value="pageConfig.width"
            :min="100"
            :max="20000"
            class="screen-input-number"
            @update:value="onSizeChange" />
          <span class="item-describe">宽度</span>
        </div>
        <div class="config-item">
          <n-input-number
            v-model:value="pageConfig.height"
            :min="100"
            :max="20000"
            class="screen-input-number"
            @update:value="onSizeChange" />
          <span class="item-describe">高度</span>
        </div>
      </div>
    </div>
    <div class="config-field">
      <div class="config-label">背景颜色</div>
      <div class="config-container">
        <n-input v-model:value="pageConfig.bgcolor" class="screen-color-input" @update:value="onColorChange" />
        <n-color-picker v-model:value="pageConfig.bgcolor" class="screen-color-picker" @update:value="onColorChange" />
      </div>
    </div>
    <div class="config-field">
      <div class="config-label">背景图</div>
      <div class="config-container config-wrap">
        <n-input v-model:value="pageConfig.bgimage" @update:value="onBgChange">
          <template #prefix>
            <svg-icon name="link"></svg-icon>
          </template>
        </n-input>
        <n-upload class="screen-upload" directory-dnd action="" :max="1">
          <n-upload-dragger>
            <img v-if="pageConfig.bgimage" :src="pageConfig.bgimage" style="width: 100%" />
            <template v-else>
              <div style="margin-bottom: 0.12rem; font-size: 0.48rem">
                <svg-icon name="img"></svg-icon>
              </div>
              <n-text style="line-height: 1.5"> 点击或者拖动文件到该区域来上传 </n-text>
            </template>
          </n-upload-dragger>
        </n-upload>
      </div>
    </div>
    <div class="config-field">
      <div class="config-label">重置</div>
      <div class="config-container">
        <n-button> 恢复默认背景 </n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useScreenStore } from '@/store/modules/screen'
const screenStore = useScreenStore()
const pageConfig = computed(() => screenStore.pageConfig)

// 改变屏幕大小
const onSizeChange = (value) => {}

// 改变屏幕背景色
const onColorChange = (value) => {}

// 改变屏幕背景图片
const onBgChange = (value) => {}

// 恢复默认背景
const resetBGImage = () => {
  pageConfig.value.bgimage = 'src/assets/images/screen/bj.png'
}
</script>

<style lang="scss" scoped></style>
