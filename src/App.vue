<template>
  <Header />
  <!-- URI 기반 routes/index.js에 정의된 Component 출력 -->
  <RouterView />
</template>



<script>
import Header from '~/components/Header';

export default {
  components: {
    Header
  }
}

</script>

<style lang="scss">
@import "~/scss/main"
</style>
