<template>
  <div class="container">
    <h1>
      <span>OMDb API</span> <br />
      THE OPEN MOVIE DATABASE <br />
    </h1>
    <p>
      KKM - REST API Practice<br />
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