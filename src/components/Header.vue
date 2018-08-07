<template>
    <div class="header-container" style="position:fixed;" :class="[homeCheck ? '' : 'coloured-background']">
        <div class="mobile-menu" :class="[isMobileOpen ? 'mobile-menu-active' : '']">
            <button class="mobile-menu-close-button" @click="closeMobileMenu()"><i class="fas fa-times"></i></button>
            <ul class="mobile-menu-nav">
                <router-link  v-on:click.native="closeMobileMenu()" :to="{ name: 'character', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link" >Equipment</a></router-link>
                <router-link  v-on:click.native="closeMobileMenu()" :to="{ name: 'reputation', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Reputation</a></router-link>
                <router-link  v-on:click.native="closeMobileMenu()" :to="{ name: 'achievements', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Achievements</a></router-link>
                <router-link  v-on:click.native="closeMobileMenu()" :to="{ name: 'progression', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Progression</a></router-link>
                <router-link  v-on:click.native="closeMobileMenu()" :to="{ name: 'pets', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Collections</a></router-link>
                <router-link  v-on:click.native="closeMobileMenu()" :to="{ name: 'legion', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Tracker</a></router-link>
                <router-link  v-on:click.native="closeMobileMenu()" :to="{ name: 'search'}" activeClass="active" tag="li" class="nav-item nav-search" exact><a class="nav-link">Search</a></router-link>
            </ul>             
        </div>
        <div class="character-info" style="background-size:cover; background-position:center;"  >
            <div class="header">
                <button class="mobile-menu-button" @click="openMobileMenu()"><i class="fas fa-bars"></i></button>
                <div class="character-details">
                    <div class="character-image">
                        <img :src="[characterData.thumbnail]">
                    </div>
                    <div class="character-text character-main-text">
                        <div class="title" style="margin:8px 0">
                            <h4 v-if="title && title.position == 1 ">{{title.text}}</h4>
                            <h1 :style="{color:classes[characterData.class-1].color}">{{ characterData.name }}</h1>
                            <h4 v-if="title && title.position == 0">{{title.text}}</h4>
                        </div>
                    </div>
                    <div class="character-text">
                        <div class="character-scores"><font-awesome-icon icon="shield" /> {{characterData.achievementPoints}} 
                            <svg class="ilvl-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <path d="M497.27,425.963c-8.555-8.544-19.45-13.358-30.644-14.444l-26.221-26.188c-0.032-0.032-0.064-0.065-0.096-0.097    c-0.031-0.031-0.063-0.062-0.094-0.093L408.6,353.566c5.225-2.489,10.635-4.588,16.179-6.263    c5.011-1.515,8.005-6.637,6.867-11.746l-11.882-53.352c-0.596-2.677-2.266-4.992-4.617-6.402c-2.351-1.41-5.179-1.794-7.822-1.059    c-12.021,3.342-23.668,7.872-34.769,13.487l-28.664-30.067l159.646-151.826c1.833-1.744,2.938-4.118,3.09-6.644l5.354-88.776    c0.172-2.856-0.887-5.649-2.91-7.673c-2.023-2.023-4.81-3.085-7.672-2.911L412.515,5.68c-2.522,0.152-4.894,1.253-6.637,3.082    L256,165.971L106.123,8.761c-1.744-1.829-4.115-2.93-6.637-3.082L10.601,0.332C7.746,0.157,4.951,1.22,2.928,3.243    c-2.023,2.023-3.083,4.817-2.91,7.673l5.354,88.776c0.152,2.526,1.257,4.9,3.09,6.644l159.646,151.826l-28.665,30.067    c-11.101-5.615-22.748-10.145-34.769-13.487c-2.643-0.733-5.47-0.352-7.822,1.059c-2.352,1.41-4.021,3.725-4.617,6.402    l-11.883,53.352c-1.138,5.109,1.856,10.231,6.867,11.746c5.544,1.676,10.954,3.775,16.179,6.264l-58.026,57.953    c-11.193,1.086-22.089,5.901-30.643,14.445C5.232,435.45,0,448.065,0,461.484c0,13.418,5.231,26.033,14.73,35.521    c9.801,9.788,22.674,14.682,35.547,14.682c12.873,0,25.747-4.894,35.547-14.682c8.338-8.328,13.387-19.065,14.497-30.64    l58.014-57.941c2.495,5.223,4.598,10.63,6.278,16.172c1.3,4.291,5.247,7.101,9.563,7.101c0.718,0,1.447-0.078,2.176-0.239    l53.417-11.868c2.679-0.596,4.996-2.266,6.407-4.619c1.411-2.354,1.793-5.184,1.057-7.828    c-3.345-12.001-7.877-23.63-13.495-34.713L256,341.748l32.262,30.681c-5.618,11.083-10.151,22.712-13.495,34.713    c-0.737,2.644-0.354,5.474,1.057,7.828c1.412,2.354,3.728,4.023,6.407,4.619l53.417,11.868c0.729,0.162,1.457,0.239,2.176,0.239    c4.316,0,8.263-2.811,9.563-7.101c1.679-5.542,3.783-10.949,6.278-16.172l58.014,57.941c1.11,11.575,6.159,22.312,14.497,30.639    c9.801,9.788,22.674,14.682,35.547,14.682s25.747-4.894,35.547-14.683c9.499-9.487,14.73-22.102,14.73-35.521    C512,448.065,506.769,435.45,497.27,425.963z M354.712,298.496c-8.367,5.433-16.322,11.527-23.774,18.229l-23.717-23.688    l22.179-21.092L354.712,298.496z M25.099,94.557l-4.438-73.584l73.699,4.434l147.824,155.056l-23.254,24.391L100.24,86.31    c-3.908-3.903-10.24-3.899-14.142,0.008c-3.903,3.908-3.899,10.239,0.008,14.142l119.019,118.873l-23.217,24.353L25.099,94.557z     M71.691,482.854c-11.807,11.793-31.019,11.793-42.827,0C23.148,477.145,20,469.556,20,461.484c0-8.072,3.148-15.662,8.864-21.37    c5.904-5.897,13.658-8.845,21.414-8.845c7.754,0,15.51,2.949,21.413,8.845c5.716,5.708,8.864,13.298,8.864,21.37    C80.555,469.556,77.407,477.145,71.691,482.854z M112.472,425.963c-7.347,7.337-19.3,7.337-26.647,0    c-3.555-3.55-5.512-8.27-5.512-13.289c0-4.977,1.925-9.659,5.422-13.199l0.179-0.179c3.661-3.611,8.447-5.416,13.234-5.416    c4.824,0,9.65,1.835,13.323,5.503c3.555,3.551,5.513,8.271,5.513,13.291C117.984,417.694,116.026,422.413,112.472,425.963z     M136.495,401.97c-1.789-6.264-5.152-12.005-9.89-16.738c-4.824-4.818-10.612-8.1-16.75-9.848l11.333-11.318    c5.117,3.667,9.944,7.752,14.413,12.217c4.465,4.459,8.55,9.274,12.219,14.378L136.495,401.97z M180.748,409.993    c-6.804-17.874-17.412-34.276-31.014-47.862c-13.6-13.583-30.021-24.177-47.912-30.972l7.573-34.002    c24.255,8.413,46.485,22.314,64.786,40.592c18.293,18.271,32.208,40.464,40.63,64.676L180.748,409.993z M213.459,354.605    c-5.438-8.357-11.538-16.302-18.246-23.745l230.681-230.399c3.908-3.903,3.911-10.234,0.008-14.142    c-3.903-3.907-10.234-3.912-14.142-0.008L181.063,316.725c-7.452-6.702-15.407-12.796-23.774-18.229L417.64,25.407l73.699-4.434    l-4.438,73.584L213.459,354.605z M270.511,327.948l22.212-21.124l24.065,24.035c-6.709,7.443-12.809,15.389-18.247,23.746    L270.511,327.948z M331.252,409.993l-34.063-7.568c8.422-24.212,22.337-46.405,40.63-64.676    c18.3-18.278,40.53-32.18,64.786-40.592l7.573,34.002c-17.891,6.795-34.312,17.389-47.912,30.972    C348.664,375.717,338.056,392.12,331.252,409.993z M375.505,401.971l-11.325-11.31c3.669-5.105,7.755-9.919,12.219-14.378    c4.47-4.464,9.297-8.55,14.414-12.217l11.332,11.318c-6.138,1.748-11.926,5.03-16.75,9.849    C380.656,389.966,377.293,395.707,375.505,401.971z M426.175,425.963c-7.347,7.337-19.3,7.338-26.646,0    c-3.555-3.55-5.512-8.27-5.512-13.289c0-5.02,1.958-9.74,5.512-13.29c3.674-3.669,8.498-5.503,13.324-5.503    c4.784-0.001,9.569,1.804,13.23,5.411l0.188,0.188c3.494,3.54,5.417,8.219,5.417,13.193    C431.688,417.693,429.73,422.412,426.175,425.963z M483.136,482.854c-11.808,11.793-31.02,11.793-42.827,0    c-5.716-5.709-8.864-13.298-8.864-21.37c0-8.072,3.148-15.662,8.864-21.37c11.808-11.793,31.021-11.792,42.827,0    c5.716,5.709,8.864,13.298,8.864,21.371C492,469.556,488.852,477.145,483.136,482.854z" fill="currentColor"/>

                            </svg> {{averageIlvl}} ILVL
                        </div>
                        <div class="character-class"><span class="text-line">{{characterData.level}} {{races.find(x=>x.id == characterData.race).name}} {{currentSpec.spec.name}} <span :style="{color:classes[characterData.class-1].color}" >{{classes[characterData.class-1].name}}</span></span> <span class="text-line">{{guildName}} {{characterData.realm}}</span></div>
                    </div>    
                    <!--<app-search></app-search>-->          
                </div>

                <ul class="nav-menu">
                    <router-link :to="{ name: 'character', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link" >Equipment</a></router-link>
                    <router-link :to="{ name: 'reputation', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Reputation</a></router-link>
                    <router-link :to="{ name: 'achievements', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Achievements</a></router-link>
                    <router-link :to="{ name: 'progression', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Progression</a></router-link>
                    <router-link :to="{ name: 'pets', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Collections</a></router-link>
                    <router-link :to="{ name: 'legion', params: { realm: realmName, character: characterName }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Tracker</a></router-link>
                    <router-link :to="{ name: 'search'}" activeClass="active" tag="li" class="nav-item nav-search" exact><a class="nav-link">Search</a></router-link>
                </ul> 
                <!--<ul class="nav-menu-mobile">
                    <router-link to="/" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link" >E</a></router-link>
                    <router-link to="/reputation" activeClass="active" tag="li" class="nav-item"><a class="nav-link">R</a></router-link>
                    <router-link to="/progression" activeClass="active" tag="li" class="nav-item"><a class="nav-link">P</a></router-link>
                    <router-link to="/collections" activeClass="active" tag="li" class="nav-item"><a class="nav-link">C</a></router-link>
                    <router-link to="/tracker" activeClass="active" tag="li" class="nav-item"><a class="nav-link">T</a></router-link>
                </ul> -->
            </div>    
        </div>
    </div>
