<template>
    <div class="container tracker-category-container">
        <app-loremaster :achievements="loremaster"></app-loremaster>
        <app-loremaster :achievements="greenFire" v-if="classId==9"></app-loremaster>
        <!--<app-loremaster :achievements="explorer"></app-loremaster>-->
    </div>
</template>

<script>
    import Pathfinder from './Pathfinder.vue'
    import Loremaster from './Loremaster.vue'
    
    export default {
        components:{
            appLoremaster: Loremaster
        },
        created(){
            if(this.$store.getters.explorePandaria.length == 0){
                this.$store.dispatch('initPandaria');
            }
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
            }
        }
        
    }
</script>

<style lang="scss">
</style>
