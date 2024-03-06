import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import '@/assets/css/fonts.css'
import '@/assets/css/tailwind.css'
import 'animate.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
