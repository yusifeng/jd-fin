<template>
    <div>
        <l-header/>
        <login/>
        <!-- <nav-bar :actived="3"/> -->
    </div>
</template>

<script>
    import lHeader from './l-header.vue'
    import login from './login.vue'
    import NavBar from '../../public/nav-bar.vue'
    export default {
        components: {
            lHeader,
            login,
            NavBar
        }
    }
</script>

