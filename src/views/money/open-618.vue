<template>
    <panel :show-title="false">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20524/322/531474599/27814/d1963fe5/5b10a597Nd5e6611a.jpg?width=750&height=260" alt="">
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    export default {
        components: {
            panel
        }
    }
</script>

<style lang="stylus" scoped>
    .panel
        
        img 
            width 100%
</style>
