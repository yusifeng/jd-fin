<template>
    <div>
        <panel :title="'理财精选'">
            <div class="row-list">
                <div v-for="item in items" :key="item.title" class="item">
                    <h5>
                        <span>{{item.title}}</span>
                        <span v-show="item.sub">{{item.sub}}</span>
                    </h5>

                    <span>{{item.per}}</span>

                    <span>{{item.rate}}</span>
                </div>
            </div>
        </panel>
    </div>
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
                        title: '京渤随享赢',
                        sub: '90天可质押',
                        per: '5.50%',
                        rate: '历史年化收益率'
                    },
                    {
                        title: '年年赢',
                        sub: '理财推荐',
                        per: '5.10%',
                        rate: '综合年化收益率'
                    },
                    {
                        title: '建信养老飞益鑫',
                        sub: '',
                        per: '4.72%',
                        rate: '近7日年化收益'
                    },
                    {
                        title: '小白基金',
                        sub: '超短期',
                        per: '4.50%',
                        rate: '7日年化收益率'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
    div
        >.panel
            >.row-list
                list(row)
                >.item
                    list(column)
                    width 320px
                    box-sizing border-box
                    padding-left 30px
                    height 208px
                    border-bottom 1px solid $c-6
                    &:nth-child(2n-1)
                        h5, span
                            border-right 1px solid $c-6
                    h5
                        list(row)
                        font-size 0
                        height 42px
                        padding-bottom 14px
                        margin-top 32px
                        >span:first-child
                            font-size 30px
                            font-weight 600
                            line-height 42px
                        >span:last-child
                            font-size 22px
                            color $c-4 
                            margin-left 5px
                            height 30px
                            line-height 34px
                            padding 2px 3px
                            margin-top 2px
                            border 1px solid $c-4 
                    >span:nth-child(2)
                        color $c-4 
                        font-size 44px
                        line-height 58px
                        height 58px
                    >span:nth-child(3)
                        color $c-5
                        font-size 24px
                        line-height 34px
                        height 34px



</style>
