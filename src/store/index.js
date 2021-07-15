// Vuex(Store)를 통해 데이터를 중앙집중화하여 공유 
import { createStore } from 'vuex'
import movie from './movie'
import about from './about'

export default createStore({
    modules: {
        movie,
        about
    }
})