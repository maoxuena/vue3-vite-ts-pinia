/*
 * @Author: maoxuena
 * @Date: 2023-06-29 10:17:01
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-08-30 16:50:07
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

const app = createApp(App)
setupApp(app)
app.use(i18n)
app.use(router)
app.use(createPinia())
app.use(DataUI)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
