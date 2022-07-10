import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  const role = localStorage.getItem('TOKEN_KEY')
  const val = JSON.parse(role)
  console.log(val)
  next()
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).use(ElementPlus).mount('#app')
