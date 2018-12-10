<template>
    <div class="container tracker-category-container">
        <app-loading v-if="!pandariaLoaded" message="Checking off your progress!"></app-loading>
        <template v-else>
            <app-loremaster :achievements="loremaster"></app-loremaster>
            <app-loremaster :achievements="greenFire" v-if="classId==9"></app-loremaster>
            <!--<app-loremaster :achievements="explorer"></app-loremaster>-->
        </template>
    </div>
</template>

<script>
    import Pathfinder from './Pathfinder.vue'
    import Loremaster from './Loremaster.vue'
    import Loading from './../general/Loading.vue';
   
    export default {
        components:{
            appLoremaster: Loremaster,
            appLoading: Loading
        },
        mounted(){
            setTimeout(()=>{
                if(!this.pandariaLoaded){
                    this.$store.dispatch('initPandaria');
                }
            }, 100);
        },
        computed:{
            classId(){
                return this.$store.getters.characterData.class;
            },
            explorer(){
                return this.$store.getters.explorePandaria;
            },
            loremaster(){
                return this.$store.getters.pandariaLoremaster;
            },
            greenFire(){
                return this.$store.getters.greenFire;
            },
            pandariaLoaded(){
                return this.$store.getters.pandariaCompleted;
            }
        }
        
    }
</script>

<style lang="scss">
</style>
