<template>
  <div class="container">
    <h1>
      <span>탈출 프로젝트</span> <br />
      OPEN DATABASE for ESCAPE <br />
    </h1>
    <p>
      탈출을 위한 토이 프로젝트입니다.<br />
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

.container {
    padding-top: 40px;
}
h1 { 
    line-height: 1;
    font-family: "Oswald", sans-serif;
    font-size: 80px;
    span {
        color: $primary;
    } 
}
p {
    margin: 30px 0 ;
    color: $gray-600;
}

</style>