<template>
    <div 
        :style="{ backgroundImage: `url(${movie.Poster})`}"
        class="movie"> 
        <div class="info">
            <div class="year">
                {{ movie.Year }}
            </div>
            <div class="title">
                {{ movie.Title }}                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        movie: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.movie {
    // 변수화하여 비율 고정
    $width: 168px;
    width: $width;
    height: $width * 3 / 2;
    border-radius: 4px;
    margin: 10px;
    background-color: $gray-400;
    background-size: cover;
    
    // child style의 absolute position에 대해 선언
    position: relative;
    .info {
        background-color: rgba($black, .3);
        width: 100%;
        padding: 14px;
        font-size: 14px;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
    }
}
</style>