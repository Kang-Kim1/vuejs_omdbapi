<template>
    <div class="container">
        <div class="inner">
            <!--Probs 전달-->
            <div class="message">
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

export default {
    components: {
        MovieItem
    },
    computed: {
        movies() {
            return this.$store.state.movie.movies
        },
        message() {
            return this.$store.state.movie.message
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

</style>