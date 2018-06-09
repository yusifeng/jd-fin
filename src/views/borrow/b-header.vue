<template>
    <div>
        <span>~</span>
        <span>借钱</span>
        <span>···</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
    div
        list(row)
        position fixed
        left 0
        right 0
        top 0
        height 90px
        background-color #fff
        justify-content space-between
        line-height 90px
        color $c-13
        border-bottom 1px solid $c-8
        z-index 100
        span 
            &:first-child
                margin-left 30px
            &:nth-child(2)
                text-align center
                font-size 32px
            &:last-child
                margin-right 30px
</style>
