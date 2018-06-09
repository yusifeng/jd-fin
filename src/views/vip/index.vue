<template>
    <div>
        <account/>
        <active/>
        <entry/>
        <other-entry/>
        <nav-bar :actived="4"/>
    </div>
</template>

<script>
    import account from './account.vue'
    import active from './active.vue'
    import entry from './entry.vue'
    import otherEntry from './other-entry.vue'
    import NavBar from '../../public/nav-bar.vue'
    export default {
        components: {
            account,
            active,
            entry,
            otherEntry,
            NavBar,
        }
    }
</script>


