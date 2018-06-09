<template>
    <panel :title="'保险保障'">
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
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260'
                    },
                    {
                        href: 'home',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260'
                    },
                    {
                        href: 'home',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260'
                    },
                    {
                        href: 'home',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260'
                    },
                    {
                        href: 'home',
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .panel
        position relative
        padding-bottom 30px
        .slide
            box-sizing border-box
            padding 0 30px      
</style>
