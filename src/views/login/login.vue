<template>
    <div>
        <section @click="chooseItem">
            <span :class="{'active': this.actived == 0}">账号密码登录</span>
            <span :class="{'active': this.actived == 1}">短信验证码登录</span>
        </section>

        <div class="account" v-show="actived == 0">
            <span>
                <label for="">账号</label>
                <input type="text" placeholder="用户名/邮箱/已验证手机">
            </span>
            <span>
                <label for="">密码</label>
                <input type="password" placeholder="请输入密码">
                <p></p>
            </span>
        </div>

        <div class="message" v-show="actived == 1">
            <span>
                <p class="pre">+ 86</p>
                <input type="text" placeholder="请输入手机号" v-bind="tel">
                <p class="verifi" @click="verifi">{{verifiContent}}</p>
            </span>
            <span>
                <input type="text" placeholder="请输入收到的验证码">
            </span>
        </div>
        
        <div class="login">
            <p class="notice"></p>
            <span>登录</span>
            <span>一键登录</span>
            <div class="forget">
                <span><i class="forget-password"></i>忘记密码</span>
                <span><i class="quickly-sign"></i>手机快速注册</span>
            </div>
        </div>
        <div class="other-login">
            <span>其他登录方式</span>
            <p class="way">
                <i class="qq"></i>
                <i class="wechat"></i>
            </p>
            <p class="deal">登录即代表您已同意<a href="">京东隐私政策</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actived: 0,
                content: '获取验证码',
                tel: '',
                count: 60,
                flag: false
            }
        },
        methods: {
            chooseItem(e) {
                e.preventDefault()
                if (e.target.innerHTML === '账号密码登录') this.actived = 0
                if (e.target.innerHTML === '短信验证码登录') this.actived = 1
            },
            verifi() {
                if (!this.flag) {
                    this.flag = true
                    this.timer = setInterval(() => {
                        this.count --
                        if (this.count == 0) {
                            clearInterval(this.timer)
                            this.flag = false
                            this.count = 60
                        }
                    }, 1000)
                } else {
                    return 
                }
            }
        },
        computed: {
            verifiContent() {
                if (!this.flag) {
                    return this.content
                } else {
                    return `剩余${this.count}s`
                }
            }
        }
    }
</script>


<style lang="stylus" scoped>
    @import '../../css/element.styl'
    @import '../../css/_var.styl'
    div
        background-color #fff
        // height 100vh
        >section
            height 90px
            border-bottom 1px solid $c-8
            list(row)
            >span
                text-align center
                width 50%
                line-height 90px
                font-size 28px
                color #333
                &.active
                    border-bottom 1px solid $c-4
        >.account
            list(column)
            >span
                list(row)
                height 95px
                width 90%
                border-bottom 1px solid $c-8
                margin 0 auto
                >label
                    width 120px
                    line-height 95px
                    font-size 28px
                >input
                    background-color transparent
                    font-size 28px
                    width 390px
                >p
                    width 60px
                    height 40px
                    background url(https://plogin.m.jd.com/st_new/img/hide_password.png) no-repeat
                    background-size cover
                    margin-top 30px
        >.message
            list(column)
            >span
                list(row)
                height 95px
                width 576px
                border-bottom 1px solid $c-8
                margin 0 auto
                &:first-child
                    list(row)
                    line-height 95px
                    font-size 28px
                    text-align center
                    >.pre
                        width 124px
                        font-size 28px
                    >input
                        width 216px
                        background-color transparent
                    >.verifi
                        width 235px
                        height 45px
                        line-height 45px
                        margin-top 25px
                        border-left 1px solid $c-8
                &:last-child
                    >input
                        background-color transparent
                        font-size 28px
        >.login
            list(column)
            font-size 24px
            width 576px
            // background-color red
            margin 0 auto
            text-align center
            >.notice
                height 60px
            >span
                height 90px
                line-height 90px
                border-radius 10px
                &:nth-child(2)
                    background-color $c-7
                    color #848689
                    margin-bottom 20px
                &:nth-child(3)
                    background-color #fff
                    color red
                    border 1px solid red
        >.forget
            height 44px
            margin-top 40px
            list(row)
            justify-content space-between
            line-height 44px
            >span
                .forget-password
                    display inline-block
                    width 44px
                    height 44px
                    background url(https://plogin.m.jd.com/st_new/img/iconBg.png) no-repeat
                    vertical-align top
                    background-position 0 -44px
                    background-size 100% auto
                .quickly-sign
                    display inline-block
                    width 44px
                    height 44px
                    background url(https://plogin.m.jd.com/st_new/img/iconBg.png) no-repeat
                    vertical-align top
                    background-position 0 -84px
                    background-size 100% auto
        >.other-login
            position relative
            width 576px
            margin 0 auto
            // height 400px
            margin-top 210px
            border-top 1px solid $c-8
            >span
                position absolute
                display block
                top -22px
                left 0
                right 0
                margin 0 auto
                font-size 24px
                text-align center
                line-height 44px
                width 240px
                height 44px
                background-color #fff
            >.way
                list(row)
                justify-content space-around
                margin-top 100px
                i
                    width 44px
                    height 46px
                    background url(https://plogin.m.jd.com/st_new/img/iconBg.png) no-repeat
                    background-size 100% auto
                .qq
                    background-position 0 -256px
                .wechat
                    background-position 0 -304px
            >.deal
                font-size 24px
                text-align center
                margin-top 50px
                padding-bottom 250px
                >a
                    text-decoration underline
                    color #000


                    



            
</style>