</template>

<script>
import Reputation from './Reputation.vue';
import Progression from './Progression.vue';
import Search from './Search.vue';


export default {
    data(){
        return{
            isMobileOpen: false,
            races:[
                {id:1, name: 'Human'},
                {id:2, name: 'Orc'},
                {id:3, name: 'Dwarf'},
                {id:4, name: 'Night Elf'},
                {id:5, name: 'Undead'},
                {id:6, name: 'Tauren'},
                {id:7, name: 'Gnome'},
                {id:8, name: 'Troll'},
                {id:9, name: 'Goblin'},
                {id:10, name: 'Blood Elf'},
                {id:11, name: 'Draenei'},
                {id:22, name: 'Worgen'},
                {id:24, name: 'Pandaren'},
                {id:25, name: 'Pandaren'},
                {id:26, name: 'Pandaren'},
                {id:27, name: 'Nightborne'},
                {id:28, name: 'Highmountain Tauren'},
                {id:29, name: 'Void Elf'},
                {id:30, name: 'Lightforged Draenei'},
            ],
            classes : [
                {id:1, color:'#C79C6E', name: 'Warrior', 
                    specs: [{name: 'Arms', icon:'ability_warrior_savageblow',quest:44925}, {name:'Fury', icon:'ability_warrior_innerrage', quest:46065}, {name:'Protection', icon:'ability_warrior_defensivestance', quest:45416}]},
                {id:2, color:'#F58CBA', name: 'Paladin', specs: [{name: 'Holy', icon:'spell_holy_holybolt',quest:46035}, {name:'Protection', icon:'ability_paladin_shieldofthetemplar', quest:45416}, {name:'Retribution', icon:'spell_holy_auraoflight', quest:45526}]},
                {id:3, color:'#ABD473', name: 'Hunter', specs: [{name: 'Beast Mastery', icon:'ability_hunter_bestialdiscipline',quest:45627}, {name:'Marksmanship', icon:'ability_hunter_focusedaim', quest:46127}, {name:'Survival', icon:'ability_hunter_camouflage', quest:44925}]},
                {id:4, color:'#FFF569', name: 'Rogue', specs: [{name: 'Assassination', icon:'ability_rogue_deadlybrew',quest:45526}, {name:'Outlaw', icon:'inv_sword_30', quest:46065}, {name:'Subtlety', icon:'ability_stealth', quest:44925}]},
                {id:5, color:'#FFFFFF', name: 'Priest', specs: [{name: 'Discipline', icon:'spell_holy_powerwordshield',quest:45627}, {name:'Holy', icon:'spell_holy_guardianspirit', quest:46035}, {name:'Shadow', icon:'spell_shadow_shadowwordpain', quest:46127}]},
                {id:6, color:'#C41F3B', name: 'Death Knight', specs: [{name: 'Blood', icon:'spell_deathknight_bloodpresence',quest:45416}, {name:'Frost', icon:'spell_deathknight_frostpresence', quest:44925}, {name:'Unholy', icon:'spell_deathknight_unholypresence', quest:46065}]},
                {id:7, color:'#0070DE', name: 'Shaman', specs: [{name: 'Elemental', icon:'spell_nature_lightning',quest:46065}, {name:'Enhancement', icon:'spell_shaman_improvedstormstrike', quest:45526}, {name:'Restoration', icon:'spell_nature_magicimmunity', quest:46035}]},
                {id:8, color:'#69CCF0', name: 'Mage', 
                    specs: [
                        {name: 'Arcane', icon:'spell_holy_magicalsentry',quest:45526}, 
                        {name:'Fire', icon:'spell_fire_firebolt02', quest:46065}, 
                        {name:'Frost', icon:'spell_frost_frostbolt02', quest:46127}],
                    campaign: [
                            {id: 41035, title:'Felstorm\'s Plea', type:2, completed:false},
                            {id: 41036, title:'The Dreadlord\'s Prize', type:2, completed:false},
                            {id: 41085, title:'A Mage\'s Weapon', type:2, completed:false},
                            {id: 41114, title:'The Champion\'s Return', type:2, completed:false},
                            {id: 41125, title:'Unlocked Potential', type:2, completed:false},
                            {id: 41112, title:'The Great Akazamzarak', type:2, completed:false},
                            {id: 41113, title:'The Only Way to Travel', type:2, completed:false},
                            {id: 41124, title:'The Tirisgarde Reborn', type:2, completed:false},
                            {id: 41141, title:'A Conjuror\'s Duty', type:2, completed:false},
                            {id: 42663, title:'Rise Champions', type:2, completed:false},
                            {id: 42662, title:'Technical Wizardry', type:2, completed:false},
                            {id: 42126, title:'Archmage Omniara', type:2, completed:false},
                            {id: 42127, title:'Building Our Troops', type:2, completed:false},
                            {id: 42696, title:'Tech It Up A Notch', type:2, completed:false},
                            {id: 42433, title:'Ancient Magic', type:2, completed:false},
                            {id: 42429, title:'Memories of Ebonchill', type:2, completed:false},
                            {id: 42418, title:'An Unexpected Visitor', type:2, completed:false},
                            {id: 42434, title:'A Covert Operation', type:2, completed:false},
                            {id: 42435, title:'Prepare To Be Assimilated', type:2, completed:false},
                            {id: 42166, title:'What Is Going On Here', type:2, completed:false},
                            {id: 42206, title:'The Next Level Has Arrived',  type:2,completed:false},
                            {id: 42149, title:'Some Knowledge Shouldn\'t Be Shared', type:2, completed:false},
                            {id: 42171, title:'Final Exit', type:2, completed:false},
                            {id: 42222, title:'Empyrean Society Report', type:2, completed:false},
                            {id: 44098, title:'Recruiting Apprentices', type:2, completed:false},
                            {id: 42416, title:'The Council Is In Session',  type:2,completed:false},
                            {id: 42423, title:'Archmage Vargoth\'s Retreat', type:2, completed:false},
                            {id: 42424, title:'Following In His Footsteps', type:2, completed:false},
                            {id: 42451, title:'Kalec\'s Plan', type:2, completed:false},
                            {id: 44240, title:'Orange is the New Purple', type:2, completed:false},
                            {id: 42954, title:'A Small Favor', type:2, completed:false},
                            {id: 42955, title:'The Proper Way of Things', type:2, completed:false},
                            {id: 42956, title:'Ari\'s Package', type:2, completed:false},
                            {id: 42959, title:'Three Is A Lucky Number', type:2, completed:false},
                            {id: 44689, title:'The Might of the Tirisgarde', type:2, completed:false},
                            {id: 42508, title:'Not A Toothless Dragon', type:2, completed:false},
                            {id: 42521, title:'The Enemy of My Enemy...',  type:2,completed:false},
                            {id: 42494, title:'More Than Just A Food Vendor', type:2, completed:false},
                            {id: 42493, title:'Impending Dooooooom!', type:2, completed:false},
                            {id: 42520, title:'A Terrible Loss', type:2, completed:false},
                            {id: 42707, title:'Eye of Azshara: A Magical Affliction', type:2, completed:false},
                            {id: 42940, title:'When There\'s a Will, There\'s a Way', type:2, completed:false},
                            {id: 42734, title:'Into the Oculus', type:2, completed:false},
                            {id: 43415, title:'A Hero\'s Weapon', type:2,completed:false},                                
                        ],
                        classMount:[
                            {id: 45844, title:'Avocation of Antonidas', text:'Speak with Archmage Kalec in the Hall of the Guardian.', type:2,completed:false},
                            {id: 45845, title:'Burning Within', text:'Speak with Khadgar about the Tri-Disc of Fire. Follow his instructions after you speak with him.', type:2,completed:false},                          
                            {id: 45846, title:'Chilled to the Core',text:'Speak with Archmage Cedric near the Dalaran Crater about the Tri-Disc of Frost.',  type:2,completed:false},                          
                            {id: 45847, title:'Close to Home', text:'Speak to Archmage Celindra about the Tri-Disc of the Arcane here in Dalaran.', type:2,completed:false},                          
                            {id: 45354, title:'Dispersion of the Discs',text:'Complete the trial to purge the excess energy from within the disc fragments.',  type:2,completed:false},                          
                        ]},
                {id:9, color:'#9482C9', name: 'Warlock', specs: [{name: 'Affliction', icon:'spell_shadow_deathcoil',quest:46127}, {name:'Demonology', icon:'spell_shadow_metamorphosis', quest:45526}, {name:'Destruction', icon:'spell_shadow_rainoffire', quest:45627}]},
                {id:10,color:'#00FF96',  name: 'Monk', specs: [{name: 'Brewmaster', icon:'spell_monk_brewmaster_spec',quest:45416}, {name:'Mistweaver', icon:'spell_monk_mistweaver_spec', quest:46035}, {name:'Windwalker', icon:'spell_monk_windwalker_spec', quest:45627}]},
                {id:11,color:'#FF7D0A',  name: 'Druid', specs: [{name: 'Balance', icon:'spell_nature_starfall',quest:46127}, {name:'Feral', icon:'ability_druid_catform', quest:46065}, {name:'Guardian', icon:'ability_racial_bearform', quest:45416}, {name:'Restoration', icon:'spell_nature_healingtouch', quest:46035}]},
                {id:12,color:'#A330C9',  name: 'Demon Hunter', specs: [{name: 'Havoc', icon:'ability_demonhunter_specdps',quest:44925}, {name:'Vengeance', icon:'ability_demonhunter_spectank', quest:45416}]}
            ]
        }
    },
    components:{
        appReputation: Reputation,
        appProgression: Progression,
        appSearch: Search
    },
    computed:{
        characterData(){
            return this.$store.getters.characterData;
        },
        characterName(){
            return this.$route.params.character;
        },
        realmName(){
            return this.$route.params.realm;
        },
        dataLoaded(){
            return this.$store.getters.dataLoaded;
        },
        currentSpec(){
            return this.characterData.talents.find(x=>x.selected);
        },
        title(){
            var currentTitle = {};
            this.characterData.titles.forEach((title)=>{
                if(title.selected){
                    if(title.name.startsWith("%s ")){
                        currentTitle.text = title.name.substr(3);
                        currentTitle.position = 0;
                    }
                    else if(title.name.startsWith("%s, ")){
                        currentTitle.text = title.name.substr(4);
                        currentTitle.position = 0;

                    }
                    else if(title.name.endsWith(" %s")){
                         currentTitle.text = title.name.slice(0,-3);
                         currentTitle.position = 1;
                    }
                    else if(title.name.endsWith(", %s")){
                         currentTitle.text = title.name.slice(0,-4);
                         currentTitle.position = 1;
                    }
                }
            });
            console.log(currentTitle);
            if(currentTitle.hasOwnProperty("text")){
                return currentTitle;
            }
            else{
                return {text:"", position:-1};
            }
        },
        homeCheck(){
            if(this.$route.fullPath == "/"){
                return true;
            };
            return false;
        },
        averageIlvl(){
            return this.characterData.items.averageItemLevelEquipped;
        },
        guildName(){
            return (this.characterData.guild ? "<"+this.characterData.guild.name+">" : "");
        }
        /*displayStats(){
            let stats = [];
            this.armoryStats.forEach((stat) =>{
                stats.push({name: stat, value: this.stats[stat]});
            });
            return stats;
        },*/
    },
    methods:{
        openMobileMenu(){
            this.isMobileOpen = true;
        },
        closeMobileMenu(){
            this.isMobileOpen = false;
        }
    }
}
</script>

