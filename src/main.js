// import './js/hotcss1.js'
import './css/reset.css'
import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App.vue'
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)




//移动端300毫秒延迟
fastclick.attach(document.body)


Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
})