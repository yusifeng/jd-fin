<template>
    <div class="header">
        <span>注册 | 登录</span>
        <p>APP下载</p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" scoped>
    @import '../css/_var.styl'
    .header
        position fixed
        top 0
        left 0
        right 0
        z-index 100
        display flex
        justify-content space-between
        line-height 100px
        color $c-2
        background url(https://m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat
        background-color $c-1
        background-size auto 56px
        span 
            margin-left 20px
            font-size 28px
        p
            height 56px
            width 120px
            margin-top 20px
            margin-right 20px
            line-height 56px
            font-size 24px
            color #fff
            background-color $c-4 
            border-radius 5px
            text-align center
        
</style>
