import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import objectiveData from '../data/objectiveData';
import raids from '../data/raids.json';
import reputations from '../data/reputations.json';
import trackers from '../data/trackers.json';
import pets from '../data/pets.json';
import achievements from '../data/achievements.json'
import classes from '../data/classes.json'
import mounts from '../data/mounts.json'
import {getReputation, achievementCheck, questCheck, setItems} from '../helpers/helpers'
import {config} from '../config.js';

Vue.use(Vuex);


const state = {
    characterName:'',
    realm:'',
    region:'',
    realmSlug:'',
    achievements: [],
    achievementsLoaded:false,
    characterData: {},
    characterLoaded:false,
    classesLoaded:false,
    reputation:[],
    battlePathfinder:[],
    legionPathfinder:[],
    classMount:[],
    mageTower:[],
    argus:[],
    mageTowerCompleted:false,
    classMountCompleted:false,
    argusCompleted:false,
    battlePathfinderCompleted:false,
    legionPathfinderCompleted:false,
    draenorPathfinderCompleted:false,
    draenorPathfinder:[],
    pandariaLoremaster:[],
    explorePandaria:[],
    greenFire:[],    
    cataclysmLoremaster:[],
    exploreCataclysm:[],
    wrathLoremaster:[],
    exploreWrath:[],
    outlandLoremaster:[],
    exploreOutland:[],
    collectedPets:[],
    petsLoaded: false,
    mountsLoaded: false,
    reputationLoaded:false,
    trackerAchievements:[],
    rankings:[],
    pets:[],
    frameOpen:false,
    frameItems:[],
    frameItemIndex:-1,
    frameType:"",
    currentFrameItem:{},
    classes:[],
    characterNotFound:false,
    items:{},
    raids: [
        {expansion:0, raids:4},
        {expansion:1, raids:8},
        {expansion:2, raids:9},
        {expansion:3, raids:6},
        {expansion:4, raids:5},
        {expansion:5, raids:3},
        {expansion:6, raids:5},
        {expansion:7, raids:2},
    ],
    encounters:[{id:9389, bosses:[2144,2141,2128,2136,2134,2145,2135,2122]}]
};

