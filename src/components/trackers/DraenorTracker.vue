<template>
    <div class="container tracker-category-container">
        <app-loading v-if="!draenorLoaded" message="Checking off your progress!"></app-loading>
        <template v-else>
            <app-pathfinder :pathfinder="pathfinderAchievements"></app-pathfinder>
            <app-loremaster :achievements="pathfinderAchievements.criteria[1]"></app-loremaster>
            <app-loremaster :achievements="pathfinderAchievements.criteria[0]"></app-loremaster>
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
        mounted(){
            setTimeout(()=>{
                if(!this.draenorLoaded){
                    this.$store.dispatch('initDraenor');
                }
            }, 100);
        },
        computed:{
            pathfinderAchievements(){
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
