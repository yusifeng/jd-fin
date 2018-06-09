<template>
    <div class="wrapper">
        <div class="banner">
            <p>最高可借</p>
            <p><span>¥ </span>300,000</p>
            <p>立即登录</p>
        </div>
        <slide :items="items" :options="options" class="slide"/>
    </div>
</template>

<script>
    import slide from '../../base/slide.vue'
    export default {
        components: {
            slide
        },
        data() {
            return {
                items: [
                    {
                        href: 'borrow',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t21361/346/663452655/42385/9afb7859/5b14a3f2N18083199.png?width=690&height=154'
                    },
                    {
                        href: 'borrow',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t21451/11/663818125/20878/df33661/5b14a278N23660196.png?width=690&height=154'
                    },
                    {
                        href: 'borrow',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t22072/233/648040721/47959/d088c37f/5b14a442Naf104719.png?width=690&height=154'
                    },
                    {
                        href: 'borrow',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t19996/30/1174447481/75580/55021fb8/5b1665e5N0ad5c088.png?width=690&height=154'
                    },
                    {
                        href: 'borrow',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t20737/241/697476738/57257/ce60a559/5b149bb1Nf0fca0cf.png?width=690&height=154'
                    }
                ],
                options: {
                    autoplay: true,
                    loop: true,
                    speed: 2000,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        margin-top 90px
        background url(https://m.jr.jd.com/vip/borrowMoney/css/i/bj.png) no-repeat
        background-size 100% auto
        background-color #fff
        >.banner
            box-sizing border-box
            color #fff
            height 400px
            background url(https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png) center 50px no-repeat
            background-size 90%
            padding-top 110px
            padding-left 100px
            >p
                &:first-child
                    font-size 28px
                    margin-bottom 10px
                &:nth-child(2)
                    text-shadow 0 9px 9px rgba(63,39,0,.2);
                    font-family DINAlternate-Bold
                    font-size 75px
                    margin-bottom 20px
                    >span
                        font-size 50px
                &:nth-child(3)
                    width 200px
                    height 60px
                    background url(https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png) center center no-repeat
                    background-size cover
                    line-height 60px
                    font-size 28px
                    text-align center
        >.banner
            margin-top 0

</style>
<style lang="stylus">
    .slide
        .img
            width 100%
</style>

