<template>
    <div class="container tracker-category-container">
        <app-loading v-if="!wrathLoaded" message="Checking off your progress!"></app-loading>
        <template v-else>
            <app-loremaster :achievements="loremaster"></app-loremaster>
            <app-loremaster :achievements="explorer"></app-loremaster>
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
                if(!this.wrathLoaded){
                    this.$store.dispatch('initWrath');
                }
            }, 100);
        },
        computed:{
            explorer(){
                return this.$store.getters.exploreWrath;
            },
            loremaster(){
                return this.$store.getters.wrathLoremaster;
            },
            wrathLoaded(){
                return this.$store.getters.wrathCompleted;
            }
        }
        
    }
</script>
<style lang="scss">
</style>
