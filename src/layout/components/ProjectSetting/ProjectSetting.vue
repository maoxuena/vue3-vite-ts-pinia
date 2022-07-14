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
          <n-color-picker v-model:value="settingStore.appTheme" :swatches="colorList" @update:value="handleChangeColor" />
        </div>
      </div>
      <n-divider title-placement="center">导航栏模式</n-divider>
      <div class="setting-item flex-container sb-fs">
        <div class="setting-item-style">
          <n-tooltip placement="top">
            <template #trigger>
              <svg-icon class="setting-item-style-img" name="nav-theme-dark" @click="togNavMode('vertical')"></svg-icon>
            </template>
            <span>左侧菜单模式</span>
          </n-tooltip>
          <n-badge v-show="settingStore.navMode === 'vertical'" dot color="#19be6b" />
        </div>
        <div class="setting-item-style">
          <n-tooltip placement="top">
            <template #trigger>
              <svg-icon class="setting-item-style-img" name="nav-horizontal" @click="togNavMode('horizontal')"></svg-icon>
            </template>
            <span>顶部菜单模式</span>
          </n-tooltip>
          <n-badge v-show="settingStore.navMode === 'horizontal'" dot color="#19be6b" />
        </div>
        <div class="setting-item-style">
          <n-tooltip placement="top">
            <template #trigger>
              <svg-icon class="setting-item-style-img" name="nav-horizontal-mix" @click="togNavMode('horizontal-mix')"></svg-icon>
            </template>
            <span>顶部菜单混合模式</span>
          </n-tooltip>
          <n-badge v-show="settingStore.navMode === 'horizontal-mix'" dot color="#19be6b" />
        </div>
      </div>
      <n-divider title-placement="center">导航栏风格</n-divider>
      <div class="setting-item flex-container sb-fs">
        <div class="setting-item-style">
          <n-tooltip placement="top">
            <template #trigger>
              <svg-icon class="setting-item-style-img" name="nav-theme-dark" @click="togNavTheme('dark')"></svg-icon>
            </template>
            <span>暗色侧边栏</span>
          </n-tooltip>
          <n-badge v-if="settingStore.navTheme === 'dark'" dot color="#19be6b" />
        </div>
        <div class="setting-item-style">
          <n-tooltip placement="top">
            <template #trigger>
              <svg-icon class="setting-item-style-img" name="nav-theme-light" @click="togNavTheme('light')"></svg-icon>
            </template>
            <span>白色侧边栏</span>
          </n-tooltip>
          <n-badge v-if="settingStore.navTheme === 'light'" dot color="#19be6b" />
        </div>
        <div class="setting-item-style">
          <n-tooltip placement="top">
            <template #trigger>
              <svg-icon class="setting-item-style-img" name="header-theme-dark" @click="togNavTheme('header-dark')"></svg-icon>
            </template>
            <span>暗色顶栏</span>
          </n-tooltip>
          <n-badge v-if="settingStore.navTheme === 'header-dark'" dot color="#19be6b" />
        </div>
      </div>
      <n-divider title-placement="center">界面配置</n-divider>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">分割菜单</div>
        <div class="setting-item-action">
          <n-switch
            v-model:value="settingStore.menuSetting.mixMenu"
            :disabled="settingStore.navMode !== 'horizontal-mix'"
            @update:value="handleChangeMixMenu" />
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">固定顶栏</div>
        <div class="setting-item-action">
          <n-switch v-model:value="settingStore.headerSetting.fixed" @update:value="handleChangeHeaderFixed" />
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">固定多页签</div>
        <div class="setting-item-action">
          <n-switch v-model:value="settingStore.multiTabsSetting.fixed" @update:value="handleChangeTabsFixed" />
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">显示重载页面按钮</div>
        <div class="setting-item-action">
          <n-switch v-model:value="settingStore.headerSetting.isReload" @update:value="handleChangeHeaderReload" />
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">显示面包屑导航</div>
        <div class="setting-item-action">
          <n-switch v-model:value="settingStore.crumbsSetting.show" @update:value="handleChangeCrumbsShow" />
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">显示面包屑显示图标</div>
        <div class="setting-item-action">
          <n-switch v-model:value="settingStore.crumbsSetting.showIcon" @update:value="handleChangeCrumbsIconShow" />
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">显示多页签</div>
        <div class="setting-item-action">
          <n-switch v-model:value="settingStore.multiTabsSetting.show" @update:value="handleChangeTabsShow" />
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">尺寸</div>
        <div class="setting-item-action">
          <n-select v-model:value="settingStore.size" :options="sizeOptions" @update:value="handleChangeSize" />
        </div>
      </div>
      <n-divider title-placement="center">动画配置</n-divider>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">禁用动画</div>
        <div class="setting-item-action">
          <n-switch v-model:value="settingStore.isPageAnimate" @update:value="handleChangeAnimate" />
        </div>
      </div>
      <div class="setting-item flex-container sb-c">
        <div class="setting-item-title">动画类型</div>
        <div class="setting-item-select">
          <n-select v-model:value="settingStore.pageAnimateType" :options="animateOptions" @update:value="handleChangeAnimateType" />
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
import { animates as animateOptions } from '@/config/animateSetting'
import { size as sizeOptions } from '@/config/sizeSetting'

// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  width?: number | string
  title?: string
}
const props = withDefaults(defineProps<ParentProps>(), {
  width: '2.8rem',
  title: '项目配置',
})

// 系统配置
const settingStore = useSettingStore()
// 改变主题
const handleChangeTheme = async (value: boolean): Promise<void> => {
  await settingStore.setDarkTheme(value)
}
// 主题色
const state = reactive({
  color: settingStore.getAppTheme,
  colorList: settingStore.getAppThemeList,
})
const { color, colorList } = toRefs(state)
// 改变主题色
const handleChangeColor = async (value: string): Promise<void> => {
  await settingStore.setAppTheme(value)
  updateRoot(value)
}

const togNavTheme = async (theme: string): Promise<void> => {
  await settingStore.setNavTheme(theme)
}

const togNavMode = async (mode: string): Promise<void> => {
  await settingStore.setNavMode(mode)
  const menuSetting = { ...settingStore.menuSetting, mixMenu: false }
  await settingStore.setMenuSetting(menuSetting)
}

// 分割菜单
const handleChangeMixMenu = async (value: boolean): Promise<void> => {
  const menuSetting = { ...settingStore.menuSetting, mixMenu: value }
  await settingStore.setMenuSetting(menuSetting)
}

// 固定顶栏
const handleChangeHeaderFixed = async (value: boolean): Promise<void> => {
  const headerSetting = { ...settingStore.headerSetting, fixed: value }
  await settingStore.setHeaderSetting(headerSetting)
}

// 固定多页签
const handleChangeTabsFixed = async (value: boolean): Promise<void> => {
  const multiTabsSetting = { ...settingStore.multiTabsSetting, fixed: value }
  await settingStore.setMultiTabsSetting(multiTabsSetting)
}

// 显示重载页面按钮
const handleChangeHeaderReload = async (value: boolean): Promise<void> => {
  const headerSetting = { ...settingStore.headerSetting, isReload: value }
  await settingStore.setHeaderSetting(headerSetting)
}

// 显示面包屑导航
const handleChangeCrumbsShow = async (value: boolean): Promise<void> => {
  const crumbsSetting = { ...settingStore.crumbsSetting, show: value }
  await settingStore.setCrumbsSetting(crumbsSetting)
}

// 显示面包屑显示图标
const handleChangeCrumbsIconShow = async (value: boolean): Promise<void> => {
  const crumbsSetting = { ...settingStore.crumbsSetting, showIcon: value }
  await settingStore.setCrumbsSetting(crumbsSetting)
}

// 显示多页签
const handleChangeTabsShow = async (value: boolean): Promise<void> => {
  const multiTabsSetting = { ...settingStore.multiTabsSetting, show: value }
  await settingStore.setMultiTabsSetting(multiTabsSetting)
}

// 尺寸
const handleChangeSize = async (value: string): Promise<void> => {
  await settingStore.setSize(value)
}

// 动画
const handleChangeAnimate = async (value: boolean): Promise<void> => {
  await settingStore.setIsPageAnimate(value)
}

// 动画类型
const handleChangeAnimateType = async (value: string): Promise<void> => {
  await settingStore.setPageAnimateType(value)
}

const isDrawer = ref<boolean>(false)
const placement = ref<string>('right')

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
