import axios from 'axios'
// 중복되는 id 제거 목적
import _uniqBy from 'lodash/uniqBy'

export default {
    namespaced: true, // module화 명시

    state: () => ({
        movies: []   
    }), // data 
    getters: {
        
    }, // computed와 같이 계산된 데이터 반환
    mutations: {
        updateState(state, payload) {
            // ['movies', 'message', 'loading'] 
            // mutations으로 부터 호출, payload로 전달된 값 state에 입력
            Object.keys(payload).forEach(key=> {
                state[key] = payload[key]
            })
        },
        resetMovies(state) {
            state.movies = []
        }
    }, // 데이터 변경을 위한 methods
    actions: {
        // context 를 통해 접근 가능
        async searchMovies({ state, commit }, payload) {
            try {
                const OMDB_API_KEY = '25b23d5b'

                const res = await _fetchMovie({
                    ...payload,
                    page: 1
                }) 
                // const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&type=${type}&s=${title}&y=${year}&page=1`)
                // console.log(res)   
                
                // response 데이터 분해 { Response Name , result }
                const { Search, totalResults } = res.data
                commit('updateState', {
                    // 해당 영역은 payload로 전달
                    movies: _uniqBy(Search, 'imdbID'),
                })

                console.log(totalResults)

                // 총 Page개수 계산
                const total = parseInt(totalResults, 10)
                const pageLen = Math.ceil(total / 10)

                if(pageLen > 1) {
                    for(let page = 2; page <= pageLen; page += 1) {
                        if(page > payload.number / 10) {
                            break
                        }
                        const res = await _fetchMovie({
                            ...payload,
                            page: page
                        })
                        const { Search } = res.data
                        commit('updateState', {
                            // ... : 전개 연산자로서 두개 배열을 합칠 수 있음
                            movies: [
                                ...state.movies, 
                                ..._uniqBy(Search, 'imdbID')
                            ]
                        })
                    }
                }

            } catch {  
                commit('updateState', {
                    movies: [], 
                    message: message
                })
            }
        }

    }, // 비동기 동작 methods
}

function _fetchMovie(payload) {
    const { title, type, year, page } = payload
    const OMDB_API_KEY = '25b23d5b'
    const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&type=${type}&s=${title}&y=${year}&page=${page}`

    // 비동기 & 콜백 동작
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                console.log(res)
                resolve(res)
            }).catch((err) => {
                reject(err.message)
            })

    })
}