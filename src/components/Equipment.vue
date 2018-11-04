<template>
    <div class="equipment-container" :style="{backgroundImage: characterData.background}">
            <div class="equipment justify-content-between">
                    <ul class="equipment-list">
                        <li class="equipped-item" v-for="(item, index) in items" v-if="itemSlots.slice(0,8).includes(index)">
                            <a class="item-link" target="_blank" :href="'//www.wowhead.com/item='+item.id" v-if="item.id" :data-wowhead="getBonus(item)" >
                                <div class="item">
                                    <img :src="getIcon(item.icon, 'large')"
                                    style="border-style:solid; border-width:1px;" :style="{ borderColor: quality[item.quality].color }">
                                    <div class="item-details">
                                        <div class="item-name" :style="{ color: quality[item.quality].color }">{{item.name}}<div class="overlay"></div></div>
                                        <div class="item-level">{{item.itemLevel}}</div>
                                    </div>

                                </div>
                            </a>
                            <div class="item" v-else>
                                <img src="../assets/empty.png" >
                            </div>                    
                        </li>
                    </ul>
                    <ul class="equipment-list">
                        <li class="list-group-item text-right equipped-item" v-for="(item, index) in items" v-if="itemSlots.slice(8,16).includes(index)">
                            <a class="item-link " target="_blank" :href="'//www.wowhead.com/item='+item.id" v-if="item.id" :data-wowhead="getBonus(item)" >
                                <div class="item item-right">
                                    <div class="item-details">
                                        <div class="item-name" :style="{ color: quality[item.quality].color }">{{item.name}}<div class="overlay"></div></div>
                                        <div class="item-level">{{item.itemLevel}}</div>
                                    </div>
                                    <img :src="getIcon(item.icon, 'large')"
                                    style="border-style:solid; border-width:1px;" :style="{ borderColor: quality[item.quality].color }">
                                </div>
                            </a>
                            <div class="item" v-else>
                                <img src="../assets/empty.png" >
                            </div>     
                        </li>
                    </ul>
            </div>    
            <div class="equipment-weapons">
                <ul class="equipment-list">
                    <li class="equipped-item equipped-item-weapon right-item" >
                        <a class="item-link" target="_blank" :href="'//www.wowhead.com/item='+items['mainHand'].id"  :data-wowhead="getBonus(items['mainHand'])+'&ilvl='+items['mainHand'].itemLevel"  v-if="items['mainHand'].id">
                            <div class="item item-right item-weapon" :class="{'item-artifact': artifactCheck(items['mainHand'])}">
                                <div class="item-details">
                                    <div class="item-name" :style="{color:quality[items['mainHand'].quality].color}">{{items['mainHand'].name}}
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="item-level" ><span :class="quality[items['mainHand'].quality].name">{{items['mainHand'].itemLevel}}</span></div>
                                </div>
                                <img :src="getIcon(items['mainHand'].icon,'large')"
                                    style="border-style:solid; border-width:1px;" :style="{ borderColor: quality[items['mainHand'].quality].color }">
                            </div>
                        </a>
                        <div class="item" v-else>
                            <img src="../assets/empty.png" >
                        </div>
                    </li>
                    <li class="equipped-item equipped-item-weapon left-item" :style="{ }" >
                        <a class="item-link" target="_blank" :href="'//www.wowhead.com/item='+items['offHand'].id"  v-if="items['offHand'].name" :data-wowhead="getBonus(items['offHand'])+'&ilvl='+items['offHand'].itemLevel">
                            <div class="item  item-weapon" :class="{'item-artifact':artifactCheck(items['offHand'])}">
                                <img :src="getIcon(items['offHand'].icon,'large')"
                                    style="border-style:solid; border-width:1px;" :style="{borderColor: quality[items['offHand'].quality].color}">
                                <div class="item-details">
                                    <div class="item-name" :style="{color: quality[items['offHand'].quality].color }">{{items['offHand'].name}}
                                    <div class="overlay"></div></div>
                                    <div class="item-level"><span :class="quality[items['offHand'].quality].name">{{items['offHand'].itemLevel}}</span></div>
                                </div>
                            </div>
                        </a>
                        <div class="item" v-else>
                                <img src="../assets/empty.png" >
                            </div>  
                    </li>
                </ul>
            </div>
    </div>
    
