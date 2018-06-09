import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home/index.vue'
import Money from '../views/money/index.vue'
import Borrow from '../views/borrow/index.vue'
import Login from '../views/login/index.vue'
import Vip from '../views/vip/index.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/money',
            name: 'money',
            component: Money
        },
        {
            path: '/borrow',
            name: 'borrow',
            component: Borrow
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/vip',
            name: 'vip',
            component: Vip
        }
    ]
})