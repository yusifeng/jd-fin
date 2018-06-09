<template>
    <panel :show-title="false">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t17458/106/2515774543/37592/beef5db/5af952b3N0a4eb5ea.jpg?width=750&height=280" alt="" class="img">
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
        width 100%
        .img 
            width 100%
</style>
