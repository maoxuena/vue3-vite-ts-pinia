import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupApp } from '@/plugins'
import App from './App.vue'
import i18n from './i18n/index'
import router from './router'

import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)
setupApp(app)
app.use(i18n)
app.use(router)
app.use(createPinia())
app.component('svg-icon', SvgIcon)
app.mount('#app')
