import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home';
import About from './About';
import Movie from './Movie';

export default createRouter({
    // History & Hash Mode 중 선택
    // URL/#/API 형태
    history: createWebHashHistory(),
    
    // 페이지 구분 옵션
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            // : Keyword를 붙여 parameter 정의
            path: '/movie/:id',
            component: Movie
        },
    ]
})