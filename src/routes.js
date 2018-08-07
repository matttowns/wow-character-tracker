import Progression from './components/Progression.vue';
import Reputation from './components/Reputation.vue';
import Character from './components/Character.vue';
import Collections from './components/Collections.vue';
import Achievements from './components/Achievements.vue';
import AchievementsCategory from './components/AchievementsCategory.vue';

import Pets from './components/Pets.vue';
import Mounts from './components/Mounts.vue';
import Tracker from './components/Tracker.vue';
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

    { path: '/:region/:realm/:character', name:'character', component: Character },
    { path: '/:region/:realm/:character/progression', name:'progression', component: Progression },
    { path: '/:region/:realm/:character/reputation', name:'reputation', component: Reputation },
    { path: '/:region/:realm/:character/achievements', name:'achievements', component: Achievements},
    { path: '/:region/:realm/:character/achievements/:category/:subcategory', name: 'achievementCategory', component: AchievementsCategory},
    { path: '/:region/:realm/:character/collections', component: Collections, children: [
        { path:'', name:'pets',  component: Pets, },
        { path:'mounts', name:'mounts', component: Mounts}
    ]},
    { path: '/:region/:realm/:character/tracker',component: Tracker, children: [
        { path:'', name:'legion', component: LegionTracker},
        { path:'draenor', name:'draenor', component: DraenorTracker},
        { path:'pandaria', name:'pandaria', component: PandariaTracker},
        { path:'cataclysm', name:'cataclysm', component: CataclysmTracker},
        { path:'wrath', name:'wrath', component: WrathTracker},
        { path:'outland', name:'outland', component: OutlandTracker},
        { path:'classic', name:'classic', component: ClassicTracker},
    ]},
    

];