const mutations = {
    'RESET_ARMORY'(state){
       state.characterData= {};
       state.characterLoaded =false;
       state.reputation= [];
       state.legionPathfinder = [];
       state.mageTower = [];
       state.classMount = [];
       state.argus = [];
       state.draenorPathfinder = [];
       state.pandariaLoremaster=[];
       state.explorePandaria=[];
       state.cataclysmLoremaster=[];
       state.exploreCataclysm=[];
       state.wrathLoremaster=[];
       state.exploreWrath=[];
       state.outlandLoremaster=[];
       state.exploreOutland=[];
       state.collectedPets=[];
       state.petsLoaded= false;
       state.mountsLoaded= false;
       state.reputationLoaded=false;
       state.trackerAchievements=[];
       state.rankings=[];
       state.pets=[];
       state.frameOpen=false;
       state.frameItems=[];
       state.frameItemIndex=-1;
       state.frameType="";
       state.currentFrameItem={};
       state.characterNotFound=false;
       state.items={};        
    },
    'GET_CHARACTER_DATA'(state,characterResponse){       
        state.characterData = characterResponse;       
        console.log(state.characterData.talents);
        state.characterLoaded = true;
        setItems(state);
        if(state.characterData.class == 11){
            state.characterData.talents = state.characterData.talents.slice(0,4);
        }
        else if(state.characterData.class == 12){
            state.characterData.talents = state.characterData.talents.slice(0,2);
        }
        else{
            state.characterData.talents = state.characterData.talents.slice(0,3);
        }
        state.characterData.progression.raids.push(state.characterData.progression.raids.splice(21,1)[0]);
        state.characterData.progression.raids.forEach((raid, index)=>{

            raid.expansionId = raids[index].expansionId ;
            raid.icon = raids[index].urlSlug;
            let encounter  = state.encounters.find(x=>x.id == raid.id);
            if(encounter){
                encounter.bosses.forEach((boss,index)=>{
                    raid.bosses[index].encounter = boss;
                });
            }
        });
        state.characterData.smallThumbnail = 'http://render-'+state.characterData.region+'.worldofwarcraft.com/character/' + state.characterData.thumbnail;
        state.characterData.thumbnail = state.characterData.smallThumbnail.replace(/\bavatar\b~?/g, 'inset');
        state.characterData.background = 'url('+state.characterData.thumbnail.replace(/\binset\b~?/g, 'main')+')';   
        state.trackerAchievements = trackers;
        state.achievementsLoaded =true;
        let specs = [];
        state.characterData.talents.forEach((spec,index)=>{
            if(spec.hasOwnProperty('spec')){
                let trimStart =  spec.spec.description.indexOf("Preferred Weapon");
                spec.spec.description =  spec.spec.description.substr(0,trimStart);
                specs.push(spec);
            }
        });
        state.characterData.talents = specs;
        state.classes = classes;
        state.classesLoaded=true;
        state.achievements = achievements;
        state.achievements.forEach((achievement)=>{
            achievementCheck(state,achievement);
        });        
    },
    'INIT_REPUTATION'(state, reputation){
        state.reputation = [];
        reputation.forEach((rep)=>{  
            getReputation(rep, state, state.reputation);
        });
        state.reputation.sort((a,b)=> 
        {
            if(!a.subfactions && b.subfactions) return -1;
            if(a.subfactions && !b.subfactions) return 1;
            if((!a.subfactions && !b.subfactions) && (a.name > b.name)) return 1;
            if((!a.subfactions && !b.subfactions) && (a.name < b.name)) return -1;
            if((a.subfactions && b.subfactions) && (a.name > b.name)) return 1;
            if((a.subfactions && b.subfactions) && (a.name < b.name)) return -1;
            return 0;
        });
        state.reputationLoaded =true;
    },
    'CHARACTER_NOT_FOUND'(state){
        state.characterNotFound = true;
        console.log("CHARACTER NOT FOUND");
    },
    'GET_PET_DATA'(state, petData){
        state.pets = petData;
        state.characterData.pets.collected.forEach((pet)=>{
            let foundPet = petData.find((element)=>{
                return element.creatureId == pet.creatureId;
            });
            pet.displayId = foundPet.displayId;
            pet.family = foundPet.family;
        });
        state.petsLoaded = true;
    },
    'GET_MOUNT_DATA'(state, mounts){
        state.characterData.mounts.collected.forEach((pet)=>{
            let foundPet = mounts.find((element)=>{
                return element.creatureId == pet.creatureId;
            });
            if(foundPet){
                pet.displayId = foundPet.displayId;
            }
        });
        state.mountsLoaded = true;        
    },

    'GET_RAID_RANKINGS'(state,rankings){
        state.rankings = rankings;
        let raid = state.characterData.progression.raids.find(x => x.expansionId == 7);
        rankings.forEach((ranking)=> {
            let boss = raid.bosses.find(x => x.encounter == ranking.encounterID);
            if(boss && ranking.difficulty == 4){
                boss.heroicRanking = Math.floor((((ranking.outOf-ranking.rank)/ranking.outOf) * 100),2);
            }
            else if(boss && ranking.difficulty == 3){
                boss.normalRanking = Math.floor((((ranking.outOf-ranking.rank)/ranking.outOf) * 100),2);
            }
        });       
    },
    'INIT_BATTLE_PATHFINDER'(state){
        state.battlePathfinder = objectiveData.battlePathfinder;
        achievementCheck(state,state.battlePathfinder);
        state.battlePathfinderLoaded = true;
        state.battleLoremaster = state.battlePathfinder.criteria[1];
        state.battlePathfinderCompleted = true;
    }, 
    'INIT_LEGION_PATHFINDER'(state){
         state.legionPathfinder = objectiveData.legionPathfinder;
         state.legionPathfinder.criteria.forEach((achievement) => {
             if(achievement.id == "10994"){
                 achievement.criteria = classes[state.characterData.class-1].campaign;
             }
         });
         achievementCheck(state,state.legionPathfinder);

         state.legionPathfinderLoaded = true;
         state.legionLoremaster = state.legionPathfinder[1];
         state.legionPathfinderCompleted = true;
    }, 
    'INIT_DRAENOR_PATHFINDER'(state){
        state.draenorPathfinder = objectiveData.draenorPathfinder;
        achievementCheck(state,state.draenorPathfinder);    
        state.draenorPathfinderCompleted = true;
    },
    'GET_PANDARIA_LOREMASTER'(state){
        state.pandariaLoremaster = objectiveData.pandariaLoremaster;
        achievementCheck(state,state.pandariaLoremaster);
    },
    'GET_PANDARIA_EXPLORER'(state){
        state.pandariaExplorer = objectiveData.pandariaExplorer;
        achievementCheck(state,state.pandariaExplorer);
    },
    'GET_GREEN_FIRE'(state){
        state.greenFire = objectiveData.greenFire;
        state.greenFire.criteria = state.greenFire.criteria.filter((quest)=>{
            if(!quest.faction || quest.faction == state.characterData.faction){
                return true;
            }
            return false;
        });
        achievementCheck(state,state.greenFire);
    },
    'GET_CATACLYSM_LOREMASTER'(state){
        state.cataclysmLoremaster = objectiveData.cataclysmLoremaster;
        achievementCheck(state,state.cataclysmLoremaster);
    },
    'GET_CATACLYSM_EXPLORER'(state){
        state.exploreCataclysm = objectiveData.exploreCataclysm;
        achievementCheck(state,state.exploreCataclysm);
    },
    'GET_WRATH_LOREMASTER'(state){
        state.wrathLoremaster = objectiveData.northrendLoremaster;
        achievementCheck(state,state.wrathLoremaster);
    },
    'GET_WRATH_EXPLORER'(state){
        state.exploreWrath= objectiveData.exploreNorthrend;
        achievementCheck(state,state.exploreWrath);
    },
    'GET_OUTLAND_LOREMASTER'(state){
        state.outlandLoremaster = objectiveData.outlandLoremaster;
        achievementCheck(state,state.outlandLoremaster);
    },
    'GET_OUTLAND_EXPLORER'(state){
        state.exploreOutland= objectiveData.exploreOutland;
        achievementCheck(state,state.exploreOutland);
    },
    'GET_MAGE_TOWER'(state){
        classes[state.characterData.class-1].specs.forEach((spec)=>{
            let mageTowerQuest = state.trackerAchievements.magetower.find(x=>x.id == spec.quest);
            mageTowerQuest.icon = spec.icon;
            mageTowerQuest.completed = questCheck(state,mageTowerQuest.id);
            state.mageTower.push(mageTowerQuest);
        });
        state.mageTowerCompleted = true;
        
    },
    'INIT_ARGUS'(state){
        state.argus = objectiveData.argus;
        achievementCheck(state,state.argus);
        state.argusCompleted = true;
        
    },
    'INIT_CLASS_MOUNT'(state){
        state.classMount = objectiveData.classMount;
        if(classes[state.characterData.class-1].classMount){
            classes[state.characterData.class-1].classMount.forEach((quest)=>{
                state.classMount.criteria.push(quest);
            });
            state.classMount.icon = classes[state.characterData.class-1].mountIcon;
        }
        achievementCheck(state,state.classMount);
        state.classMountCompleted = true;
        
    },
    'CHANGE_FRAME_ITEM'(state, payload){
        if(payload == 1 && state.frameItemIndex+payload < state.frameItems.length){
            document.getElementsByClassName("frame-item")[0].classList.add("frame-right-out");
            document.getElementsByClassName("frame-item")[0].classList.remove("frame-center");                  
            setTimeout(()=> {
                state.frameItemIndex = state.frameItemIndex+payload;
                state.currentFrameItem = state.frameItems[state.frameItemIndex];
                document.getElementsByClassName("frame-item")[0].classList.add("frame-right-in");                                    
                document.getElementsByClassName("frame-item")[0].classList.remove("frame-right-out"); 
                setTimeout(()=>{
                    document.getElementsByClassName("frame-item")[0].classList.add("frame-center");                  
                    document.getElementsByClassName("frame-item")[0].classList.remove("frame-right-in");                                    
                    
                },20); 
            },500);              
        }
        else if(payload == -1 && state.frameItemIndex+payload > -1){
            document.getElementsByClassName("frame-item")[0].classList.add("frame-left-out");
            document.getElementsByClassName("frame-item")[0].classList.remove("frame-center");                  
            setTimeout(()=> {
                state.frameItemIndex = state.frameItemIndex+payload;
                state.currentFrameItem = state.frameItems[state.frameItemIndex];
                document.getElementsByClassName("frame-item")[0].classList.add("frame-left-in");                                    
                document.getElementsByClassName("frame-item")[0].classList.remove("frame-left-out"); 
                setTimeout(()=>{
                    document.getElementsByClassName("frame-item")[0].classList.add("frame-center");                  
                    document.getElementsByClassName("frame-item")[0].classList.remove("frame-left-in");                                    
                    
                },100); 
            },500);                   
        }
    },
    'INIT_FRAME'(state, payload){
        state.frameOpen = true;        
        state.frameType = payload.type;
        state.frameItems = payload.frameItems;
        state.frameItemIndex = payload.index;
        state.currentFrameItem = state.frameItems[state.frameItemIndex];
        document.getElementsByTagName("BODY")[0].classList.add("frame-open");
    },
    'CLOSE_FRAME'(state){
        state.frameOpen = false;
        state.frameItems = [];        
        state.currentFrameItem = {};
        state.frameItemIndex = -1;
        document.getElementsByTagName("BODY")[0].classList.remove("frame-open");
    }
};

