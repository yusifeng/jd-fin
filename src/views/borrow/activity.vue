<template>
    <panel :title="'精品活动'">
        <div class="imgs">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20620/150/260030723/15028/e868cb0d/5b079963N65616e9a.png?width=376&height=264" alt="">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t18901/214/2385188321/64672/bf6f1441/5af16613N5423430b.png?width=376&height=264" alt="">
        </div>
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t16675/365/91110617/54621/c0042c09/5a5c87faNd161d42e.png?width=730&height=264" alt="">
    </panel>
</template>

<script>
    import panel from '../../base/panel.vue'
    export default {
        components: {
            panel,
        },
        data() {
            return {
            }
        },
    }
    
</script>

<style lang="stylus" scoped>
    @import '../../css/element.styl'
    .panel
        padding-bottom 150px
        >.imgs
            list(row)
            >img
                width 320px
                height 226px
        >img
            width 100%
</style>