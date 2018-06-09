<template>
    <div>
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t18631/176/1296661704/41624/f193c3f6/5ac2e521N06980907.png?width=750&height=200" class="img">
        <p>热销保险</p>
        <slide :options="options" :items="items" class="slide"/>
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
                    slidesPerView: 2.8,
                    spaceBetween: 10,
                    freeMode: true,
                },
                items: [
                    {
                        href: 'money',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260'
                    },
                    {
                        href: 'money',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260'
                    },
                    {
                        href: 'money',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260'
                    },
                    {
                        href: 'money',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    div
        background-color #fff
        >.img
            width 100%
        >p
            height 100px
            margin-left 30px
            font-size 28px
            line-height 100px
        .slide
            padding 0 30px
</style>
