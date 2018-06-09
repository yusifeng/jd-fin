<template>
    <div>
        <m-header/>
        <m-slide/>
        <hongbao/>
        <open618/>
        <xiaojinku/>
        <licai/>
        <bank/>
        <crowd/>
        <guarantee/>
        <free120/>
        <adv1/>
        <debt/>
        <stock/>
        <special/>
        <nav-bar :actived="1"/>
    </div>
</template>

<script>
    import mHeader from './m-header.vue'
    import mSlide from './m-slide.vue'
    import hongbao from './hongbao.vue'
    import open618 from './open-618.vue'
    import xiaojinku from './xiaojinku.vue'
    import licai from './licai.vue'
    import bank from './bank.vue'
    import crowd from './crowd.vue'
    import guarantee from './guarantee.vue'
    import free120 from './free-120.vue'
    import adv1 from './adv-1.vue'
    import debt from './debt.vue'
    import stock from './stock.vue'
    import special from './special.vue'
    import navBar from '../../public/nav-bar.vue'
    export default {
        components: {
            mHeader,
            mSlide,
            hongbao,
            open618,
            xiaojinku,
            licai,
            bank,
            crowd,
            guarantee,
            free120,
            adv1,
            debt,
            stock,
            special,
            navBar,
        }
    }
</script>

<style scoped>

</style>