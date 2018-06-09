<template>
    <panel :show-title="false">
        <ul>
            <li v-for="item in items" :key="item.title">
                <i>
                    <img :src="item.src">
                </i>
                <span>{{item.title}}</span>
                <p>{{item.sub}} ></p>
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
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70',
                        title: '我的资产',
                        sub: '查看全部资产'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70',
                        title: '我的优惠卷',
                        sub: '查看全部'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90',
                        title: '我的金币',
                        sub: '赚金币兑好礼'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90',
                        title: '我的金条',
                        sub: '查看额度'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70',
                        title: '我的借钱',
                        sub: '查看全部产品'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70',
                        title: '我的白条',
                        sub: '去提额'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70',
                        title: '我的众筹',
                        sub: '查订单/物流'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70',
                        title: '我的保障',
                        sub: '全方位保障'
                    },
                    
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
    .panel
        >ul
            list(column)
            >li
                list(row)
                height 112px
                >i
                    display flex
                    width 112px
                    align-items center
                    justify-content center
                    >img
                        
                        width 48px
                        height 48px

                >span
                    font-size 32px
                    width 280px
                    line-height 112px
                    color $c-13
                    border-bottom 1px solid $c-1
                >p
                    position relative
                    font-size 28px
                    line-height 112px
                    color $c-5
                    margin-right 0
                    width 200px
                    text-align right
                    border-bottom 1px solid $c-1
</style>
