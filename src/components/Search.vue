<template>
    <!-- v-model : 양방향 데이터 바인딩을 생성 -->
    <!-- keyup : 키보드 이밴트 핸들러-->
    <div class="container">
        <input type="text" 
            class="form-control"
            v-model="title"
            placeholder="Search for Movies, Series & more"
            @keyup.enter="apply" />
    
        <div class="selects">
            <select 
                v-for="filter in filters"                
                v-model="$data[filter.name]"
                :key="filter.name"
                class="form-select">
                <option
                    v-if="filter.name === 'year'" 
                    value="">
                    All Years
                </option>
                <option
                    v-for="item in filter.items"
                    :key="item">

                    {{ item }}
                
                </option>
            </select>
        </div>
        <button class="btn btn-primary"
            @click="apply"
        >
            Apply
        </button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: '',
            type: 'movie',
            number: 10,
            year: '',
            filters: [
                {
                    name: 'type',
                    items: ['movie', 'series', 'episode']
                },
                {
                    name: 'number',
                    items: [10, 20, 30]
                },
                {
                    name: 'year',
                    items: (() => {
                        const currentYear = new Date().getFullYear()
                        const years = []
                        for(let i = currentYear; i >= 1985; i--) {
                            years.push(i)
                        }
                        return years
                    })()
                }
            ]
        }

    },
    methods: { 
        // 비동기 처리 = 결과가 나올때까지 기다림
        async apply() {
            // store에 정의한 Action, payload 넘겨 실행
            // sotre의 Action 실행 시 dispatch(), mutations는 commit() 사용
            this.$store.dispatch('movie/searchMovies', {
                title: this.title,
                type: this.type,
                number: this.number,
                year: this.year
            }
            )
        }
    }
}   
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    // 자식 영역에 적용
    > * {
        margin-right: 10px;
        // 마지막 요소만 따로 적용
        &:last-child {
            margin-right: 0px;
        }
    }
    .selects {
        display: flex;
        select {
            width: 120px;
            margin-right: 10px;
            &:last-child {
                margin-right: 0px;
            }
        }
    }
    .btn {
        width: 120px;
        height: 50px;
        font-weight: 700;
        flex-shrink: 0;
    }
}   
</style>