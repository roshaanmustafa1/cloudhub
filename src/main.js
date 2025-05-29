import 'nprogress/nprogress.css'
import 'vue-toastification/dist/index.css'
import './assets/styles/main.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from 'vue-toastification'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.use(Toast, {
  maxToasts: 20,
  newestOnTop: true
})

app.mount('#app')
