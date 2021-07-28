<!--Probs 전달
:class = 특정 데이터 바인딩
:class="{ 'no-result' : !movies.length }" > no-result class의 존재 여부가 !movies.length의 참 속성에 의해 결정 
    > 뒤쪽이 참일 경우, 클레스는 class="inner no-result"  
-->
<template>
    <div class="container">
        <div        
            :class="{ 'no-result' : !movies.length }" 
            class="inner"> 
            <Loader v-if="loading" />
            <div v-if="message"
                class="message">
                {{ message }}                
            </div>
            <div class="movies">
                <MovieItem
                v-for="movie in movies"
                :key="movie.imdbID"        
                :movie="movie"
                /> 
            </div>
            
        </div>
    </div>
</template>

<script>
// 형제 Component 간 데이터 공유를 위해 Vuex(Store) 사용 예정 > Vuex는 데이터를 중앙집중화하여 관리
import MovieItem from '~/components/MovieItem'
import Loader from '~/components/Loader'

export default {
    components: {
        MovieItem,
        Loader
    },
    computed: {
        movies() {
            return this.$store.state.movie.movies
        },
        message() {
            return this.$store.state.movie.message
        },
        loading() {
            return this.$store.state.movie.loading
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
    margin-top: 30px;
    .inner {
        background-color: $gray-200;
        padding: 10px 0;
        border-radius: 4px;
        text-align: center;   
        &.no-result {
            padding: 70px 0;
        }
    }
    .message {
        color: $gray-400;
        font-size: 20px;
    }
    .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

</style>