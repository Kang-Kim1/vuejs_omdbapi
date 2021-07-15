import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

createApp(App)
    .use(router) // 특정 플러그인 연결
    .use(store)
    .mount('#app')