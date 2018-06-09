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
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70',
                        title: '实名认证',
                        sub: '',
                        margin: '20px 0'
                    },
                    {
                        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70',
                        title: '帮助中心',
                        sub: '',
                        margin: '20px 0'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
    .panel
        margin-bottom 100px
        >ul
            list(column)
            >li
                list(row)
                height 112px
                border-bottom 20px solid $c-1
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