<!--
 * @Author: maoxuena
 * @Date: 2024-09-02 09:40:59
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-09-04 10:20:03
 * @FilePath: \vue3-vite-ts-pinia\src\views\micro\MicroApp\MicroAppPage.vue
 * @Description:
-->
<template>
  <div class="full-container full">
    <!-- 弹窗 -->
    <!-- destroy：开启destroy，子应用在卸载后会清空缓存的静态资源和沙箱数据。默认：false -->
    <!-- keep-alive：开启keep-alive后，应用卸载时会进入缓存，而不是销毁它们，以便保留应用的状态和提升重复渲染的性能。默认：false。keep-alive的优先级小于destroy，当两者同时存在时，keep-alive将失效。 -->
    <!-- router-mode：search、native、native-scope、pure、state -->
    <n-spin :show="show" style="height: 100%">
      <micro-app
        name="childApp"
        :url="url"
        :default-page="url"
        keep-alive
        router-mode="pure"
        @created="created"
        @beforemount="beforemount"
        @mounted="mounted"
        @unmount="unmount"
        @error="error"
        @afterhidden="afterhidden"
        @beforeshow="beforeshow"
        @aftershow="aftershow"></micro-app>
    </n-spin>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// const url = 'https://ythcs.nbport.com.cn/ui/user/login'
const url = 'http://localhost:8080/#/system/user'
const show = ref(false)
const created = () => {
  console.log('micro-app元素被创建')
  show.value = true
}
const beforemount = () => {
  console.log('即将渲染')
}
const mounted = () => {
  console.log('已经渲染完成')
  show.value = false
}
const error = () => {
  console.log('加载出错')
}
// 不设置keep-alive时会触发
const unmount = () => {
  console.log('子应用卸载')
}
// 设置keep-alive时会触发
const afterhidden = () => {
  console.log('子应用推入后台时触发')
}
// 设置keep-alive时会触发
const beforeshow = () => {
  console.log('子应用推入前台之前触发')
}
// 设置keep-alive时会触发
const aftershow = () => {
  console.log('子应用推入前台之后触发')
}
</script>

<style lang="scss" scoped>
micro-app {
  height: 100%;
}
</style>
