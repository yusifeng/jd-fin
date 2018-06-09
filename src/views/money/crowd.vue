<template>
    <panel :title="'京东众筹'">
        <div>
            <section>
                <p>0.01元</p>
                <p>抢好礼</p>
                <p>立即抢购</p>
                <span>今日推荐</span>
            </section>
            <ul>
                <li v-for="item in items" :key="item.src">
                    <img :src="item.src">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    export default {
        components: {
            panel
        },
        data() {
            return {
                items: [
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9739/355/2223965438/3092/b3cc4062/59f2fef3Nc2363e64.png?width=56&height=56',
                        title: '京东出众'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t10882/187/2325566882/2968/e64c911c/59f2ff2cNd85eb522.png?width=56&height=56',
                        title: '手机优惠'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t11674/229/560588342/2307/d88f9fd7/59f2ff5eNcac8d195.png?width=56&height=56',
                        title: '领神券'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t10018/213/2260133396/2902/107476f0/59f2ff70N35c5d0bb.png?width=56&height=56',
                        title: '智能首发'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t7552/255/3352153359/2695/fc610922/59f2ff88N95232a40.png?width=56&height=56',
                        title: '舌尖美味'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9523/348/2258037555/2792/9e8e1a80/59f2ff9fNf9648450.png?width=56&height=56',
                        title: '轻时尚'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/layout.styl'
    @import '../../css/_var.styl'
    .panel
        box-sizing border-box 
        padding 0 30px
        >div
            list(row)
            >section
                text-align center
                position relative
                width 212px
                height 260px
                margin-right 16px
                box-shadow 0 0 20px 1px rgba(101,118,155,.15)
                p
                    &:first-child
                        font-size 50px
                        height 62px
                        line-height 62px
                        color $c-9
                        margin-top 62px
                    &:nth-child(2)
                        font-size 24px
                        height 34px
                        line-height 34px
                        color #000
                        margin-bottom 24px
                    &:nth-child(3)
                        font-size 24px
                        height 50px
                        width 140px
                        line-height 50px
                        color #fff
                        margin 0 auto
                        border-radius 25px
                        background-color $c-9
                >span
                    position absolute
                    font-size 24px
                    line-height 32px
                    width 120px
                    height 32px
                    top 0
                    left 0
                    background-color #000
                    color #fff

            ul
                list(row)
                height 260px
                width 350px
                box-shadow 0 0 20px 1px rgba(101,118,155,.15)
                li
                    width 33.333333%
                    height 130px
                    box-sizing border-box
                    text-align center
                    >img 
                        width 56px
                        height 56px
                        padding-top 20px
                    >p
                        font-size 22px
                        text-align center
                        width 75px
                        margin 5px auto
                        nowrap()

</style>
