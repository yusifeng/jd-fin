<template>
    <panel :title="'众筹新品'">
        <span class="sub-title">更多尖货 ></span>
        <slide :items="items" :options="options" class="slide"/>
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    import slide from '../../base/slide.vue'

    export default {
        components: {
            panel,
            slide
        },
        data() {
            return {
                options: {
                    slidesPerView: 2.3,
                    spaceBetween: 10,
                    freeMode: true
                },
                items: [
                    {
                        href: 'home',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t21559/102/59104594/47942/f8d9e459/5af9055dN55aa9554.jpg?width=335&height=421'
                    },
                    {
                        href: 'home',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t21364/117/63805922/48719/7d9b8fb4/5af9056aN106a173e.jpg?width=335&height=421'
                    },
                    {
                        href: 'home',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t16717/179/2537323270/43542/a5a5e4c/5af90576Ndba39333.jpg?width=335&height=421'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t16717/179/2537323270/43542/a5a5e4c/5af90576Ndba39333.jpg?width=335&height=421'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/_var.styl'
    .panel
        position relative
        padding-bottom 30px
        .sub-title
            position absolute
            top 43px
            right 40px
            color $c-5
            font-size 28px
        .slide
            box-sizing border-box
            padding 0 30px      
</style>
