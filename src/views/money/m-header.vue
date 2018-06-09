<template>
    <div>
        <span>~</span>
        <span>赚钱</span>
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
        border-bottom 1px solid $c-6
        z-index 100
        &:after
            display block
            position absolute
            top 90px
            content ' '
            width 100%
            height 100px
            background url(https://img12.360buyimg.com/jrpmobile/jfs/t21928/85/532205786/15737/61cd4169/5b10c6c9N9e42657f.png?width=750&height=120) center center no-repeat
            background-size 100%
        span 
            &:first-child
                margin-left 30px
            &:nth-child(2)
                text-align center
                font-size 32px
            &:last-child
                margin-right 30px
</style>
