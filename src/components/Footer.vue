<template>
    <footer>
        <Logo />
        <!-- target="_blank" 새 tab에 열리도록 -->
        <a
            href="https://github.com/coderKM"
            target="_blank"
        >
        (c) {{ new Date().getFullYear() }} K-HUB
        </a>
    </footer>

</template>


<script>
import Logo from '~/components/Logo'

export default({
    components : {
        Logo
    }
})
</script>


<style lang="scss" scoped>
@import "~/scss/main";

footer {
    padding: 70px 0;
    text-align: center;
    opacity: .3;
    .logo {
        display: block;
        margin-bottom: 4px;
    }
}

</style>