<style lang="scss">
    .character-info{
        display: flex;
        flex-flow:column;
        text-align:left;
        max-width:1480px;
        margin-left:auto;
        margin-right:auto;
        border-bottom:2px solid white;
    }
    .character-info h1, .character-info h4, .character-info h5{
        margin:5px 0;
        color:white;
        text-shadow:2px 2px #333;
    }
    .nav-menu{
        @media screen and (min-width:992px){
            display:flex;
        }
        &.sub-menu{
            display:flex;
            font-size:.875em;
        }
        display: none;
        flex-flow:row;
        padding:0;
        margin:.25em 0;
        flex-wrap:wrap;
        .nav-item{
            list-style:none;
            padding:1em .5em;
            &.nav-search{
                margin-left:auto;
            }
            &:hover{
                .nav-link{
                    cursor:pointer;
                    background-color:orange;
                    color:black;
                }
            }
            &.active{
                .nav-link{                
                    background-color:orange;
                    color:black;
                }
            }
            .nav-link{
                padding:.5em;
                text-decoration:none;
                text-transform:uppercase;
                font-weight:500;
                color:orange;
            }     
        }
    }
    .header{
        position:relative;
    }
    .header-container{
    }
    .character-scores,.character-class{
        width:100%;
        margin:4px 0;
        color:white;
        font-size:.75em;
    }
    .character-scores{
        font-size:1em;
        color:orange;
    }
    .character-details{
        display:flex;
        font-size:.9125em;
        flex-wrap:wrap;
        margin-bottom:.5em;
        @media screen and (min-width:480px){
            font-size:1.125em;            
            flex-flow:row;
        }
        @media screen and (min-width:768px){
            font-size:1.25em;            
            flex-flow:row;
        }
    }

    .text-line{
        display:inline-block;
    }

    .character-image{
        display:none;
        @media screen and (min-width: 768px){
           display:flex;
        }
        align-items:center;
        min-width:225px;
        img{
            width:100%;
        }
    }

    .character-text{
        display:flex;
        flex-wrap:wrap;
        align-content:center;
        margin:0 1em;
        &.character-main-text{
            width:45%;
            @media screen and (min-width:480px){
                width:auto;
            }
            @media screen and (min-width:768px){
                padding-right:2em; border-right:1px solid white; margin:1em;
            }
        }
        .title{
            white-space: nowrap;
        }
    }

    .ilvl-icon{
        font-size:1em;
        height:1em;
        width:1em;
        color:orange;
        display:inline-block;
        vertical-align:-2.25px;
        padding-left:1em;
    }
    
    .mobile-menu{
        height:100vh;
        width:100vw;
        position:fixed;
        background-color:rgba(0,0,0,.95);
        z-index:9999;
        align-items:center;
        justify-content:center;
        visibility:hidden;
        display:flex;
        opacity:0;
          transition: visibility 0s linear 500ms, opacity 500ms;

        &.mobile-menu-active{
            visibility:visible;
            opacity:1;
              transition: visibility 0s linear 0s, opacity 500ms;

        }

        .mobile-menu-nav{
            text-align:center;
            display:flex;
            flex-flow:column;
            list-style:none;
            color:orange;
            text-transform:uppercase;
            padding:0;
            .nav-item{
                margin:1em 0;
            }
            a{
                
                text-decoration:none;
                &:visited{
                    color:orange;
                }
            }
        }
    }
    .mobile-menu-button, .mobile-menu-close-button{
            position:absolute;
            border:none;
            background-color:none;
            color:white;
            cursor:pointer;
            background-color:transparent;
            font-size:1.5em;
        }
    .mobile-menu-close-button{  
        top:15px;
        right:12px;
    }
    .mobile-menu-button{
        top:20px;
        right:10px;
        @media screen and (min-width:992px){
            display:none;
        }
    }
</style>
