<template>
    <div class="progression-container">
        <div v-for="expansion in raidsByExpansion" class="progression-expansion">
            <div class="section-header">{{expansion.expansion.title}}</div>
            <div class="table" v-for="(raid,raidCount) in expansion.raids" :class="[raid.id == 8638 ? 'table--5cols' : 'table--4cols']" style="margin-bottom:1em">
                <div class="table-cell table-cell-2 table-cell--third table-header">{{raid.name}}</div>
                <div class="table-cell table-cell-1 table-header"><span class="progression-full">Progression</span><span class="progression-short">#</span></div>
                <div class="table-cell table-cell-1 table-header">Kills</div>
                <div class="table-cell table-cell-1 table-header" v-if="raid.id == 8638">Rank</div>
                <template v-for="(difficulty, index) in reverseDifficulty" v-if="difficultyCheck(raid, difficulty.id)">
                    <div class="table-cell table-cell-2" @click="showBosses">{{difficulty.name}}</div>
                    <div class="table-cell table-cell-1" @click="showBosses">{{progression(raid.id, difficulty.id)}}</div>
                    <div class="table-cell table-cell-1" @click="showBosses">{{killCount(raid.id, difficulty.id)}}</div>
                    <div class="table-cell table-cell-1" v-if="raid.id == 8638" v-html="averageRanking(raid.id, difficulty.id)" @click="showBosses"></div>
                    <div class="table sub-table" :class="[raid.id == 8638 ? 'table--5cols' : 'table--4cols',subTableLength(raid, difficulty.id)]">
                        <template v-for="boss in raid.bosses" v-if="bossDifficultyCheck(boss,difficulty.id)">
                            <div class="table-cell table-cell table-cell-2 table-cell-child">{{boss.name}}</div>
                            <div class="table-cell table-cell-1 table-cell-child">{{bossKillCount(boss, difficulty.id) >0? "&#10004": "x"}}</div>
                            <div class="table-cell table-cell-1 table-cell-child">{{bossKillCount(boss, difficulty.id)}}</div>
                            <div class="table-cell table-cell-1 table-cell-child" v-if="raid.id == 8638" v-html="bossRanking(boss, difficulty.id)"></div>   
                        </template> 
                    </div>       
                </template>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
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
            ],
        }
    },
    created() {
        this.$store.dispatch('initRankings');
    },
    computed:{
        reverseRaids() {
            return this.raids.slice().reverse();
        },
        reverseDifficulty() {
            return this.difficulty.reverse();
        },
        rankings(){
            return this.$store.getters.rankings;
        },
        raids(){
            return this.$store.getters.characterData.progression.raids;
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
                    let rank = this.rankings.find(x=> (x.encounter == boss.encounter) && x.difficulty == difficulty);
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
            let ranking = this.rankings.find(x=> (x.encounter == boss.encounter) && x.difficulty == difficulty);
            if(ranking){
                let rank = ((ranking.outOf-ranking.rank)/ranking.outOf) * 100;
                let quality = this.rankColor(rank);
                return "<a class='log-link "+quality+" ranking' href='https://www.warcraftlogs.com/reports/"+ranking.reportID+"/#fight="+ranking.fightID+"'>" + Math.floor(rank,2) + "</a>";
            }
            return "-";          
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
    .progression-expansion{
        color:white;
        padding-bottom:1em;
        border-bottom:2px solid white;
        @media screen and (min-width:768px){
            max-width:1480px;
            margin-left:auto;
            margin-right:auto;
            .table{
                max-width:1000px;
                margin-left:auto;
                margin-right:auto;
            }
        }
    }
    .progression-expansion h2{
        margin-top:0;
        padding-top:1em;
        @media screen and (min-width:768px){
            order:2;
            margin-bottom:1em;
            text-align:left;
        }
    }
    .container{
        width:100%;
    }
    .progression-full{
        display: none;
        @media screen and (min-width:768px){
            display:inline-block;
        }
    }
    .progression-short{
        display: inline-block;
        @media screen and (min-width:768px){
            display:none;
        }
    }
</style>
    