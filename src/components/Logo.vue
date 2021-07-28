<template>
  <!-- <RouterLink 
    to="/"
    class="logo">
    <span>ESCAPE</span>.COM
  </RouterLink> -->
    <RouterLink 
    to="/"
    class="logoo">
    <span>ESCAPE</span>.COM
  </RouterLink>

</template>

<style lang="scss" scoped>
@import "~/scss/main";
@import url("S-Core-Dream-light/s-core-dream.css"); 

.logoo {
    font-family : "s-core-dream-light", sans-serif !important;
    font-size : 20px;
    color : $black;
    text-decoration: none;
    &:hover {
        color: $black;
    }
    span {
        color: $primary;
    }
}

.logo {
    font-family : "Oswald", sans-serif;
    font-size : 20px;
    color : $black;
    text-decoration: none;
    &:hover {
        color: $black;
    }
    span {
        color: $primary;
    }
}

</style>