import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './style.css'
import type { Plugin } from 'vue'

const app = createApp(App)

app.use(createPinia())
app.use(router as unknown as Plugin)
app.use(i18n as unknown as Plugin)

app.mount('#app')
