<template>
    <panel :title="'特色推荐'">
        <ul>
            <li v-for="item in items" :key="item.src">
                <img :src="item.src" alt="">
                <p class="title">{{item.title}}</p>
                <p class="price">
                    <span class="pre">￥</span>
                    <span class="num">{{item.price}}</span>
                    <span class="up">起</span>
                </p>
                <div class="progress"><span :style="{width: getPrecentLength(item.percent)}"></span></div>
                <div class="percent">{{getPrecentNum(item.percent)}}</div>
            </li>
        </ul>
        <em>- 京东金融出品 -</em>
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    export default {
        components: {
            panel
        },
        methods: {
            getPrecentLength(num) {
                return num > 1 ? '100%' : `${num * 100}%`
            },
            getPrecentNum(num) {
                return `${Math.floor(num * 100)}%`
            }
        },
        data() {
            return {
                items: [
                    {
                        src: 'https://img30.360buyimg.com/cf/jfs/t20734/249/475064878/41240/101237b8/5b0eb898N7eb32a5a.jpg',
                        title: '腾讯全栖运动智能手表P1',
                        price: 312.00,
                        percent: .43
                    },
                    {
                        src: 'https://img30.360buyimg.com/cf/jfs/t17143/85/2578960278/14159/78321af5/5affa11aNf3847350.jpg',
                        title: '热血V8微型电单车',
                        price: 1.00,
                        percent: .63
                    },
                    {
                        src: 'https://img30.360buyimg.com/cf/jfs/t21238/195/534972237/29421/7fde4d/5b10e97eN8a5dfb7d.jpg',
                        title: '腾讯全栖运动智能手表P13',
                        price: 1.00,
                        percent: .54
                    },
                    {
                        src: 'https://img30.360buyimg.com/cf/jfs/t18568/66/2617035584/28418/4a105eff/5afebe3eNf7acbff7.jpg',
                        title: '超感透明爆米花底爆弹动力跑鞋',
                        price: 22.00,
                        percent: .93
                    },
                    {
                        src: 'https://img30.360buyimg.com/cf/jfs/t19960/235/1133282542/61873/6a77d3ca/5b14ae3eN67806ff1.jpg',
                        title: '1布去车漆刮痕-划痕传奇布',
                        price: 45.00,
                        percent: 1.23
                    },
                    {
                        src: 'https://img30.360buyimg.com/cf/jfs/t21226/276/389169737/65406/752a3c16/5b0bb9b7N25a30e47.jpg',
                        title: '超感透明爆米花底爆弹动力跑鞋',
                        price: 23.00,
                        percent: 4.23
                    },
                    {
                        src: 'https://img30.360buyimg.com/cf/jfs/t18376/175/2554556538/11164/66de5e11/5afbcd11Nf52992a6.jpg',
                        title: '咕咚智能跑鞋10K',
                        price: 177.00,
                        percent: .34
                    },
                    {
                        src: 'https://img30.360buyimg.com/cf/jfs/t21664/66/104332621/63461/8034512c/5afc2ac8Nd601ea98.png',
                        title: '新境界 更多彩·骏派CX65',
                        price: 1.00,
                        percent: .67
                    },
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
            margin-bottom 200px
            >ul
                list(row)
                justify-content space-around
                background-color $c-6
                >li
                    position relative
                    width 312px
                    height 413px
                    background-color #fff
                    margin-bottom 8px
                    >img
                        display block
                        margin 44px auto 0
                        width 228px
                    >.title
                        font-size 30px
                        padding-left 30px
                        width 286px
                        margin 30px 0
                        nowrap()
                    >.price
                        font-size 0
                        padding-left 30px
                        color $c-11
                        margin-bottom 14px
                        .pre
                            font-size 24px
                        .num
                            font-size 32px
                        .up
                            font-size 12px
                            margin-left 5px
                            color $c-5
                    >.progress
                        margin-left 30px
                        width 200px
                        height 10px
                        background-color $c-7
                        border-radius 5px
                        span
                            display block
                            height 100%
                            // width 50%
                            border-radius 5px 
                            background-image linear-gradient(270deg, rgb(255, 85, 85) 1%, rgb(255, 156, 49))
                    >.percent
                        position absolute
                        font-size 24px
                        left 240px
                        bottom 41px
                        color $c-5
            >em
                display block
                color $c-5
                text-align center
                font-size 24px
                height 100px
                line-height 100px
                background-color $c-6
                

                    
                    

</style>
