<template>
    <div class="container tracker-category-container">
        <app-loading v-if="!cataclysmLoaded" message="Checking off your progress!"></app-loading>
        <template v-else>
            <app-loremaster :achievements="loremaster"></app-loremaster>
            <app-loremaster :achievements="explorer"></app-loremaster>
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
                if(!this.cataclysmLoaded){
                    this.$store.dispatch('initCataclysm');
                }
            }, 100);
        },
        computed:{
            explorer(){
                return this.$store.getters.exploreCataclysm;
            },
            loremaster(){
                return this.$store.getters.cataclysmLoremaster;
            },
            cataclysmLoaded(){
                return this.$store.getters.cataclysmCompleted;
            }
        }
        
    }
</script>

<style lang="scss">
</style>
