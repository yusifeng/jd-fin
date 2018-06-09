<template>
    <panel :title="'小金库'">
        <div class="img">
            <p>4.0550<span>%</span></p>
            <p>7日年化收益</p>
            <p>支付/缴费/优质理财/大额理财</p>
            <span>开启送礼箱</span>
        </div>
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    import slide from '../../base/slide.vue'

    export default {
        components: {
            panel,
            slide
        }
    }
</script>

<style lang="stylus" scoped>
    .panel
        >.img
            position relative
            background url(https://m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png) center center no-repeat 
            width 580px
            height 200px
            background-color red
            color #fff
            box-sizing border-box
            margin 0 auto
            background-size cover
            p   
                margin-left 20px
                &:first-child
                    padding-top 24px
                    border-bottom 1px solid rgba(255, 255, 255, .2)
                    font-size 60px
                    width 280px
                    span 
                        font-size 24px
                &:nth-child(2)
                    height 34px
                    line-height 34px
                    font-size 24px
                    margin 10px 0 8px 20px
                &:nth-child(3)
                    height 34px
                    line-height 34px
                    font-size 24px
                    margin 8px 20px 4px
                    color rgba(255, 255, 255, .7)
            >span
                position absolute
                height 200px
                top 0
                right 0
                background-color blue
                width 332px
                background url(https://m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png) center center no-repeat
                background-size cover
                line-height 200px
                text-align center
                font-size 24px
                color #fff

        
                
</style>
