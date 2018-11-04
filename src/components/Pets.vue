<template>
    <div class="collection-container" >
        <app-loading v-if="!petsLoaded" message="Rounding up your pets!"></app-loading>
        <app-collection-list :collection="pets" collectionType='pets' v-else></app-collection-list>
    </div>
</template>

<script>
import Loading from './general/Loading.vue';
import CollectionList from './CollectionList.vue';

export default {
    created(){
        this.$store.dispatch('initPetData');
    },
    computed:{
        petsLoaded(){
            return this.$store.getters.petsLoaded;
        },
        pets(){
            let collectedPets = this.$store.getters.characterData.pets.collected;
            collectedPets = collectedPets.sort((a,b)=>{
                if(b.creatureId != a.creatureId){
                    return b.creatureId - a.creatureId;
                }
                else{
                    return b.stats.level - a.stats.level;
                }
            });
            let duplicates = [];

            for(var i=0; i<collectedPets.length; i++){
                if((i+1<collectedPets.length) && (collectedPets[i].creatureId == collectedPets[i+1].creatureId)){
                    duplicates.unshift(i+1);
                }
            }
            if(duplicates.length>0){
                duplicates.forEach((petIndex)=>{
                    collectedPets.splice(petIndex,1);
                });
            }
            return collectedPets.sort((a,b)=>{
                if(b.stats.level == a.stats.level){
                    if (b.creatureName < a.creatureName){
                        return 1;
                    }
                    else if (b.creatureName > a.creatureName){
                        return -1;
                    }
                    return 0;
                }
                else{
                    return b.stats.level - a.stats.level;
                }
            });
        },
    },
    components:{
        appLoading:Loading,
        appCollectionList:CollectionList
    }
}
</script>