</template>
<script>
import Header from './Header.vue';
import Talents from './Talents.vue';
import {getIcon} from '../mixins/mixins'
import Stats from './Stats.vue'
import {mapState} from 'vuex';
export default {
    mixins: [getIcon],
    data(){
        return{
            itemSlots: ['head', 'neck', 'shoulder', 'back', 'chest', 'shirt', 'tabard', 'wrist', 'hands', 'waist', 'legs', 'feet', 'finger1', 'finger2', 'trinket1', 'trinket2', 'mainHand', 'offHand'],
            quality:[
                {id:0, color: '#9d9d9d', name:'poor'},
                {id:1, color: '#ffffff', name:'common'},
                {id:2, color: '#1eff00', name:'uncommon'},
                {id:3, color: '#0070dd', name:'rare'},
                {id:4, color: '#a335ee', name:'epic'},
                {id:5, color: '#ff8000', name:'legendary'},
                {id:6, color: '#e6cc80', name:'artifact'},
                {id:7, color: '#00ccff', name:'heirloom'}
            ],
            itemsCreated:false,
        }
    },
    computed:{
      ...mapState(['characterData', 'items'])
    },
    components:{
        appStats: Stats,
        appHeader: Header,
        appTalents: Talents
    },
    methods:{
        getBonus(item){
            let bonusString = "";
            if(item.bonus){
                bonusString+= "bonus="+item.bonus;
            }
            if(item.gems){
                if(bonusString.length>0){
                    bonusString+="&";
                }
                bonusString+="gems="+item.gems;
            }
            if(item.tooltipParams.enchant){
                if(bonusString.length>0){
                    bonusString+="&";
                }
                bonusString += "ench="+item.tooltipParams.enchant;
            }
            if(item.set){
                if(bonusString.length>0){
                    bonusString+="&";
                }
                bonusString += "set="+item.set;
            }
            if(item.appearance.itemId){
                if(bonusString.length>0){
                    bonusString+="&";
                }
                bonusString += "transmog="+item.appearance.itemId;                
            }
            if(item.azeriteEmpoweredItem && item.azeriteEmpoweredItem.azeritePowers.length>0){
                if(bonusString.length>0){
                    bonusString+="&";
                }
                bonusString += "azerite-powers=";
                for(let i=0;i<item.azeriteEmpoweredItem.azeritePowers.length;i++){
                    bonusString+= item.azeriteEmpoweredItem.azeritePowers[i].id +":";
                }             
                bonusString = bonusString.substring(0, bonusString.length-1);
            }
            
            return bonusString;
        },
        artifactCheck(weapon){
            if(weapon.artifactId > 0){
                return true;
            }
            return false
        }
    }
}
</script>
<style lang="scss">
    .equipped-item-weapon{
        display:flex;
        flex-flow:row;
        margin-right:auto;
        &.left-item{
            margin-left:.5em;
        }
        &.right-item{
            margin-right:.5em;
        }
    }
    .equipment-container{
        border:1px solid rgba(255,255,255,.5);
        margin:1em 0;
        padding:1em 0;
        background-position:center;
        background-size:cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        position:relative;
        margin-left:auto;
        margin-right:auto;
        max-width:900px;
        width:900px;
        max-height:670px;
        background-attachment:initial;
        @media screen and (min-width:1200px) {
            margin-left:auto;
            margin-right:auto;
        }
        @media screen and (min-width:1200px) {
            width:65%;
        }
    }
    .equipment{
        margin-right:auto;
    }

    .equipment{
        display: flex;
        flex-flow:row;
        justify-content:space-between;
        padding-left:1em; 
        padding-right:1em;
        max-width: 900px;
        margin-left:auto;
        margin-right:auto;
    }
    .equipment-list{
        padding:0px;
        list-style:none;
    }
    .equipment-list img{
        height:35px; width:35px;
        @media screen and (min-width:768px){
            height:50px;
            width:50px;
        }
    }
    .equipment-list li{
        padding:3px 0;
        @media screen and (min-width:768px){
            padding:6px 0;
        }
    }
    .equipment-weapons .equipment-list{
        display: flex;flex-flow:row;
        justify-content: center;
        width:100%;
        margin:.25em 0;
    }
    .equipment-weapons .equipment-list li{
        width:100%;
    }
    .right-item{
        justify-content: flex-end;
    }
    .left-item{
        justify-content: flex-start;
    }
    .item-link{
        text-decoration:none;
        width:100%;
    }
    .item{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        &.item-right{
            justify-content: flex-end;
            text-align:right;
            .item-name{
                margin-left:auto;
            }
        }
        .item-details{
            display: flex;
            flex-flow:row;
            align-items:center;
            position:relative;
            flex-wrap:wrap;
            padding:0 1em;
            font-size:.9375em;
            height:52px;
            &.item-artifact{
                align-items:flex-end;
            }
            .item-name{
                display:none;
                position:relative;
                max-width:220px;
                font-size:.875em;
                font-weight:600;
                align-self:flex-start;
                .overlay{
                    position:absolute;
                    height:100%;
                    padding:1em 0;
                    width:100%;
                    top:-1em;
                    filter: blur(50px);
                    opacity:.75;
                    background-color:#000;
                }
                @media screen and (min-width: 768px){
                    display:block;
                }
            }
        }
    }
    .item-level{
        margin-right:auto;
        align-self:flex-end;
        width:100%;
        color:white;
        font-size:.875em;
        display:none;
        @media screen and (min-width: 768px){
            display:block;
        }
    }
    .artifact-level{
        text-align:center;
        width:100%;
        font-size:1.25em;
    }
</style> 
        