const actions = {
    /*initCharacter ({commit}, characterDetails = null){
        return new Promise((resolve, reject) => {
            if(characterDetails){
                state.characterName = characterDetails.name;
                state.realm = characterDetails.realm;
            }
            commit('GET_CHARACTER_DATA');
        });
    },*/
    initCharacter:({commit},characterDetails = null)=>{
        return new Promise((resolve,reject) => {
            let characterName = "";
            let realm = "";
            let region = "";
            if(characterDetails){
                characterName = characterDetails.name;
                realm = characterDetails.realm;
                region = characterDetails.region;
            }
            axios.get('https://'+region+'.api.battle.net/wow/character/'+realm+'/'+characterName+'?fields=achievements&fields=pets&fields=quests&fields=mounts&fields=reputation&fields=feed&fields=items&fields=talents&fields=guild&fields=titles&fields=stats&fields=progression&fields=statistics&locale=en_GB&apikey='+config.BLIZZARD_KEY)
                .then((response) =>{
                    commit('RESET_ARMORY');
                    response.data['realmSlug']=realm;
                    response.data['region']=region;
                    commit('GET_CHARACTER_DATA',response.data);
                    resolve();
                })
                .catch((e)=>{
                    console.log(e);
                    if(e.response.status === 404){
                        commit('CHARACTER_NOT_FOUND');
                        reject();
                    };
                });
            })
            
    },
    initArgus:({commit}) => {
        commit('INIT_ARGUS');
    },
    initReputation:({commit}) =>{
        const reputation = reputations;
        commit('INIT_REPUTATION', reputation);
    },
    initRankings:({commit}) =>{
        axios.get('https://www.warcraftlogs.com:443/v1/rankings/character/'+state.characterData.name.toLowerCase()+'/'+state.characterData.realmSlug+'/EU?api_key='+config.WARCRAFT_LOGS_KEY)
        .then(response =>{ 
            const rankings = response.data;
            commit('GET_RAID_RANKINGS', rankings);
        })
        .catch(e => {
            console.log(e);
            this.errors.push(e)
        });        
    },
    initPetData:({commit}) =>{
        const petData = pets;         
        for(var i=0;i<petData.length;i++){
            delete petData[i].canBattle;
            delete petData[i].canObtain;
            delete petData[i].canTrade;
            delete petData[i].source;
            delete petData[i].stats;
            delete petData[i].strongAgainst;
            delete petData[i].weakAgainst;
            delete petData[i].unique;            
        }
        commit('GET_PET_DATA', petData);
    },
    initMountData:({commit}) =>{
        commit('GET_MOUNT_DATA', mounts);
    },
    changeFrameItem: ({commit}, payload) =>{
        commit('CHANGE_FRAME_ITEM', payload);
    },
    initFrame:({commit}, payload)=>{
        commit('INIT_FRAME', payload);
    },
    closeFrame:({commit}, payload)=>{
        commit('CLOSE_FRAME', payload);
    },
    initBattle:({commit}, payload)=>{
        commit('INIT_BATTLE_PATHFINDER');
    },
    initLegion:({commit}, payload)=>{
        commit('INIT_LEGION_PATHFINDER');
        commit('GET_MAGE_TOWER');
        commit('INIT_ARGUS');
        commit('INIT_CLASS_MOUNT');
    },
    initDraenor:({commit}, payload)=>{
        commit('INIT_DRAENOR_PATHFINDER');
    },
    initPandaria:({commit}, payload)=>{
        commit('GET_PANDARIA_LOREMASTER');
        commit('GET_GREEN_FIRE');
        
      // commit('GET_PANDARIA_EXPLORER');
    },
    initCataclysm:({commit}, payload)=>{
        commit('GET_CATACLYSM_LOREMASTER');
        commit('GET_CATACLYSM_EXPLORER');
    },
    initWrath:({commit}, payload)=>{
        commit('GET_WRATH_LOREMASTER');
        commit('GET_WRATH_EXPLORER');
    },
    initOutland:({commit}, payload)=>{
        commit('GET_OUTLAND_LOREMASTER');
        commit('GET_OUTLAND_EXPLORER');
    },
};

