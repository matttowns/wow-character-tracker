<template>
    <div class="brawlers-container" >
        <div class="brawlers" >
            <div class="brawlers-information">
                <div class="tracker-header-container">
                    <div class="achievement-image">
                            <img src="http://media.blizzard.com/wow/icons/36/spell_holy_fistofjustice.jpg" style="display:flex;vertical-align:middle;" >
                    </div>
                    <div class="tracker-title">
                        Brawler's Guild
                    </div>
                </div>            </div>
            <div class="brawlers-rank-section" v-for="rank in ranks">
                <div class="brawlers-rank">Rank {{rank}}</div>
                <div class="brawlers-bosses">
                    <a class="brawlers-window" v-for="(pet, index) in petList" v-if="pet.rank == rank" :href="'http://wowhead.com/npc='+ pet.id" target="_blank">
                            <div class="brawlers-boss">
                                <div class="brawlers-image">
                                    <img :src="getBossImage(pet.displayId)"> 
                                </div>
                                <div class="brawlers-details">
                                    <div class="brawlers-name">{{pet.name}}</div>
                                    <div class="brawlers-progress" :style="index < brawlersProgress ? 'color:green' : 'color:red'" >{{index < brawlersProgress ? "Complete" : "Incomplete"}}</div>
                                </div>
                            </div>
                    </a>
                </div>
            </div> 
        </div>     
    </div>
</template>

<script>
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
            petList: [],
            ranks:[1,2,3,4,5,6,7]
        }
    },
    created(){
        this.$store.dispatch('initPetData');
        this.petList = [
            {"id": 117753, "name":"Oso", "displayId":74594, "rank":1},
            {"id": 70678,"name":"Grandpa Grumplefloot", "displayId":48265, "rank":1 },
            {"id": 117133,"name":"Ooliss", "displayId":74442, "rank":1 },
            {"id": 115924,"name":"Wildhammer Council", "displayId":[73758,73735,73757], "rank":1 },
            {"id": 68255,"name":"Dippy", "displayId":47244, "rank":2 },
            {"id": 117077,"name":"Bill the Janitor", "displayId":74419, "rank":2 },
            {"id": 67268,"name":"Saniorak", "displayId":12002, "rank":2 },
            {"id": 115645,"name":"Master Paku", "displayId":41568, "rank":2 },
            {"id": 117145,"name":"Doomflipper", "displayId":61339, "rank":3},
            {"id": 70736,"name":"Splat", "displayId":48117, "rank":3},
            {"id": 116743,"name":"Shadowmaster Aameen", "displayId":74331, "rank":3},
            {"id": 115058,"name":"Johnny Awesome", "displayId":73752, "rank":3},
            {"id": 115023,"name":"Burnstachio", "displayId":74633, "rank":4},
            {"id": 67573,"name":"Meatball", "displayId":46798, "rank":4},
            {"id": 67488,"name":"GG Engineering", "displayId":[47014, 46312], "rank":4},
            {"id": 117275,"name":"Stitches", "displayId":1693, "rank":4},
            {"id": 114945,"name":"Thwack U", "displayId":[73553, 73571], "rank":5},
            {"id": 71085,"name":"Razorgrin", "displayId":41363, "rank":5},
            {"id": 67515,"name":"Leper Gnome Quintet", "displayId":[6923, 6922, 6921, 6924, 20648], "rank":5},
            {"id": 114902,"name":"Blackmange", "displayId":73548, "rank":5},
            {"id": 116539,"name":"Topps", "displayId":74268, "rank":6},
            {"id": 67591,"name":"Millie Watt", "displayId":46332, "rank":6},
            {"id": 115233,"name":"Carl", "displayId":73718, "rank":6},
            {"id": 114952,"name":"Ogrewatch", "displayId":[73988, 73579, 73563], "rank":6},
            {"id": 70656,"name":"Nibbleh", "displayId":74713, "rank":7},
            {"id": 116692,"name":"Serpent of Old", "displayId":74285, "rank":7},
            {"id": 67490,"name":"Epicus Maximus", "displayId":46265, "rank":7},
            {"id": 115040,"name":"Ray D. Tear", "displayId":73698, "rank":7}
        ];
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
        currentFrameItem(){
            return this.$store.getters.currentFrameItem;
        },
        frameItems(){
            return this.$store.getters.frameItems;
        },
        brawlersProgress(){
            let brawlRep = this.$store.getters.characterData.reputation.find(x=>x.id == 2011);
            if(!brawlRep){
                return 0;
            }
            else{
                return (((brawlRep.standing -1) * 1000) + brawlRep.value) / 250;
            } 
        }
    },
    methods:{
        getBossImage(petId){
            if(petId.constructor === Array){
                petId = petId[Math.floor(Math.random()*petId.length)];
            }
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
        },
    },

}
</script>

<style lang="scss">
    h2{
        color:white;
        margin:.5em;
        text-transform:uppercase;
        width:100%;
    }
    .brawlers-container{
        padding-bottom:2em;
        width:100%;
        min-height:calc(100vh - 200px);
    }
    .brawlers{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        margin-left:auto;
        margin-right:auto;
        max-width:1480px;
        padding-top:1em;
    }
    .brawlers-window{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        user-select: none;
        width:100%;
        text-decoration:none;
        @include breakpoint('sm'){
            width:50%;
        }
        @include breakpoint('md'){
            width:25%;
        }
    }

    .brawlers-boss{
        background-color:#181818;
        border: 1px solid grey;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        margin:1em;
        text-align:center;
        width:100%;
        min-height:265px;
        cursor: pointer;
        @include compatibility('ie'){
            display:block;
        }
        &:hover{
            border: 1px solid orange;
        }
        img{
            width:65%;
            @include breakpoint('sm'){
                width:75%;
            }
            @include breakpoint('md'){
                width:100%;
            }
        }
    }
    .brawlers-details{
        display:flex;
        flex-flow:column;
        flex-wrap:wrap;
        font-size:1.25em;
        justify-content: space-between;
        margin:1em 0;
        text-align:center;
        vertical-align:center;
        flex-grow:1;
        color:white;
        @include breakpoint('md'){
            font-size:1em;
        }
        .brawlers-name{
            font-weight:300;          
            margin:.25em;
            padding-bottom:.5em;
        }   
    }
    .pet-level{
        color:white;
        font-weight:300;          
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
            font-weight:300;  
            margin:.375em;
            width:33.33%;
            span{
                display:block;
                width:100%;
            }       
        }
    }
    .brawlers-information{
        margin:0 1em;
        padding-bottom:1em;
        width:100%;
        display: flex;flex-flow:column;
        flex-wrap:wrap;
        @include breakpoint('md'){
            flex-flow:row;
        }
    }

    .tracker-subtitle{
        width:100%;
        font-size:1.25em;
        margin-left:1em;
        text-transform:uppercase;
    }

    .brawlers-rank{
        display:flex;
        flex-flow:row;
        width:50%;
        flex-wrap:wrap;
        padding-left:.75em;
        font-size:1.5em;
        text-transform:uppercase;
    }

    .brawlers-rank-section{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        width:100%;
        @media screen and (min-width: 1200px){
            width:50%;
        }
        margin-bottom:1.5em;
    }

    .brawlers-bosses{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
    }
</style>
