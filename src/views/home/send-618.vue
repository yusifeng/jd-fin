<template>
    <panel :show-title="false">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t20653/10/545368582/233132/296b2aa4/5b11063aN5a084f81.png?width=750&height=260" alt="">
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    export default {
        components: {
            panel,
        },
    }
</script>

<style lang="stylus" scoped>
    .panel
        padding-bottom 20px
        img
            width: 100%
            
</style>