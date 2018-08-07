<template>
    <div class="progression-container">
        <div class="section-header">Raid Progression</div>
        <ul class="progression-raids">
            <li class="progression-raid" v-for="(raid,index) in raids">
                <div class="raid-blocks">         
                    <div class="raid-block">
                        <div class="raid-image"><img class="raid-image" :src="getRaidIcon(raid.icon)"></div>
                        <div class="raid-name">{{raid.name}}</div>
                        <div class="raid-difficulty-block">
                            <div class="raid-difficulty">LFR</div>
                            <div class="raid-content progress-block">
                                <div class="raid-progress-block" :class="[raid.lfrPercentage == '100%' ? 'raid-complete' : 'raid-incomplete' ]" :style="{width: raid.lfrPercentage}"></div>
                                <div class="raid-progression-overlay">{{raid.lfrProgression}}</div>
                            </div>
                        </div>
                        <div class="raid-difficulty-block">
                            <div class="raid-difficulty">Normal</div>
                            <div class="raid-content progress-block">
                                <div class="raid-progress-block" :class="[raid.normalPercentage == '100%' ? 'raid-complete' : 'raid-incomplete' ]" :style="{width: raid.normalPercentage}"></div>
                                <div class="raid-progression-overlay">{{raid.normalProgression}}</div>
                            </div>
                        </div>
                        <div class="raid-difficulty-block">
                            <div class="raid-difficulty">Heroic</div>
                            <div class="raid-content progress-block">
                                <div class="raid-progress-block" :class="[raid.heroicPercentage == '100%' ? 'raid-complete' : 'raid-incomplete' ]" :style="{width: raid.heroicPercentage}"></div>
                                <div class="raid-progression-overlay">{{raid.heroicProgression}}</div>
                            </div>
                        </div>
                        <div class="raid-difficulty-block">
                            <div class="raid-difficulty">Mythic</div>
                            <div class="raid-content progress-block">
                                <div class="raid-progress-block" :class="[raid.mythicPercentage == '100%' ? 'raid-complete' : 'raid-incomplete' ]" :style="{width: raid.mythicPercentage}"></div>
                                <div class="raid-progression-overlay">{{raid.mythicProgression}}</div>
                            </div>
                        </div>
                    </div>                        
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                raidIcons:[
                    'antorus-the-burning-throne',
                    'tomb-of-sargeras',
                    'the-nighthold',
                    'trial-of-valor',
                    'the-emerald-nightmare'
                ],
                difficulty:[1,3,4,5]
            }
        },
        computed:{
            raids(){
                let raids = this.$store.getters.characterData.progression.raids.filter(x=>x.expansion == 6).reverse();
                raids.forEach((raid, index)=>{
                    raid.icon = this.raidIcons[index];

                    this.difficulty.forEach((difficulty)=>{
                        let killCount = 0;
                        let property = '';
                        let bosses = 0;
                        if(difficulty == 1){
                            property = 'lfrKills';
                            
                        }
                        else if(difficulty == 3){
                            property = 'normalKills';
                        }
                        else if(difficulty == 4){
                            property = 'heroicKills';
                        }
                        else if(difficulty == 5){
                            property = 'mythicKills';
                        }
                        if(raid.bosses[0].hasOwnProperty(property)){
                            for(var i = 0; i < raid.bosses.length; i++){
                                if(raid.bosses[i].hasOwnProperty(property)){
                                    bosses+=1;
                                    if (raid.bosses[i][property] != 0){
                                        killCount+=1;
                                    }
                                }
                            }
                            property = property.substring(0, property.length-5);
                            raid[property+"Percentage"] = ((killCount / bosses) * 100) + "%";
                            raid[property+"Progression"] = killCount +"/"+bosses;
                        }
                    });
                });
                return raids;
            },
            raidsByExpansion(){
                let expansionRaids=[];
                this.expansions.slice().reverse().forEach((expansion) => {
                    let raids = this.raids.filter((raid)=>{
                        return raid.expansion == expansion.id;
                    });
                    raids = raids.reverse();
                    expansionRaids.push({expansion, raids});
                });
                return expansionRaids;
            }
        },
        methods:{
            getRaidIcon(icon){
                return "https://render-eu.worldofwarcraft.com/zones/"+icon+"-small.jpg"
            },
            progression(raidId,difficulty){
                let raid = this.raids.find(x => x.id == raidId);
               
                
            }
        }
    }
</script>

<style lang="scss">
    .progression-raids{
        margin:0;
        padding:0;
        display: flex;
        flex-flow:row;
        flex-wrap:wrap;
    }

    .progression-raid{
        list-style:none;
        width:100%;        
        display: flex;
        flex-flow:column;
        flex-grow:1;
        @media screen and (min-width:480px){
            width:50%;
            max-width:50%;
        } 
        @media screen and (min-width:992px){
            width:25%;
            max-width:25%;

        } 
    }

    .raid-blocks{
        display: flex;
        flex-flow:row;
        flex-grow:1;

    }
    .raid-content{
        width:22%;
        flex-grow:0;
        margin:.5em 1em;
        &.raid-image-content{
            width:12%;
        }
    }
    
    .progress-block{
        border:1px solid lightgrey;
        position:relative;
        flex-grow:1;
    }
    
    .raid-progress-block{
        height:25px;
        text-align:center;
        &.raid-complete{
            background-color:green;
        }
        &.raid-incomplete{
            background-color:orange;
        }
    }
    .raid-progression-overlay{
        position:absolute;
        top:0;
        width:100%;
        height:100%;
        color:white;
        font-weight:600;
        display: flex;
        align-items:center;
        justify-content:center;
        font-size:1em;
        text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);        
    }
    .raid-image{
        width:100%;
    }

    .difficulty-name{
        color:white;
        padding-left:1em;
        width:22%;
    }
    .raid-name{
        color:orange;
        margin-left:1em;
        width:100%;
        text-align:center;
        font-size:1.125em;
        margin-bottom:.25em;
    }

    .progression-headers{
        display: flex;
        flex-flow:row;
        align-items:flex-end;
    }


    .raid-difficulty{
        width:75px;
        color:orange;
    }
    .raid-difficulty-block{
        display:flex;
        flex-flow:row;
        width:95%;
        margin-left:auto;
        align-items:center;
        color:white;
    }

    .raid-block{
        margin:1em;
        border:1px solid lightgray;
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        padding-bottom:.5em;
    }
    .progression-container{
        margin:0 1em;
    }
</style>

