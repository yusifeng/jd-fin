<template>
    <swiper :options="options">
        <swiper-slide v-for="item in items" :key="item.src">
            <router-link :to="{name: item.href}">
                <img :src="item.src" class="img">
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        props: {
            options: {
                type: Object, 
                default: function() {
                    return {
                        autoplay: true,
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    }
                }
            },
            items: {
                type: Array,
                default() {
                    return [
                        {
                            href: '',
                            src: ''
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
</style>
