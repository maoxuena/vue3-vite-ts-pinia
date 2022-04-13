import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupApp } from '@/plugins'
import App from './App.vue'
import router from './router'

const app = createApp(App)
setupApp(app)
app.use(router)
app.use(createPinia())
app.mount('#app')
