<template>
    <div class="container tracker-category-container">
        <app-loading v-if="!battleLoaded" message="Checking off your progress!"></app-loading>
        <template v-else>
            <app-pathfinder :pathfinder="pathfinder"></app-pathfinder>
            <app-loremaster :achievements="pathfinder.criteria[0]"></app-loremaster>
            <app-loremaster :achievements="pathfinder.criteria[1]"></app-loremaster>
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
        mounted(){
            setTimeout(()=>{
                if(!this.battleLoaded){
                    this.$store.dispatch('initBattle');
                }
            }, 500);

        },
        computed:{
            battleLoaded(){
                 return this.$store.getters.battleCompleted;
            },
            pathfinder(){
                return this.$store.getters.battlePathfinder;
            }
        }
        
    }
</script>

<style lang="scss">
   
</style>

