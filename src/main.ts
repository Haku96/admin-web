import { createApp } from 'vue'

import App from './App.vue'
import store from './stores'
import router from './router'
import ElementPlus from 'element-plus'

import './style/global.css'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus, { locale: zhCn, size: 'small' })

app.mount('#app')
