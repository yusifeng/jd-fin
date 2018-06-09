<template>
    <div>
        <span @click="back">></span>
        京东登录
    </div>
</template>

<script>
    export default {
        methods: {
            back() {
                window.history.go(-1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/_var.styl'
    div
        position relative
        height 90px
        text-align center
        line-height 90px
        border-bottom 1px solid $c-7
        background-color #fff
        color $c-2
        >span
            position absolute
            left 0
            top 0
            width 90px
            height 90px
            font-size 40px
            line-height 90px
</style>