const getters = {
    characterData: state => {
        return state.characterData;
    },
    pets: state=>{
        return state.characterData.pets;
    },
    dataLoaded: state=>{
        return state.characterLoaded && state.classesLoaded;
    },
    reputation: state=>{
        return state.reputation;
    },
    reputationLoaded: state=>{
        return state.reputationLoaded;
    },
    rankings: state=>{
        return state.rankings;
    },
    raids: state=>{
        return state.raids;
    },
    battlePathfinder: state => {
        return state.battlePathfinder;
    },
    legionPathfinder: state => {
        return state.legionPathfinder;
    },
    mageTower: state => {
        return state.mageTower;
    },
    classMount: state=>{
        return state.classMount;
    },
    draenorPathfinder: state => {
        return state.draenorPathfinder;
    },
    pandariaLoremaster: state => {
        return state.pandariaLoremaster;
    },
    explorePandaria: state => {
        return state.explorePandaria;
    },
    cataclysmLoremaster: state => {
        return state.cataclysmLoremaster;
    },
    exploreCataclysm: state => {
        return state.exploreCataclysm;
    },
    wrathLoremaster: state => {
        return state.wrathLoremaster;
    },
    exploreWrath: state => {
        return state.exploreWrath;
    },
    outlandLoremaster: state => {
        return state.outlandLoremaster;
    },
    exploreOutland: state => {
        return state.exploreOutland;
    },
    petsLoaded: state=>{
        return state.petsLoaded;
    },
    mountsLoaded: state=>{
        return state.mountsLoaded;
    },
    currentFrameItem: state=>{
        return state.currentFrameItem;
    },
    frameOpen: state=>{
        return state.frameOpen;
    },
    frameItems: state=>{
        return state.frameItems;
    },
    frameItemIndex: state=>{
        return state.frameItemIndex;
    },
    frameType: state=>{
        return state.frameType;
    },
    classes: state=>{
        return state.classes;
    },
    characterNotFound:state=>{
        return state.characterNotFound;
    },
    items:state=>{
        return state.items;
    },
    argus:state=>{
        return state.argus;
    },
    greenFire:state=>{
        return state.greenFire;
    },
    achievements:state=>{
        return state.achievements;
    },
    battleCompleted:state=>{
        return state.battlePathfinderCompleted;
    },
    legionCompleted:state=>{
        return state.mageTowerCompleted && state.classMountCompleted && state.argusCompleted && state.legionPathfinderCompleted;
    },
    draenorCompleted:state=>{
        return state.draenorPathfinderCompleted;
    },
    achievementsLoaded:state=>{
        return state.achievementsLoaded;
    },
    battlegroundStats:state=>{
        if(state.characterLoaded){
            const battlegrounds = [
                {name:'Arathi Basin', totalId: 55, winsId: 51 },
                {name: 'Alterac Valley', totalId: 53, winsId: 49},
                {name: 'Battle for Gilneas', totalId: 5236, winsId: 5237},
                {name: 'Eye of the Storm', totalId: 54, winsId: 50},
                {name: 'Seething Shore', totalId: 12710, winsId: 12712},
                {name: 'Strand of the Ancients', totalId: 1549, winsId: 1550},
                {name: 'Twin Peaks', totalId: 5232, winsId: 5233},
                {name: 'Warsong Gulch', totalId: 52, winsId: 105},
                {name: 'Silvershard Mines', totalId: 7829, winsId: 7830},
                {name: 'Temple of Kotmogu', totalId: 7825, winsId: 7826},
                {name: 'Isle of Conquest', totalId: 4096, winsId: 4097},
                {name: 'Deepwind Gorge', totalId: 8374, winsId: 8373}
            ];
            battlegrounds.forEach((battleground)=>{
                battleground.total = state.characterData.statistics.subCategories[9].subCategories[1].statistics.find(x=>x.id==battleground.totalId).quantity;
                battleground.wins = state.characterData.statistics.subCategories[9].subCategories[1].statistics.find(x=>x.id==battleground.winsId).quantity;
            });
            return battlegrounds;
        }


        return {};
    },
    recentActivity:state=>{
        return state.characterData.feed;
    }
};

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
});

