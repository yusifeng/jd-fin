<template>
    <div>
        <b-header/>
        <banner/>
        <havecar/>
        <debt/>
        <activity/>
        <nav-bar :actived="2"/>
    </div>
</template>

<script>
    import bHeader from './b-header.vue'
    import banner from './banner.vue'
    import havecar from './havecar.vue'
    import debt from './debt.vue'
    import activity from './activity.vue'
    import footor from '../../public/footer.vue'
    import navBar from '../../public/nav-bar.vue'

    export default {
        components: {
            bHeader,
            banner,
            havecar,
            debt,
            activity,
            footor,
            navBar
        }
    }
</script>

<style lang="stylus" scoped>

</style>
