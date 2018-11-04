<template>
    <div class="container tracker-category-container">
        <app-loading v-if="!battleLoaded" message="Checking off your progress!"></app-loading>
        <template v-else>
            <app-pathfinder :pathfinder="pathfinder"></app-pathfinder>
            <app-loremaster :achievements="pathfinder.criteria[0]"></app-loremaster>
            <app-loremaster :achievements="pathfinder.criteria[1]"></app-loremaster>
            <!--<app-mage-tower ></app-mage-tower>-->
        </template>

    </div>
</template>

<script>
    import Loading from './../general/Loading.vue';
    import Pathfinder from './Pathfinder.vue'
    import Loremaster from './Loremaster.vue'
    export default {
        components:{
            appPathfinder: Pathfinder,
            appLoremaster: Loremaster,
            appLoading:Loading
        },
        created(){
            if(this.$store.getters.battlePathfinder.length == 0){
                this.$store.dispatch('initBattle');
            }
        },
        computed:{
            battleLoaded(){
                 if(this.$store.getters.battleCompleted){
                     return true;
                 }
                 return false;
            },
            pathfinder(){
                return this.$store.getters.battlePathfinder;
            }
        }
        
    }
</script>

<style lang="scss">
   
</style>

