<template>
    <div :class="[panelClass]">
        <h4 v-show="showTitle">- {{title}} -</h4>
        <slot/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                panelClass: 'panel'
            }
        },
        props: {
            cName: {
                type: String, 
                default: ''
            },
            title: {
                type: String, 
                default: 'Default Title'
            },
            showTitle: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../css/element.styl'
    
    .panel
        panel()
        margin 20px 0 20px
</style>