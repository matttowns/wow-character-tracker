<template>
    <div class="pet-container" >
        <app-loading v-if="!petsLoaded" message="Rounding up your pets!"></app-loading>
        <div class="pets" v-else>
            <div class="pets-information">
                <h2 class="pet-count">{{pets.length}} Unique Pets Collected</h2>
                <div class="pet-search">
                    <input class="pet-search-bar" v-model="petSearch" type="text"  v-on:keyup="filterPets" placeholder="Search...">
                </div>
            </div>

            <div class="pet-window" v-for="(pet,index) in petList" v-if="index < numberToDisplay && pet.displayId">
                <div class="pet" @click="displayPet(index)">
                    <div class="pet-image">
                        <img :src="getPetImage(pet.displayId)"> 
                    </div>
                    <div class="pet-details">
                        <h4 class="pet-name" :style="{color:quality[pet.qualityId]}">{{pet.name}}</h4>
                        <h4 class="pet-level" v-if="pet.stats.level >0">Level {{pet.stats.level}}</h4>
                        <div class="pet-stats" v-if="pet.stats.level >0">
                            <h6><span>HP:</span> {{pet.stats.health}}</h6>
                            <h6><span>PWR:</span> {{pet.stats.power}}</h6>
                            <h6><span>SPD:</span> {{pet.stats.speed}}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="display-more" v-if="numberToDisplay<petList.length" @click="displayMore">
                <button>Load More Pets</button>                
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './general/Loading.vue';
export default {
    data(){
        return{
            numberToDisplay:48,
            petSearch:"",
            quality:{
                0: '#9d9d9d',
                1: '#ffffff',
                2: '#1eff00',
                3: '#0070dd',
                4: '#a335ee',
                5: '#ff8000',
                6: '#e6cc80',
                7: '#00ccff'
            },
            petList: []
        }
    },
    created(){
        this.$store.dispatch('initPetData');
        this.petList = this.pets;
    },
    computed:{
        petsLoaded(){
            return this.$store.getters.petsLoaded;
        },
        list(){
            return this.$store.getters.pets;
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
        currentFrameItem(){
            return this.$store.getters.currentFrameItem;
        },
        frameItems(){
            return this.$store.getters.frameItems;
        }
    },
    methods:{
        getPetImage(petId){
            return "https://render-eu.worldofwarcraft.com/npcs/zoom/creature-display-"+petId+".jpg"
        },
        displayPet(index){
            this.$store.dispatch('initFrame', {"frameItems":this.petList, "index":index, "type":"pet"} );
        },
        filterPets(){
            this.petList = this.pets;
            this.petList = this.petList.filter( pet=>{
                if(pet.family == this.petSearch.toLowerCase()){
                    return true;
                }
                else return pet.name.toLowerCase().includes(this.petSearch.toLowerCase());
            })
        },
        displayMore(){
            this.numberToDisplay += 48;
        }
    },
    components:{
        appLoading:Loading
    }
}
</script>

<style lang="scss">
    h2{
        color:white;
        margin:.5em;
        text-transform:uppercase;
        width:100%;
    }
    .pet-container{
        padding-bottom:2em;
        width:100%;
        min-height:calc(100vh - 200px);
    }
    .pets{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        margin-left:auto;
        margin-right:auto;
        max-width:1480px;
        padding-top:1em;
    }
    .pet-window{
        display:flex;
        width:100%;
        @media screen and (min-width:480px){
            width:50%;
        }
        @media screen and (min-width:768px){
            width:25%;
        }
        @media screen and (min-width:992px){
            width:16.66%;
        }

    }
    .pet-count{
        width:100%;
        margin:0;
        font-size:1em;
        margin:1em 0;
        @media screen and (min-width:768px){
            width:50%;
            margin:0.25em 0;
            font-size:1.25em;
        }
    }
    .pet-search{
        display:flex;
        width:100%;
        justify-content:flex-start;
        @media screen and (min-width:768px){
            width:50%;
            justify-content:flex-end;

        }
    }
    .pet{
        background-color:#181818;
        border: 1px solid grey;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        margin:1em;
        text-align:center;
        width:100%;
        cursor: pointer;
        &:hover{
            border: 1px solid orange;
        }
        img{
            width:65%;
            @media screen and (min-width:480px){
                width:75%;
            }
            @media screen and (min-width:768px){
                width:100%;
            }
        }
    }
    .pet-details{
        display:flex;
        flex-flow:column;
        flex-wrap:wrap;
        font-size:1.25em;
        justify-content: space-between;
        margin:1em;
        text-align:center;
        vertical-align:center;
        @media screen and (min-width:768px){
            font-size:1em;
        }
        .pet-name{
            font-weight:400;          
            margin:.25em;
        }   
    }
    .pet-level{
        color:white;
        font-weight:400;          
        margin:.25em;
    }
    .pet-stats{
        color:white;
        display:flex;
        flex-flow:row;
        flex:1 0 auto;
        font-size:1.25em;
        justify-content:space-between;
        h6{
            flex: 1;
            font-weight:400;  
            margin:.375em;
            width:33.33%;
            span{
                display:block;
                width:100%;
            }       
        }
    }
    .pet-search-bar{
        border-color:orange;
        border-style:solid;
        border-width:0 0 2px 0;
        background:transparent;
        color:white;
        outline:none;
        font-family:Roboto;
        font-size:1em;
        width:200px;
    }
    .pets-information{
        margin:0 1em;
        padding-bottom:1em;
        width:100%;
        display: flex;flex-flow:column;
        flex-wrap:wrap;
        @media screen and (min-width:768px){
            flex-flow:row;
        }
    }
    .display-more{
        width:100%;
        text-align:center;
        margin:1em;
        button{
            background-color:darken(rgb(18, 12, 27),3%);
            color:orange;
            border:2px solid orange;
            padding:1em;
            font-size:1em;
            text-transform:uppercase;
            font-weight:600;
            transition: all .5s;
            cursor:pointer;
            &:hover{
                background-color:orange;
                color:black;
            }
        }
    }
</style>
