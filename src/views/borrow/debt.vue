<template>
    <panel :title="'白条服务'">
        <div>
            <span></span>
            <span>
                <p>小白信用</p>
                <p>登录查看</p>
            </span>
        </div>
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    export default {
        components: {
            panel,
        }
    }
    
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
    .panel
        >div
            list(row)
            height 280px
            padding-left 13px
            // background-color red
            >span
                &:first-child
                    width 400px
                    background url(https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png) no-repeat
                    background-size auto 264px
                &:last-child
                    position relative
                    width 220px
                    background url(https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png) no-repeat
                    background-size auto 264px
                    >p
                        position absolute
                        font-size 24px
                        color #fff
                        &:first-child
                            left 60px
                            top 100px
                        &:last-child
                            color $c-10
                            left 60px
                            top 180px
                    

</style>