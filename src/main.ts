/*
 * @Author: maoxuena
 * @Date: 2023-06-29 10:17:01
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-09-03 11:16:41
 * @FilePath: \vue3-vite-ts-pinia\src\main.ts
 * @Description:
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupApp } from '@/plugins'
import App from './App.vue'
import i18n from './i18n/index'
import router from './router'

import DataUI from '@/components/DatavUi'
import SvgIcon from '@/components/SvgIcon/index.vue'

import '@/mocks'

import microApp from '@micro-zoe/micro-app'
microApp.start({
  // 'disable-memory-router': true, // 关闭虚拟路由系统
})

import WujieVue from 'wujie-vue3'

const app = createApp(App)
setupApp(app)
app.use(i18n)
app.use(router)
app.use(createPinia())
app.use(DataUI)
app.use(WujieVue)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
