<template>
    <div class="character-info-container">
        <app-equipment></app-equipment>
        <app-stats></app-stats>
    </div>


</template>

<script>
import Equipment from './Equipment.vue';
import Stats from './Stats.vue';

export default {
    components:{
        appEquipment: Equipment,
        appStats: Stats,
    }
}
</script>

<style>
    .character-info-container{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        align-items:center;
    }
</style>
