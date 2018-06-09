<template>
    <div>
        <heador/>
        <h-slide/>
        <send618/>
        <fina/>
        <product/>
        <insurance/>
        <life/>
        <help/>
        <footor/>
        <nav-bar :actived="0"/>
    </div>
</template>

<script>
    import heador from '../../public/header.vue'
    import hSlide from './h-slide.vue'
    import fina from './fina.vue'
    import send618 from './send-618.vue'
    import product from './product.vue'
    import insurance from './insurance.vue'
    import life from './life.vue'
    import help from './help.vue'
    import footor from '../../public/footer.vue'
    import navBar from '../../public/nav-bar.vue'

    export default {
        components: {
            heador,
            hSlide,
            send618,
            fina,
            product,
            insurance,
            life,
            help,
            footor,
            navBar
        }
    }
</script>

<style lang="stylus" scoped>

</style>
