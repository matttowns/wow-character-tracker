<template>
    <div class="progression-container page-container">
        <div v-for="expansion in raidsByExpansion" class="progression-expansion" :key="expansion.id">
            <div class="section-header">{{expansion.expansion.title}}</div>
            <app-table v-for="raid in expansion.raids" :key="raid.id" :sortable="false" :headings="getRaidHeadings(raid)" :tableData="getRaidTableData(raid)"></app-table>
        </div> 
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Table from './general/table/Table.vue'

export default {
    data(){
        return{
            headings:[
                {name:'Raid', value: 'raid', columns:6, alignment:'left'},
                {name:'Progression', value: 'progression', columns:1, shortDisplay:'#'},
                {name:'Kills', value: 'kills', columns:1},
                {name:'Rank', value: 'rank', columns:1, type:'html'}
            ],
            difficulty:[
                {"id":1, "name":"LFR"},
                {"id":3, "name":"Normal"},
                {"id":4, "name":"Heroic"},
                {"id":5, "name":"Mythic"}
            ],
            expansions:[
                {"id": 0, "title": 'Classic'},
                {"id": 1, "title": 'The Burning Crusade'},
                {"id": 2, "title": 'Wrath of the Lich King'},
                {"id": 3, "title": 'Cataclysm'},
                {"id": 4, "title": 'Mists of Pandaria'},
                {"id": 5, "title": 'Warlords of Draenor'},
                {"id": 6, "title": 'Legion'},
                {"id": 7, "title": 'Battle for Azeroth'},
            ],
        }
    },
    created() {
        this.$store.dispatch('initRankings');
    },
    components:{
        appTable: Table
    },
    computed:{
        reverseRaids() {
            return this.raids.slice().reverse();
        },
        reverseDifficulty() {
            return this.difficulty.reverse();
        },
        ...mapState(['rankings']),
        raids(){
            return this.$store.getters.characterData.progression.raids;
        },
        raidsByExpansion(){
            let expansionRaids=[];
            this.expansions.slice().reverse().forEach((expansion) => {
                let raids = this.raids.filter((raid)=>{
                    return raid.expansionId == expansion.id;
                });
                raids = raids.reverse();
                expansionRaids.push({expansion, raids});
            });
            return expansionRaids;
        }
    },  
    methods:{
        getRaidTableData(raid){
            let tableData = [];
            this.reverseDifficulty.forEach((difficulty)=>{
                if(this.difficultyCheck(raid,difficulty.id)){
                    let bossData = [];
                    raid.bosses.forEach((boss)=>{
                        if(this.bossDifficultyCheck(boss,difficulty.id)){
                            if(raid.expansionId == 7){
                                bossData.push(
                                    {name: {value:boss.name, display:boss.name}, 
                                    progression: {value: this.bossKillCount(boss, difficulty.id) >0? 1: 0, display:this.bossKillCount(boss, difficulty.id) >0? "&#10004": "x"}, 
                                    kills: {value: this.bossKillCount(boss, difficulty.id), display:this.bossKillCount(boss, difficulty.id)}, 
                                    rank:this.bossRanking(boss, difficulty.id)});
                            }
                            else{
                                bossData.push(
                                   {name: {value:boss.name, display:boss.name}, 
                                    progression: {value: this.bossKillCount(boss, difficulty.id) >0? 1: 0, display:this.bossKillCount(boss, difficulty.id) >0? "&#10004": "x"}, 
                                    kills: {value: this.bossKillCount(boss, difficulty.id), display:this.bossKillCount(boss, difficulty.id)}});
                            }
                        }
                    });
                    if(raid.expansionId == 7){
                        tableData.push(
                            {raid:{value:difficulty.name, display:difficulty.name}, 
                            progression:{value: this.progression(raid.id, difficulty.id), display:this.progression(raid.id, difficulty.id)}, 
                            kills:{value: this.killCount(raid.id, difficulty.id), display:this.killCount(raid.id, difficulty.id)},  
                            rank:{value: this.averageRanking(raid.id, difficulty.id),display: this.averageRanking(raid.id, difficulty.id)}, 
                            subTable:bossData});
                    }
                    else{
                        tableData.push(
                            {raid:{value:difficulty.name, display:difficulty.name}, 
                            progression:{value: this.progression(raid.id, difficulty.id), display:this.progression(raid.id, difficulty.id)}, 
                            kills:{value: this.killCount(raid.id, difficulty.id), display:this.killCount(raid.id, difficulty.id)}, 
                            subTable:bossData});
                    }
                }
            });
            return tableData;
        },
        getRaidHeadings(raid){
            let headings = this.headings;
            if(raid.expansionId == 7){
                return [{name:raid.name, value:'raid', columns:6, alignment:'left'}, this.headings[1], this.headings[2], this.headings[3]];

            }
            else{
                return [{name:raid.name, value:'raid', columns:6, alignment:'left'}, this.headings[1], this.headings[2]];
            }
        },
        subTableLength(raid,difficulty){
            let bosses = 0;
            let property = '';
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
            for(var i = 0; i < raid.bosses.length; i++){
                if(raid.bosses[i].hasOwnProperty(property)){
                    bosses+=1;
                }
            }
            return "sub-table-"+bosses;
        },
        bossDifficultyCheck(boss, difficulty){
            let property = '';            
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
            if(boss.hasOwnProperty(property)){
                return true;
            } 
            return false;
        },
        difficultyCheck(raid, difficulty){
            let property = '';
            if(difficulty == 1){
                property = 'lfrTimestamp';
            }
            else if(difficulty == 3){
                property = 'normalTimestamp';
            }
            else if(difficulty == 4){
                property = 'heroicTimestamp';
            }
            else if(difficulty == 5){
                property = 'mythicTimestamp';
            }
            if(raid.bosses[0].hasOwnProperty(property)){
                return true;
            }
            return false;
        },
        dateKilled(boss, difficulty){
            let property = '';
            if(difficulty == 1){
                property = 'lfrTimestamp';
            }
            else if(difficulty == 3){
                property = 'normalTimestamp';
            }
            else if(difficulty == 4){
                property = 'heroicTimestamp';
            }
            else if(difficulty == 5){
                property = 'mythicTimestamp';
            }
            if(boss[property] != 0){
                var timeKilled = new Date(boss[property]);
                return timeKilled.getDate() + '/' + (timeKilled.getMonth()+1) + "/" + (timeKilled.getYear()-100);
            }
            else{
                return "-";
            }
        },
        averageRanking(raidId, difficulty){
            let bossRankings = [];
            let currentRaid = this.raids.find(x=>x.id == raidId);
            if(currentRaid){
                currentRaid.bosses.forEach((boss)=>{
                    let rank = this.rankings.find(x=> (x.encounterID == boss.encounter) && x.difficulty == difficulty);
                    if(rank){
                        bossRankings.push((((rank.outOf-rank.rank)/rank.outOf) * 100));
                    }
                });
                let averageRank = "-";
                if(bossRankings.length == 1){
                    averageRank = Math.floor(bossRankings[0],2);
                }
                else if(bossRankings.length >1){
                    averageRank = Math.floor(bossRankings.reduce((a,b) => a+b,0) / bossRankings.length,2);
                }
                let quality = this.rankColor(averageRank);
                return "<span class='"+quality+" ranking'>" +averageRank + "</span>";
            }
            return "-";          
        },
        bossRanking(boss, difficulty){
            let ranking = this.rankings.find(x=> (x.encounterID == boss.encounter) && x.difficulty == difficulty);
            if(ranking){
                let rank = ((ranking.outOf-ranking.rank)/ranking.outOf) * 100;
                let quality = this.rankColor(rank);
                return {value:Math.floor(rank,2), display:"<a class='log-link "+quality+" ranking' target='_blank' href='https://www.warcraftlogs.com/reports/"+ranking.reportID+"/#fight="+ranking.fightID+"'>" + Math.floor(rank,2) + "</a>"};
            }
            return {value:-1, description:'-'};          
        },
        rankColor(rank){
            let quality = "";
            if(rank==100){
                quality = "artifact";
            }
            else if(rank>=95){
                quality = "legendary";
            }
            else if(rank>=75){
                quality = "epic";
            }
            else if(rank>=50){
                quality = "rare";
            }
            else if(rank>=25){
                quality = "uncommon";
            }
            else{
                quality = "poor"
            }
            return quality;
        },
        progression(raidId,difficulty){
            let raid = this.raids.find(x => x.id == raidId);
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
                return killCount +"/"+bosses;
            }
            else{
                return "-";
            }
        },
        killCount(raidId,difficulty){
            let raid = this.raids.find(x => x.id == raidId);
            let killCount = 0;
            let bosses = 0;
            let property = '';
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
                            killCount+=raid.bosses[i][property];
                        }
                    }
                }
            }
            return killCount;
        },
        bossKillCount(boss,difficulty){
            let killCount = 0;
            let property = '';
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
            if(boss.hasOwnProperty(property)){
                killCount=boss[property];
            }
            return killCount;
        },
        showBosses(event){
            this.nextSubmenu(event.target);
        },
        nextSubmenu(elem){
            elem = elem.nextElementSibling;
            while(elem){
                if(elem.classList.contains("sub-table")){
                    if(elem.classList.toggle("show"));
                    break;
                }
                elem = elem.nextElementSibling;
            }
        }
    }
}
</script>

<style lang="scss">
    .progression-container{
        margin:0 1em;
    }
    .log-link{
        text-decoration:none;
    }
    .artifact{
        color:#e6cc80;
    }
    .legendary{
        color:#ff8000;
    }
    .epic{
        color:#a335ee;
    }
    .rare{
        color:#0070dd;
    }
    .uncommon{
        color:#1eff00;
    }
    .poor{
        color:#9d9d9d;
    }
    .ranking{
        font-weight:600;
        text-shadow:.5px .5px #000;
    }

    .container{
        width:100%;
    }
    .progression-full{
        display: none;
        @include breakpoint('md'){
            display:inline-block;
        }
    }
    .progression-short{
        display: inline-block;
        @include breakpoint('md'){
            display:none;
        }
    }
</style>
    