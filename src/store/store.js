import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import objectiveData from '../data/objectiveData';

import {getReputation, achievementCheck, questCheck, setItems} from '../helpers/helpers'

Vue.use(Vuex);

const state = {
    characterName:'',
    realm:'',
    region:'',
    realmSlug:'',
    achievementCategories: [],
    achievementsLoaded:false,
    characterData: {},
    characterLoaded:false,
    classesLoaded:false,
    reputation:[],
    pathfinder:[],
    classMount:[],
    mageTower:[],
    argus:[],
    mageTowerCompleted:false,
    classMountCompleted:false,
    argusCompleted:false,
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
    ],
    encounters:[{id:8638, bosses:[2076,2074,2070,2075,2064,2082,2088,2069,2073,2063,2092]}]
};

const mutations = {
    'RESET_ARMORY'(state){
       state.characterData= {};
       state.characterLoaded =false;
       state.reputation= [];
       state.pathfinder = [];
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
        state.characterData.progression.raids.forEach((raid, index)=>{
            let accumulator = 0;
            for(let i = 0; i < state.raids.length; i++){
                if(index < state.raids[i].raids + accumulator){
                    raid.expansion = i;
                    break;
                }
                accumulator +=state.raids[i].raids;
            }
            let encounter  = state.encounters.find(x=>x.id == raid.id);
            if(encounter){
                encounter.bosses.forEach((boss,index)=>{
                    raid.bosses[index].encounter = boss;
                });
            }
        });
        state.characterData.thumbnail = 'http://render-'+state.characterData.region+'.worldofwarcraft.com/character/' + state.characterData.thumbnail.replace(/\bavatar\b~?/g, 'inset');
        state.characterData.background = 'url('+state.characterData.thumbnail.replace(/\binset\b~?/g, 'main')+')';
        axios.get('https://vuejs-character-tracker.firebaseio.com/trackers.json')
        .then(response => {        
            if(response.data){          
                state.trackerAchievements = response.data;
                state.achievementsLoaded =true;
                axios.get('https://vuejs-character-tracker.firebaseio.com/classes.json')
                .then(response => {
                    if(response.data){
                        state.classes = response.data;
                        console.log(state.characterData.talents);
                        state.characterData.talents.forEach((spec)=>{
                            if(!spec.spec){
                                spec.spec={};
                                state.classes[state.characterData.class-1].specs.forEach((classSpec)=>{
                                    if(!state.characterData.talents.find(x=>x.spec.name == classSpec.name)){
                                        console.log(classSpec.description);
                                        spec.spec.name = classSpec.name;
                                        spec.spec.icon = classSpec.icon;
                                        spec.spec.description = classSpec.description;
                                    }
                                });
                            }
                            else{
                                let trimStart =  spec.spec.description.indexOf("Preferred Weapon");
                                spec.spec.description =  spec.spec.description.substr(0,trimStart);
                            }
                        });
                        state.classesLoaded=true;

                    }
                })
                .catch(e => {
                    console.log(e);
                    this.errors.push(e)
                });
            }
        })
        .catch(e => {
                console.log(e);
                this.errors.push(e)
        });
        axios.get('https://vuejs-character-tracker.firebaseio.com/achievements.json')
        .then(response => {      
            if(response.data){          
                state.achievementCategories = response.data;
                state.achievementCategories.forEach((achievement)=>{
                    achievementCheck(state,achievement);
                })
            }
        })
        .catch(e => {
                console.log(e);
                this.errors.push(e)
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
        let raid = state.characterData.progression.raids.find(x => x.id == "8638");
        rankings.forEach((ranking)=> {
            let boss = raid.bosses.find(x => x.encounter == ranking.encounter);
            if(boss && ranking.difficulty == 4){
                boss.heroicRanking = Math.floor((((ranking.outOf-ranking.rank)/ranking.outOf) * 100),2);
            }
            else if(boss && ranking.difficulty == 3){
                boss.normalRanking = Math.floor((((ranking.outOf-ranking.rank)/ranking.outOf) * 100),2);
            }
        });       
    },
    'INIT_LEGION_PATHFINDER'(state){
        // state.pathfinder = objectiveData.pathfinder;
         state.pathfinder = state.trackerAchievements.pathfinder;
         state.pathfinder.forEach((achievement) => {
             if(achievement.id == "10994"){
                 achievement.criteria = state.classes[state.characterData.class-1].campaign;
             }
             achievementCheck(state,achievement);
         });
         state.legionathfinderLoaded = true;
         state.legionLoremaster = state.pathfinder[1];
         state.legionPathfinderCompleted = true;
    }, 
    'INIT_DRAENOR_PATHFINDER'(state){
        state.draenorPathfinder = objectiveData.draenorPathfinder;
        state.draenorPathfinder.forEach((achievement) => {
            achievementCheck(state,achievement);    
        });
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
        state.classes[state.characterData.class-1].specs.forEach((spec)=>{
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
        if(state.classes[state.characterData.class-1].classMount){
            state.classes[state.characterData.class-1].classMount.forEach((quest)=>{
                state.classMount.criteria.push(quest);
            });
            state.classMount.icon = state.classes[state.characterData.class-1].mountIcon;
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
            console.log(characterDetails);
            let characterName = "";
            let realm = "";
            let region = "";
            if(characterDetails){
                characterName = characterDetails.name;
                realm = characterDetails.realm;
                region = characterDetails.region;
            }
            axios.get('https://'+region+'.api.battle.net/wow/character/'+realm+'/'+characterName+'?fields=achievements&fields=pets&fields=quests&fields=mounts&fields=reputation&fields=items&fields=talents&fields=guild&fields=titles&fields=stats&fields=progression&locale=en_GB&apikey=g3umfbjnfjqtghwetv63tvxk6w6f7e5w')
                .then((response) =>{
                    commit('RESET_ARMORY');
                    response.data['realmSlug']=realm;
                    response.data['region']=region;
                    commit('GET_CHARACTER_DATA',response.data);
                    resolve();
                })
                .catch((e)=>{
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
        axios.get('https://vuejs-character-tracker.firebaseio.com/reputation.json')
        .then(response => {
            if(response.data){
                const reputation = response.data;
                commit('INIT_REPUTATION', reputation);
            }
        })
        .catch(e => {
            console.log(e);
            this.errors.push(e)
        });
    },
    initRankings:({commit}) =>{
        axios.get('https://www.warcraftlogs.com:443/v1/rankings/character/'+state.characterData.name.toLowerCase()+'/'+state.characterData.realmSlug+'/EU?api_key=69295a99955929341cfcacafc54e5cd4')
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
        axios.get('https://vuejs-character-tracker.firebaseio.com/pets.json')
        .then(response =>{ 
            const petData = response.data;         
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
        })
        .catch(e => {
            console.log(e);
            this.errors.push(e)
        });
    },
    initMountData:({commit}) =>{
        axios.get('https://vuejs-character-tracker.firebaseio.com/mounts.json')
        .then(response =>{ 
            const mounts = response.data;
            commit('GET_MOUNT_DATA', mounts);
        })
        .catch(e => {
            console.log(e);
            this.errors.push(e)
        });
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
    pathfinder: state => {
        return state.pathfinder;
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
    achievementCategories:state=>{
        return state.achievementCategories;
    },
    legionCompleted:state=>{
        return state.mageTowerCompleted && state.classMountCompleted && state.argusCompleted && state.legionPathfinderCompleted;
    },
    draenorCompleted:state=>{
        return state.draenorPathfinderCompleted;
    },
    achievementsLoaded:state=>{
        return state.achievementsLoaded;
    }
};

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
});

