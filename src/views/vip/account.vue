<template>
    <div>
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
        <span>会员福利 ></span>
    </div>
</template>

<script>
    import panel from '../../base/panel.vue'
    export default {
        components: {
            panel
        }
    }
</script>


<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
    div
        background-color #fff
        list(row)
        height 140px
        justify-content space-between
        align-items center
        margin-bottom 20px solid $c-6
        >img
            width 100px
            height 100px
            margin-left 32px
        >span
            font-size 28px
            margin-right 32px
            color $c-5
</style>
