<template>
  <div class="screen-setting-config-wrap">
    <d-field label="标题">
      <n-input v-model:value="screen.name" @update:value="onTitleChange" />
    </d-field>
    <d-field label="屏幕大小">
      <div class="screen-input-number-wrap">
        <n-input-number
          v-model:value="pageConfig.width"
          :min="100"
          :max="20000"
          class="screen-input-number"
          inline
          @update:value="onSizeChange" />
        <span class="item-describe">宽度</span>
      </div>
      <div class="screen-input-number-wrap">
        <n-input-number
          v-model:value="pageConfig.height"
          :min="100"
          :max="20000"
          class="screen-input-number"
          inline
          @update:value="onSizeChange" />
        <span class="item-describe">高度</span>
      </div>
    </d-field>
    <d-field label="背景颜色">
      <n-input v-model:value="pageConfig.bgcolor" class="screen-color-input" inline @update:value="onColorChange" />
      <n-color-picker v-model:value="pageConfig.bgcolor" class="screen-color-picker" inline @update:value="onColorChange" />
    </d-field>
    <d-field label="背景图">
      <div style="width: 100%">
        <n-input v-model:value="pageConfig.bgimage" @update:value="onBgChange">
          <template #prefix>
            <svg-icon name="link"></svg-icon>
          </template>
        </n-input>
        <n-upload class="screen-upload" directory-dnd action="" :max="1">
          <n-upload-dragger>
            <img v-if="pageConfig.bgimage" :src="pageConfig.bgimage" style="height: 100%" />
            <template v-else>
              <div style="margin-bottom: 0.12rem; font-size: 0.48rem">
                <svg-icon name="img"></svg-icon>
              </div>
              <n-text style="line-height: 1.5"> 点击或者拖动文件到该区域来上传 </n-text>
            </template>
          </n-upload-dragger>
        </n-upload>
      </div>
    </d-field>
    <d-field label="重置">
      <n-button> 恢复默认背景 </n-button>
    </d-field>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useScreenStore } from '@/store/modules/screen'
const screenStore = useScreenStore()
const { screen, pageConfig } = storeToRefs(screenStore)

// 改变屏幕大小
const onSizeChange = () => {
  screenStore.autoScale(() => ({
    offsetX: screenStore.getPanelOffsetX,
    offsetY: screenStore.getPanelOffsetY,
  }))
}

// 改变标题
const onTitleChange = (value) => {}

// 改变屏幕背景色
const onColorChange = (value) => {}

// 改变屏幕背景图片
const onBgChange = (value) => {}

// 恢复默认背景
const resetBGImage = () => {
  pageConfig.value.bgimage = 'src/assets/images/screen/bj.png'
}
</script>

<style lang="scss"></style>
