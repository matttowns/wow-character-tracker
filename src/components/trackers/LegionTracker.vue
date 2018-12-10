<template>
    <div class="container tracker-category-container">
        <app-loading v-if="!legionLoaded" message="Checking off your progress!"></app-loading>
        <template v-else>
            <app-pathfinder :pathfinder="pathfinder"></app-pathfinder>
            <app-loremaster :achievements="pathfinder.criteria[1]"></app-loremaster>
            <app-loremaster :achievements="pathfinder.criteria[0]"></app-loremaster>
            <app-loremaster :achievements="argus"></app-loremaster>
            <app-loremaster :achievements="classMount"></app-loremaster>
            <!--<app-mage-tower ></app-mage-tower>-->
            <app-brawlers-guild></app-brawlers-guild>
        </template>

    </div>
</template>

<script>
    import Loading from './../general/Loading.vue';
    import Pathfinder from './Pathfinder.vue'
    import Loremaster from './Loremaster.vue'
    import MageTower from './MageTower.vue'
    import BrawlersGuild from './BrawlersGuild.vue'
    export default {
        components:{
            appPathfinder: Pathfinder,
            appLoremaster: Loremaster,
            appMageTower: MageTower,
            appBrawlersGuild: BrawlersGuild,
            appLoading:Loading
        },
        mounted(){
            setTimeout(()=>{
                if(!this.legionLoaded){
                    this.$store.dispatch('initLegion');
                }
            }, 100);
        },
        computed:{
            legionLoaded(){
                 if(this.$store.getters.legionCompleted){
                     return true;
                 }
                 return false;
            },
            pathfinder(){
                return this.$store.getters.legionPathfinder;
            },
            argus(){
                return this.$store.getters.argus;
            },
            classMount(){
                return this.$store.getters.classMount;
            }
        }
        
    }
</script>

<style lang="scss">
   
</style>

