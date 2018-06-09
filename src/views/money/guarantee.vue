<template>
    <panel :title="'保险保障'">
        <div>
            <section>
                <p>100万</p>
                <p>财产安全险</p>
                <p>免费领取</p>
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
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56',
                        title: '车险'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56',
                        title: '人寿'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56',
                        title: '意外'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56',
                        title: '财产'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56',
                        title: '健康'
                    },
                    {
                        href: 'moneny',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56',
                        title: '旅行'
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
