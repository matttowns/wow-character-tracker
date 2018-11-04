<template>
    <div class="pet-container">
        <app-loading v-if="!mountsLoaded" message="Rounding up your mounts!"></app-loading>
        <app-collection-list :collection="mounts" collectionType='mounts' v-else></app-collection-list>
    </div>
</template>

<script>
import Loading from './general/Loading.vue';
import CollectionList from './CollectionList.vue';

export default {
    created(){
        this.$store.dispatch('initMountData');
    },
    computed:{
        mountsLoaded(){
            return this.$store.getters.mountsLoaded;
        },
        mounts(){
            return this.$store.getters.characterData.mounts.collected;
        }
    },
    components:{
        appLoading:Loading,
        appCollectionList:CollectionList
    }
}
</script>

