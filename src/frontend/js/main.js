import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from '@/App.vue'
import '@/index.css'
import router from '@/frontend/router'
import 'quill/dist/quill.snow.css'

const head = createHead()

createApp(App).use(router).use(head).mount('#app')
