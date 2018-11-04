<template>
    <app-battlegrounds v-if="dataLoaded"></app-battlegrounds>
</template>

<script>
import Battlegrounds from './Battlegrounds.vue'
export default {

    computed:{
        dataLoaded(){
                return this.$store.getters.dataLoaded;
            },
    },
    components:{
        appBattlegrounds: Battlegrounds
    },
}
</script>

<style>

</style>
