<template>
    <div class="container tracker-category-container">
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
            if(this.$store.getters.pathfinder.length == 0){
                this.$store.dispatch('initPandaria');
            }
        },
        computed:{
            explorer(){
                return this.$store.getters.pandariaExplorer;
            },
            loremaster(){
                return this.$store.getters.pandariaLoremaster;
            },
        }
        
    }
</script>

<style lang="scss">
</style>


