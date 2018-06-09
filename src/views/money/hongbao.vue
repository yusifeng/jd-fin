<template>
    <div>
        <div class="hongbao">

            <section>
                <p>11.7<span>%</span></p>
                <p>历史年化投资回报率</p>
                <p>签到领红包 ></p>
            </section>

            <section>
                <swiper :options="options">
                    <swiper-slide  v-for="item in items" :key="item.content">
                        <img :src="item.src" >
                        <span>{{item.content}}</span>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
                <em>></em>
            </section>
            
        </div>

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
                    direction: 'vertical',
                    slidesPerView: 1,
                    mousewheel: true,
                    autoplay: true,
                    loop: true
                },
                items: [
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t20713/235/502293123/37869/8e887a7e/5b0f9bb6N4502b45b.jpg?width=160&height=160',
                        content: '79元秒杀 冰感短裤 运动速干'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t21532/40/526689859/31723/d9a0e6c0/5b0f9b57N483591c5.jpg?width=160&height=160',
                        content: '1元立得 轻量级折叠智能电动车'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t21367/167/497961968/32377/ddc0eac2/5b0f9b67Neac6765f.jpg?width=160&height=160',
                        content: '299元秒 智能洗牙器1冲搞定'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl' 
    @import '../../css/_var.styl' 
    div
        >.hongbao
            box-sizing border-box
            padding 0 30px 0
            list(row)
            >section
                color #fff
                &:first-child
                    width 200px
                    height 200px
                    background-color $c-11
                    border-radius 10px
                    >p
                        margin-left 24px
                        &:first-child
                            height 70px
                            margin-top 24px
                            font-size 50px
                            left 70px
                            font-weight 700
                            >span 
                                font-size 20px
                        &:nth-child(2)
                            height 40px
                            width 140px
                            font-size 20px
                            nowrap()
                            border-bottom 1px solid rgba(255, 255, 255, .4)
                        &:last-child
                            font-size 24px
                            margin-top 10px
                &:last-child
                    position relative
                    width 362px
                    background-color $c-3
                    height 200px
                    margin-left 15px
                    border-radius 10px
                    overflow hidden
                    img 
                        display inline-block
                        width 160px
                        margin-left 20px
                        margin-top 20px
                    span
                        display inline-block
                        font-size 24px 
                        width 160px
                        vertical-align top
                        margin-top 20px
                        line-height 1.3
                    >em
                        position absolute
                        width 80px
                        height 80px
                        border-radius 50%
                        background-color #5ae3ff
                        bottom 18px
                        right 18px
                        line-height 80px
                        text-align center
                        &:after
                            display block
                            position absolute
                            content '为您推荐'
                            left -80px
                            top 16px
                            font-size 18px
                    
</style>
