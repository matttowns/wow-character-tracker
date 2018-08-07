<template>
    <div class="container">
        <app-loremaster :achievements="loremaster"></app-loremaster>
        <app-loremaster :achievements="explorer"></app-loremaster>
    </div>
</template>

<script>
    import Pathfinder from './Pathfinder.vue'
    import Loremaster from './Loremaster.vue'
    
    export default {
        components:{
            appPathfinder: Pathfinder,
            appLoremaster: Loremaster
        },
        created(){
            if(this.$store.getters.exploreOutland.length == 0){
                this.$store.dispatch('initOutland');
            }
        },
        computed:{
            explorer(){
                return this.$store.getters.exploreOutland;
            },
            loremaster(){
                return this.$store.getters.outlandLoremaster;
            },
        }
        
    }
</script>

<style lang="scss">
</style>
