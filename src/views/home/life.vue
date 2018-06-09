<template>
    <panel :title="'life'" :show-title="false">
        <ul>
            <li v-for="item in items" :key="item.title">
                <img :src="item.src" alt="">
                <span>{{item.title}}</span>
            </li>
        </ul>
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
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90',
                        title: '旅游'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
                        title: '医美'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
                        title: '房抵贷'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
                        title: '驾校'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
                        title: '分期用'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
    @import '../../css/layout.styl'
    .panel
        ul  
            list(row)
            padding 20px 0 10px
            li
                text-align center
                width 20%
                img
                    width 90px
                    height 90px
                span
                    font-size 26px
                    color $c-2
                    margin-top 12px
                    nowrap()
</style>
