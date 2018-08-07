<template>
    <div class="pet-container">
        <app-loading v-if="!mountsLoaded" message="Rounding up your mounts!"></app-loading>
        <div class="pets" v-else>
            <div class="pets-information">
                <h2 class="pet-count">{{mounts.length}} Mounts Collected</h2>
                <div class="pet-search">
                    <input class="pet-search-bar" v-model="mountSearch" type="text"  v-on:keyup="filterMounts" placeholder="Search...">
                </div>
            </div>            
            <div class="pet-window" v-for="(pet,index) in mountList" v-if="index < numberToDisplay && pet.displayId">
                <div class="pet" @click="displayMount(index)" >
                    <div class="pet-image">
                        <img :src="getMountImage(pet.displayId)"> 
                    </div>
                    <div class="pet-details">
                        <h4 class="pet-name" :style="{color:quality[pet.qualityId]}">{{pet.name}}</h4>
                    </div>
                </div>
            </div>
             <div class="display-more" v-if="numberToDisplay<mountList.length" @click="displayMore">
                <button>Load More Mounts</button>                
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './general/Loading.vue';
export default {
    data(){
        return{
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
            numberToDisplay:48,
            mountSearch:"",
            mountList:[]
        }
    },
    created(){
        this.$store.dispatch('initMountData');
        this.mountList = this.mounts;

    },
    computed:{
        mountsLoaded(){
            return this.$store.getters.mountsLoaded;
        },
        mounts(){
            return this.$store.getters.characterData.mounts.collected;
        },
        
        currentFrameItem(){
            return this.$store.getters.currentFrameItem;
        },
        frameItems(){
            return this.$store.getters.frameItems;
        }
    },
    methods:{
        getMountImage(petId){
            return "https://render-eu.worldofwarcraft.com/npcs/zoom/creature-display-"+Math.abs(petId)+".jpg"
        },
        displayMount(index){
                this.$store.dispatch('initFrame', {"frameItems":this.mountList, "index":index, "type":"mount"} );
        },
        displayMore(){
            this.numberToDisplay += 48;
        },
        filterMounts(){
            this.mountList = this.mounts;
            this.mountList = this.mountList.filter( mount=>{
                return mount.name.toLowerCase().includes(this.mountSearch.toLowerCase());
            })
        },
    },
    components:{
        appLoading:Loading
    }
}
</script>

<style lang="scss">
    h2{
        margin:.5em;
        color:white;
        text-transform:uppercase;
        width:100%;
    }
    .pet-container{
        width:100%;
        padding-bottom:2em;
    }
    .pets{
        padding-top:1em;
        max-width:1480px;
        margin-left:auto;
        margin-right:auto;
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;

    }
    .pet-window{
        width:100%;
        display:flex;
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
    .pet{
        border: 1px solid white;
        text-align:center;
        margin:1em;
        background-color:#181818;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        img{
            width:100%;
        }
        &:hover{
            border: 1px solid orange;
            cursor:pointer;
        }
    }
    .pet-details{
        margin:1em;
        text-align:center;
        display:flex;
        flex-flow:column;
        flex-wrap:wrap;
        justify-content: space-between;
        vertical-align:center;
        .pet-name{
            margin:.25em;
            font-weight:400;          
        }   
    }
    .pet-level{
        color:white;
        margin:.25em;
        font-weight:400;          
    }
    .pet-stats{
        display:flex;
        flex-flow:row;
        color:white;
        justify-content:space-between;
        flex:1 0 auto;
        font-size:1.25em;
        h6{
            width:33.33%;
            margin:.375em;
            flex: 1;
            font-weight:400;  
            span{
                width:100%;
                display:block;
            }       
        }
    }
        .loading{
        align-items:center;
        display:flex;
        height:calc(100vh - 154px);
        justify-content: center;
    }
    .loading-container{
        align-items:center;
        background-color:lighten(#120c1b, 10%);
        border:white 1px solid;
        color:orange;
        display:flex;
        flex-flow:column;
        flex-wrap:wrap;
        height:200px;
        justify-content:center;
        padding:1em;
        width:200px;
        .loading-icon{
            font-size:5em;
        }
        h5{
            font-size:1.25em;
            margin-bottom:0;
            text-align:center;
        }
    }
</style>
