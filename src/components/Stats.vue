<template>
    <div class="stats-container">
        <div class="stats">
            <div class="stat-levels">
                <div class="stat-block item-level-block">
                    <div class="stat-header centered-text">Item Level</div>
                    <div class="stat-item-level">{{itemLevel}}</div>
                </div>
                <div class="stat-block" v-if="heartOfAzeroth">
                    <div class="stat-header centered-text">Heart of Azeroth</div>
                    <div class="stat-item-level">{{heartOfAzeroth}}</div>
                </div>   
            </div>  
            <div class="stat-header">Resources</div>
            <ul class="stat-list">
                <li class="power" v-for="stat in powerStats" :key="stat.name">
                     <div class="power-bar" style="position:relative;">
                        <small class="stat-values" style="position:absolute;width:100%;"><span class="stat-name">{{ getPowerColor(stat.display.toLowerCase()).name}}</span><span class="stat-value">{{stat.value.toLocaleString('en-US')}}</span></small>
                        <div style="height:100%; width:100%" class="progress-bar" :style="{backgroundColor: getPowerColor(stat.display.toLowerCase()).color}" role="progressbar"></div>
                    </div>
                </li>                
            </ul>
            <div class="stat-header">Attributes</div>
            <ul class="stat-list">
                <li class="stat" v-for="stat in attributes" :key="stat.name"><span class="stat-name">{{stat.display}}</span><span class="stat-value">{{stat.value.toLocaleString('en-US')}}</span></li>
            </ul>
            <div class="stat-header">Enhancements</div>
            <ul class="stat-list">
                <li class="stat" v-for="stat in enhancements" :key="stat.name"><span class="stat-name">{{stat.display}}</span><span class="stat-value">{{stat.rating}} / {{stat.value.toLocaleString('en-US')}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
   
    export default {
        data(){
            return{
                displayedStats: [
                    {"name":'health', 'display': 'Health'},
                    {"name":'power', 'displayText':'powerType'},
                    {"name":'agi', 'display':'Agility', 'alternatives':[{'name': 'str', 'display':'Strength'},{'name': 'int', 'display':'Intellect'}]},
                    {"name":'sta', 'display':'Stamina'},
                    {"name":'armor', 'display':'Armor'},
                    {"name":'crit', 'rating':'critRating', 'display':'Critical Strike'},
                    {"name":'haste', 'rating':'hasteRating', 'display':'Haste'},
                    {"name":'mastery', 'rating':'masteryRating', 'display':'Mastery'},
                    {"name":'versatilityDamageDoneBonus', 'rating':'versatility', 'display':'Versatility'}
                ],
                powerColors:[
                    {"name":"health", "color":"green", "display": "Health"},
                    {"name":"mana", "color":"blue", "display": "Mana"},
                    {"name":"energy", "color":"yellow", "display": "Energy"},
                    {"name":"rage", "color":"red", "display": "Rage"},
                    {"name":"insanity", "color":"purple", "display": "Insanity"},
                    {"name":"fury", "color":"purple", "display": "Fury"},
                    {"name":"focus", "color":"brown", "display": "Focus"},
                    {"name":"maelstrom", "color":"navy", "display": "Maelstrom"},
                    {"name":"runic-power", "color":"purple", "display": "Runic Power"},
                    {"name":"pain", "color":"orange", "display":"Pain"}
                ]
            }
        },
        computed:{
            itemLevel(){
                return this.$store.getters.characterData.items.averageItemLevelEquipped;
            },
            heartOfAzeroth(){
                return (this.$store.getters.characterData.items.neck.azeriteItem ? this.$store.getters.characterData.items.neck.azeriteItem.azeriteLevel : false);
            },
            powerStats(){
                return this.stats.slice(0,2);
            },
            attributes(){
                return this.stats.slice(2,5);
            },
            enhancements(){
                return this.stats.slice(5,9);
            },
            stats(){
                let characterStats = this.$store.getters.characterData.stats;
                let filteredStats = [];
                this.displayedStats.forEach((stat)=>{
                    let newStat = {};
                    newStat.name = stat.name;
                    newStat.display = stat.display;
                    newStat.value = characterStats[newStat.name];
                    if(stat.rating){
                        newStat.type = stat.type;
                        newStat.value = newStat.value.toFixed(2) + '%';
                        newStat.rating = characterStats[stat.rating];
                    }
                    if(stat.alternatives){
                        if(characterStats[stat.alternatives[0].name] > newStat.value){
                            newStat.value = characterStats[stat.alternatives[0].name];
                            newStat.name = stat.alternatives[0].name;
                            newStat.display =  stat.alternatives[0].display;
                        }
                        if(characterStats[stat.alternatives[1].name] > newStat.value){
                            newStat.value = characterStats[stat.alternatives[1].name];
                            newStat.name = stat.alternatives[1].name;
                            newStat.display =  stat.alternatives[1].display;
                        }
                    }
                    if(stat.displayText){
                        newStat.display = characterStats[stat.displayText][0].toUpperCase() + characterStats[stat.displayText].slice(1,characterStats[stat.displayText].length);
                    }
                    filteredStats.push(newStat);
                });
                return filteredStats;
            }
        },
        methods:{
            getPowerColor(powerName){
                let powerColor = this.powerColors.find(x=>x.name == powerName);
                return {name: powerColor.display, color:powerColor.color};
            }
        }
    }
</script>

<style lang="scss">
    .stats-container{
        width:100%;
        flex:1 0 auto;
        @media screen and (min-width:1200px) {
            width:35%;
            border-top:none;
            padding-top:0;
        }
    }
    .stats{
        max-width:500px;
        padding-top:1em;
        margin-left:auto;
        margin-right:auto;
        font-size:.675em;
        font-weight:500;
        padding-left:3em;
        padding-right:3em;
    }
    .stat-levels{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        margin-bottom:2em;
    }
    .stat-block{
        flex-grow:1;
        font-size:.875em;
        @media screen and (min-width:768px){
            font-size: 1em;
        }
    }
    .stats-list{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;       
        padding:0;
    }
    .stat{
        width:100%;
        height:30px;
        background-color:#222232;
        margin:1em 0;
        color:white;
        display:flex;
        flex-flow:row;
        align-items:center;
        font-size:1.25em;
        border:1px solid rgba(255,255,255,.33);
        &:nth-of-type(2n){
            background-color:#221132;
        }
        .stat-name{
            width:50%;
            padding:0 .5em;
            text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);
        }
        .stat-value{
            text-align:right;
            width:50%;
            padding:0 .5em;
            text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);
        }
    }
    .stat-image{
        width:35px; 
        height:39px;
        background-color:lightgray;
    }
    .stat-values{
        display:flex;
        font-size:1.25em;
    }
    .stat-info{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        width:125px;
        margin-left:auto;
        margin-right:auto;
    }
    .power-bar{
        width:100%;
        height:30px;
        color:white;
        text-shadow:0 0 1px transparent, 0 1px 2px rgba(0,0,0,.8);
        text-align:left;
        display: flex;
        align-items:center;
        line-height:25px;
        border:1px solid lightgray;
        box-shadow:inset 0 0 16px #000;
        background-color:#181818;
        .stat-value{
            width:45%;
        }
    }
    .power{
        padding:.5em 0;
        .stat-name{
            width:50%;
            padding:0 .5em;
            text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);
        }
        .stat-value{
            text-align:right;
            width:50%;
            padding:0 .5em;
            text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);
        }
    }
    .stat-list{
        list-style:none;
        padding-left:0;
        margin-left:auto;
        margin-right:auto;
    }
    .stat-header{
        color:white;
        font-size:1.75em;
        margin-top:.5em;
    }
    .stat-item-level{
        font-size:3em;
        color:white;
        text-align:center;
    }
</style>
