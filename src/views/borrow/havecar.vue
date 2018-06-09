<template>
    <panel :title="'有车有钱'">
        <div class="imgs">
            <!-- <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20620/150/260030723/15028/e868cb0d/5b079963N65616e9a.png?width=376&height=264" alt=""> -->
            <!-- <img src="https://img12.360buyimg.com/jrpmobile/jfs/t18901/214/2385188321/64672/bf6f1441/5af16613N5423430b.png?width=376&height=264" alt=""> -->
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20908/337/627708226/28636/c40fca33/5b14a506N28514790.png?width=375&height=233" alt="">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
        </div>
        <ul>
            <li v-for="item in items" :key="item.title">
                <img :src="item.src" alt="">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    export default {
        components: {
            panel,
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
                    },
                ]
            }
        },
    }
    
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    .panel
        >.imgs
            list(row)
            margin-bottom 40px
            >img
                width 320px
                height 226px
        >ul
            list(row)
            padding 0 30px
            li
                width 20%
                text-align center
                >img
                    width 77px
                    height 77px
                    margin-bottom 17px
                >p
                    font-size 24px
                    margin-bottom 30px

</style>