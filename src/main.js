import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from './router'
import VueFullpage from 'vue-fullpage.js'

const app = createApp(App)
app.use(VueFullpage)
app.use(ElementPlus)
app.use(router).mount('#app')
