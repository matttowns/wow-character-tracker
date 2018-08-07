<template>
    <div class="container">
        <app-loading v-if="!draenorLoaded" message="Checking off your progress!"></app-loading>
        <template v-else>
            <app-pathfinder :pathfinder="pathfinder"></app-pathfinder>
            <app-loremaster :achievements="pathfinder[1]"></app-loremaster>
            <app-loremaster :achievements="pathfinder[0]"></app-loremaster>
        </template>
    </div>
</template>

<script>
    import Pathfinder from './Pathfinder.vue'
    import Loremaster from './Loremaster.vue'
    import Loading from './../general/Loading.vue';
    export default {
        components:{
            appPathfinder: Pathfinder,
            appLoremaster: Loremaster,
            appLoading: Loading
        },
        created(){
            this.$store.dispatch('initDraenor');
        },
        computed:{
            pathfinder(){
                return this.$store.getters.draenorPathfinder;
            },
            draenorLoaded(){
                return this.$store.getters.draenorCompleted;
            }
            
        }
        
    }
</script>

<style lang="scss">
</style>
