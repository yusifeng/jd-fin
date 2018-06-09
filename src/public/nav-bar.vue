<template>
    <ul>
        <li v-for="(item, index) in items" :key="item.title">
            <router-link :to="{name: routerORM[index]}" >
                <img :src="index == actived ? item.activedSrc : item.normalSrc">
                <span :class="{'actived': index == actived}">{{item.title}}</span>
            </router-link>
        </li>

    </ul>
</template>

<script>
    export default {
        props: {
            actived: {
                type: Number,
                default: 0
            },
            
        },
        data() {
            return {
                items: [
                    {
                        normalSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t17587/158/1300523690/1908/eabacaac/5ac4850bNdf876dd8.png?width=60&height=60',
                        activedSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t17650/174/1729132233/4020/2b09fc25/5ad6aac4N620fbed1.png?width=60&height=60',
                        title: '首页'
                    },
                    {
                        normalSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60',
                        activedSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t9922/341/1927418106/3391/75795250/59e9d7e9N1289d306.png?width=60&height=60',
                        title: '赚钱'
                    },
                    {
                        normalSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60',
                        activedSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t10717/7/1897882784/3005/9f66e191/59e9d826Nadb4e6db.png?width=60&height=60',
                        title: '借钱'
                    },
                    {
                        normalSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&height=56',
                        activedSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t19663/262/787103169/1654/ffffd4b/5aaa44adN4d5e3560.png?width=56&height=56',
                        title: '省钱'
                    },
                    {
                        normalSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60',
                        activedSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t11191/356/198417818/3320/c18da9bd/59e9d86aN8d1daea3.png?width=60&height=60',
                        title: '金融会员'
                    }
                ],
                routerORM: {
                    '0': 'home',
                    '1': 'money',
                    '2': 'borrow',
                    '3': 'login',
                    '4': 'vip'
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../css/element.styl'
    @import '../css/_var.styl'
    ul
        position fixed
        z-index 100
        height 100px
        padding-top 12px
        box-sizing border-box
        left 0
        right 0
        bottom 0
        list(row)
        text-align center
        background-color #fff
        box-shadow rgba(0, 0, 0, 0.067451) 0px -3px 4px 0px
        li
            width 20%
            img
                width 44px
                height 44px
                margin-bottom 6px
            span
                display block
                font-size 22px
                color $c-5
            .actived
                color $c-3

                
</style>
