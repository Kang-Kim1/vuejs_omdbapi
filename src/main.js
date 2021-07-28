/*
    vue.js
    webpack
    vuex
    router
    lodash
    ixois
*/

import { createApp } from 'vue'
import App from './App.vue'

// 이하 생략 시, index.js 파일 Load
import router from './routes'
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
    .use(router) // 특정 플러그인 연결
    .use(store)
    .use(loadImage) //사용자 정의 Plugin 등록
    .mount('#app')