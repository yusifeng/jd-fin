<template>
    <div class="slide-and-list">
        <slide :items="items" class="slide"></slide>

        <div class="row-list">
            <span v-for="itemm in itemms" :key="itemm.title">
                <router-link :to="{name: itemm.href}">
                    <img :src="itemm.src">
                    <h4>{{itemm.title}}</h4>
                </router-link>
            </span>
        </div>

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
                options: {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                items: [
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t21607/181/514045759/50983/cf24ec5d/5b101483N4c2b2a3b.jpg?width=750&height=320'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t20593/217/534012040/43436/c8d4b37b/5b1014d0N29e272ad.png?width=750&height=320'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t22348/101/520549087/42083/ed3a68c3/5b101501Na3240a30.jpg?width=750&height=320'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t20542/217/514743996/54319/feb4ed42/5b0f5985N17ffc953.jpg?width=750&height=320'
                    }
                ],
                //快速入口
                itemms: [
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                        title: '优惠券'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                        title: '领红包'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                        title: '抢钢镚'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                        title: '白条提额'
                    }
                ]
            }
        },
    }
</script>


<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
        
    .slide-and-list
        margin-top 100px
        .slide
            width 100%
        .row-list
            list(row)
            height 178px
            padding-top 40px
            justify-content space-around
            background-color #fff
            span 
                img 
                    display block
                    width 90px
                    height 90px
                    margin 0 auto
                    margin-bottom 12px
                h4
                    font-size 26px
                    text-align center
                    color $c-2
</style>
<style lang="stylus">

    .slide
        .img 
            width 100%
</style>
