<template>
    <div>
        <app-character-info></app-character-info> 
        <app-talents></app-talents>
        <app-current-progression></app-current-progression>
        <app-recent-activity></app-recent-activity>

    </div>
</template>

<script>
import Talents from './Talents.vue';
import CharacterInfo from './CharacterInfo.vue';
import CurrentProgression from './CurrentProgression.vue';
import PVPSummary from './PVPSummary.vue';
import RecentActivity from './RecentActivity.vue';

export default {
    components:{
        appCharacterInfo: CharacterInfo,
        appCurrentProgression: CurrentProgression,
        appTalents: Talents,
        appPVPSummary: PVPSummary,
        appRecentActivity: RecentActivity
    }
}
</script>

<style lang="scss">

</style>
