<template>
    <panel :title="'白条'">
        <div>
            <section>
                <p></p>
                <p>小白信用分</p>
                <p>免费领取</p>
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
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56',
                        title: '白条'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56',
                        title: '还款'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56',
                        title: '一元抢卷'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56',
                        title: '小白卡'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56',
                        title: '金条'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56',
                        title: '校园'
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
                        color $c-10
                        margin-bottom 24px
                    &:nth-child(3)
                        font-size 24px
                        height 50px
                        width 140px
                        line-height 50px
                        color #fff
                        margin 0 auto
                        border-radius 25px
                        background-color $c-10
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
                        margin 5px auto

</style>
