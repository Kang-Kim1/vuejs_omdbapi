<template>
  <Header />
  <!-- URI 기반 routes/index.js에 정의된 Component 출력 -->
  <RouterView />
  <Footer />
</template>



<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}

</script>

<style lang="scss">
@import "~/scss/main"
</style>
