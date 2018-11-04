<template>
    <div class="reputation-expansion">
            <div class="section-header">{{expansion.expansion.title}}</div>
            <div class="reputation-expansion-content">
                <div :class="[reputation.subfactions ? 'reputation-parent' : '']" class="reputation" v-for="reputation in expansion.reputations" v-if="(!reputation.hasOwnProperty('faction') || reputation.faction == characterData.faction)">
                    <h6 class="reputation-title" v-if="reputation.headerFaction != 1">{{reputation.name}}</h6>
                    <h6 class="reputation-standing" :class='[reputationsStanding[reputation.standing+1]+"-text"]' v-if="reputation.headerFaction != 1">{{reputationsStanding[reputation.standing+1].charAt(0).toUpperCase() + reputationsStanding[reputation.standing+1].slice(1) }}</h6>
                    <div class="progress" style="position:relative;" v-if="reputation.headerFaction != 1">
                        <small class="progress-text"  v-if="reputation.standing < 7"> {{reputation.value}} / {{reputation.max}}</small>
                        <div v-if="reputation.standing < 7" style="color:black;  height:100%;" class="progress-bar" role="progressbar" :style="{width: (reputation.value /reputation.max)*100 +'%'}" aria-valuenow="4" aria-valuemin="0" aria-valuemax="10" :class='reputationsStanding[reputation.standing+1]'></div>
                        <div v-else class="progress-bar" role="progressbar" style="width:100%; height:100%;" :class='reputationsStanding[reputation.standing+1]' ></div>
                    </div>
                    <h6 class="reputation-title reputation-title-full" v-if="reputation.headerFaction  == 1">{{reputation.name}}</h6>
                    <div class="reputation" v-for="faction in reputation.subfactions" v-if="reputation.subfactions">
                        <h6 class="subfaction-title">{{faction.name}}</h6>
                        <h6 class="reputation-standing" v-if="faction.friend == 1" :class='[reputationsStanding[faction.standing+3]+"-text"]'>{{friendStanding[faction.standing+1].charAt(0).toUpperCase() + friendStanding[faction.standing+1].slice(1) }}</h6>
                        <h6 class="reputation-standing" :class='[reputationsStanding[faction.standing+1]+"-text"]' v-else-if="faction.brawlers">Rank {{faction.standing}}</h6>
                        <h6 class="reputation-standing" :class='[reputationsStanding[faction.standing+1]+"-text"]' v-else>{{reputationsStanding[faction.standing+1].charAt(0).toUpperCase() + reputationsStanding[faction.standing+1].slice(1) }}</h6>
                        <div class="progress" style="position:relative;">
                            <small class="progress-text" v-if="faction.brawlers || ((faction.standing < 5 && faction.friend ==1) || (faction.standing < 7 && !faction.friend) )"> {{faction.value}} / {{faction.max}}</small>
                            <div v-if="faction.brawlers || (faction.friend == 1 && faction.standing < 5) || (!faction.friend && faction.standing < 7) " style="color:black;  height:100%;" class="progress-bar" role="progressbar" :style="{width: (faction.value /faction.max)*100 +'%'}" aria-valuenow="4" aria-valuemin="0" aria-valuemax="10" :class='[faction.friend == 1 ?  reputationsStanding[faction.standing+3] : reputationsStanding[faction.standing+1]]'></div>
                            <div v-else class="progress-bar"  role="progressbar" style="width:100%; height:100%;" :class='[faction.friend == 1 ?  reputationsStanding[faction.standing+3] : reputationsStanding[faction.standing+1]]' ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
</template>
<script>
export default {
    props:['expansion'],
    data(){
        return{
            reputationsStanding : {
                1:'hated',
                2:'hostile',
                3:'unfriendly',
                4:'neutral',
                5:'friendly',
                6:'honored',
                7:'revered',
                8:'exalted'
            },
            friendStanding :{
                1:'Stranger',
                2:'Acquaintance',
                3:'Buddy',
                4:'Friend',
                5:'Good Friend',
                6:'Best Friend',
            },
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
    computed:{
        characterData(){
            return this.$store.getters.characterData;
        }
    }
}
</script>
<style lang="scss">
    .reputation-expansion:after{
        display:block;
        width:100%;
        content:'';
        height:1px;
        background-color:rgba(255,255,255,.33);
        margin-top:2em;
    }
</style>
