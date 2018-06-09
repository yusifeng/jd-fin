<template>
    <div class="licai">
        <p>稳健灵活 定期理财</p>
        <swiper :options="options" class="slide">

            <swiper-slide v-for="item in items" :key="item.title">
                <dl class="item">
                    <dt>{{item.title}}</dt>
                    <dd>{{item.sub}}</dd>
                    <dd>{{item.num}}<span>%</span></dd>
                    <dd>{{item.rate}}</dd>
                </dl>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                options: {
                    slidesPerView: 2.6,
                    spaceBetween: 20,
                    freeMode: true,
                },
                items: [
                    {
                        title: '年年盈利',
                        sub: '金融专享',
                        num: '5.08',
                        rate: '近七日年化收益率'
                    },
                    {
                        title: '周盈利',
                        sub: '理财优选',
                        num: '5.04',
                        rate: '近七日年化收益率'
                    },
                    {
                        title: '双年赢',
                        sub: '2年可赎回',
                        num: '6.00',
                        rate: '历史年化投资回报率'
                    },
                    {
                        title: '随享盈',
                        sub: '质押贷款',
                        num: '5.50',
                        rate: '历史年化结算利率'
                    },
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/_var.styl'
    .licai
        background-color #fff
        >p
            height 100px
            margin-left 30px
            font-size 28px
            line-height 100px
        .slide
            padding 0 30px
        .item
            width 150px
            height 260px
            padding 0 30px
            box-shadow 0 0 20px 1px rgba(101,118,155,.15)
            z-index 100
            >dt
                font-size 32px
                padding 38px 0 10px
            >dd
                &:nth-child(2)
                    width 100px
                    height 32px
                    font-size 24px
                    border-radius 16px
                    line-height 32px
                    text-align center
                    color #fff
                    background-color blue
                &:nth-child(3)
                    font-size 50px
                    height 60px
                    line-height 60px
                    color $c-12
                    margin-top 5px
                    >span
                        font-size 32px
                &:nth-child(4)
                    font-size 24px
                    height 28px
                    line-height 28px
                    margin-top 10px
                    color $c-5

</style>


