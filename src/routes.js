import Progression from './components/Progression.vue';
import Reputation from './components/Reputation.vue';
import Character from './components/Character.vue';
import Collections from './components/Collections.vue';
import Achievements from './components/Achievements.vue';
import AchievementsCategory from './components/AchievementsCategory.vue';
import PvP from './components/PvP.vue';

import Pets from './components/Pets.vue';
import Mounts from './components/Mounts.vue';
import Tracker from './components/Tracker.vue';
import BattleTracker from './components/trackers/BattleTracker.vue';

import LegionTracker from './components/trackers/LegionTracker.vue';
import DraenorTracker from './components/trackers/DraenorTracker.vue';
import PandariaTracker from './components/trackers/PandariaTracker.vue';
import CataclysmTracker from './components/trackers/CataclysmTracker.vue';
import WrathTracker from './components/trackers/WrathTracker.vue';
import OutlandTracker from './components/trackers/OutlandTracker.vue';
import ClassicTracker from './components/trackers/ClassicTracker.vue';
import Search from './components/Search.vue';


export const routes= [
    { path: '', name:'search', component: Search },

    { path: '/:region/:realm/:character', name:'character', component: Character,
    meta:{ title: 'Character'} },
    { path: '/:region/:realm/:character/progression', name:'progression', component: Progression,
        meta:{ title: 'Raid Progression'}  },
    { path: '/:region/:realm/:character/reputation', name:'reputation', component: Reputation ,
        meta:{ title: 'Reputation'}},
    { path: '/:region/:realm/:character/achievements', name:'achievements', component: Achievements,
        meta:{ title: 'Achievements'}},
    { path: '/:region/:realm/:character/achievements/:category/:subcategory', name: 'achievementCategory', component: AchievementsCategory,
        meta:{ title: 'Achievements'}},
    { path: '/:region/:realm/:character/collections', name:'collections', component: Collections, children: [
        { path:'', name:'pets',  component: Pets,
            meta:{ title: 'Pet Collection'}  },
        { path:'mounts', name:'mounts', component: Mounts,
            meta:{ title: 'Mount Collection'}}
    ]},
    { path: '/:region/:realm/:character/tracker', name:'tracker', component: Tracker, children: [
        { path:'', name:'battle', component: BattleTracker,
            meta:{ title: 'Battle for Azeroth Tracker'}},
        { path:'legion', name:'legion', component: LegionTracker,
            meta:{ title: 'Legion Tracker'}},
        { path:'draenor', name:'draenor', component: DraenorTracker,
            meta:{ title: 'Warlords of Draenor Tracker'}},
        { path:'pandaria', name:'pandaria', component: PandariaTracker,
            meta:{ title: 'Mists of Pandaria Tracker'}},
        { path:'cataclysm', name:'cataclysm', component: CataclysmTracker,
            meta:{ title: 'Cataclysm Tracker'}},
        { path:'wrath', name:'wrath', component: WrathTracker,
            meta:{ title: 'Wrath of the Lich King Tracker'}},
        { path:'outland', name:'outland', component: OutlandTracker,
            meta:{ title: 'Burning Crusade Tracker'}},
        { path:'classic', name:'classic', component: ClassicTracker,
            meta:{ title: 'Classic Tracker'}},
    ]},
    { path: '/:region/:realm/:character/pvp/', name: 'pvp', component: PvP,
        meta:{ title: 'Player vs Player'}},

    

];