<template>
    <panel :show-title="false">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t19756/137/1902911799/17823/e19ffe7b/5add9511Nf6984e89.jpg?width=750&height=200" class="img">
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
        .img
            width 100%
            padding-bottom 30px
</style>
