<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <!-- v-for 반복문을 통해 하단에 정의한 배열 데이터 기반으로 component 생성 -->
      <div
        v-for="nav in navigations"
        :key="nav.name" 
        class="nav-item">
        <!-- route/index.js 에 등록된 router 정보에 한해 to-link 연결
                     ex) abc.com/#/[to]
                 -->
        <RouterLink 
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo';

export default {
    components : {
        Logo
    },
    data() {
        return {
            navigations: [
                {
                    name: 'Search',
                    href: '/'
                },
                {
                    name: 'Movie',
                    href: '/movie/tt2294629'
                },
                {
                    name: 'About',
                    href: '/about'
                },
            ]
        }
    }
}

</script>
<style lang="scss" scoped>
    header {
        height: 70px;
        padding: 0 40px;
        display: flex;
        align-items: center;
        .logo {
            margin-right: 40px;

        }
    }
</style>