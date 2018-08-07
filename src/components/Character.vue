<template>
    <div>
        <app-character-info></app-character-info> 
        <hr>
        <app-talents></app-talents>
        <hr>
        <app-current-progression></app-current-progression>
    </div>
</template>

<script>
import Talents from './Talents.vue';
import CharacterInfo from './CharacterInfo.vue';
import CurrentProgression from './CurrentProgression.vue';
import PVPSummary from './PVPSummary.vue';

export default {
    components:{
        appCharacterInfo: CharacterInfo,
        appCurrentProgression: CurrentProgression,
        appTalents: Talents,
        appPVPSummary: PVPSummary
    }
}
</script>

<style lang="scss">

</style>
