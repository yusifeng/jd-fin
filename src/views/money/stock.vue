<template>
    <panel :title="'股票'">
        <ul>
            <li>
                <p>356.36<span>%</span></p>
                <p>累计收益排行榜</p>
                <img src="http://img30.360buyimg.com/jr_image/jfs/t5848/216/253631918/136369/1894b4a7/591e5567Ncfb35e99.jpg" alt="">
                <span class="right">></span>
                <div class="niuren">牛人</div>
                <div class="zanyu">zangyu</div>
            </li>
            <li>
                <p>竞猜大盘涨跌</p>
                <p>赢500钢镚</p>
                <span>></span>
            </li>
        </ul>
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
        >ul
            list(row)
            padding 0 30px
            justify-content space-between
            li
                &:first-child
                    position relative
                    width 282px
                    height 200px
                    background url(https://img12.360buyimg.com/jrpmobile/jfs/t8767/137/977390432/7475/e5acd251/59ba3a31Ncbd06cac.jpg?width=335&height=200) center center no-repeat
                    background-size cover
                    >img
                        width 90px
                        height 90px
                        border-radius 50%
                        position absolute
                        left 16px
                        top 16px
                    >p
                        color #fff
                        padding-left 115px
                        &:first-child
                            font-size 36px
                            height 52px
                            line-height 52px
                            padding-top 26px
                            >span
                                font-size 24px
                        &:nth-child(2)
                            font-size 22px
                            margin-top 2px


                    >.right
                        position absolute
                        right 20px
                        bottom 20px
                        width 50px
                        height 50px
                        border-radius 50%
                        line-height 50px
                        font-size 26px
                        text-align center
                        background-color #fff
                        color #000
                    >.niuren
                        position absolute
                        right 170px
                        bottom 30px
                        width 60px
                        height 30px
                        line-height 30px
                        font-size 24px
                        text-align center
                        background-image linear-gradient(-90deg,$c-11,$c-4)
                        color #fff
                    >.zanyu
                        position absolute
                        right 100px
                        bottom 30px
                        width 60px
                        height 30px
                        line-height 30px
                        font-size 24px
                        text-align center
                        color #fff
                &:last-child
                    position relative
                    width 282px
                    height 200px
                    background url(https://img12.360buyimg.com/jrpmobile/jfs/t15661/192/2386880166/5534/2d3f9dfd/5aa7310bN2f099f7a.jpg?width=335&height=200) center center no-repeat
                    background-size cover
                    >p  
                        color #fff
                        padding-left 38px
                        &:first-child
                            padding-top 26px
                            width 226px
                            height 52px
                            line-height 52px
                            font-size 36px
                        &:nth-child(2)
                            width 226px

                            font-size 24px
                    >span
                        position absolute
                        right 20px
                        bottom 20px
                        width 50px
                        height 50px
                        border-radius 50%
                        line-height 50px
                        font-size 26px
                        text-align center
                        background-color rgba(255, 255, 255, 1)
                        color $c-4
                        &:after
                            content: '立即前往'
                            display block
                            position absolute
                            right 50px
                            bottom 6px
                            width 120px
                            height 30px
                            line-height 30px
                            font-size 24px
                            text-align center
                            color #fff

                    
</style>
