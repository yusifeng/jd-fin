<template>
    <div class="licai">
        <p>银行+</p>
        <slide :options="options" :items="items" class="slide"/>
    </div>
</template>

<script>
    import slide from '../../base/slide.vue'
    export default {
        components: {
            slide,
        },
        data() {
            return {
                options: {
                    slidesPerView: 2.4,
                    spaceBetween: 10,
                    freeMode: true,
                },
                items: [
                    {
                        href: 'money',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t22351/46/468691687/54839/566f2420/5b0e8c3dN3d9eae8f.png?width=210&height=260'
                    },
                    {
                        href: 'money',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t20416/47/459375708/56607/9dcaae92/5b0e8c47N9e1062b9.png?width=210&height=260'
                    },
                    {
                        href: 'money',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t20932/91/398259572/57435/4db3bbaf/5b0cb61fNbf75c6a7.png?width=210&height=260'
                    },
                    {
                        href: 'money',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t20989/100/406614692/55449/82b4d1ce/5b0cb651Nd96e4915.png?width=210&height=260'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .licai
        background-color #fff
        >p
            height 100px
            margin-left 30px
            font-size 28px
            line-height 100px
        .slide
            padding 0 30px


</style>


