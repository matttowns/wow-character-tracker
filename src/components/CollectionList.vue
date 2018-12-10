<template>
    <div class="collection">
        <div class="collection-information">
            <div class="collection-count">{{collectionCount}}</div>
            <div class="collection-search">
                <input class="collection-search-bar" v-model="collectionSearch" type="text"  v-on:keyup="filterCollection" placeholder="Search...">
            </div>
        </div>
        <div class="collection-window" v-for="(item,index) in collectionList" v-if="index < numberToDisplay && item.displayId">
            <div class="collection-item" @click="displayItem(index)">
                <div class="collection-item-image">
                    <img :src="getItemImage(item.displayId)"> 
                </div>
                <div class="collection-item-details" >
                    <h4 class="collection-item-name" :style="{color:quality[item.qualityId]}">{{item.name}}</h4>
                    <h4 class="pet-level" v-if="collectionType == 'pets' && item.stats.level >0">Level {{item.stats.level}}</h4>
                    <div class="pet-stats" v-if="collectionType == 'pets' && item.stats.level >0">
                        <h6><span>HP:</span> {{item.stats.health}}</h6>
                        <h6><span>PWR:</span> {{item.stats.power}}</h6>
                        <h6><span>SPD:</span> {{item.stats.speed}}</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="display-more" v-if="numberToDisplay<collectionList.length" @click="displayMore">
            <button>Load More</button>                
        </div>
    </div>
</template>

<script>
export default {
    props: ['collection', 'collectionType'],
    data(){
        return{
            numberToDisplay:48,
            collectionSearch:"",
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
            collectionList: []
        }
    },
    computed:{
        collectionCount(){
            let countMessage = "";
            if(this.collectionType == "pets"){
                countMessage = this.collection.length + ' unique pets collected';
            }
            if(this.collectionType == "mounts"){
                countMessage = this.collection.length + ' mounts collected';
            }
            return countMessage;
        },
        currentFrameItem(){
            return this.$store.getters.currentFrameItem;
        },
        frameItems(){
            return this.$store.getters.frameItems;
        }
    },
    mounted(){
        this.collectionList = this.collection;
    },
    methods:{
        getItemImage(itemId){
            return "https://render-eu.worldofwarcraft.com/npcs/zoom/creature-display-"+itemId+".jpg"
        },
        displayItem(index){
            this.$store.dispatch('initFrame', {"frameItems":this.collectionList, "index":index, "type":this.collectionType} );
        },
        filterCollection(){
            this.collectionList = this.collection;
            this.collectionList = this.collectionList.filter( item=>{
                if(this.collectionType == 'pet' && item.family == this.collectionSearch.toLowerCase()){
                    return true;
                }
                else return item.name.toLowerCase().includes(this.collectionSearch.toLowerCase());
            })
        },
        displayMore(){
            this.numberToDisplay += 48;
        }
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
    .collection-container{
        padding-bottom:2em;
        width:100%;
        min-height:calc(100vh - 200px);
    }
    .collection{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        border-top:1px solid orange;
        @media screen and (min-width:768px){
            padding-top:1em;
        }
        @media screen and (min-width:992px){
            border-top:none;
            padding-top:1em;
        }
    }
    .collection-window{
        display:flex;
        width:100%;
        @media screen and (min-width:480px){
            width:50%;
        }
        @media screen and (min-width:768px){
            width:25%;
        }
        @media screen and (min-width:992px){
            width:20%;
        }
    }
    .collection-count{
        width:100%;
        margin:0;
        font-size:1em;
        color:white;
        text-transform:uppercase;
        margin:1em 0;
        @media screen and (min-width:768px){
            width:50%;
            margin:0.25em 0;
            font-size:1.25em;
        }
    }
    .collection-search{
        display:flex;
        width:100%;
        justify-content:flex-start;
        @media screen and (min-width:768px){
            width:50%;
            justify-content:flex-end;
        }
    }
    .collection-item{
        background-color:#181818;
        border: 1px solid grey;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        margin:.25em;
        text-align:center;
        width:100%;
        cursor:pointer;
        &:hover{
            border:1px solid orange;
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
    .collection-item-details{
        display:flex;
        flex-flow:column;
        flex-wrap:wrap;
        font-size:1.25em;
        justify-content:space-between;
        margin:1em;
        text-align:center;
        vertical-align:center;
        @media screen and (min-width:768px){
            font-size:1em;
        }
        .collection-item-name{
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
    .collection-search-bar{
        border-color:orange;
        border-style:solid;
        border-width:0 0 2px 0;
        background:transparent;
        color:white;
        outline:none;
        font-family:'Open Sans';
        font-size:1em;
        width:200px;
    }
    .collection-information{
        padding-bottom:1em;
        width:100%;
        display:flex;
        flex-flow:column;
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
            background-color:darken(rgb(18, 12, 27),.03);
            color:orange;
            border:1px solid orange;
            padding:1em;
            font-size:1em;
            text-transform:uppercase;
            font-weight:400;
            transition:all .5s;
            cursor:pointer;
            &:hover{
                background-color:orange;
                color:black;
            }
        }
    }   
</style>
