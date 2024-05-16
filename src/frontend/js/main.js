import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import router from '@/frontend/router'
import 'quill/dist/quill.snow.css'

createApp(App).use(router).mount('#app')
