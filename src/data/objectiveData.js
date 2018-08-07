   
 const pathfinder =[  {id:11188, title: 'Broken Isles Explorer', trackCriteria:true, text:'Explore the regions of the Broken Isles.', completed: false, accountCompleted:false,  icon:'achievements_zone_brokenshore', type:1, criteria:[
        {id:10665, title: 'Explore Azsuna', text:'Explore Azsuna, revealing the covered areas of the world map.', trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievements_zone_azsuna', type:1, criteria:[
            {"id": 32711, tooltipId: "48632", title: "Felblaze Ingress", type:3, "max": 1},    
            {"id": 32716, tooltipId: "48634", title: "Nar'thalas", type:3, "max": 1}, 
            {"id": 32712, tooltipId: "48636", title: "The Greenway", type:3, "max": 1},    
            {"id": 32718, tooltipId: "48640", title: "Ruined Sanctum", type:3, "max": 1},    
            {"id": 32710, tooltipId: "48643", title: "Faronaar", type:3, "max": 1},    
            {"id": 32717, tooltipId: "48645", title: "Oceanus Cove", type:3, "max": 1},    
            {"id": 32719, tooltipId: "48633", title: "Temple of Lights", type:3, "max": 1}, 
            {"id": 32714, tooltipId: "48635", title: "Llothien Highlands", type:3, "max": 1}, 
            {"id": 32713, tooltipId: "48639", title: "Isle of the Watchers", type:3, "max": 1}, 
            {"id": 32720, tooltipId: "48642", title: "Ley-Ruins of Zarkhenar", type:3, "max": 1}, 
            {"id": 32715, tooltipId: "48644", title: "Lost Orchard", type:3, "max": 1}, 
        ]},
        {id:10666, title: 'Explore Val\'Sharah', text:'Explore Val\'Sharah, revealing the covered areas of the world map.', trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievements_zone_valsharah', type:1, criteria:[
            {"id": 32683, tooltipId: "48647", title: "Andutalah", type:3, "max": 1},    
            {"id": 32695, tooltipId: "48650", title: "Thas'talah", type:3, "max": 1}, 
            {"id": 32691, tooltipId: "48652", title: "Moonclaw Vale", type:3, "max": 1},    
            {"id": 32689, tooltipId: "48654", title: "Lorlathil", type:3, "max": 1},    
            {"id": 32692, tooltipId: "48656", title: "Shala'nir", type:3, "max": 1},    
            {"id": 32684, tooltipId: "48659", title: "Black Rook Hold", type:3, "max": 1},    
            {"id": 32694, tooltipId: "48661", title: "Temple of Elune", type:3, "max": 1}, 
            {"id": 32687, tooltipId: "48648", title: "Gloaming Reef", type:3, "max": 1}, 
            {"id": 32690, tooltipId: "48651", title: "Mistvale", type:3, "max": 1}, 
            {"id": 32685, tooltipId: "48653", title: "Bradensbrook", type:3, "max": 1}, 
            {"id": 32688, tooltipId: "48655", title: "Grove of Cenarius", type:3, "max": 1}, 
            {"id": 32693, tooltipId: "48657", title: "Smolderhide Thicket", type:3, "max": 1}, 
            {"id": 32686, tooltipId: "48660", title: "The Dreamgrove", type:3, "max": 1},    
        ]},
        
        {id:10667, title: 'Explore Highmountain', text:'Explore Highmountain, revealing the covered areas of the world map.', trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievements_zone_highmountain', type:1, criteria:[
            {"id": 32711, tooltipId: "48632", title: "Felblaze Ingress", type:3, "max": 1},    
            {"id": 32716, tooltipId: "48634", title: "Nar'thalas", type:3, "max": 1}, 
            {"id": 32712, tooltipId: "48636", title: "The Greenway", type:3, "max": 1},    
            {"id": 32718, tooltipId: "48640", title: "Ruined Sanctum", type:3, "max": 1},    
            {"id": 32710, tooltipId: "48643", title: "Faronaar", type:3, "max": 1},    
            {"id": 32717, tooltipId: "48645", title: "Oceanus Cove", type:3, "max": 1},    
            {"id": 32719, tooltipId: "48633", title: "Temple of Lights", type:3, "max": 1}, 
            {"id": 32714, tooltipId: "48635", title: "Llothien Highlands", type:3, "max": 1}, 
            {"id": 32713, tooltipId: "48639", title: "Isle of the Watchers", type:3, "max": 1}, 
            {"id": 32720, tooltipId: "48642", title: "Ley-Ruins of Zarkhenar", type:3, "max": 1}, 
            {"id": 32715, tooltipId: "48644", title: "Lost Orchard", type:3, "max": 1}, 
        ]},
        {id:10668, title: 'Explore Stormheim', text:'Explore Stormheim, revealing the covered areas of the world map.', trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievements_zone_stormheim', type:1, criteria:[
            {"id": 32711, tooltipId: "48647", title: "Andutalah", type:3, "max": 1},    
            {"id": 32716, tooltipId: "48650", title: "Thas'talah", type:3, "max": 1}, 
            {"id": 32712, tooltipId: "48652", title: "Moonclaw Vale", type:3, "max": 1},    
            {"id": 32718, tooltipId: "48654", title: "Lorlathil", type:3, "max": 1},    
            {"id": 32710, tooltipId: "48656", title: "Shala'nir", type:3, "max": 1},    
            {"id": 32717, tooltipId: "48659", title: "Black Rook Hold", type:3, "max": 1},    
            {"id": 32719, tooltipId: "48661", title: "Temple of Elune", type:3, "max": 1}, 
            {"id": 32714, tooltipId: "48648", title: "Gloaming Reef", type:3, "max": 1}, 
            {"id": 32713, tooltipId: "48651", title: "Mistvale", type:3, "max": 1}, 
            {"id": 32720, tooltipId: "48653", title: "Bradensbrook", type:3, "max": 1}, 
            {"id": 32715, tooltipId: "48655", title: "Grove of Cenarius", type:3, "max": 1}, 
            {"id": 32715, tooltipId: "48657", title: "Smolderhide Thicket", type:3, "max": 1}, 
            {"id": 32715, tooltipId: "48660", title: "The Dreamgrove", type:3, "max": 1},           
        ]},
        {id:10669, title: 'Explore Suramar', text:'Explore Suramar, revealing the covered areas of the world map.', trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievements_zone_suramar', type:1, criteria:[
            {"id": 32711, tooltipId: "48632", title: "Felblaze Ingress", type:3, "max": 1},    
            {"id": 32716, tooltipId: "48634", title: "Nar'thalas", type:3, "max": 1}, 
            {"id": 32712, tooltipId: "48636", title: "The Greenway", type:3, "max": 1},    
            {"id": 32718, tooltipId: "48640", title: "Ruined Sanctum", type:3, "max": 1},    
            {"id": 32710, tooltipId: "48643", title: "Faronaar", type:3, "max": 1},    
            {"id": 32717, tooltipId: "48645", title: "Oceanus Cove", type:3, "max": 1},    
            {"id": 32719, tooltipId: "48633", title: "Temple of Lights", type:3, "max": 1}, 
            {"id": 32714, tooltipId: "48635", title: "Llothien Highlands", type:3, "max": 1}, 
            {"id": 32713, tooltipId: "48639", title: "Isle of the Watchers", type:3, "max": 1}, 
            {"id": 32720, tooltipId: "48642", title: "Ley-Ruins of Zarkhenar", type:3, "max": 1}, 
            {"id": 32715, tooltipId: "48644", title: "Lost Orchard", type:3, "max": 1}, 
        ]}
    ]},
    {id:11157, title: 'Loremaster of Legion', trackCriteria:true, text:'Complete the Legion quest achievements listed below.', completed: false, accountCompleted:false,  icon:'achievement_zone_wetlands_01', type:1, criteria:[
        {id:10763, title: 'Azsuna Matata', text:'Complete the Azsuna storylines listed below.', trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievements_zone_azsuna', type:1, "criteria": [
            {"id": 31300, tooltipId: 50076,"title": "Behind Legion Lines","orderIndex": 0, type:3, "max": 1}, 
            {"id": 31301, tooltipId: 50078,"title": "Defending Azurewing Repose", "orderIndex": 1, type:3, "max": 1}, 
            {"id": 31302, tooltipId: 50080,"title": "Azsuna versus Azshara", "orderIndex": 2, type:3, "max": 1},
            {"id": 31303, tooltipId: 50077,"title": "Against the Giants", "orderIndex": 3, type:3, "max": 1}, 
            {"id": 40794, tooltipId: 50079,"title": "Mak'rana and the Fate of the Queen's Reprisal", "orderIndex": 4, type:2, faction:0, "max": 2}
        ]},
        {id:10698, title: 'That\'s Val\'Sharah Folks!', text:'Complete the Val\'Sharah storylines listed below.',trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievements_zone_valsharah', type:1, "criteria": [
            {"id": 30633, tooltipId: 48969,"title": "Archdruid of the Vale", "orderIndex": 0, type:3, "max": 1}, 
            {"id": 30634, tooltipId: 48971,"title": "Archdruid of the Claw", "orderIndex": 1, type:3, "max": 1}, 
            {"id": 38225, tooltipId: 48973,"title": "Archdruid of Lore", "orderIndex": 2, type:2, "max": 1},
            {"id": 30635, tooltipId: 48975,"title": "Into the Nightmare", "orderIndex": 3, type:3, "max": 1}, 
            {"id": 30636, tooltipId: 48970,"title": "All Nightmare Long", "orderIndex": 4, type:3, "max": 1},
            {"id": 30632, tooltipId: 48972,"title": "Bradensbrook", "orderIndex": 5, type:3, "max": 1},
            {"id": 30631, tooltipId: 48974,"title": "Black Rook Hold", "orderIndex": 6, type:3, "max": 1}
        ]},
        {id:10790, title: 'Vrykrul Story, Bro', text:'Complete the Stormheim storylines listed below.',trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievements_zone_stormheim', type:1, criteria:[
            {"id": 39800, tooltipId: 50291,"title": "Greymane\'s Gambit", "orderIndex": 0, type:2, faction:0, "max": 1}, 
            {"id": 39801, tooltipId: 50291,"title": "Greymane\'s Gambit", "orderIndex": 0, type:2, faction:1, "max": 1},             
            {"id": 38060, tooltipId: 50297,"title": "The Aftermath", "orderIndex": 1, type:2, faction:0, "max": 1}, 
            {"id": 38362, tooltipId: 50297,"title": "The Aftermath", "orderIndex": 1, type:2, faction:1, "max": 1}, 
            {"id": 31397, tooltipId: 50299,"title": "The Trial of Might", "orderIndex": 2, type:3, "max": 1},
            {"id": 31398, tooltipId: 50301,"title": "The Trial of Will", "orderIndex": 3, type:3, "max": 1}, 
            {"id": 31399, tooltipId: 50294,"title": "The Trial of Valor", "orderIndex": 4, type:3, "max": 1},
            {"id": 31400, tooltipId: 50298,"title": "To Helheim and Back", "orderIndex": 5, type:3, "max": 1},
            {"id": 39122, tooltipId: 50300,"title": "Secrets of the Shieldmaidens", "orderIndex": 6, type:2, faction:0, "max": 1},         
            {"id": 38882, tooltipId: 50300,"title": "Secrets of the Shieldmaidens", "orderIndex": 6, type:2, faction:1, "max": 1},           
            {"id": 31403, tooltipId: 50304,"title": "The Champion of Stormheim", "orderIndex": 7, type:3, "max": 1}
        ]},
        {id:10059, title: 'Ain\'t No Mountain High Enough', text:'Complete the Highmountain storylines listed below.',trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievements_zone_highmountain', type:1, criteria:[
            {"id": 28963, tooltipId: 45355,"title": "The Rivermane Tribe", "orderIndex": 0, type:3, "max": 1},             
            {"id": 28966, tooltipId: 44073,"title": "Riverbend", "orderIndex": 1, type:3, "max": 1}, 
            {"id": 28405, tooltipId: 44375,"title": "The Skyhorn Tribe", "orderIndex": 2, type:3, "max": 1}, 
            {"id": 28964, tooltipId: 45356,"title": "The Bloodtotem Tribe", "orderIndex": 3, type:3, "max": 1}, 
            {"id": 29135, tooltipId: 46047,"title": "Huln\'s War", "orderIndex": 4, type:3, "max": 1}, 
            {"id": 28965, tooltipId: 45357,"title": "Secrets of Highmountain", "orderIndex": 5, type:3, "max": 1},             
            {"id": 28212, tooltipId: 44075,"title": "Battle of Snowblind Mesa", "orderIndex": 6, type:3, "max": 1}, 
            
        ]},
        {id:11124, title: 'Good Sumaritan', text:'Complete the Suramar storylines listed below.',trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievements_zone_suramar', type:1, criteria:[
            {"id": 30139, tooltipId: 51583,"title": "An Ancient Gift", "orderIndex": 0, type:3, "max": 1}, 
            {"id": 31927, tooltipId: 51585,"title": "The Waning Cresent", "orderIndex": 1, type:3, "max": 1}, 
            {"id": 31366, tooltipId: 51587,"title": "Blood and Wine", "orderIndex": 2, type:2, "max": 1},
            {"id": 31367, tooltipId: 51589,"title": "Statecraft", "orderIndex": 3, type:3, "max": 1}, 
            {"id": 31368, tooltipId: 51591,"title": "A Growing Crisis", "orderIndex": 4, type:3, "max": 1},
            {"id": 31369, tooltipId: 51593,"title": "A Change of Seasons", "orderIndex": 5, type:3, "max": 1},
            {"id": 31905, tooltipId: 51584,"title": "Breaking the Lightbreaker", "orderIndex":6, type:3, "max": 1},
            {"id": 31909, tooltipId: 51586,"title": "Moon Guard Stronghold", "orderIndex": 7, type:3, "max": 1},
            {"id": 31910, tooltipId: 51588,"title": "Tidying Tel\'anor", "orderIndex": 8, type:3, "max": 1},
            {"id": 31911, tooltipId: 51590,"title": "Eminent Grow-main", "orderIndex": 9, type:3, "max": 1},
            {"id": 31912, tooltipId: 51592,"title": "Jandvik\'s Jarl", "orderIndex": 10, type:3, "max": 1}
        ]}
    ]},
    {id:11189, title:'Variety is the Spice of Life', trackCriteria:true, text:'Complete 100 different World Quests.', completed:false, accountCompleted:false,   icon:'achievement_raregarrisonquests_x', type:4, criteria:[]},
    {id:10672, title:'Broken Isles Diplomat', trackCriteria:true,  text:'Earn Revered with all of the Broken Isles reputations listed below.', completed: false,accountCompleted:false,   icon:'achievements_zone_brokenshore', type:1, criteria:[
        {"id": 30498, "title": "Court of Farondis", type:4, "max": 21000}, 
        {"id": 30500, "title": "The Dreamweavers", type:4,  "max": 21000}, 
        {"id": 30497, "title": "Highmountain Tribe", type:4,"max": 21000}, 
        {"id": 30501, "title": "The Valarjar", type:4, "max": 21000}, 
        {"id": 30499, "title": "The Nightfallen", type:4, "max": 21000}, 
        {"id": 30496, "title": "The Wardens", type:4, "max": 21000},     
    ]},
    {id:10994, title:'A Glorious Campaign', trackCriteria:true, text:'Complete your class Order Campaign.', completed: false, accountCompleted:false,  icon:'achievement_doublejeopardy', type:1, "criteria": []},
    {id:11543, title: 'Explore Broken Shore', trackCriteria:true, text:'Explore the Broken Shore, revealing the covered areas of the world map.', completed:false,accountCompleted:false,   icon:'achievement_zone_brokenshore', type:1, criteria:[
        {"id": 36588, tooltipId: 58970,"title": "Deliverance Point", type:3, "max": 1},    
        {"id": 36590, tooltipId: 58972,"title": "Deadwood Landing", type:3, "max": 1}, 
        {"id": 36591, tooltipId: 58974,"title": "Soul Ruin", type:3, "max": 1},
        {"id": 36592, tooltipId: 58976,"title": "Broken Valley", type:3, "max": 1},    
        {"id": 36593, tooltipId: 58971,"title": "The Weeping Terrace", type:3, "max": 1},    
        {"id": 36594, tooltipId: 58973,"title": "Tomb of Sargeras", type:3, "max": 1},    
        {"id": 36595, tooltipId: 58975,"title": "Felrage Strand", type:3, "max": 1}, 
        {"id": 36596, tooltipId: 58977,"title": "Felfire Pass", type:3, "max": 1}, 
    ]},
    {id:11545, title: 'Legionfall Commander', trackCriteria:true, text:'Earn Revered status with the Armies of Legionfall.', completed:false,accountCompleted:false,   icon:'achievement_faction_legionfall', type:1, "criteria": [
        {"id": 35977,"title": "Armies of Legionfall", type:4,  "orderIndex": 0, "max": 21000}
    ]}  
];

const legionReputation =[
    {id: 2045, name:'Armies of Legionfall'},
    {id: 2165, name:'Army of the Light'},
    {id: 2170, name:'Argussian Reach'},
    {id: 1900, name:'Court of Farondis'},
    {id: 1883, name:'Dreamweavers'},
    {id: 1828, name:'Highmountain'},
    {id: 1859, name:'The Nightfallen'},
    {id: 1894, name:'The Valarjar'},
    {id: 1948, name:'The Wardens'}
];

const reputationsStanding = {
    1:'hated',
    2:'hostile',
    3:'unfriendly',
    4:'neutral',
    5:'friendly',
    6:'honored',
    7:'revered',
    8:'exalted'
};

const classColors ={
    1: '#C79C6E',
    2: '#F58CBA',
    3: '#ABD473',
    4: '#FFF569',
    5: '#FFFFFF',
    6: '#C41F3B',
    7: '#0070DE',
    8: '#69CCF0',
    9: '#9482C9',
    10: '#00FF96',
    11: '#FF7D0A',
    12: '#A330C9'
}; 

const classes = [
    {id:1, name: 'Warrior', 
        specs: [{name: 'Arms', icon:'ability_warrior_savageblow',quest:44925}, {name:'Fury', icon:'ability_warrior_innerrage', quest:46065}, {name:'Protection', icon:'ability_warrior_defensivestance', quest:45416}]},
    {id:2, name: 'Paladin', specs: [{name: 'Holy', icon:'spell_holy_holybolt',quest:46035}, {name:'Protection', icon:'ability_paladin_shieldofthetemplar', quest:45416}, {name:'Retribution', icon:'spell_holy_auraoflight', quest:45526}]},
    {id:3, name: 'Hunter', specs: [{name: 'Beast Mastery', icon:'ability_hunter_bestialdiscipline',quest:45627}, {name:'Marksmanship', icon:'ability_hunter_focusedaim', quest:46127}, {name:'Survival', icon:'ability_hunter_camouflage', quest:44925}]},
    {id:4, name: 'Rogue', specs: [{name: 'Assassination', icon:'ability_rogue_deadlybrew',quest:45526}, {name:'Outlaw', icon:'inv_sword_30', quest:46065}, {name:'Subtlety', icon:'ability_stealth', quest:44925}]},
    {id:5, name: 'Priest', specs: [{name: 'Discipline', icon:'spell_holy_powerwordshield',quest:45627}, {name:'Holy', icon:'spell_holy_guardianspirit', quest:46035}, {name:'Shadow', icon:'spell_shadow_shadowwordpain', quest:46127}]},
    {id:6, name: 'Death Knight', specs: [{name: 'Blood', icon:'spell_deathknight_bloodpresence',quest:45416}, {name:'Frost', icon:'spell_deathknight_frostpresence', quest:44925}, {name:'Unholy', icon:'spell_deathknight_unholypresence', quest:46065}]},
    {id:7, name: 'Shaman', specs: [{name: 'Elemental', icon:'spell_nature_lightning',quest:46065}, {name:'Enhancement', icon:'spell_shaman_improvedstormstrike', quest:45526}, {name:'Restoration', icon:'spell_nature_magicimmunity', quest:46035}]},
    {id:8, name: 'Mage', 
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
            ],
            mountIcon:'inv_magemount',
        },
    {id:9, name: 'Warlock', specs: [{name: 'Affliction', icon:'spell_shadow_deathcoil',quest:46127}, {name:'Demonology', icon:'spell_shadow_metamorphosis', quest:45526}, {name:'Destruction', icon:'spell_shadow_rainoffire', quest:45627}]},
    {id:10, name: 'Monk', specs: [{name: 'Brewmaster', icon:'spell_monk_brewmaster_spec',quest:45416}, {name:'Mistweaver', icon:'spell_monk_mistweaver_spec', quest:46035}, {name:'Windwalker', icon:'spell_monk_windwalker_spec', quest:45627}]},
    {id:11, name: 'Druid', specs: [{name: 'Balance', icon:'spell_nature_starfall',quest:46127}, {name:'Feral', icon:'ability_druid_catform', quest:46065}, {name:'Guardian', icon:'ability_racial_bearform', quest:45416}, {name:'Restoration', icon:'spell_nature_healingtouch', quest:46035}]},
    {id:12, name: 'Demon Hunter', specs: [{name: 'Havoc', icon:'ability_demonhunter_specdps',quest:44925}, {name:'Vengeance', icon:'ability_demonhunter_spectank', quest:45416}]}
];


const mageTowerQuests = [
    {id:45526, completed: false, title:'The God-Queen\'s Fury', text:'Speak with War Councilor Victoria to be teleported to Sigryn\'s location and defeat her.'},
    {id:46065, completed: false, title:'An Impossible Foe', text:'Speak with War Councilor Victoria to be teleported to the Imp Mother\'s Den and defeat Agatha.'},
    {id:44925, completed: false, title:'Closing the Eye', text:'Speak with War Councilor Victoria to be teleported to Archmage Xylem\'s location and defeat him.'},
    {id:45627, completed: false, title:'Feltotem\'s Fall', text:'Defeat Tugar Bloodtotem. Speak with War Councilor Victoria, she will teleport you to Navarrogg to begin.' },    
    {id:45416, completed: false, title:'The Highlord\'s Return', text:'Defeat Highlord Kruul in the Twisting Nether. Speak with War Councilor Victoria to get there.'},
    {id:46035, completed: false, title:'End of the Risen Threat', text:'Defeat Lord Erdris Thorn. Speak with War Councilor Victoria to be teleported to Jarod Shadowsong\'s location.'},
    {id:46127, completed: false, title:'Thwarting the Twins', text:'Speak with War Councilor Victoria to be teleported to Raest\'s location and defeat him.'},
];

const races = {
    1: 'Human',
    2: 'Orc',
    3: 'Dwarf',
    4: 'Night Elf',
    5: 'Undead',
    6: 'Tauren',
    7: 'Gnome',
    8: 'Troll',
    9: 'Goblin',
    10: 'Blood Elf',
    11: 'Draenei',
    22: 'Worgen',
    24: 'Pandaren',
    25: 'Pandaren',
    26: 'Pandaren',
    27: 'Nightborne',
    28: 'Highmountain Tauren',
    29: 'Void Elf',
    30: 'Lightforged Draenei'
};

const classMount = {title:'Class Mount', type:"header", text:"Complete the quests and achievements to earn your class mount.", criteria:[{id:11546, title: 'Breaching the Tomb', text:'Complete the Legionfall campaign.', trackCriteria:true, icon:'achievement_dungeon_tombofsargeras', completed: false, type:1, criteria:[
        {id:46730, title: 'Armies of Legionfall', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46734, title: 'Assault on Broken Shore', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46245, title: 'Begin Construction', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46832, title: 'Aalgen Point', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46845, title: 'Vengeance Point', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46247, title: 'Defending Broken Isles', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:47137, title: 'Champions of Legionfall', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46251, title: 'Shard Times', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:47139, title: 'Mark of the Sentinax', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46248, title: 'Self-Fulfilling Prophecy', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46252, title: 'Intolerable Infestation', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46769, title: 'Relieved of Their Valuables', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46250, title: 'Take Out the Head...', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46249, title: 'Championing Our Cause', trackCriteria:true, completed: false, type:2, criteria:[]},
        {id:46246, title: 'Strike Them Down', trackCriteria:true, completed: false, type:2, criteria:[]},
    ]}]};

const alliedRaces=[
    {race: "Void Elf", completed: false, criteria:[
        {id:11340, title: 'Insurrection', trackCriteria:true, completed: false, type:1, criteria:[
            {id:44955, title: 'Lockdown', trackCriteria:true, completed: false, type:2, criteria:[]},    
            {id:44814, title: 'Missing Persons', trackCriteria:true, completed: false, type:2, criteria:[]},   
            {id:44756, title: 'Waxing Crescent', trackCriteria:true, completed: false, type:2, criteria:[]},   
            {id:44845, title: 'An Elven Problem', trackCriteria:true, completed: false, type:2, criteria:[]},   
            {id:44790, title: 'Crafting War', trackCriteria:true, completed: false, type:2, criteria:[]},   
            {id:44740, title: 'March on Suramar', trackCriteria:true, completed: false, type:2, criteria:[]},   
            {id:44833, title: 'Elisande\'s Retort', trackCriteria:true, completed: false, type:2, criteria:[]},   
            {id:45064, title: 'As Strong As Our Will', trackCriteria:true, completed: false, type:2, criteria:[]},   
            {id:44719, title: 'Breaking the Nighthold', trackCriteria:true, completed: false, type:2, criteria:[]},   
        ]},       
    ]}
];

const argus=
    {id:12066, title: 'You Are Now Prepared!', trackCriteria:true, text:'Complete the Argus campaign.', icon:'ability_demonhunter_specdps', completed: false, type:2, criteria:[  
        {id:46734, title: 'Assault on Broken Shore', trackCriteria:true, text:'Complete the Assault on Broken Shore scenario.', completed: false, type:2, criteria:[]},   
        {id:48929, tooltipId:61988, title: 'The Assault Begins', text:'Complete the first chapter of the Argus campaign.', type:5, completed:false, criteria:[
            {id:47221, title: 'The Hand of Fate', trackCriteria:false, completed: false, type:2 },  
            {id:47222, title: 'Two If By Sea', trackCriteria:false, completed: false, type:2 },  
            {id:47223, title: 'Light\'s Exodus', trackCriteria:false, completed: false, type:2 },  
            {id:47224, title: 'The Vindicaar', trackCriteria:false, completed: false, type:2 },  
            {id:48440, title: 'Into the Night', trackCriteria:false, completed: false, type:2 },  
            {id:46938, title: 'Alone in the Abyss', trackCriteria:false, completed: false, type:2 },  
            {id:47589, title: 'Righteous Fury', trackCriteria:false, completed: false, type:2 },  
            {id:46297, title: 'Overwhelming Power', trackCriteria:false, completed: false, type:2 },  
            {id:48483, title: 'A Stranger\'s Plea', trackCriteria:false, completed: false, type:2 },  
            {id:47627, title: 'Vengeance', trackCriteria:false, completed: false, type:2 },  
            {id:47641, title: 'Signs of Resistance', trackCriteria:false, completed: false, type:2 },  
            {id:46732, title: 'The Prophet\'s Gambit', trackCriteria:false, completed: false, type:2 },  
            {id:46816, title: 'Rendezvous', trackCriteria:false, completed: false, type:2 },  
            {id:46839, title: 'From Darkness', trackCriteria:false, completed: false, type:2 },  
            {id:46840, title: 'Prisoners No More', trackCriteria:false, completed: false, type:2 },  
            {id:46841, title: 'Threat Reduction', trackCriteria:false, completed: false, type:2 },  
            {id:46842, title: 'A Strike at the Heart', trackCriteria:false, completed: false, type:2 },  
            {id:46843, title: 'Return to the Vindicaar', trackCriteria:false, completed: false, type:2 },  
            {id:48500, title: 'A Moment of Respite', trackCriteria:false, completed: false, type:2 },  
            {id:47431, title: 'Gathering Light', trackCriteria:false, completed: false, type:2 },  
            {id:40238, title: 'A Grim Equation', trackCriteria:false, completed: false, type:2 },  
            {id:46213, title: 'Crystals Not Included', trackCriteria:false, completed: false, type:2 },  
            {id:47541, title: 'The Best Prevention', trackCriteria:false, completed: false, type:2 },  
            {id:47508, title: 'Fire At Will', trackCriteria:false, completed: false, type:2 },  
            {id:47771, title: 'Locating the Longshot', trackCriteria:false, completed: false, type:2 },  
            {id:47526, title: 'Bringing the Big Guns', trackCriteria:false, completed: false, type:2 },  
            {id:47652, title: 'The Light Mother', trackCriteria:false, completed: false, type:2 },  
            {id:47653, title: 'Light\'s Return', trackCriteria:false, completed: false, type:2 },           
            {id:47743, title: 'The Child of Light and Shadow', trackCriteria:false, completed: false, type:2 },  
            {id:49143, title: 'Essence of the Light Mother', trackCriteria:false, completed: false, type:2 },  
            {id:48559, title: 'An Offering of Light', trackCriteria:false, completed: false, type:2 },  
            {id:47287, title: 'The Vindicaar Matrix Core', trackCriteria:false, completed: false, type:2 },  
            {id:48199, title: 'The Burning Heart', trackCriteria:false, completed: false, type:2 },  
            {id:48200, title: 'Securing a Foothold', trackCriteria:false, completed: false, type:2 },  
            {id:48929, title: 'Sizing Up The Opposition', trackCriteria:false, completed: false, type:2 },       
        ]},
        {id:48107, tooltipId:61112, title: 'Dark Awakenings',text:'Complete the second chapter of the Argus campaign.', type:5, completed:false, criteria:[
            {id:47889, title: 'The Speaker Calls', trackCriteria:false, completed: false, type:2 },  
            {id:47890, title: 'Visions of Torment', trackCriteria:false, completed: false, type:2 },  
            {id:47891, title: 'Dire News', trackCriteria:false, completed: false, type:2 },  
            {id:47892, title: 'Storming the Citadel', trackCriteria:false, completed: false, type:2 },  
            {id:47986, title: 'Scars of the Past', trackCriteria:false, completed: false, type:2 },  
            {id:47987, title: 'Preventive Measures', trackCriteria:false, completed: false, type:2 },  
            {id:47988, title: 'Chaos Theory', trackCriteria:false, completed: false, type:2 },  
            {id:47990, title: 'A Touch of Fel', trackCriteria:false, completed: false, type:2 },  
            {id:47989, title: 'Heralds of Apocalypse', trackCriteria:false, completed: false, type:2 },  
            {id:47991, title: 'Dark Machinations', trackCriteria:false, completed: false, type:2 },  
            {id:47992, title: 'Dawn of Justice', trackCriteria:false, completed: false, type:2 },  
            {id:47993, title: 'Lord of the Spire', trackCriteria:false, completed: false, type:2 },  
            {id:47994, title: 'Forming a Bond', trackCriteria:false, completed: false, type:2 },  
            {id:48081, title: 'A Floating Ruin', trackCriteria:false, completed: false, type:2 },  
            {id:46815, title: 'Mac\'Aree, Jewel of Argus', trackCriteria:false, completed: false, type:2 },  
            {id:46818, title: 'Defenseless and Afraid', trackCriteria:false, completed: false, type:2 },  
            {id:46834, title: 'Khazaduum, First of His Name', trackCriteria:false, completed: false, type:2 },  
            {id:47066, title: 'Consecrating Ground', trackCriteria:false, completed: false, type:2 },  
            {id:46941, title: 'The Path Forward', trackCriteria:false, completed: false, type:2 },  
            {id:47686, title: 'Not-So-Humble Beginnings', trackCriteria:false, completed: false, type:2 },  
            {id:47882, title: 'Conservation of Magic', trackCriteria:false, completed: false, type:2 },  
            {id:47688, title: 'Invasive Species', trackCriteria:false, completed: false, type:2 },  
            {id:47883, title: 'The Longest Vigil', trackCriteria:false, completed: false, type:2 },  
            {id:47689, title: 'Gatekeeper\'s Challenge: Tenacity', trackCriteria:false, completed: false, type:2 },  
            {id:47685, title: 'Gatekeeper\'s Challenge: Cunning', trackCriteria:false, completed: false, type:2 },  
            {id:47687, title: 'Gatekeeper\'s Challenge: Mastery', trackCriteria:false, completed: false, type:2 },  
            {id:47690, title: 'The Defiler\'s Legacy', trackCriteria:false, completed: false, type:2 },  
            {id:48107, title: 'The Sigil of Awakening', trackCriteria:false, completed: false, type:2 },  
            
        ]},       
        {id:47654, tooltipId:61113, title: 'War of Light and Shadow',text:'Complete the final chapter of the Argus campaign.', type:5, completed:false, criteria:[
            {id:48461, title: 'Where They Least Expect It', trackCriteria:false, completed: false, type:2 },  
            {id:48344, title: 'We Have a Problem', trackCriteria:false, completed: false, type:2 },  
            {id:47691, title: 'A Non-Prophet Organization', trackCriteria:false, completed: false, type:2 },  
            {id:47854, title: 'Wrath of the High Exarch', trackCriteria:false, completed: false, type:2 },  
            {id:47995, title: 'Overt Ops', trackCriteria:false, completed: false, type:2 },  
            {id:47853, title: 'Flanking Maneuvers', trackCriteria:false, completed: false, type:2 },  
            {id:48345, title: 'Talgath\'s Forces', trackCriteria:false, completed: false, type:2 },  
            {id:47855, title: 'What Might Have Been', trackCriteria:false, completed: false, type:2 },  
            {id:47856, title: 'Across the Universe', trackCriteria:false, completed: false, type:2 },  
            {id:47416, title: 'Shadow of the Triumvirate', trackCriteria:false, completed: false, type:2 },  
            {id:47238, title: 'The Seat of the Triumvirate', trackCriteria:false, completed: false, type:2 },  
            {id:40761, title: 'Whispers from Oronaar', trackCriteria:false, completed: false, type:2 },  
            {id:47101, title: 'Arkhaan\'s Prayers', trackCriteria:false, completed: false, type:2 },  
            {id:47180, title: 'The Pulsing Madness', trackCriteria:false, completed: false, type:2 },  
            {id:47100, title: 'Arkhaan\'s Pain', trackCriteria:false, completed: false, type:2 },  
            {id:47183, title: 'Arkhaan\'s Plan', trackCriteria:false, completed: false, type:2 },  
            {id:47184, title: 'Arkhaan\'s Peril', trackCriteria:false, completed: false, type:2 },  
            {id:47203, title: 'Throwing Shade', trackCriteria:false, completed: false, type:2 },  
            {id:47217, title: 'Sources of Darkness', trackCriteria:false, completed: false, type:2 },  
            {id:47218, title: 'The Shadowguard Incursion', trackCriteria:false, completed: false, type:2 },  
            {id:47219, title: 'A Vessel Made Ready', trackCriteria:false, completed: false, type:2 },  
            {id:47220, title: 'A Beacon in the Dark', trackCriteria:false, completed: false, type:2 },  
            {id:48560, title: 'An Offering of Shadow', trackCriteria:false, completed: false, type:2 },  
            {id:47654, title: 'Seat of the Triumvirate: The Crest of Knowledge', trackCriteria:false, completed: false, type:2 },  
            
        ]}
    ]
};

const draenorPathfinder=[  
    {id:8935, title: 'Draenor Explorer', trackCriteria:true, text:'Explore the regions of the Broken Isles.', completed: false, accountCompleted:false,  icon:'achievement_zone_draenor_01', type:1, criteria:[
    {id:8940,  tooltipId: "35941", title: 'Explore Talador',  text:"Explore Talador, revealing the covered areas of the world map.",trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievement_zone_talador', type:1, criteria:[
        {"id": 26192, tooltipId: "39780", title: "Aruuna", type:3, "max": 1},    
        {"id": 26194, tooltipId: "39782", title: "Duskfall Island", type:3, "max": 1}, 
        {"id": 26196, tooltipId: "39784", title: "Fort Wrynn", type:3, "max": 1},    
        {"id": 26198, tooltipId: "39786", title: "Gul\'rok", type:3, "max": 1},    
        {"id": 26200, tooltipId: "39788", title: "Orunai Coast", type:3, "max": 1},    
        {"id": 26202, tooltipId: "39790", title: "Shattrath City", type:3, "max": 1},    
        {"id": 26204, tooltipId: "39792", title: "Tomb of Lights", type:3, "max": 1}, 
        {"id": 26206, tooltipId: "39794", title: "Zangarra", type:3, "max": 1}, 
        {"id": 26193, tooltipId: "39781", title: "Auchindoun", type:3, "max": 1}, 
        {"id": 26195, tooltipId: "39783", title: "Court of Souls", type:3, "max": 1}, 
        {"id": 26197, tooltipId: "39785", title: "Gordal Fortress", type:3, "max": 1}, 
        {"id": 26199, tooltipId: "39787", title: "The Path of Glory", type:3, "max": 1}, 
        {"id": 26201, tooltipId: "39789", title: "Anchorite\'s Sojourn", type:3, "max": 1}, 
        {"id": 26203, tooltipId: "39791", title: "Telmor", type:3, "max": 1}, 
        {"id": 26205, tooltipId: "39793", title: "Tuurem", type:3, "max": 1}, 
        ]},
    {id:8937,  tooltipId: "35944", title: 'Explore Frostfire Ridge', text:"Explore Frostfire Ridge, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievement_zone_frostfire', type:1, criteria:[
        {"id": 26734, tooltipId: "40647", title: "Bladespire Citadel", type:3, "max": 1},    
        {"id": 26736, tooltipId: "40649", title: "Bones of Agurak", type:3, "max": 1}, 
        {"id": 26738, tooltipId: "40651", title: "Daggermaw Ravine", type:3, "max": 1},    
        {"id": 26740, tooltipId: "40653", title: "Grimfrost Hill", type:3, "max": 1},    
        {"id": 26742, tooltipId: "40655", title: "Iron Siegeworks", type:3, "max": 1},    
        {"id": 26744, tooltipId: "40657", title: "Magnarok", type:3, "max": 1},    
        {"id": 26746, tooltipId: "40659", title: "The Boneslag", type:3, "max": 1}, 
        {"id": 26748, tooltipId: "40661", title: "Wor\'gol", type:3, "max": 1}, 
        {"id": 26735, tooltipId: "40648", title: "Bloodmaul Stronghold", type:3, "max": 1}, 
        {"id": 26737, tooltipId: "40650", title: "Colossal\'s Fall", type:3, "max": 1}, 
        {"id": 26739, tooltipId: "40652", title: "Frostwind Crag", type:3, "max": 1}, 
        {"id": 26741, tooltipId: "40654", title: "Grom\'gar", type:3, "max": 1}, 
        {"id": 26743, tooltipId: "40656", title: "Iron Waystation", type:3, "max": 1}, 
        {"id": 26745, tooltipId: "40658", title: "Stonefang Outpost", type:3, "max": 1}, 
        {"id": 26747, tooltipId: "40660", title: "The Crackling Plains", type:3, "max": 1},    
        ]},
    {id:8938,  tooltipId: "35946", title: 'Explore Shadowmoon Valley',  text:"Explore Shadowmoon Valley, revealing the covered areas of the world map.",trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievement_zone_newshadowmoonvalley', type:1, criteria:[
        {"id": 26698, tooltipId: "40635", title: "Anguish Fortress", type:3, "max": 1}, 
        {"id": 26700, tooltipId: "40637", title: "Elodor", type:3, "max": 1},    
        {"id": 26704, tooltipId: "40640", title: "Gloomshade Grove", type:3, "max": 1},    
        {"id": 26706, tooltipId: "40642", title: "Karabor", type:3, "max": 1}, 
        {"id": 26709, tooltipId: "40644", title: "The Shimmer Moor", type:3, "max": 1}, 
        {"id": 26712, tooltipId: "40646", title: "Isle of Shadows", type:3, "max": 1},  
        {"id": 26699, tooltipId: "40636", title: "Darktide Roost", type:3, "max": 1}, 
        {"id": 26701, tooltipId: "40638", title: "Embaari Village", type:3, "max": 1},    
        {"id": 26705, tooltipId: "40641", title: "Gul\'var", type:3, "max": 1},    
        {"id": 26708, tooltipId: "40643", title: "Shaz\'gul", type:3, "max": 1}, 
        {"id": 26710, tooltipId: "40645", title: "Socrethar\'s Rise", type:3, "max": 1}, 
        ]},
    {id:8941,  tooltipId: "35942", title: 'Explore Spires of Arak', text:"Explore Spires of Arak, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievement_zone_spiresofarak', type:1, criteria:[
        {"id": 26754, tooltipId: "40676", title: "Skettis", type:3, "max": 1},    
        {"id": 26756, tooltipId: "40678", title: "The Writhing Mire", type:3, "max": 1}, 
        {"id": 26758, tooltipId: "40680", title: "Veil Zekk", type:3, "max": 1},    
        {"id": 26760, tooltipId: "40682", title: "Southport", type:3, "max": 1},    
        {"id": 26763, tooltipId: "40684", title: "Terrace of Dawn", type:3, "max": 1},    
        {"id": 26765, tooltipId: "40686", title: "Bladefist Hold", type:3, "max": 1},    
        {"id": 26767, tooltipId: "40688", title: "Lost Veil Anzu", type:3, "max": 1}, 
        {"id": 26770, tooltipId: "40690", title: "Ravenskar", type:3, "max": 1}, 
        {"id": 26772, tooltipId: "40692", title: "Axefall", type:3, "max": 1}, 
        {"id": 26755, tooltipId: "40677", title: "The Howling Crag", type:3, "max": 1}, 
        {"id": 26757, tooltipId: "40679", title: "Pinchwhistle Point", type:3, "max": 1}, 
        {"id": 26759, tooltipId: "40681", title: "Veil Akraz", type:3, "max": 1}, 
        {"id": 26762, tooltipId: "40683", title: "Windswept Terrace", type:3, "max": 1}, 
        {"id": 26764, tooltipId: "40685", title: "Sethekk Hollow", type:3, "max": 1}, 
        {"id": 26766, tooltipId: "40687", title: "Admiral Taylor\'s Garrison", type:3, "max": 1},    
        {"id": 26769, tooltipId: "40689", title: "Pinchwhistle Gearworks", type:3, "max": 1},    
        {"id": 26771, tooltipId: "40691", title: "Bloodmane Valley", type:3, "max": 1},          
        ]},
    {id:8939,  tooltipId: "35945", title: 'Explore Gorgrond', text:"Explore Gorgrond, revealing the covered areas of the world map.",trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievement_zone_gorgrond', type:1, criteria:[
        {"id": 26691, tooltipId: "40605", title: "Bastion Rise", type:3, "max": 1},    
        {"id": 26693, tooltipId: "40607", title: "Grimrail Depot", type:3, "max": 1}, 
        {"id": 26696, tooltipId: "40609", title: "Deadgrin", type:3, "max": 1},    
        {"id": 32718, tooltipId: "40611", title: "Evermorn Springs", type:3, "max": 1},    
        {"id": 26711, tooltipId: "40613", title: "Highpass", type:3, "max": 1},    
        {"id": 26714, tooltipId: "40615", title: "Stonemaul Arena", type:3, "max": 1},    
        {"id": 26716, tooltipId: "40617", title: "The Iron Approach", type:3, "max": 1}, 
        {"id": 26692, tooltipId: "40606", title: "Beastwatch", type:3, "max": 1}, 
        {"id": 26695, tooltipId: "40608", title: "Crimson Fen", type:3, "max": 1}, 
        {"id": 26697, tooltipId: "40610", title: "Everbloom Wilds", type:3, "max": 1}, 
        {"id": 26707, tooltipId: "40612", title: "Gronn Canyon", type:3, "max": 1}, 
        {"id": 26713, tooltipId: "40614", title: "Iyun Weald", type:3, "max": 1}, 
        {"id": 26715, tooltipId: "40616", title: "Tangleheart", type:3, "max": 1}, 
        {"id": 24633, tooltipId: "41360", title: "The Pit", type:3, "max": 1}, 
        ]},
    {id:8942,  tooltipId: "35947", title: 'Explore Nagrand', text:"Explore Nagrand, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievement_zone_nagrand_02', type:1, criteria:[
        {"id": 26179, tooltipId: "40620", title: "Ancestral Grounds", type:3, "max": 1},    
        {"id": 26721, tooltipId: "40622", title: "Gates of Grommashar", type:3, "max": 1}, 
        {"id": 26724, tooltipId: "40624", title: "Highmaul Harbor", type:3, "max": 1},    
        {"id": 26725, tooltipId: "40626", title: "Lok-rath", type:3, "max": 1},    
        {"id": 26727, tooltipId: "40628", title: "Mok\'gol Watchpost", type:3, "max": 1},    
        {"id": 26729, tooltipId: "40630", title: "Telaar", type:3, "max": 1},    
        {"id": 26731, tooltipId: "40632", title: "The Ring of Trials", type:3, "max": 1}, 
        {"id": 26733, tooltipId: "40634", title: "Zangar Shore", type:3, "max": 1}, 
        {"id": 26720, tooltipId: "40621", title: "Broken Precipice", type:3, "max": 1}, 
        {"id": 26722, tooltipId: "40623", title: "Hallvalor", type:3, "max": 1}, 
        {"id": 26724, tooltipId: "40625", title: "Ironfist Harbor", type:3, "max": 1}, 
        {"id": 26726, tooltipId: "40627", title: "Mar\'gok\'s Overwatch", type:3, "max": 1}, 
        {"id": 26728, tooltipId: "40629", title: "Oshu\'gun", type:3, "max": 1}, 
        {"id": 26730, tooltipId: "40631", title: "The Ring of Blood", type:3, "max": 1}, 
        {"id": 26732, tooltipId: "40633", title: "Throne of the Elements", type:3, "max": 1},    
        ]},        
    ]},
    {id:9833, title: 'Loremaster of Draenor', trackCriteria:true, text:'Complete the Draenor quest achievements listed below.', completed: false, accountCompleted:false,  icon:'achievement_zone_draenor_01', type:1, criteria:[
        {id:8845, tooltipId: 42752, title: 'As I Walk Through The Valley of the Shadow of Moon', text:"Complete the Shadowmoon Valley storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_newshadowmoonvalley', type:1, "criteria": [
            {"id": 34692, tooltipId: 34964,"title": "Establishing a Foothold","orderIndex": 0, type:2, "max": 1}, 
            {"id": 33271, tooltipId: 34967,"title": "Gloomshade Grove", "orderIndex": 1, type:2, "max": 1}, 
            {"id": 33256, tooltipId: 34969,"title": "The Light Prevails", "orderIndex": 2, type:2, "max": 1},
            {"id": 35015, tooltipId: 36086,"title": "Purifying the Gene Pool", "orderIndex": 3, type:2, "max": 1}, 
            {"id": 35093, tooltipId: 34966,"title": "Dark Side of the Moon", "orderIndex": 4, type:2, faction:0, "max": 2,alternateId: [34054]},
            {"id": 34019, tooltipId: 34968,"title": "Shadows Awaken", "orderIndex": 5, type:2, faction:0, "max": 2},
            {"id": 34792, tooltipId: 36084,"title": "The Pursuit of Justice", "orderIndex": 6, type:2, faction:0, "max": 2},       
        ]},
        {id:8923, tooltipId: 43378, title: 'Putting the Gore in Gorgrond', text:"Complete the Gorgrond storylines listed below.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_gorgrond', type:1, "criteria": [
            {"id": 35063, tooltipId: 35780,"title": "We Need An Outpost","orderIndex": 0, type:2, "max": 1}, 
            {"id": 35702, tooltipId: 38147,"title": "In the Land of Giants", "orderIndex": 1, type:2, "max": 1 ,alternateId: [35255]}, 
            {"id": 35137, tooltipId: 38144,"title": "Supporting Your Garrison", "orderIndex": 2, type:2, "max": 1 ,alternateId: [36828]},
            {"id": 36576, tooltipId: 39061,"title": "The Iron Approach", "orderIndex": 3, type:2, "max": 1, alternateId: [36575]}, 
        ]},
        {id:8920, tooltipId: 43379, title: 'Don\'t Let the Tala-door Hit You on the Way Out', text:"Complete the Talador storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_talador', type:1, criteria:[
            {"id": 34981, tooltipId: 35784, "title": "Establishing your Outpost","orderIndex": 0, type:2, "max": 1, alternateId: [34711]}, 
            {"id": 33582, tooltipId: 36066, "title": "The Plight of the Arakkoa", "orderIndex": 1, type:2, "max": 1 }, 
            {"id": 34099, tooltipId: 36065, "title": "The Battle of Shattrath", "orderIndex": 2, type:2, "max": 1 },
            {"id": 34154, tooltipId: 36067, "title": "In the Shadows of Auchindoun", "orderIndex": 3, type:2, "max": 1}, 
        ]},
        {id:8925, tooltipId: 43380, title: 'Between Arak and a Hard Place', text:"Complete the Spires of Arak storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_spiresofarak', type:1, criteria:[
            {"id": 35482, tooltipId: 35788,"title": "Admiral Taylor\'s Garrison", "orderIndex": 0, type:2, "max": 1},             
            {"id": 34942, tooltipId: 39386,"title": "Secrets of the Talonpriests", "orderIndex": 1, type:2, "max": 1}, 
            {"id": 35634, tooltipId: 39390,"title": "Legacy of the Apexis", "orderIndex": 2, type:2, "max": 1}, 
            {"id": 35704, tooltipId: 39392,"title": "When the Raven Swallows the Day", "orderIndex": 3, type:2, "max": 1}, 
            {"id": 35835, tooltipId: 39394,"title": "Securing Southport", "orderIndex": 4, type:2, "max": 1, alternateId: [36165]}, 
            {"id": 35671, tooltipId: 39385,"title": "Shadows Gather", "orderIndex": 5, type:2, "max": 1},             
            {"id": 35012, tooltipId: 39387,"title": "The Gods of Arak", "orderIndex": 6, type:2, "max": 1},   
            {"id": 35896, tooltipId: 39391,"title": "Terokk\'s Legend", "orderIndex": 7, type:2, "max": 1},        
            {"id": 35298, tooltipId: 39393,"title": "Pinchwhistle Gearworks", "orderIndex": 8, type:2, "max": 1},                   
        ]},
        {id:8927, tooltipId: 43381, title: 'Nagrandeur', text:"Complete the Nagrand storylines listed below.",        trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_nagrand_02', type:1, criteria:[
            {"id": 35396, tooltipId: 35796,"title": "The Dark Heart of Oshu\'gun", "orderIndex": 0, type:2, "max": 1},             
            {"id": 35088, tooltipId: 38054,"title": "The Shadow of the Void", "orderIndex": 1, type:2, "max": 1}, 
            {"id": 34957, tooltipId: 38056,"title": "A Blademaster\'s Honor", "orderIndex": 2, type:2, "max": 1}, 
            {"id": 35169, tooltipId: 38058,"title": "The Legacy of Garrosh Hellscream", "orderIndex": 3, type:2, "max": 1}, 
            {"id": 34666, tooltipId: 38053,"title": "The Ring of Trials", "orderIndex": 4, type:2, "max": 1}, 
            {"id": 35061, tooltipId: 38055,"title": "The Taking of Lok-rath", "orderIndex": 5, type:2, "max": 1},             
            {"id": 34769, tooltipId: 38057,"title": "The Might of Steel and Blood", "orderIndex": 6, type:2, "max": 1},   
            {"id": 34596, tooltipId: 39351,"title": "Trouble at the Overwatch", "orderIndex": 7, type:2, "max": 1},        
        ]},
    ]},
    {id:9564, title: 'Securing Draenor', trackCriteria:true, text:'Complete the Draenor bonus objectives listed below.', icon:'inv_misc_map08', completed: false,accountCompleted:false, type:1, criteria:[]},             
    {id:10348, title: 'Master Treasure Hunter', trackCriteria:true, text:'Discover 100 treasures of Draenor (excluding Tanaan Jungle)', icon:'icon_treasuremap', completed: false, accountCompleted:false,  
        icon:'achievement_zone_wetlands_01', type:1, criteriaMax:100, 
        criteria: [{
        "id": 24461,
        "description": "",
        "orderIndex": 0,
        type: 3, "max": 1
    }, {
        "id": 23564,
        "description": "",
        "orderIndex": 1,
        type: 3, "max": 1
    }, {
        "id": 26802,
        "description": "",
        "orderIndex": 2,
        type: 3, "max": 1
    }, {
        "id": 26803,
        "description": "",
        "orderIndex": 3,
        type: 3, "max": 1
    }, {
        "id": 26804,
        "description": "",
        "orderIndex": 4,
        type: 3, "max": 1
    }, {
        "id": 26805,
        "description": "",
        "orderIndex": 5,
        type: 3, "max": 1
    }, {
        "id": 26806,
        "description": "",
        "orderIndex": 6,
        type: 3, "max": 1
    }, {
        "id": 26807,
        "description": "",
        "orderIndex": 7,
        type: 3, "max": 1
    }, {
        "id": 26808,
        "description": "",
        "orderIndex": 8,
        type: 3, "max": 1
    }, {
        "id": 26809,
        "description": "",
        "orderIndex": 9,
        type: 3, "max": 1
    }, {
        "id": 26810,
        "description": "",
        "orderIndex": 10,
        type: 3, "max": 1
    }, {
        "id": 26811,
        "description": "",
        "orderIndex": 11,
        type: 3, "max": 1
    }, {
        "id": 26812,
        "description": "",
        "orderIndex": 12,
        type: 3, "max": 1
    }, {
        "id": 26813,
        "description": "",
        "orderIndex": 13,
        type: 3, "max": 1
    }, {
        "id": 26814,
        "description": "",
        "orderIndex": 14,
        type: 3, "max": 1
    }, {
        "id": 26815,
        "description": "",
        "orderIndex": 15,
        type: 3, "max": 1
    }, {
        "id": 26816,
        "description": "",
        "orderIndex": 16,
        type: 3, "max": 1
    }, {
        "id": 26817,
        "description": "",
        "orderIndex": 17,
        type: 3, "max": 1
    }, {
        "id": 26818,
        "description": "",
        "orderIndex": 18,
        type: 3, "max": 1
    }, {
        "id": 26819,
        "description": "",
        "orderIndex": 19,
        type: 3, "max": 1
    }, {
        "id": 26822,
        "description": "",
        "orderIndex": 20,
        type: 3, "max": 1
    }, {
        "id": 26823,
        "description": "",
        "orderIndex": 21,
        type: 3, "max": 1
    }, {
        "id": 26824,
        "description": "",
        "orderIndex": 22,
        type: 3, "max": 1
    }, {
        "id": 26825,
        "description": "",
        "orderIndex": 23,
        type: 3, "max": 1
    }, {
        "id": 26826,
        "description": "",
        "orderIndex": 24,
        type: 3, "max": 1
    }, {
        "id": 26827,
        "description": "",
        "orderIndex": 25,
        type: 3, "max": 1
    }, {
        "id": 26828,
        "description": "",
        "orderIndex": 26,
        type: 3, "max": 1
    }, {
        "id": 26829,
        "description": "",
        "orderIndex": 27,
        type: 3, "max": 1
    }, {
        "id": 26830,
        "description": "",
        "orderIndex": 28,
        type: 3, "max": 1
    }, {
        "id": 26831,
        "description": "",
        "orderIndex": 29,
        type: 3, "max": 1
    }, {
        "id": 26832,
        "description": "",
        "orderIndex": 30,
        type: 3, "max": 1
    }, {
        "id": 26833,
        "description": "",
        "orderIndex": 31,
        type: 3, "max": 1
    }, {
        "id": 26834,
        "description": "",
        "orderIndex": 32,
        type: 3, "max": 1
    }, {
        "id": 26835,
        "description": "",
        "orderIndex": 33,
        type: 3, "max": 1
    }, {
        "id": 26836,
        "description": "",
        "orderIndex": 34,
        type: 3, "max": 1
    }, {
        "id": 26837,
        "description": "",
        "orderIndex": 35,
        type: 3, "max": 1
    }, {
        "id": 26838,
        "description": "",
        "orderIndex": 36,
        type: 3, "max": 1
    }, {
        "id": 26839,
        "description": "",
        "orderIndex": 37,
        type: 3, "max": 1
    }, {
        "id": 26840,
        "description": "",
        "orderIndex": 38,
        type: 3, "max": 1
    }, {
        "id": 26841,
        "description": "",
        "orderIndex": 39,
        type: 3, "max": 1
    }, {
        "id": 26842,
        "description": "",
        "orderIndex": 40,
        type: 3, "max": 1
    }, {
        "id": 26843,
        "description": "",
        "orderIndex": 41,
        type: 3, "max": 1
    }, {
        "id": 26844,
        "description": "",
        "orderIndex": 42,
        type: 3, "max": 1
    }, {
        "id": 26845,
        "description": "",
        "orderIndex": 43,
        type: 3, "max": 1
    }, {
        "id": 26846,
        "description": "",
        "orderIndex": 44,
        type: 3, "max": 1
    }, {
        "id": 26847,
        "description": "",
        "orderIndex": 45,
        type: 3, "max": 1
    }, {
        "id": 26848,
        "description": "",
        "orderIndex": 46,
        type: 3, "max": 1
    }, {
        "id": 26849,
        "description": "",
        "orderIndex": 47,
        type: 3, "max": 1
    }, {
        "id": 26850,
        "description": "",
        "orderIndex": 48,
        type: 3, "max": 1
    }, {
        "id": 26851,
        "description": "",
        "orderIndex": 49,
        type: 3, "max": 1
    }, {
        "id": 26852,
        "description": "",
        "orderIndex": 50,
        type: 3, "max": 1
    }, {
        "id": 26853,
        "description": "",
        "orderIndex": 51,
        type: 3, "max": 1
    }, {
        "id": 26854,
        "description": "",
        "orderIndex": 52,
        type: 3, "max": 1
    }, {
        "id": 26855,
        "description": "",
        "orderIndex": 53,
        type: 3, "max": 1
    }, {
        "id": 26856,
        "description": "",
        "orderIndex": 54,
        type: 3, "max": 1
    }, {
        "id": 26857,
        "description": "",
        "orderIndex": 55,
        type: 3, "max": 1
    }, {
        "id": 26858,
        "description": "",
        "orderIndex": 56,
        type: 3, "max": 1
    }, {
        "id": 26859,
        "description": "",
        "orderIndex": 57,
        type: 3, "max": 1
    }, {
        "id": 26860,
        "description": "",
        "orderIndex": 58,
        type: 3, "max": 1
    }, {
        "id": 26861,
        "description": "",
        "orderIndex": 59,
        type: 3, "max": 1
    }, {
        "id": 26862,
        "description": "",
        "orderIndex": 60,
        type: 3, "max": 1
    }, {
        "id": 26863,
        "description": "",
        "orderIndex": 61,
        type: 3, "max": 1
    }, {
        "id": 26864,
        "description": "",
        "orderIndex": 62,
        type: 3, "max": 1
    }, {
        "id": 26865,
        "description": "",
        "orderIndex": 63,
        type: 3, "max": 1
    }, {
        "id": 26866,
        "description": "",
        "orderIndex": 64,
        type: 3, "max": 1
    }, {
        "id": 26867,
        "description": "",
        "orderIndex": 65,
        type: 3, "max": 1
    }, {
        "id": 26868,
        "description": "",
        "orderIndex": 66,
        type: 3, "max": 1
    }, {
        "id": 26869,
        "description": "",
        "orderIndex": 67,
        type: 3, "max": 1
    }, {
        "id": 26870,
        "description": "",
        "orderIndex": 68,
        type: 3, "max": 1
    }, {
        "id": 26871,
        "description": "",
        "orderIndex": 69,
        type: 3, "max": 1
    }, {
        "id": 26872,
        "description": "",
        "orderIndex": 70,
        type: 3, "max": 1
    }, {
        "id": 26873,
        "description": "",
        "orderIndex": 71,
        type: 3, "max": 1
    }, {
        "id": 26874,
        "description": "",
        "orderIndex": 72,
        type: 3, "max": 1
    }, {
        "id": 26875,
        "description": "",
        "orderIndex": 73,
        type: 3, "max": 1
    }, {
        "id": 26876,
        "description": "",
        "orderIndex": 74,
        type: 3, "max": 1
    }, {
        "id": 26877,
        "description": "",
        "orderIndex": 75,
        type: 3, "max": 1
    }, {
        "id": 26878,
        "description": "",
        "orderIndex": 76,
        type: 3, "max": 1
    }, {
        "id": 26879,
        "description": "",
        "orderIndex": 77,
        type: 3, "max": 1
    }, {
        "id": 26880,
        "description": "",
        "orderIndex": 78,
        type: 3, "max": 1
    }, {
        "id": 26881,
        "description": "",
        "orderIndex": 79,
        type: 3, "max": 1
    }, {
        "id": 26882,
        "description": "",
        "orderIndex": 80,
        type: 3, "max": 1
    }, {
        "id": 26883,
        "description": "",
        "orderIndex": 81,
        type: 3, "max": 1
    }, {
        "id": 26884,
        "description": "",
        "orderIndex": 82,
        type: 3, "max": 1
    }, {
        "id": 26885,
        "description": "",
        "orderIndex": 83,
        type: 3, "max": 1
    }, {
        "id": 26912,
        "description": "",
        "orderIndex": 84,
        type: 3, "max": 1
    }, {
        "id": 26913,
        "description": "",
        "orderIndex": 85,
        type: 3, "max": 1
    }, {
        "id": 26914,
        "description": "",
        "orderIndex": 86,
        type: 3, "max": 1
    }, {
        "id": 26915,
        "description": "",
        "orderIndex": 87,
        type: 3, "max": 1
    }, {
        "id": 26916,
        "description": "",
        "orderIndex": 88,
        type: 3, "max": 1
    }, {
        "id": 26917,
        "description": "",
        "orderIndex": 89,
        type: 3, "max": 1
    }, {
        "id": 26918,
        "description": "",
        "orderIndex": 90,
        type: 3, "max": 1
    }, {
        "id": 26919,
        "description": "",
        "orderIndex": 91,
        type: 3, "max": 1
    }, {
        "id": 26920,
        "description": "",
        "orderIndex": 92,
        type: 3, "max": 1
    }, {
        "id": 26921,
        "description": "",
        "orderIndex": 93,
        type: 3, "max": 1
    }, {
        "id": 26922,
        "description": "",
        "orderIndex": 94,
        type: 3, "max": 1
    }, {
        "id": 26923,
        "description": "",
        "orderIndex": 95,
        type: 3, "max": 1
    }, {
        "id": 26924,
        "description": "",
        "orderIndex": 96,
        type: 3, "max": 1
    }, {
        "id": 26925,
        "description": "",
        "orderIndex": 97,
        type: 3, "max": 1
    }, {
        "id": 26926,
        "description": "",
        "orderIndex": 98,
        type: 3, "max": 1
    }, {
        "id": 26927,
        "description": "",
        "orderIndex": 99,
        type: 3, "max": 1
    }, {
        "id": 26928,
        "description": "",
        "orderIndex": 100,
        type: 3, "max": 1
    }, {
        "id": 26929,
        "description": "",
        "orderIndex": 101,
        type: 3, "max": 1
    }, {
        "id": 26930,
        "description": "",
        "orderIndex": 102,
        type: 3, "max": 1
    }, {
        "id": 26931,
        "description": "",
        "orderIndex": 103,
        type: 3, "max": 1
    }, {
        "id": 26932,
        "description": "",
        "orderIndex": 104,
        type: 3, "max": 1
    }, {
        "id": 26933,
        "description": "",
        "orderIndex": 105,
        type: 3, "max": 1
    }, {
        "id": 26934,
        "description": "",
        "orderIndex": 106,
        type: 3, "max": 1
    }, {
        "id": 26935,
        "description": "",
        "orderIndex": 107,
        type: 3, "max": 1
    }, {
        "id": 26936,
        "description": "",
        "orderIndex": 108,
        type: 3, "max": 1
    }, {
        "id": 26937,
        "description": "",
        "orderIndex": 109,
        type: 3, "max": 1
    }, {
        "id": 26938,
        "description": "",
        "orderIndex": 110,
        type: 3, "max": 1
    }, {
        "id": 26939,
        "description": "",
        "orderIndex": 111,
        type: 3, "max": 1
    }, {
        "id": 26940,
        "description": "",
        "orderIndex": 112,
        type: 3, "max": 1
    }, {
        "id": 26941,
        "description": "",
        "orderIndex": 113,
        type: 3, "max": 1
    }, {
        "id": 26942,
        "description": "",
        "orderIndex": 114,
        type: 3, "max": 1
    }, {
        "id": 26943,
        "description": "",
        "orderIndex": 115,
        type: 3, "max": 1
    }, {
        "id": 26944,
        "description": "",
        "orderIndex": 116,
        type: 3, "max": 1
    }, {
        "id": 26945,
        "description": "",
        "orderIndex": 117,
        type: 3, "max": 1
    }, {
        "id": 26946,
        "description": "",
        "orderIndex": 118,
        type: 3, "max": 1
    }, {
        "id": 26947,
        "description": "",
        "orderIndex": 119,
        type: 3, "max": 1
    }, {
        "id": 26948,
        "description": "",
        "orderIndex": 120,
        type: 3, "max": 1
    }, {
        "id": 26949,
        "description": "",
        "orderIndex": 121,
        type: 3, "max": 1
    }, {
        "id": 26950,
        "description": "",
        "orderIndex": 122,
        type: 3, "max": 1
    }, {
        "id": 26951,
        "description": "",
        "orderIndex": 123,
        type: 3, "max": 1
    }, {
        "id": 26952,
        "description": "",
        "orderIndex": 124,
        type: 3, "max": 1
    }, {
        "id": 26953,
        "description": "",
        "orderIndex": 125,
        type: 3, "max": 1
    }, {
        "id": 26954,
        "description": "",
        "orderIndex": 126,
        type: 3, "max": 1
    }, {
        "id": 26955,
        "description": "",
        "orderIndex": 127,
        type: 3, "max": 1
    }, {
        "id": 26956,
        "description": "",
        "orderIndex": 128,
        type: 3, "max": 1
    }, {
        "id": 26957,
        "description": "",
        "orderIndex": 129,
        type: 3, "max": 1
    }, {
        "id": 26958,
        "description": "",
        "orderIndex": 130,
        type: 3, "max": 1
    }, {
        "id": 26959,
        "description": "",
        "orderIndex": 131,
        type: 3, "max": 1
    }, {
        "id": 26960,
        "description": "",
        "orderIndex": 132,
        type: 3, "max": 1
    }, {
        "id": 26961,
        "description": "",
        "orderIndex": 133,
        type: 3, "max": 1
    }, {
        "id": 26962,
        "description": "",
        "orderIndex": 134,
        type: 3, "max": 1
    }, {
        "id": 26963,
        "description": "",
        "orderIndex": 135,
        type: 3, "max": 1
    }, {
        "id": 26964,
        "description": "",
        "orderIndex": 136,
        type: 3, "max": 1
    }, {
        "id": 26965,
        "description": "",
        "orderIndex": 137,
        type: 3, "max": 1
    }, {
        "id": 26966,
        "description": "",
        "orderIndex": 138,
        type: 3, "max": 1
    }, {
        "id": 26967,
        "description": "",
        "orderIndex": 139,
        type: 3, "max": 1
    }, {
        "id": 26968,
        "description": "",
        "orderIndex": 140,
        type: 3, "max": 1
    }, {
        "id": 26886,
        "description": "",
        "orderIndex": 141,
        type: 3, "max": 1
    }, {
        "id": 26887,
        "description": "",
        "orderIndex": 142,
        type: 3, "max": 1
    }, {
        "id": 26888,
        "description": "",
        "orderIndex": 143,
        type: 3, "max": 1
    }, {
        "id": 26889,
        "description": "",
        "orderIndex": 144,
        type: 3, "max": 1
    }, {
        "id": 26890,
        "description": "",
        "orderIndex": 145,
        type: 3, "max": 1
    }, {
        "id": 26891,
        "description": "",
        "orderIndex": 146,
        type: 3, "max": 1
    }, {
        "id": 26892,
        "description": "",
        "orderIndex": 147,
        type: 3, "max": 1
    }, {
        "id": 26893,
        "description": "",
        "orderIndex": 148,
        type: 3, "max": 1
    }, {
        "id": 26894,
        "description": "",
        "orderIndex": 149,
        type: 3, "max": 1
    }, {
        "id": 26895,
        "description": "",
        "orderIndex": 150,
        type: 3, "max": 1
    }, {
        "id": 26896,
        "description": "",
        "orderIndex": 151,
        type: 3, "max": 1
    }, {
        "id": 26897,
        "description": "",
        "orderIndex": 152,
        type: 3, "max": 1
    }, {
        "id": 26898,
        "description": "",
        "orderIndex": 153,
        type: 3, "max": 1
    }, {
        "id": 26899,
        "description": "",
        "orderIndex": 154,
        type: 3, "max": 1
    }, {
        "id": 26900,
        "description": "",
        "orderIndex": 155,
        type: 3, "max": 1
    }, {
        "id": 26901,
        "description": "",
        "orderIndex": 156,
        type: 3, "max": 1
    }, {
        "id": 26902,
        "description": "",
        "orderIndex": 157,
        type: 3, "max": 1
    }, {
        "id": 26903,
        "description": "",
        "orderIndex": 158,
        type: 3, "max": 1
    }, {
        "id": 26904,
        "description": "",
        "orderIndex": 159,
        type: 3, "max": 1
    }, {
        "id": 26905,
        "description": "",
        "orderIndex": 160,
        type: 3, "max": 1
    }, {
        "id": 26906,
        "description": "",
        "orderIndex": 161,
        type: 3, "max": 1
    }, {
        "id": 26907,
        "description": "",
        "orderIndex": 162,
        type: 3, "max": 1
    }, {
        "id": 26908,
        "description": "",
        "orderIndex": 163,
        type: 3, "max": 1
    }, {
        "id": 26909,
        "description": "",
        "orderIndex": 164,
        type: 3, "max": 1
    }, {
        "id": 26910,
        "description": "",
        "orderIndex": 165,
        type: 3, "max": 1
    }, {
        "id": 26911,
        "description": "",
        "orderIndex": 166,
        type: 3, "max": 1
    }, {
        "id": 27025,
        "description": "",
        "orderIndex": 167,
        type: 3, "max": 1
    }, {
        "id": 27026,
        "description": "",
        "orderIndex": 168,
        type: 3, "max": 1
    }, {
        "id": 27027,
        "description": "",
        "orderIndex": 169,
        type: 3, "max": 1
    }, {
        "id": 27028,
        "description": "",
        "orderIndex": 170,
        type: 3, "max": 1
    }, {
        "id": 27029,
        "description": "",
        "orderIndex": 171,
        type: 3, "max": 1
    }, {
        "id": 27030,
        "description": "",
        "orderIndex": 172,
        type: 3, "max": 1
    }, {
        "id": 27031,
        "description": "",
        "orderIndex": 173,
        type: 3, "max": 1
    }, {
        "id": 27032,
        "description": "",
        "orderIndex": 174,
        type: 3, "max": 1
    }, {
        "id": 27033,
        "description": "",
        "orderIndex": 175,
        type: 3, "max": 1
    }, {
        "id": 27034,
        "description": "",
        "orderIndex": 176,
        type: 3, "max": 1
    }, {
        "id": 27035,
        "description": "",
        "orderIndex": 177,
        type: 3, "max": 1
    }, {
        "id": 27036,
        "description": "",
        "orderIndex": 178,
        type: 3, "max": 1
    }, {
        "id": 27037,
        "description": "",
        "orderIndex": 179,
        type: 3, "max": 1
    }, {
        "id": 27038,
        "description": "",
        "orderIndex": 180,
        type: 3, "max": 1
    }, {
        "id": 27039,
        "description": "",
        "orderIndex": 181,
        type: 3, "max": 1
    }, {
        "id": 27040,
        "description": "",
        "orderIndex": 182,
        type: 3, "max": 1
    }, {
        "id": 27041,
        "description": "",
        "orderIndex": 183,
        type: 3, "max": 1
    }, {
        "id": 27042,
        "description": "",
        "orderIndex": 184,
        type: 3, "max": 1
    }, {
        "id": 27043,
        "description": "",
        "orderIndex": 185,
        type: 3, "max": 1
    }, {
        "id": 27044,
        "description": "",
        "orderIndex": 186,
        type: 3, "max": 1
    }, {
        "id": 27045,
        "description": "",
        "orderIndex": 187,
        type: 3, "max": 1
    }, {
        "id": 27046,
        "description": "",
        "orderIndex": 188,
        type: 3, "max": 1
    }, {
        "id": 27047,
        "description": "",
        "orderIndex": 189,
        type: 3, "max": 1
    }, {
        "id": 27048,
        "description": "",
        "orderIndex": 190,
        type: 3, "max": 1
    }, {
        "id": 27049,
        "description": "",
        "orderIndex": 191,
        type: 3, "max": 1
    }, {
        "id": 27050,
        "description": "",
        "orderIndex": 192,
        type: 3, "max": 1
    }, {
        "id": 27051,
        "description": "",
        "orderIndex": 193,
        type: 3, "max": 1
    }, {
        "id": 27052,
        "description": "",
        "orderIndex": 194,
        type: 3, "max": 1
    }, {
        "id": 27053,
        "description": "",
        "orderIndex": 195,
        type: 3, "max": 1
    }, {
        "id": 27054,
        "description": "",
        "orderIndex": 196,
        type: 3, "max": 1
    }, {
        "id": 27055,
        "description": "",
        "orderIndex": 197,
        type: 3, "max": 1
    }, {
        "id": 27056,
        "description": "",
        "orderIndex": 198,
        type: 3, "max": 1
    }, {
        "id": 27057,
        "description": "",
        "orderIndex": 199,
        type: 3, "max": 1
    }, {
        "id": 27058,
        "description": "",
        "orderIndex": 200,
        type: 3, "max": 1
    }, {
        "id": 27059,
        "description": "",
        "orderIndex": 201,
        type: 3, "max": 1
    }, {
        "id": 27060,
        "description": "",
        "orderIndex": 202,
        type: 3, "max": 1
    }, {
        "id": 27061,
        "description": "",
        "orderIndex": 203,
        type: 3, "max": 1
    }, {
        "id": 27062,
        "description": "",
        "orderIndex": 204,
        type: 3, "max": 1
    }, {
        "id": 27063,
        "description": "",
        "orderIndex": 205,
        type: 3, "max": 1
    }, {
        "id": 27064,
        "description": "",
        "orderIndex": 206,
        type: 3, "max": 1
    }, {
        "id": 27065,
        "description": "",
        "orderIndex": 207,
        type: 3, "max": 1
    }, {
        "id": 27066,
        "description": "",
        "orderIndex": 208,
        type: 3, "max": 1
    }, {
        "id": 27067,
        "description": "",
        "orderIndex": 209,
        type: 3, "max": 1
    }, {
        "id": 27068,
        "description": "",
        "orderIndex": 210,
        type: 3, "max": 1
    }, {
        "id": 27069,
        "description": "",
        "orderIndex": 211,
        type: 3, "max": 1
    }, {
        "id": 27070,
        "description": "",
        "orderIndex": 212,
        type: 3, "max": 1
    }, {
        "id": 27071,
        "description": "",
        "orderIndex": 213,
        type: 3, "max": 1
    }, {
        "id": 27072,
        "description": "",
        "orderIndex": 214,
        type: 3, "max": 1
    }, {
        "id": 27073,
        "description": "",
        "orderIndex": 215,
        type: 3, "max": 1
    }, {
        "id": 27074,
        "description": "",
        "orderIndex": 216,
        type: 3, "max": 1
    }, {
        "id": 27075,
        "description": "",
        "orderIndex": 217,
        type: 3, "max": 1
    }, {
        "id": 27076,
        "description": "",
        "orderIndex": 218,
        type: 3, "max": 1
    }, {
        "id": 27077,
        "description": "",
        "orderIndex": 219,
        type: 3, "max": 1
    }, {
        "id": 27078,
        "description": "",
        "orderIndex": 220,
        type: 3, "max": 1
    }, {
        "id": 27079,
        "description": "",
        "orderIndex": 221,
        type: 3, "max": 1
    }, {
        "id": 27080,
        "description": "",
        "orderIndex": 222,
        type: 3, "max": 1
    }, {
        "id": 27081,
        "description": "",
        "orderIndex": 223,
        type: 3, "max": 1
    }, {
        "id": 27082,
        "description": "",
        "orderIndex": 224,
        type: 3, "max": 1
    }, {
        "id": 27083,
        "description": "",
        "orderIndex": 225,
        type: 3, "max": 1
    }, {
        "id": 27084,
        "description": "",
        "orderIndex": 226,
        type: 3, "max": 1
    }, {
        "id": 27085,
        "description": "",
        "orderIndex": 227,
        type: 3, "max": 1
    }, {
        "id": 27086,
        "description": "",
        "orderIndex": 228,
        type: 3, "max": 1
    }, {
        "id": 27087,
        "description": "",
        "orderIndex": 229,
        type: 3, "max": 1
    }, {
        "id": 27088,
        "description": "",
        "orderIndex": 230,
        type: 3, "max": 1
    }, {
        "id": 25576,
        "description": "",
        "orderIndex": 231,
        type: 3, "max": 1
    }, {
        "id": 27089,
        "description": "",
        "orderIndex": 232,
        type: 3, "max": 1
    }, {
        "id": 25577,
        "description": "",
        "orderIndex": 233,
        type: 3, "max": 1
    }, {
        "id": 25578,
        "description": "",
        "orderIndex": 234,
        type: 3, "max": 1
    }, {
        "id": 25579,
        "description": "",
        "orderIndex": 235,
        type: 3, "max": 1
    }, {
        "id": 25580,
        "description": "",
        "orderIndex": 236,
        type: 3, "max": 1
    }, {
        "id": 25581,
        "description": "",
        "orderIndex": 237,
        type: 3, "max": 1
    }, {
        "id": 25582,
        "description": "",
        "orderIndex": 238,
        type: 3, "max": 1
    }, {
        "id": 25583,
        "description": "",
        "orderIndex": 239,
        type: 3, "max": 1
    }, {
        "id": 25584,
        "description": "",
        "orderIndex": 240,
        type: 3, "max": 1
    }, {
        "id": 25585,
        "description": "",
        "orderIndex": 241,
        type: 3, "max": 1
    }, {
        "id": 25586,
        "description": "",
        "orderIndex": 242,
        type: 3, "max": 1
    }, {
        "id": 25587,
        "description": "",
        "orderIndex": 243,
        type: 3, "max": 1
    }, {
        "id": 25588,
        "description": "",
        "orderIndex": 244,
        type: 3, "max": 1
    }, {
        "id": 25589,
        "description": "",
        "orderIndex": 245,
        type: 3, "max": 1
    }, {
        "id": 25590,
        "description": "",
        "orderIndex": 246,
        type: 3, "max": 1
    }, {
        "id": 25591,
        "description": "",
        "orderIndex": 247,
        type: 3, "max": 1
    }, {
        "id": 25592,
        "description": "",
        "orderIndex": 248,
        type: 3, "max": 1
    }, {
        "id": 27090,
        "description": "",
        "orderIndex": 249,
        type: 3, "max": 1
    }, {
        "id": 27091,
        "description": "",
        "orderIndex": 250,
        type: 3, "max": 1
    }, {
        "id": 27092,
        "description": "",
        "orderIndex": 251,
        type: 3, "max": 1
    }, {
        "id": 25593,
        "description": "",
        "orderIndex": 252,
        type: 3, "max": 1
    }, {
        "id": 27093,
        "description": "",
        "orderIndex": 253,
        type: 3, "max": 1
    }, {
        "id": 27094,
        "description": "",
        "orderIndex": 254,
        type: 3, "max": 1
    }, {
        "id": 27095,
        "description": "",
        "orderIndex": 255,
        type: 3, "max": 1
    }, {
        "id": 27096,
        "description": "",
        "orderIndex": 256,
        type: 3, "max": 1
    }, {
        "id": 27097,
        "description": "",
        "orderIndex": 257,
        type: 3, "max": 1
    }, {
        "id": 27098,
        "description": "",
        "orderIndex": 258,
        type: 3, "max": 1
    }, {
        "id": 27099,
        "description": "",
        "orderIndex": 259,
        type: 3, "max": 1
    }, {
        "id": 27100,
        "description": "",
        "orderIndex": 260,
        type: 3, "max": 1
    }, {
        "id": 27101,
        "description": "",
        "orderIndex": 261,
        type: 3, "max": 1
    }, {
        "id": 27102,
        "description": "",
        "orderIndex": 262,
        type: 3, "max": 1
    }, {
        "id": 27103,
        "description": "",
        "orderIndex": 263,
        type: 3, "max": 1
    }, {
        "id": 27104,
        "description": "",
        "orderIndex": 264,
        type: 3, "max": 1
    }, {
        "id": 27105,
        "description": "",
        "orderIndex": 265,
        type: 3, "max": 1
    }, {
        "id": 27106,
        "description": "",
        "orderIndex": 266,
        type: 3, "max": 1
    }, {
        "id": 27107,
        "description": "",
        "orderIndex": 267,
        type: 3, "max": 1
    }, {
        "id": 27108,
        "description": "",
        "orderIndex": 268,
        type: 3, "max": 1
    }, {
        "id": 27109,
        "description": "",
        "orderIndex": 269,
        type: 3, "max": 1
    }, {
        "id": 27110,
        "description": "",
        "orderIndex": 270,
        type: 3, "max": 1
    }, {
        "id": 27111,
        "description": "",
        "orderIndex": 271,
        type: 3, "max": 1
    }, {
        "id": 27112,
        "description": "",
        "orderIndex": 272,
        type: 3, "max": 1
    }, {
        "id": 27113,
        "description": "",
        "orderIndex": 273,
        type: 3, "max": 1
    }, {
        "id": 27114,
        "description": "",
        "orderIndex": 274,
        type: 3, "max": 1
    }, {
        "id": 27115,
        "description": "",
        "orderIndex": 275,
        type: 3, "max": 1
    }, {
        "id": 27116,
        "description": "",
        "orderIndex": 276,
        type: 3, "max": 1
    }, {
        "id": 27117,
        "description": "",
        "orderIndex": 277,
        type: 3, "max": 1
    }, {
        "id": 27118,
        "description": "",
        "orderIndex": 278,
        type: 3, "max": 1
    }, {
        "id": 27119,
        "description": "",
        "orderIndex": 279,
        type: 3, "max": 1
    }, {
        "id": 27120,
        "description": "",
        "orderIndex": 280,
        type: 3, "max": 1
    }, {
        "id": 27121,
        "description": "",
        "orderIndex": 281,
        type: 3, "max": 1
    }, {
        "id": 27122,
        "description": "",
        "orderIndex": 282,
        type: 3, "max": 1
    }, {
        "id": 27123,
        "description": "",
        "orderIndex": 283,
        type: 3, "max": 1
    }, {
        "id": 27124,
        "description": "",
        "orderIndex": 284,
        type: 3, "max": 1
    }, {
        "id": 27125,
        "description": "",
        "orderIndex": 285,
        type: 3, "max": 1
    }, {
        "id": 27126,
        "description": "",
        "orderIndex": 286,
        type: 3, "max": 1
    }, {
        "id": 27127,
        "description": "",
        "orderIndex": 287,
        type: 3, "max": 1
    }, {
        "id": 27128,
        "description": "",
        "orderIndex": 288,
        type: 3, "max": 1
    }, {
        "id": 27129,
        "description": "",
        "orderIndex": 289,
        type: 3, "max": 1
    }, {
        "id": 27130,
        "description": "",
        "orderIndex": 290,
        type: 3, "max": 1
    }, {
        "id": 27131,
        "description": "",
        "orderIndex": 291,
        type: 3, "max": 1
    }, {
        "id": 27132,
        "description": "",
        "orderIndex": 292,
        type: 3, "max": 1
    }, {
        "id": 27133,
        "description": "",
        "orderIndex": 293,
        type: 3, "max": 1
    }, {
        "id": 27134,
        "description": "",
        "orderIndex": 294,
        type: 3, "max": 1
    }, {
        "id": 27135,
        "description": "",
        "orderIndex": 295,
        type: 3, "max": 1
    }, {
        "id": 27136,
        "description": "",
        "orderIndex": 296,
        type: 3, "max": 1
    }, {
        "id": 27137,
        "description": "",
        "orderIndex": 297,
        type: 3, "max": 1
    }, {
        "id": 27138,
        "description": "",
        "orderIndex": 298,
        type: 3, "max": 1
    }, {
        "id": 27139,
        "description": "",
        "orderIndex": 299,
        type: 3, "max": 1
    }, {
        "id": 27140,
        "description": "",
        "orderIndex": 300,
        type: 3, "max": 1
    }, {
        "id": 24462,
        "description": "",
        "orderIndex": 301,
        type: 3, "max": 1
    }, {
        "id": 27141,
        "description": "",
        "orderIndex": 302,
        type: 3, "max": 1
    }, {
        "id": 26825,
        "description": "",
        "orderIndex": 303,
        type: 3, "max": 1
    }, {
        "id": 27142,
        "description": "",
        "orderIndex": 304,
        type: 3, "max": 1
    }, {
        "id": 27143,
        "description": "",
        "orderIndex": 305,
        type: 3, "max": 1
    }, {
        "id": 29004,
        "description": "",
        "orderIndex": 306,
        type: 3, "max": 1
    }, {
        "id": 29005,
        "description": "",
        "orderIndex": 307,
        type: 3, "max": 1
    }, {
        "id": 29006,
        "description": "",
        "orderIndex": 308,
        type: 3, "max": 1
    }, {
        "id": 29007,
        "description": "",
        "orderIndex": 309,
        type: 3, "max": 1
    }],},    
    {id:10350, title:'Tanaan Diplomat', trackCriteria:true,  text:'Earn Revered reputation with all three factions in Tanaan Jungle.', completed: false,accountCompleted:false,   icon:'achievement_zone_tanaanjungle', type:1, criteria:[
        {id:28981, "tooltipId": 45693, "title": "Hand of the Prophet", type:4, "max": 21000}, 
        {id:28979, "tooltipId": 45695, "title": "The Saberstalkers", type:4,  "max": 21000}, 
        {id:28980, "tooltipId": 45694, "title": "Order of the Awakened", type:4,"max": 21000},   
    ]},
];

const pandariaLoremaster= {id:6541, title: 'Loremaster of Pandaria', trackCriteria:true, text:'Complete the Pandaria quest achievements listed below.', completed: false, accountCompleted:false,  icon:'expansionicon_mistsofpandaria', type:1, criteria:[
    {id:6301, tooltipId: 21408, title: 'Rally the Valley', text:"Complete the Valley of the Four Winds storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_valleyoffourwinds_loremaster', type:1, "criteria": [
        {"id": 29918, tooltipId: 10759,"title": "Thunderfoot Fields", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 29990, tooltipId: 10763,"title": "The Hidden Master", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 30078, tooltipId: 10765,"title": "The Stormstout Brewery", "orderIndex": 2, type:2, "max": 1},
        {"id": 29952, tooltipId: 10760,"title": "Mudmug\'s Place", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 30073, tooltipId: 10764,"title": "Chen\'s Masterpiece", "orderIndex": 4, type:2,  "max": 1},
        {"id": 30186, tooltipId: 10766,"title": "Nesingwary\'s Safari", "orderIndex": 5, type:2,  "max": 1},
    ]},
    {id:6539, tooltipId: 21411, title: 'One Steppe Forward, Two Steppes Back', text:"Complete the Townlong Steppes storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_townlongsteppes_loremaster', type:1, "criteria": [
        {"id": 30784, tooltipId: 21401,"title": "Fire Camp Osul", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 30968, tooltipId: 21403,"title": "The Sha of Hatred", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 30926, tooltipId: 21405,"title": "Tai Ho\'s Investigation", "orderIndex": 2, type:2, "max": 1},
        {"id": 30900, tooltipId: 21402,"title": "On Hatred\'s Path", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 30793, tooltipId: 21404,"title": "Mistlurkers in the Sumprushes", "orderIndex": 4, type:2, "max": 1},
    ]},
    {id:6540, tooltipId: 21412, title: 'Dread Haste Makes Dread Waste', text:"Complete the Dread Wastes storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_dreadwastes_loremaster', type:1, "criteria": [
        {"id": 31354, tooltipId: 23740,"title": "Like a Deck Boss", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 31066, tooltipId: 23742,"title": "The First Paragons", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 31086, tooltipId: 23741,"title": "Taste of Amber", "orderIndex": 2, type:2, "max": 1},
        {"id": 31398, tooltipId: 23743,"title": "The Might of the Klaxxi", "orderIndex": 3, type:2, "max": 1}, 
    ]},
    {id:6300, tooltipId: 29112, title: 'Upjade Complete', text:"Complete the Jade Forest storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_jadeforest_loremaster', type:1, "criteria": [
        {"id": 29755, tooltipId: 21347,"title": "Terrace of Ten Thunders", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 29894, tooltipId: 21350,"title": "The Waterspeaking Ceremony", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 31319, tooltipId: 21352,"title": "Overcoming Doubt", "orderIndex": 2, type:2, "max": 1},
        {"id": 31362, tooltipId: 21355,"title": "The Battle for the Forest", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 30000, tooltipId: 21359,"title": "The Temple of the Jade Serpent", "orderIndex": 4, type:2, "max": 1},
        {"id": 29901, tooltipId: 21364,"title": "The White Pawn", "orderIndex": 5, type:2, "max": 1},
        {"id": 29882, tooltipId: 21349,"title": "Dawn\'s Blossom", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 29906, tooltipId: 21351,"title": "Pearlfin Village", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 29670, tooltipId: 21353,"title": "Nectarbreeze Orchard", "orderIndex": 2, type:2, "max": 1},
        {"id": 31745, tooltipId: 21357,"title": "Paw\'don Village", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 29930, tooltipId: 21363,"title": "Greenstone Quarry", "orderIndex": 4, type:2, "max": 1},
        {"id": 29639, tooltipId: 32615,"title": "Tian Monastery", "orderIndex": 5, type:2, "max": 1, alternateId:[29647,29646]},
    ]},
    {id:6535, tooltipId: 29114, title: 'Mighty Roamin\' Krasaranger', text:"Complete the Krasarang Wilds storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_krasarangwilds_loremaster', type:1, "criteria": [
        {"id": 30675, tooltipId: 21366,"title": "Nayeli Lagoon", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 30445, tooltipId: 21368,"title": "The Waters of Youth", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 30090, tooltipId: 21373,"title": "Zhu\'s Watch", "orderIndex": 2, type:2, "max": 1},
        {"id": 30348, tooltipId: 21367,"title": "The Incursion", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 30273, tooltipId: 21369,"title": "Temple of the Red Crane", "orderIndex": 4, type:2,  "max": 1},
    ]},
    {id:6537, tooltipId: 29116, title: 'Slum It in the Summit', text:"Complete the Kun-Lai Summit storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_kunlaisummit_loremaster', type:1, "criteria": [
        {"id": 30514, tooltipId: 21377,"title": "Westwind Rest", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 30855, tooltipId: 21379,"title": "Inkgill Mere", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 30752, tooltipId: 21381,"title": "The Shado-Pan", "orderIndex": 2, type:2, "max": 1},
        {"id": 30747, tooltipId: 21383,"title": "Kota Peak", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 30800, tooltipId: 21385,"title": "The Thunder King", "orderIndex": 4, type:2,  "max": 1},
        {"id": 30660, tooltipId: 21378,"title": "The Yaungol Invasion", "orderIndex": 5, type:2,"max": 1},
        {"id": 31394, tooltipId: 21380,"title": "Temple of the White Tiger", "orderIndex": 2, type:2, "max": 1},
        {"id": 30612, tooltipId: 21382,"title": "The Burlap Trail", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 30492, tooltipId: 21384,"title": "The Yak Wash", "orderIndex": 4, type:2,  "max": 1},
        {"id": 30946, tooltipId: 21386,"title": "Zouchin Village", "orderIndex": 5, type:2,"max": 1},
    ]},
]};

const cataclysmLoremaster= {id:4875, title: 'Loremaster of Cataclysm', trackCriteria:true, text:'Complete the Cataclysm quest achievements listed below.', completed: false, accountCompleted:false,  icon:'inv_misc_book_06', type:1, criteria:[
    {id:4870, tooltipId: 17282, title: 'Coming Down the Mountain', text:"Complete the Mount Hyjal storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_quests_completed_mounthyjal', type:1, "criteria": [
        {"id": 25584, tooltipId: 64882,"title": "The Return of the Ancients", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 25428, tooltipId: 64894,"title": "Grove of Aessina", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 25832, tooltipId: 64899,"title": "Shrine of Aviana", "orderIndex": 2, type:2, "max": 1},
        {"id": 25531, tooltipId: 64901,"title": "Cavorting with Cultists", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 25332, tooltipId: 64883,"title": "Shrine of Goldrinn", "orderIndex": 4, type:2,  "max": 1},
        {"id": 25520, tooltipId: 64898,"title": "Awakening Tortolla", "orderIndex": 5, type:2,  "max": 1},
        {"id": 25653, tooltipId: 64900,"title": "The Ancients", "orderIndex": 5, type:2,  "max": 1},   
        {"id": 25551, tooltipId: 64902,"title": "Extinguish the Firelord", "orderIndex": 5, type:2,  "max": 1},      
    ]},
    {id:4872, tooltipId: 17284, title: 'Unearthing Uldum', text:"Complete the Uldum storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_quests_completed_uldum', type:1, "criteria": [
        {"id": 28112, tooltipId: 64925,"title": "Rescued by Outsiders", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 27779, tooltipId: 64927,"title": "Gnomebliteration!", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 27905, tooltipId: 64931,"title": "These Obelisks Are Trying To Kill Us!", "orderIndex": 2, type:2, "max": 1},
        {"id": 28633, tooltipId: 64942,"title": "Promises", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 28533, tooltipId: 64926,"title": "The High Council\'s Decision", "orderIndex": 4, type:2,  "max": 1},
        {"id": 28520, tooltipId: 64930,"title": "The Dark Pharaoh", "orderIndex": 5, type:2,  "max": 1},
        {"id": 28267, tooltipId: 64939,"title": "The Furrier, Schnottz", "orderIndex": 5, type:2,  "max": 1},   
    ]},
    {id:4873, tooltipId: 29120, title: 'Fading Into Twilight', text:"Complete the Twilight Highlands storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_quests_completed_twilighthighlands', type:1, "criteria": [
        {"id": 27545, tooltipId: 64973,"title": "Good News, For Once", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 27651, tooltipId: 64998,"title": "The Dunwalds", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 28655, tooltipId: 65005,"title": "Wild, Wild, Wildhammer Wedding", "orderIndex": 2, type:2, "max": 1},
        {"id": 27662, tooltipId: 65009,"title": "Send Them Packing", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 27817, tooltipId: 64980,"title": "Firebeard", "orderIndex": 4, type:2,  "max": 1},
        {"id": 28244, tooltipId: 65004,"title": "The Eye of Twilight", "orderIndex": 5, type:2,  "max": 1},
        {"id": 28247, tooltipId: 65008,"title": "The Attack Begins", "orderIndex": 5, type:2,  "max": 1},   
    ]},
    {id:4871, tooltipId: 17283, title: 'Deep into Deepholm', text:"Complete the Deepholm storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_quests_completed_deepholm', type:1, "criteria": [
        {"id": 27938, tooltipId: 64909,"title": "The Middle World Pillar Fragment", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 26585, tooltipId: 64915,"title": "The Stone Lords", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 26876, tooltipId: 64910,"title": "The Upper World Pillar Fragment", "orderIndex": 2, type:2, "max": 1},
        {"id": 26971, tooltipId: 64924,"title": "Mending the Wound", "orderIndex": 3, type:2, "max": 1}, 
    ]},
    {id:4869, tooltipId: 29118, title: 'Sinking Into Vashj\'ir', text:"Complete the Vashj\'ir storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_quests_completed_vashjir', type:1, "criteria": [
        {"id": 25558, tooltipId: 64826,"title": "Defense of the Briny Cutter", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 25743, tooltipId: 64832,"title": "A Budding Treasure Hunter", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 25456, tooltipId: 64844,"title": "Silver Tide Hollow", "orderIndex": 2, type:2, "max": 1},
        {"id": 25626, tooltipId: 64852,"title": "Visions of the Past", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 26143, tooltipId: 64870,"title": "L\'ghorek", "orderIndex": 4, type:2,  "max": 1},
        {"id": 25638, tooltipId: 64828,"title": "Smuggler\'s Scar", "orderIndex": 5, type:2,  "max": 1},
        {"id": 25888, tooltipId: 64836,"title": "The Clutch", "orderIndex": 5, type:2,  "max": 1},   
        {"id": 25922, tooltipId: 64850,"title": "Nespirah", "orderIndex": 4, type:2,  "max": 1},
        {"id": 25987, tooltipId: 64864,"title": "The Merciless One", "orderIndex": 5, type:2,  "max": 1},
        {"id": 26193, tooltipId: 64872,"title": "The Tidehunter", "orderIndex": 5, type:2,  "max": 1},   
    ]},
]};

const exploreCataclysm={id:4868, title: 'Cataclysm Explorer', trackCriteria:true, text:'Explore the regions exposed by the Cataclysm.', completed: false, accountCompleted:false,  icon:'spell_shaman_stormearthfire', type:1, criteria:[
    {id:4825, tooltipId: 12839, title: 'Explore Vashj\'ir', text:"Explore Vashj\'ir, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievement_zone_vashjir', type:1, criteria:[
        {"id":14124,"tooltipId":15676,"title":"Abandoned Reef","type":3,"max":1},
        {"id":14127,"tooltipId":15678,"title":"Deepfin Ridge","type":3,"max":1},
        {"id":14130,"tooltipId":15680,"title":"L'ghorek","type":3,"max":1},
        {"id":14134,"tooltipId":15682,"title":"Gnaws' Boneyard","type":3,"max":1},
        {"id":14135,"tooltipId":15684,"title":"Gurboggle's Ledge","type":3,"max":1},
        {"id":14138,"tooltipId":15686,"title":"Legion's Fate","type":3,"max":1},
        {"id":14141,"tooltipId":15688,"title":"Nespirah","type":3,"max":1},
        {"id":14145,"tooltipId":15690,"title":"Silver Tide Hollow","type":3,"max":1},
        {"id":14139,"tooltipId":15692,"title":"The Skeletal Reef","type":3,"max":1},
        {"id":14142,"tooltipId":15694,"title":"Ruins of Thelserai Temple","type":3,"max":1},
        {"id":14144,"tooltipId":15696,"title":"Shimmering Grotto","type":3,"max":1},
        {"id":14125,"tooltipId":15677,"title":"Abyssal Breach","type":3,"max":1},
        {"id":14129,"tooltipId":15679,"title":"Korthun's End","type":3,"max":1},
        {"id":14133,"tooltipId":15681,"title":"Glimmerdeep Gorge","type":3,"max":1},
        {"id":14131,"tooltipId":15683,"title":"Seabrush","type":3,"max":1},
        {"id":14136,"tooltipId":15685,"title":"The Clutch","type":3,"max":1},
        {"id":14140,"tooltipId":15687,"title":"Beth'mora Ridge","type":3,"max":1},
        {"id":14143,"tooltipId":15689,"title":"Ruins of Vashj'ir","type":3,"max":1},
        {"id":14126,"tooltipId":15691,"title":"Underlight Canyon","type":3,"max":1},
        {"id":14137,"tooltipId":15693,"title":"Seafarer's Tomb","type":3,"max":1},
        {"id":14132,"tooltipId":15695,"title":"The Scalding Chasm","type":3,"max":1}
        
    ]},
    {id:4864, tooltipId: 12841, title: 'Explore Deepholm', text:"Explore Deepholm, revealing the covered areas of the world map.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_deepholm', type:1, criteria:[
        {"id":15125,"tooltipId":15368,"title":"Stonehearth","type":3,"max":1},
        {"id":15128,"tooltipId":15370,"title":"The Pale Roost","type":3,"max":1},
        {"id":15133,"tooltipId":15372,"title":"Crimson Expanse","type":3,"max":1},
        {"id":15124,"tooltipId":15374,"title":"Needlerock Slag","type":3,"max":1},
        {"id":15127,"tooltipId":15376,"title":"Temple of Earth","type":3,"max":1},
        {"id":13780,"tooltipId":15378,"title":"Deathwing's Fall","type":3,"max":1},
        {"id":15129,"tooltipId":15369,"title":"Therazane's Throne","type":3,"max":1},
        {"id":15132,"tooltipId":15371,"title":"Masters' Gate","type":3,"max":1},
        {"id":15123,"tooltipId":15373,"title":"Needlerock Chasm","type":3,"max":1},
        {"id":15126,"tooltipId":15375,"title":"Storm's Fury Wreckage","type":3,"max":1},
        {"id":15130,"tooltipId":15377,"title":"The Quaking Fields","type":3,"max":1},
        {"id":15131,"tooltipId":15379,"title":"Twilight Overlook","type":3,"max":1}
    ]},    
    {id:4866, tooltipId: 12843, title: 'Explore Twilight Highlands',  text:"Explore Twilight Highlands, revealing the covered areas of the world map.",trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_twilighthighlands', type:1, criteria:[
        {"id":15147,"tooltipId":12810,"title":"Gorshak War Camp","type":3,"max":1},
        {"id":15153,"tooltipId":12812,"title":"Obsidian Forest","type":3,"max":1},
        {"id":15146,"tooltipId":12814,"title":"Glopgut's Hollow","type":3,"max":1},
        {"id":15165,"tooltipId":12816,"title":"The Maw of Madness","type":3,"max":1},
        {"id":15142,"tooltipId":12818,"title":"Dragonmaw Pass","type":3,"max":1},
        {"id":15159,"tooltipId":12820,"title":"The Twilight Breach","type":3,"max":1},
        {"id":15140,"tooltipId":12822,"title":"Crucible of Carnage","type":3,"max":1},
        {"id":15145,"tooltipId":12824,"title":"Firebeard's Patrol","type":3,"max":1},
        {"id":15141,"tooltipId":12826,"title":"Crushblow","type":3,"max":1},
        {"id":15161,"tooltipId":12828,"title":"Twilight Shore","type":3,"max":1},
        {"id":15151,"tooltipId":12830,"title":"Humboldt Conflagration","type":3,"max":1},
        {"id":15154,"tooltipId":12832,"title":"Ruins of Drakgor","type":3,"max":1},
        {"id":15156,"tooltipId":12834,"title":"The Black Breach","type":3,"max":1},
        {"id":15158,"tooltipId":12836,"title":"The Krazzworks","type":3,"max":1},
        {"id":15150,"tooltipId":12811,"title":"Highland Forest","type":3,"max":1},
        {"id":15160,"tooltipId":12813,"title":"Thundermar","type":3,"max":1},
        {"id":15163,"tooltipId":12815,"title":"Victor's Point","type":3,"max":1},
        {"id":15143,"tooltipId":12817,"title":"Dragonmaw Port","type":3,"max":1},
        {"id":15149,"tooltipId":12819,"title":"Highbank","type":3,"max":1},
        {"id":15139,"tooltipId":12821,"title":"Bloodgulch","type":3,"max":1},
        {"id":15144,"tooltipId":12823,"title":"Dunwald Ruins","type":3,"max":1},
        {"id":15148,"tooltipId":12825,"title":"Grim Batol","type":3,"max":1},
        {"id":15164,"tooltipId":12827,"title":"Wyrms' Bend","type":3,"max":1},
        {"id":15162,"tooltipId":12829,"title":"Vermillion Redoubt","type":3,"max":1},
        {"id":15152,"tooltipId":12831,"title":"Kirthaven","type":3,"max":1},
        {"id":15155,"tooltipId":12833,"title":"Slithering Cove","type":3,"max":1},
        {"id":15157,"tooltipId":12835,"title":"The Gullet","type":3,"max":1}
    ]},
    {id:4863, tooltipId: 12840, title: 'Explore Hyjal', text:"Explore Hyjal, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_mounthyjal', type:1, criteria:[
        {"id":16089,"tooltipId":13692,"title":"The Circle of Cinders","type":3,"max":1},
        {"id":13805,"tooltipId":13694,"title":"The Throne of Flame","type":3,"max":1},
        {"id":13797,"tooltipId":13696,"title":"Darkwhisper Gorge","type":3,"max":1},
        {"id":13800,"tooltipId":13698,"title":"Nordrassil","type":3,"max":1},
        {"id":13802,"tooltipId":13700,"title":"Shrine of Goldrinn","type":3,"max":1},
        {"id":13803,"tooltipId":13702,"title":"The Flamewake","type":3,"max":1},
        {"id":13796,"tooltipId":13693,"title":"Ashen Lake","type":3,"max":1},
        {"id":13795,"tooltipId":13695,"title":"Rim of the World","type":3,"max":1},
        {"id":13799,"tooltipId":13697,"title":"Gates of Sothann","type":3,"max":1},
        {"id":13801,"tooltipId":13699,"title":"Sethria's Roost","type":3,"max":1},
        {"id":13804,"tooltipId":13701,"title":"The Scorched Plain","type":3,"max":1}          
    ]},
    {id:4865, tooltipId: 12842, title: 'Explore Uldum', text:"Explore Uldum, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_uldum', type:1, criteria:[
        {"id":15170,"tooltipId":15498,"title":"Lost City of the Tol'vir","type":3,"max":1},
        {"id":15183,"tooltipId":15500,"title":"Temple of Uldum","type":3,"max":1},
        {"id":15181,"tooltipId":15502,"title":"Schnottz's Landing","type":3,"max":1},
        {"id":15182,"tooltipId":15504,"title":"Tahret Grounds","type":3,"max":1},
        {"id":15176,"tooltipId":15506,"title":"Obelisk of the Sun","type":3,"max":1},
        {"id":15167,"tooltipId":15508,"title":"Cradle of the Ancients","type":3,"max":1},
        {"id":15172,"tooltipId":15510,"title":"Nahom","type":3,"max":1},
        {"id":15174,"tooltipId":15512,"title":"Obelisk of the Moon","type":3,"max":1},
        {"id":15177,"tooltipId":15514,"title":"Orsis","type":3,"max":1},
        {"id":15179,"tooltipId":15516,"title":"Ruins of Ahmtul","type":3,"max":1},
        {"id":15185,"tooltipId":15518,"title":"The Gate of Unending Cycles","type":3,"max":1},
        {"id":15166,"tooltipId":15499,"title":"Akhenet Fields","type":3,"max":1},
        {"id":15168,"tooltipId":15501,"title":"Tombs of the Precursors","type":3,"max":1},
        {"id":15169,"tooltipId":15503,"title":"Khartut's Tomb","type":3,"max":1},
        {"id":15184,"tooltipId":15505,"title":"The Cursed Landing","type":3,"max":1},
        {"id":15186,"tooltipId":15507,"title":"The Trail of Devastation","type":3,"max":1},
        {"id":15171,"tooltipId":15509,"title":"Mar'at","type":3,"max":1},
        {"id":15173,"tooltipId":15511,"title":"Neferset City","type":3,"max":1},
        {"id":15175,"tooltipId":15513,"title":"Obelisk of the Stars","type":3,"max":1},
        {"id":15178,"tooltipId":15515,"title":"Ramkahen","type":3,"max":1},
        {"id":15180,"tooltipId":15517,"title":"Ruins of Ammon","type":3,"max":1},
        {"id":15187,"tooltipId":15519,"title":"Vir'naal Dam","type":3,"max":1}
    ]}
]};

const northrendLoremaster= {id:41, title: 'Loremaster of Northrend', trackCriteria:true, text:'Complete the Northrend quest achievements listed below.', completed: false, accountCompleted:false,  icon:'achievement_zone_northrend_01', type:1, criteria:[
    {id:40, tooltipId: 5758, title: 'Icecrown: The Final Goal', text:"Complete the Icecrown storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_icecrown_07', type:1, "criteria": [
        {"id": 13083, tooltipId: 64055,"title": "Crusader Bridenbrad", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 13346, tooltipId: 64065,"title": "Aldur\'thar: The Desolation Gate", "orderIndex": 1, type:2, "max": 1, alternateId:[13367]}, 
        {"id": 13174, tooltipId: 64078,"title": "Seizing Saronite", "orderIndex": 2, type:2, "max": 1},
        {"id": 13219, tooltipId: 64083,"title": "The Unthinkable", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 13403, tooltipId: 64087,"title": "The Heart of the Lich King", "orderIndex": 4, type:2,  "max": 1, alternateId:[13364]},
        {"id": 13157, tooltipId: 64056,"title": "In Defiance of the Scourge", "orderIndex": 5, type:2,  "max": 1},
        {"id": 12898, tooltipId: 64075,"title": "What\'s Yours Is Mine", "orderIndex": 5, type:2,  "max": 1, alternateId:[12899]},   
        {"id": 13164, tooltipId: 64081,"title": "Malykriss: The Vile Hold", "orderIndex": 5, type:2,  "max": 1},              
        {"id": 13235, tooltipId: 64085,"title": "Teaching the Meaning of Fear", "orderIndex": 5, type:2,  "max": 1},      
    ]},
    {id:38, tooltipId: 5763, title: 'The Summit of Storm Peaks', text:"Complete the Storm Peaks storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_stormpeaks_07', type:1, "criteria": [
        {"id": 12824, tooltipId: 63940,"title": "Defending K3", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 12872, tooltipId: 63946,"title": "Norgannon\'s Shell", "orderIndex": 1, type:2, "max": 1, alternateId:[12928]}, 
        {"id": 12876, tooltipId: 63953,"title": "For the Frostborn King", "orderIndex": 2, type:2, "max": 1},
        {"id": 13064, tooltipId: 63962,"title": "Heartbreak", "orderIndex": 4, type:2,  "max": 1},
        {"id": 13047, tooltipId: 63968,"title": "Loken", "orderIndex": 5, type:2,  "max": 1},
        {"id": 12868, tooltipId: 63943,"title": "The Harpy Problem", "orderIndex": 5, type:2,  "max": 1},   
        {"id": 13007, tooltipId: 63949,"title": "Bringing Down the Iron Colossus", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 12972, tooltipId: 63960,"title": "Bearly Ready", "orderIndex": 5, type:2,  "max": 1},
        {"id": 13001, tooltipId: 63964,"title": "The Sons of Hodir", "orderIndex": 5, type:2,  "max": 1},  
        {"id": 13285, tooltipId: 63956,"title": "Pursuing a Legend", "orderIndex": 5, type:2,  "max": 1},  
        {"id": 13058, tooltipId: 63958,"title": "The Story of Stormhoof", "orderIndex": 5, type:2,  "max": 1},   
    ]},
    {id:33, tooltipId: 29122, title: 'Nothing Boring About Borean', text:"Complete the Borean Tundra storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_boreantundra_07', type:1, "criteria": [
        {"id": 11794, tooltipId: 63867,"title": "Hiding in Plain Sight", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 11892, tooltipId: 63873,"title": "D.E.H.T.A.", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 11968, tooltipId: 63881,"title": "Friends from the Sea", "orderIndex": 2, type:2, "max": 1},
        {"id": 12088, tooltipId: 63890,"title": "A Family Reunion", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 11965, tooltipId: 63869,"title": "To the Aid of Farshire", "orderIndex": 4, type:2,  "max": 1},
        {"id": 11914, tooltipId: 63875,"title": "The Blue Dragonflight", "orderIndex": 5, type:2,  "max": 1},
        {"id": 11561, tooltipId: 63884,"title": "Participant Observation", "orderIndex": 5, type:2,  "max": 1},   
        {"id": 12019, tooltipId: 63892,"title": "Last Rites", "orderIndex": 5, type:2,  "max": 1},   
    ]},
    {id:37, tooltipId: 29126, title: 'Fo\' Grizzle My Shizzle', text:"Complete the Grizzly Hills storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_grizzlyhills_07', type:1, "criteria": [
        {"id": 12249, tooltipId: 64026,"title": "Ursoc, the Bear God", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 12185, tooltipId: 64030,"title": "Loken\'s Orders", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 12164, tooltipId: 64034,"title": "Hour of the Worg", "orderIndex": 2, type:2, "max": 1},
        {"id": 12153, tooltipId: 64028,"title": "The Iron Thane", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 12068, tooltipId: 64032,"title": "Revelation!", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 12152, tooltipId: 64036,"title": "Eons of Misery", "orderIndex": 1, type:2, "max": 1}, 
    ]},
    {id:36, tooltipId: 5761, title: 'The Empire of Zul\'Drak', text:"Complete the Zul\'Drak storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_zuldrak_07', type:1, "criteria": [
        {"id": 12516, tooltipId: 63979,"title": "Sseratus", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 12919, tooltipId: 63985,"title": "The Storm King\'s Crusade", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 12596, tooltipId: 63992,"title": "The Argent Patrol", "orderIndex": 2, type:2, "max": 1},
        {"id": 12685, tooltipId: 64003,"title": "Quetz\'lun", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 12883, tooltipId: 63981,"title": "Finding Allies", "orderIndex": 4, type:2,  "max": 1},
        {"id": 12713, tooltipId: 63990,"title": "Betrayal", "orderIndex": 5, type:2,  "max": 1},
        {"id": 12948, tooltipId: 64001,"title": "The Amphitheater of Anguish", "orderIndex": 5, type:2,  "max": 1},   
        {"id": 12730, tooltipId: 64005,"title": "Akali", "orderIndex": 4, type:2,  "max": 1},
    ]},
    {id:39, tooltipId: 5764, title: 'Into the Basin', text:"Complete the Sholazar Basin storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_sholazar_07', type:1, "criteria": [
        {"id": 12595, tooltipId: 63927,"title": "Hunting Bigger Game", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 12540, tooltipId: 63933,"title": "The Wolvar", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 12561, tooltipId: 63937,"title": "The Lifewarden", "orderIndex": 2, type:2, "max": 1},
        {"id": 12614, tooltipId: 63929,"title": "Teeth, Spikes, and Talons", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 12581, tooltipId: 63935,"title": "The Oracles", "orderIndex": 4, type:2,  "max": 1},
        {"id": 12546, tooltipId: 65256,"title": "Watching Over the Basin", "orderIndex": 5, type:2,  "max": 1},
    ]},
    {id:35, tooltipId: 29124, title: 'Might of Dragonblight', text:"Complete the Dragonblight storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_dragonblight_07', type:1, "criteria": [
        {"id": 12169, tooltipId: 63796,"title": "The Warden\'s Task", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 12123, tooltipId: 63800,"title": "Informing the Queen", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 12499, tooltipId: 63807,"title": "Angrathar the Wrathgate", "orderIndex": 2, type:2, "max": 1},
        {"id": 12080, tooltipId: 63811,"title": "\"Strategic Alliance\"", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 12107, tooltipId: 63798,"title": "Redirecting the Ley Lines", "orderIndex": 4, type:2,  "max": 1},
        {"id": 13343, tooltipId: 63802,"title": "The Dragonflights", "orderIndex": 5, type:2,  "max": 1},
        {"id": 12478, tooltipId: 63809,"title": "Frostmourne", "orderIndex": 5, type:2,  "max": 1},   
        {"id": 12032, tooltipId: 63865,"title": "Oacha\'noa", "orderIndex": 4, type:2,  "max": 1},
    ]},
    {id:34, tooltipId: 29128, title: 'I\'ve Toured the Fjord', text:"Complete the Howling Fjord storylines listed below.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_howlingfjord_07', type:1, "criteria": [
        {"id": 11436, tooltipId: 63718,"title": "The Ill-Equipped Port", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 11501, tooltipId: 63723,"title": "Iron Rune Constructs", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 11471, tooltipId: 63727,"title": "The End of Jonah Sterling", "orderIndex": 2, type:2, "max": 1},
        {"id": 11332, tooltipId: 63731,"title": "A New Plague", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 11238, tooltipId: 63735,"title": "The Scourge and the Vrykul", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 11359, tooltipId: 63743,"title": "The Iron Dwarves", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 11344, tooltipId: 63721,"title": "Descendants of the Vrykul", "orderIndex": 2, type:2, "max": 1},
        {"id": 11572, tooltipId: 63725,"title": "Doom Approaches", "orderIndex": 3, type:2, "max": 1}, 
        {"id": 11467, tooltipId: 63729,"title": "The Debt Collectors", "orderIndex": 0, type:2, "max": 1}, 
        {"id": 11250, tooltipId: 63733,"title": "The Conqueror of Skorn", "orderIndex": 1, type:2, "max": 1}, 
        {"id": 11428, tooltipId: 63741,"title": "Sisters of the Fjord", "orderIndex": 2, type:2, "max": 1},
        {"id": 11326, tooltipId: 63746,"title": "Alpha Worg", "orderIndex": 3, type:2, "max": 1}, 
    ]},
]};

const exploreNorthrend={id:45, title: 'Northrend Explorer', trackCriteria:true, text:'Explore the regions of Northrend.', completed: false, accountCompleted:false,  icon:'achievement_zone_northrend_01', type:1, criteria:[
    {id:1264, tooltipId: 12839, title: 'Explore Borean Tundra', text:"Explore Borean Tundra, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,  icon:'achievement_zone_boreantundra_01', type:1, criteria:[
        {"id":4122,"tooltipId":228,"title":"Temple City of En'kilah","type":3,"max":1},
        {"id":4126,"tooltipId":230,"title":"Garrosh's Landing","type":3,"max":1},
        {"id":4124,"tooltipId":232,"title":"Riplash Strand","type":3,"max":1},
        {"id":4123,"tooltipId":234,"title":"Steeljaw's Caravan","type":3,"max":1},
        {"id":4127,"tooltipId":236,"title":"Death's Stand","type":3,"max":1},
        {"id":4131,"tooltipId":238,"title":"Warsong Hold","type":3,"max":1},
        {"id":4128,"tooltipId":240,"title":"Coldarra","type":3,"max":1},
        {"id":4134,"tooltipId":229,"title":"The Geyser Fields","type":3,"max":1},
        {"id":4129,"tooltipId":231,"title":"Bor'gorok Outpost","type":3,"max":1},
        {"id":4135,"tooltipId":233,"title":"The Dens of the Dying","type":3,"max":1},
        {"id":4125,"tooltipId":235,"title":"Kaskala","type":3,"max":1},
        {"id":4130,"tooltipId":237,"title":"Amber Ledge","type":3,"max":1},
        {"id":4132,"tooltipId":239,"title":"Valiance Keep","type":3,"max":1}
    ]},
    {id:1265, tooltipId: 12841, title: 'Explore Dragonblight', text:"Explore Dragonblight, revealing the covered areas of the world map.", trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_dragonblight_01', type:1, criteria:[
        {"id":4171,"tooltipId":4734,"title":"Agmar's Hammer","type":3,"max":1},
        {"id":4176,"tooltipId":4736,"title":"The Crystal Vice","type":3,"max":1},
        {"id":4159,"tooltipId":4738,"title":"Galakrond's Rest","type":3,"max":1},
        {"id":4167,"tooltipId":4740,"title":"Emerald Dragonshrine","type":3,"max":1},
        {"id":4163,"tooltipId":4742,"title":"New Hearthglen","type":3,"max":1},
        {"id":4165,"tooltipId":4744,"title":"Light's Trust","type":3,"max":1},
        {"id":4170,"tooltipId":4746,"title":"Angrathar the Wrath Gate","type":3,"max":1},
        {"id":4177,"tooltipId":4748,"title":"Scarlet Point","type":3,"max":1},
        {"id":4172,"tooltipId":4750,"title":"Wyrmrest Temple","type":3,"max":1},
        {"id":4175,"tooltipId":4735,"title":"The Forgotten Shore","type":3,"max":1},
        {"id":4166,"tooltipId":4737,"title":"Icemist Village","type":3,"max":1},
        {"id":4173,"tooltipId":4739,"title":"Westwind Refugee Camp","type":3,"max":1},
        {"id":4160,"tooltipId":4741,"title":"Lake Indu'le","type":3,"max":1},
        {"id":4164,"tooltipId":4743,"title":"Naxxramas","type":3,"max":1},
        {"id":4168,"tooltipId":4745,"title":"Coldwind Heights","type":3,"max":1},
        {"id":4174,"tooltipId":4747,"title":"Venomspite","type":3,"max":1},
        {"id":4162,"tooltipId":4749,"title":"Obsidian Dragonshrine","type":3,"max":1}
    ]},    
    {id:1267, tooltipId: 12843, title: 'Explore Zul\'Drak',  text:"Explore Zul\'Drak, revealing the covered areas of the world map.",trackCriteria:true, completed: false, accountCompleted:false,  icon:'achievement_zone_zuldrak_01', type:1, criteria:[
        {"id":4192,"tooltipId":4136,"title":"Gundrak","type":3,"max":1},
        {"id":4199,"tooltipId":4138,"title":"Altar of Har'koa","type":3,"max":1},
        {"id":4200,"tooltipId":4140,"title":"Zim'Torga","type":3,"max":1},
        {"id":4197,"tooltipId":4142,"title":"Altar of Quetz'lun","type":3,"max":1},
        {"id":4195,"tooltipId":4144,"title":"Altar of Sseratus","type":3,"max":1},
        {"id":4198,"tooltipId":4146,"title":"Altar of Mam'toth","type":3,"max":1},
        {"id":4204,"tooltipId":4148,"title":"Light's Breach","type":3,"max":1},
        {"id":4202,"tooltipId":4137,"title":"Voltarus","type":3,"max":1},
        {"id":4194,"tooltipId":4139,"title":"Ampitheater of Anguish","type":3,"max":1},
        {"id":4201,"tooltipId":4141,"title":"Zeramas","type":3,"max":1},
        {"id":4193,"tooltipId":4143,"title":"Drak'Sotra Fields","type":3,"max":1},
        {"id":4196,"tooltipId":4145,"title":"Altar of Rhunok","type":3,"max":1},
        {"id":4203,"tooltipId":4147,"title":"Thrym's End","type":3,"max":1},
        {"id":4205,"tooltipId":4149,"title":"Kolramas","type":3,"max":1}
    ]},
    {id:1457, tooltipId: 12840, title: 'Explore Crystalsong Forest', text:"Explore Crystalsong Forest, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_crystalsong_01', type:1, criteria:[
        {"id":5297,"tooltipId":5272,"title":"The Unbound Thicket","type":3,"max":1},
        {"id":5296,"tooltipId":5274,"title":"Violet Stand","type":3,"max":1},
        {"id":5291,"tooltipId":5276,"title":"The Decrepit Flow","type":3,"max":1},
        {"id":5292,"tooltipId":5278,"title":"Sunreaver's Command","type":3,"max":1},
        {"id":5295,"tooltipId":5273,"title":"The Great Tree","type":3,"max":1},
        {"id":5294,"tooltipId":5275,"title":"Windrunner's Overlook","type":3,"max":1},
        {"id":5293,"tooltipId":5277,"title":"Forlorn Woods","type":3,"max":1},
        {"id":5290,"tooltipId":5279,"title":"The Azure Front","type":3,"max":1}         
    ]},
    {id:1270, tooltipId: 12839, title: 'Explore Icecrown', text:"Explore Icecrown, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_icecrown_01', type:1, criteria:[
        {"id":5859,"tooltipId":3484,"title":"The Bombardment","type":3,"max":1},
        {"id":5865,"tooltipId":3486,"title":"Sindragosa's Fall","type":3,"max":1},
        {"id":5862,"tooltipId":3488,"title":"The Broken Front","type":3,"max":1},
        {"id":5867,"tooltipId":3490,"title":"Valley of Echoes","type":3,"max":1},
        {"id":5869,"tooltipId":3492,"title":"The Conflagration","type":3,"max":1},
        {"id":5873,"tooltipId":3494,"title":"Scourgeholme","type":3,"max":1},
        {"id":5860,"tooltipId":3496,"title":"Icecrown Citadel","type":3,"max":1},
        {"id":5861,"tooltipId":3498,"title":"Onslaught Harbor","type":3,"max":1},
        {"id":5871,"tooltipId":3485,"title":"Corp'rethar: The Horror Gate","type":3,"max":1},
        {"id":5866,"tooltipId":3487,"title":"Valhalas","type":3,"max":1},
        {"id":5863,"tooltipId":3489,"title":"The Fleshwerks","type":3,"max":1},
        {"id":5868,"tooltipId":3491,"title":"Ymirheim","type":3,"max":1},
        {"id":5872,"tooltipId":3493,"title":"Jotunheim","type":3,"max":1},
        {"id":5874,"tooltipId":3495,"title":"The Shadow Vault","type":3,"max":1},
        {"id":5864,"tooltipId":3497,"title":"Aldur'thar: The Desolation Gate","type":3,"max":1}
    ]},
    {id:1263, tooltipId: 12840, title: 'Explore Howling Fjord', text:"Explore Howling Fjord, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_howlingfjord_01', type:1, criteria:[
        {"id":4155,"tooltipId":3630,"title":"Westguard Keep","type":3,"max":1},
        {"id":4138,"tooltipId":3632,"title":"Camp Winterhoof","type":3,"max":1},
        {"id":4143,"tooltipId":3634,"title":"Nifflevar","type":3,"max":1},
        {"id":4149,"tooltipId":3636,"title":"Ivald's Ruin","type":3,"max":1},
        {"id":4152,"tooltipId":3638,"title":"Skorn","type":3,"max":1},
        {"id":4154,"tooltipId":3640,"title":"Utgarde Keep","type":3,"max":1},
        {"id":4141,"tooltipId":3642,"title":"Steel Gate","type":3,"max":1},
        {"id":4151,"tooltipId":3644,"title":"New Agamand","type":3,"max":1},
        {"id":4136,"tooltipId":3646,"title":"Kamagua","type":3,"max":1},
        {"id":4140,"tooltipId":3648,"title":"Vengeance Landing","type":3,"max":1},
        {"id":4137,"tooltipId":3650,"title":"Cauldros Isle","type":3,"max":1},
        {"id":4144,"tooltipId":3631,"title":"Gjalerbron","type":3,"max":1},
        {"id":4147,"tooltipId":3633,"title":"Giant's Run","type":3,"max":1},
        {"id":4146,"tooltipId":3635,"title":"Ember Clutch","type":3,"max":1},
        {"id":4150,"tooltipId":3637,"title":"Halgrind","type":3,"max":1},
        {"id":4153,"tooltipId":3639,"title":"The Twisted Glade","type":3,"max":1},
        {"id":4158,"tooltipId":3641,"title":"Baleheim","type":3,"max":1},
        {"id":4142,"tooltipId":3643,"title":"Scalawag Point","type":3,"max":1},
        {"id":4157,"tooltipId":3645,"title":"Baelgun's Excavation Site","type":3,"max":1},
        {"id":4139,"tooltipId":3647,"title":"Apothecary Camp","type":3,"max":1},
        {"id":4148,"tooltipId":3649,"title":"Fort Wildervar","type":3,"max":1}        
    ]},
    {id:1266, tooltipId: 12840, title: 'Explore Grizzly Hills', text:"Explore Grizzly Hills, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_grizzlyhills_01', type:1, criteria:[
        {"id":4187,"tooltipId":493,"title":"Voldrune","type":3,"max":1},
        {"id":4190,"tooltipId":495,"title":"Camp Oneqwah","type":3,"max":1},
        {"id":4188,"tooltipId":497,"title":"Amberpine Lodge","type":3,"max":1},
        {"id":4178,"tooltipId":499,"title":"Conquest Hold","type":3,"max":1},
        {"id":4181,"tooltipId":501,"title":"Dun Argol","type":3,"max":1},
        {"id":4184,"tooltipId":503,"title":"Rage Fang Shrine","type":3,"max":1},
        {"id":4186,"tooltipId":505,"title":"Venture Bay","type":3,"max":1},
        {"id":4182,"tooltipId":494,"title":"Granite Springs","type":3,"max":1},
        {"id":4179,"tooltipId":496,"title":"Drak'Tharon Keep","type":3,"max":1},
        {"id":4189,"tooltipId":498,"title":"Blue Sky Logging Grounds","type":3,"max":1},
        {"id":4180,"tooltipId":500,"title":"Drakil'jin Ruins","type":3,"max":1},
        {"id":4183,"tooltipId":502,"title":"Grizzlemaw","type":3,"max":1},
        {"id":4185,"tooltipId":504,"title":"Thor Modan","type":3,"max":1},
        {"id":4191,"tooltipId":506,"title":"Westfall Brigade Encampment","type":3,"max":1}       
    ]},
    {id:1268, tooltipId: 12840, title: 'Explore Sholazar Basin', text:"Explore Sholazar Basin, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_sholazar_01', type:1, criteria:[
        {"id":4213,"tooltipId":5308,"title":"The Lifeblood Pillar","type":3,"max":1},
        {"id":4215,"tooltipId":5310,"title":"The Glimmering Pillar","type":3,"max":1},
        {"id":4214,"tooltipId":5312,"title":"The Avalanche","type":3,"max":1},
        {"id":4209,"tooltipId":5314,"title":"Makers' Overlook","type":3,"max":1},
        {"id":4208,"tooltipId":5316,"title":"The Mosslight Pillar","type":3,"max":1},
        {"id":4217,"tooltipId":5318,"title":"Kartak's Hold","type":3,"max":1},
        {"id":4211,"tooltipId":5309,"title":"The Suntouched Pillar","type":3,"max":1},
        {"id":4206,"tooltipId":5311,"title":"River's Heart","type":3,"max":1},
        {"id":4210,"tooltipId":5313,"title":"Makers' Perch","type":3,"max":1},
        {"id":4207,"tooltipId":5315,"title":"The Savage Thicket","type":3,"max":1},
        {"id":4212,"tooltipId":5317,"title":"Rainspeaker Canopy","type":3,"max":1},
        {"id":4218,"tooltipId":5319,"title":"The Stormwright's Shelf","type":3,"max":1}         
    ]},
    {id:1269, tooltipId: 12840, title: 'Explore Storm Peaks', text:"Explore Storm Peaks, revealing the covered areas of the world map.", trackCriteria:true, completed: false,accountCompleted:false,   icon:'achievement_zone_stormpeaks_01', type:1, criteria:[
        {"id":5858,"tooltipId":6288,"title":"Nidavelir","type":3,"max":1},
        {"id":5843,"tooltipId":6290,"title":"Brunnhildar Village","type":3,"max":1},
        {"id":5854,"tooltipId":6292,"title":"Temple of Storms","type":3,"max":1},
        {"id":5850,"tooltipId":6294,"title":"Engine of the Makers","type":3,"max":1},
        {"id":5853,"tooltipId":6296,"title":"Thunderfall","type":3,"max":1},
        {"id":5856,"tooltipId":6298,"title":"Garm's Bane","type":3,"max":1},
        {"id":5844,"tooltipId":6300,"title":"Narvir's Cradle","type":3,"max":1},
        {"id":5851,"tooltipId":6302,"title":"Temple of Life","type":3,"max":1},
        {"id":5848,"tooltipId":6289,"title":"Terrace of the Makers","type":3,"max":1},
        {"id":5847,"tooltipId":6291,"title":"Valkyrion","type":3,"max":1},
        {"id":5846,"tooltipId":6293,"title":"Bor's Breath","type":3,"max":1},
        {"id":5852,"tooltipId":6295,"title":"Ulduar","type":3,"max":1},
        {"id":5855,"tooltipId":6297,"title":"Snowdrift Plains","type":3,"max":1},
        {"id":5857,"tooltipId":6299,"title":"Frosthold","type":3,"max":1},
        {"id":5849,"tooltipId":6301,"title":"Sparksocket Minefield","type":3,"max":1},
        {"id":5845,"tooltipId":6303,"title":"Dun Niffelem","type":3,"max":1}     
    ]},
]};

const outlandLoremaster= {id:1262, title: 'Loremaster of Outland', trackCriteria:true, text:'Complete the Outland quest achievements listed below.', completed: false, accountCompleted:false,  icon:'achievement_zone_outland_01', type:1, criteria:[
    {"id":1195,"tooltipId":794,"title":"Shadow of the Betrayer", text:'Complete the Shadowmoon Valley quest achievements listed below.', "type":3,"max":1, icon:'achievement_zone_shadowmoon',  criteria:[
        {"id":11041,"tooltipId":63257,"title":"Netherwing Ledge","type":2,"max":1},
        {"id":10651,"tooltipId":63259,"title":"Borrowed Power","type":2,"max":1, alternateId: [10692]},
        {"id":10588,"tooltipId":63261,"title":"The Cipher of Damnation","type":2,"max":1},
        {"id":10808,"tooltipId":63263,"title":"The Dark Conclave","type":2,"max":1},
        {"id":10745,"tooltipId":63265,"title":"Shadowmoon Village","type":2,"max":1},
        {"id":10645,"tooltipId":63258,"title":"The First Death Knight","type":2,"max":1, alternateId: [10639]},
        {"id":11052,"tooltipId":63260,"title":"Akama's Promise","type":2,"max":1},
        {"id":10679,"tooltipId":63262,"title":"Anti-Demon Weapons","type":2,"max":1},
        {"id":10744,"tooltipId":63264,"title":"Wildhammer Stronghold","type":2,"max":1}    
    ]},
    {"id":1194,"tooltipId":797,"title":"Into the Nether", text:"Complete the Netherstorm storylines listed below.", "type":3,"max":1, icon:'achievement_zone_netherstorm_01',criteria:[
        {"id":10507,"tooltipId":63237,"title":"Socrethar","type":2,"max":1, alternateId:[10409]},
        {"id":10221,"tooltipId":63241,"title":"Building the X-52 Nether-Rocket","type":2,"max":1},
        {"id":10276,"tooltipId":63243,"title":"The Consortium","type":2,"max":1},
        {"id":10240,"tooltipId":63240,"title":"The Violet Tower","type":2,"max":1},
        {"id":10249,"tooltipId":63242,"title":"Protect Area 52!","type":2,"max":1},
        {"id":10439,"tooltipId":63659,"title":"Destroying the All-Devouring","type":2,"max":1}
    ]},
    {"id":1191,"tooltipId":800,"title":"Terror of Terokkar", text:"Complete the Terokkar Forest storylines listed below.","type":3,"max":1,icon:'achievement_zone_terrokar', criteria:[
        {"id":10879,"tooltipId":63081,"title":"The Skettis Offensive","type":2,"max":1},
        {"id":10915,"tooltipId":63088,"title":"Sha'tari Base Camp","type":2,"max":1},
        {"id":10042,"tooltipId":63108,"title":"Allerian Stronghold","type":2,"max":1},
        {"id":10881,"tooltipId":63083,"title":"Refugee Caravan","type":2,"max":1},
        {"id":9951,"tooltipId":63094,"title":"The Warden's Secret","type":2,"max":1},
    ]},
    {"id":1192,"tooltipId":28110,"title":"Nagrand Slam", text:"Complete the Nagrand storylines listed below.","type":3,"max":1, icon:'achievement_zone_nagrand_01', criteria:[
        {"id":9955,"tooltipId":63191,"title":"The Adventures of Corki","type":2,"max":1},
        {"id":9873,"tooltipId":63195,"title":"The Murkblood","type":2,"max":1},
        {"id":9852,"tooltipId":63201,"title":"The Ultimate Bloodsport","type":2,"max":1},
        {"id":9977,"tooltipId":63207,"title":"The Ring of Blood","type":2,"max":1},
        {"id":9933,"tooltipId":63193,"title":"Lantresor of the Blade","type":2,"max":1},
        {"id":10011,"tooltipId":63198,"title":"Threats to Nagrand","type":2,"max":1},
        {"id":9925,"tooltipId":63203,"title":"Encountering the Ethereals","type":2,"max":1},
        {"id":9853,"tooltipId":63209,"title":"Throne of the Elements","type":2,"max":1}
    ]},
    {"id":1193,"tooltipId":796,"title":"On the Blade's Edge", text:"Complete the Blade's Edge Mountains storylines listed below.","type":3,"max":1, icon:'achievement_zone_bladesedgemtns_01', criteria:[
        {"id":10504,"tooltipId":63158,"title":"Sylvanaar","type":2,"max":1},
        {"id":10806,"tooltipId":63163,"title":"The Gronn Threat","type":2,"max":1},
        {"id":10742,"tooltipId":63165,"title":"Reunion","type":2,"max":1},
        {"id":11078,"tooltipId":63167,"title":"Ogres of Ogri'la","type":2,"max":1},
        {"id":10671,"tooltipId":63162,"title":"Toshley's Station","type":2,"max":1},
        {"id":10505,"tooltipId":63164,"title":"Thunderlord Stronghold","type":2,"max":1},
        {"id":10867,"tooltipId":63166,"title":"The Mok'Nathal","type":2,"max":1},
        {"id":10748,"tooltipId":63168,"title":"Ruuan Weald","type":2,"max":1}    
    ]},
    {"id":1190,"tooltipId":798,"title":"Mysteries of the Marsh", text:"Complete the Zangarmarsh storylines listed below.","type":3,"max":1, icon:'achievement_zone_zangarmarsh', criteria:[
        {"id":9772,"tooltipId":62988,"title":"Swamprat Post","type":2,"max":1},
        {"id":10118,"tooltipId":62997,"title":"The Defense of Zabra'jin","type":2,"max":1},
        {"id":9783,"tooltipId":63002,"title":"Telredor","type":2,"max":1},
        {"id":9709,"tooltipId":63015,"title":"Don't Eat THOSE Mushrooms!","type":2,"max":1},
        {"id":9788,"tooltipId":63019,"title":"Saving the Sporeloks","type":2,"max":1},
        {"id":9904,"tooltipId":62992,"title":"Zabra'jin","type":2,"max":1},
        {"id":9803,"tooltipId":63000,"title":"Draenei Diplomacy","type":2,"max":1},
        {"id":9902,"tooltipId":63007,"title":"Orebor Harborage","type":2,"max":1},
        {"id":9732,"tooltipId":63017,"title":"Draining the Marsh","type":2,"max":1},
        {"id":9726,"tooltipId":63023,"title":"A Trip With the Sporelings","type":2,"max":1}
    ]},
    {"id":1189,"tooltipId":28107,"title":"To Hellfire and Back", text:"Complete the Hellfire Peninsula storylines listed below.","type":3,"max":1, icon:'achievement_zone_hellfirepeninsula_01', criteria:[
        {"id":10630,"tooltipId":62953,"title":"Green, But Not Orcs","type":2,"max":1},
        {"id":10397,"tooltipId":62959,"title":"Disrupt the Burning Legion","type":2,"max":1},
        {"id":9545,"tooltipId":62963,"title":"In Search of Sedai","type":2,"max":1},
        {"id":10937,"tooltipId":62965,"title":"Drill the Drillmaster","type":2,"max":1},
        {"id":10351,"tooltipId":62957,"title":"Cenarion Post","type":2,"max":1},
        {"id":10400,"tooltipId":62960,"title":"Overthrow the Overlord","type":2,"max":1},
        {"id":10935,"tooltipId":62964,"title":"The Exorcism of Colonel Jules","type":2,"max":1},
        {"id":9383,"tooltipId":62966,"title":"Temple of Telhamat","type":2,"max":1}
    ]},
]};

const exploreOutland={id:44, title: 'Outland Explorer', trackCriteria:true, text:'Explore the regions of Outland.', completed: false, accountCompleted:false,  icon:'achievements_zone_brokenshore', type:1, criteria:[
    {"id":863,"tooltipId":3341,"title":"Explore Zangarmarsh", text:"Explore Zangarmarsh, revealing the covered areas of the world map.", "type":3,"max":1, icon:'achievement_zone_zangarmarsh', criteria:[
        {"id":1648,"tooltipId":473,"title":"Quagg Ridge","type":3,"max":1},
        {"id":1649,"tooltipId":475,"title":"Telredor","type":3,"max":1},
        {"id":1612,"tooltipId":477,"title":"Feralfen Village","type":3,"max":1},
        {"id":1654,"tooltipId":479,"title":"Sporeggar","type":3,"max":1},
        {"id":1658,"tooltipId":481,"title":"The Spawning Glen","type":3,"max":1},
        {"id":1650,"tooltipId":483,"title":"The Dead Mire","type":3,"max":1},
        {"id":1610,"tooltipId":485,"title":"Ango'rosh Grounds","type":3,"max":1},
        {"id":1655,"tooltipId":487,"title":"Ango'rosh Stronghold","type":3,"max":1},
        {"id":1659,"tooltipId":489,"title":"Zabra'jin","type":3,"max":1},
        {"id":1651,"tooltipId":474,"title":"The Lagoon","type":3,"max":1},
        {"id":1611,"tooltipId":476,"title":"Cenarion Refuge","type":3,"max":1},
        {"id":1653,"tooltipId":478,"title":"Umbrafen Village","type":3,"max":1},
        {"id":1657,"tooltipId":480,"title":"Orebor Harborage","type":3,"max":1},
        {"id":1667,"tooltipId":482,"title":"Darkcrest Shore","type":3,"max":1},
        {"id":1652,"tooltipId":484,"title":"Twin Spire Ruins","type":3,"max":1},
        {"id":1647,"tooltipId":486,"title":"Marshlight Lake","type":3,"max":1},
        {"id":1656,"tooltipId":488,"title":"Bloodscale Grounds","type":3,"max":1},
        {"id":1613,"tooltipId":490,"title":"Hewn Bog","type":3,"max":1}    
    ]},
    {"id":843,"tooltipId":3343,"title":"Explore Netherstorm", text:"Explore Netherstorm, revealing the covered areas of the world map.","type":3,"max":1, icon:'achievement_zone_netherstorm_01', criteria:[
        {"id":1312,"tooltipId":3149,"title":"Manaforge Coruu","type":3,"max":1},
        {"id":1311,"tooltipId":3151,"title":"Manaforge B'naar","type":3,"max":1},
        {"id":1766,"tooltipId":3153,"title":"The Heap","type":3,"max":1},
        {"id":1775,"tooltipId":3155,"title":"The Stormspire","type":3,"max":1},
        {"id":1770,"tooltipId":3157,"title":"Kirin'Var Village","type":3,"max":1},
        {"id":1780,"tooltipId":3159,"title":"Forge Base: Oblivion","type":3,"max":1},
        {"id":1781,"tooltipId":3161,"title":"Eco-Dome Midrealm","type":3,"max":1},
        {"id":1310,"tooltipId":3163,"title":"Area 52","type":3,"max":1},
        {"id":1767,"tooltipId":3165,"title":"Arklon Ruins","type":3,"max":1},
        {"id":1772,"tooltipId":3167,"title":"Ruins of Enkaat","type":3,"max":1},
        {"id":1768,"tooltipId":3169,"title":"Celestial Ridge","type":3,"max":1},
        {"id":1762,"tooltipId":3150,"title":"Manaforge Ara","type":3,"max":1},
        {"id":1764,"tooltipId":3152,"title":"Ruins of Farahlon","type":3,"max":1},
        {"id":1773,"tooltipId":3154,"title":"Sunfury Hold","type":3,"max":1},
        {"id":1765,"tooltipId":3156,"title":"Tempest Keep","type":3,"max":1},
        {"id":1777,"tooltipId":3158,"title":"Eco-Dome Farfield","type":3,"max":1},
        {"id":1776,"tooltipId":3160,"title":"Gyro-Plank Bridge","type":3,"max":1},
        {"id":1779,"tooltipId":3162,"title":"Socrethar's Seat","type":3,"max":1},
        {"id":1763,"tooltipId":3164,"title":"Manaforge Ultris","type":3,"max":1},
        {"id":1313,"tooltipId":3166,"title":"Manaforge Duro","type":3,"max":1},
        {"id":1778,"tooltipId":3168,"title":"Ethereum Staging Grounds","type":3,"max":1},
        {"id":1771,"tooltipId":3170,"title":"Netherstone","type":3,"max":1}
    ]},
    {"id":862,"tooltipId":3345,"title":"Explore Hellfire Peninsula", text:"Explore Hellfire Peninsula, revealing the covered areas of the world map.","type":3,"max":1, icon:'achievement_zone_hellfirepeninsula_01', criteria:[
        {"id":1607,"tooltipId":4198,"title":"Falcon Watch","type":3,"max":1},
        {"id":1633,"tooltipId":4200,"title":"Throne of Kil'jaeden","type":3,"max":1},
        {"id":1634,"tooltipId":4202,"title":"Zeth'Gor","type":3,"max":1},
        {"id":1636,"tooltipId":4204,"title":"Fallen Sky Ridge","type":3,"max":1},
        {"id":1639,"tooltipId":4206,"title":"The Warp Fields","type":3,"max":1},
        {"id":1606,"tooltipId":4208,"title":"Expedition Armory","type":3,"max":1},
        {"id":1628,"tooltipId":4210,"title":"Ruins of Sha'naar","type":3,"max":1},
        {"id":1631,"tooltipId":4212,"title":"The Stair of Destiny","type":3,"max":1},
        {"id":1609,"tooltipId":4214,"title":"Honor Hold","type":3,"max":1},
        {"id":1626,"tooltipId":4199,"title":"Mag'har Post","type":3,"max":1},
        {"id":1632,"tooltipId":4201,"title":"Thrallmar","type":3,"max":1},
        {"id":1635,"tooltipId":4203,"title":"Den of Haal'esh","type":3,"max":1},
        {"id":1638,"tooltipId":4205,"title":"Void Ridge","type":3,"max":1},
        {"id":1629,"tooltipId":4207,"title":"Temple of Telhamat","type":3,"max":1},
        {"id":1641,"tooltipId":4209,"title":"Forge Camp: Mageddon","type":3,"max":1},
        {"id":1630,"tooltipId":4211,"title":"The Legion Front","type":3,"max":1},
        {"id":1608,"tooltipId":4213,"title":"Hellfire Citadel","type":3,"max":1},
        {"id":1627,"tooltipId":4215,"title":"Pools of Aggonar","type":3,"max":1}    
    ]},
    {"id":865,"tooltipId":3347,"title":"Explore Blade's Edge Mountains", text:"Explore Blade's Edge Mountains, revealing the covered areas of the world map.","type":3,"max":1, icon:'achievement_zone_bladesedgemtns_01', criteria:[
        {"id":1705,"tooltipId":1459,"title":"Thunderlord Stronghold","type":3,"max":1},
        {"id":1618,"tooltipId":1461,"title":"Bash'ir Landing","type":3,"max":1},
        {"id":1621,"tooltipId":1463,"title":"Bloodmaul Camp","type":3,"max":1},
        {"id":1704,"tooltipId":1465,"title":"Crystal Spine","type":3,"max":1},
        {"id":1708,"tooltipId":1467,"title":"Vortex Summit","type":3,"max":1},
        {"id":1697,"tooltipId":1469,"title":"Jagged Ridge","type":3,"max":1},
        {"id":1620,"tooltipId":1471,"title":"Bladespire Hold","type":3,"max":1},
        {"id":1700,"tooltipId":1473,"title":"Razor Ridge","type":3,"max":1},
        {"id":1690,"tooltipId":1475,"title":"Circle of Blood","type":3,"max":1},
        {"id":1692,"tooltipId":1477,"title":"Forge Camp: Anger","type":3,"max":1},
        {"id":1699,"tooltipId":1479,"title":"Raven's Wood","type":3,"max":1},
        {"id":1702,"tooltipId":1481,"title":"Skald","type":3,"max":1},
        {"id":1688,"tooltipId":1483,"title":"Bloodmaul Outpost","type":3,"max":1},
        {"id":1707,"tooltipId":1460,"title":"Vekhaar Stand","type":3,"max":1},
        {"id":1619,"tooltipId":1462,"title":"Bladed Gulch","type":3,"max":1},
        {"id":1701,"tooltipId":1464,"title":"Ruuan Weald","type":3,"max":1},
        {"id":1706,"tooltipId":1466,"title":"Veil Lashh","type":3,"max":1},
        {"id":1696,"tooltipId":1468,"title":"Gruul's Lair","type":3,"max":1},
        {"id":2238,"tooltipId":1470,"title":"Veil Ruuan","type":3,"max":1},
        {"id":1694,"tooltipId":1472,"title":"Forge Camp: Wrath","type":3,"max":1},
        {"id":1689,"tooltipId":1474,"title":"Broken Wilds","type":3,"max":1},
        {"id":1691,"tooltipId":1476,"title":"Death's Door","type":3,"max":1},
        {"id":1698,"tooltipId":1478,"title":"Mok'Nathal Village","type":3,"max":1},
        {"id":1703,"tooltipId":1480,"title":"Sylvanaar","type":3,"max":1},
        {"id":1695,"tooltipId":1482,"title":"Grishnath","type":3,"max":1},
        {"id":1693,"tooltipId":1484,"title":"Forge Camp: Terror","type":3,"max":1}    
    ]},
    {"id":864,"tooltipId":3342,"title":"Explore Shadowmoon Valley", text:"Explore Shadowmoon Valley, revealing the covered areas of the world map.","type":3,"max":1, icon:'achievement_zone_outland_01', criteria:[
        {"id":1614,"tooltipId":7066,"title":"Coilskar Point","type":3,"max":1},
        {"id":1617,"tooltipId":7068,"title":"Netherwing Ledge","type":3,"max":1},
        {"id":1671,"tooltipId":7070,"title":"The Hand of Gul'dan","type":3,"max":1},
        {"id":1616,"tooltipId":7072,"title":"Legion Hold","type":3,"max":1},
        {"id":1674,"tooltipId":7074,"title":"Altar of Sha'tar","type":3,"max":1},
        {"id":1670,"tooltipId":7076,"title":"The Deathforge","type":3,"max":1},
        {"id":1673,"tooltipId":7078,"title":"Wildhammer Stronghold","type":3,"max":1},
        {"id":1615,"tooltipId":7067,"title":"Eclipse Point","type":3,"max":1},
        {"id":1668,"tooltipId":7069,"title":"Shadowmoon Village","type":3,"max":1},
        {"id":1679,"tooltipId":7071,"title":"Netherwing Fields","type":3,"max":1},
        {"id":1669,"tooltipId":7073,"title":"The Black Temple","type":3,"max":1},
        {"id":1675,"tooltipId":7075,"title":"Illidari Point","type":3,"max":1},
        {"id":1672,"tooltipId":7077,"title":"Warden's Cage","type":3,"max":1}    
    ]},
    {"id":867,"tooltipId":3344,"title":"Explore Terokkar Forest", text:"Explore Terokkar Forest, revealing the covered areas of the world map.","type":3,"max":1, icon:'achievement_zone_terrokar', criteria:[
        {"id":1605,"tooltipId":7043,"title":"Firewing Point","type":3,"max":1},
        {"id":1731,"tooltipId":7045,"title":"Stonebreaker Hold","type":3,"max":1},
        {"id":1733,"tooltipId":7047,"title":"Shattrath City","type":3,"max":1},
        {"id":1740,"tooltipId":7049,"title":"Refugee Caravan","type":3,"max":1},
        {"id":1603,"tooltipId":7051,"title":"Bleeding Hollow Ruins","type":3,"max":1},
        {"id":1735,"tooltipId":7053,"title":"The Barrier Hills","type":3,"max":1},
        {"id":1745,"tooltipId":7055,"title":"Veil Rhaze","type":3,"max":1},
        {"id":1742,"tooltipId":7057,"title":"Shadow Tomb","type":3,"max":1},
        {"id":1739,"tooltipId":7059,"title":"Carrion Hill","type":3,"max":1},
        {"id":1743,"tooltipId":7061,"title":"Derelict Caravan","type":3,"max":1},
        {"id":1741,"tooltipId":7063,"title":"Ring of Observance","type":3,"max":1},
        {"id":1747,"tooltipId":7044,"title":"Skettis","type":3,"max":1},
        {"id":1732,"tooltipId":7046,"title":"Tuurem","type":3,"max":1},
        {"id":1737,"tooltipId":7048,"title":"Bonechewer Ruins","type":3,"max":1},
        {"id":1604,"tooltipId":7050,"title":"Cenarion Thicket","type":3,"max":1},
        {"id":1734,"tooltipId":7052,"title":"Raastok Glade","type":3,"max":1},
        {"id":1738,"tooltipId":7054,"title":"Auchenai Grounds","type":3,"max":1},
        {"id":1746,"tooltipId":7056,"title":"Writhing Mound","type":3,"max":1},
        {"id":1729,"tooltipId":7058,"title":"Grangol'var Village","type":3,"max":1},
        {"id":4940,"tooltipId":7060,"title":"Allerian Stronghold","type":3,"max":1},
        {"id":1736,"tooltipId":7062,"title":"Razorthorn Shelf","type":3,"max":1}    
    ]},
    {"id":866,"tooltipId":3346,"title":"Explore Nagrand", text:"Explore Nagrand, revealing the covered areas of the world map.","type":2,"max":1, icon:'achievement_zone_nagrand_01', criteria:[
        {"id":1714,"tooltipId":8009,"title":"Spirit Fields","type":3,"max":1},
        {"id":1622,"tooltipId":8011,"title":"Forge Camp: Fear","type":3,"max":1},
        {"id":1624,"tooltipId":8013,"title":"Halaa","type":3,"max":1},
        {"id":1717,"tooltipId":8015,"title":"The Ring of Trials","type":3,"max":1},
        {"id":1721,"tooltipId":8017,"title":"Clan Watch","type":3,"max":1},
        {"id":1727,"tooltipId":8019,"title":"Zangar Ridge","type":3,"max":1},
        {"id":1725,"tooltipId":8021,"title":"Windyreed Pass","type":3,"max":1},
        {"id":1718,"tooltipId":8023,"title":"Throne of the Elements","type":3,"max":1},
        {"id":1720,"tooltipId":8025,"title":"Burning Blade Ruins","type":3,"max":1},
        {"id":1724,"tooltipId":8027,"title":"The Twilight Ridge","type":3,"max":1},
        {"id":1715,"tooltipId":8010,"title":"Sunspring Post","type":3,"max":1},
        {"id":1623,"tooltipId":8012,"title":"Garadar","type":3,"max":1},
        {"id":1713,"tooltipId":8014,"title":"Laughing Skull Ruins","type":3,"max":1},
        {"id":1719,"tooltipId":8016,"title":"Warmaul Hill","type":3,"max":1},
        {"id":1722,"tooltipId":8018,"title":"Forge Camp: Hate","type":3,"max":1},
        {"id":1726,"tooltipId":8020,"title":"Windyreed Village","type":3,"max":1},
        {"id":1716,"tooltipId":8022,"title":"Telaar","type":3,"max":1},
        {"id":1625,"tooltipId":8024,"title":"Kil'sorrow Fortress","type":3,"max":1},
        {"id":1723,"tooltipId":8026,"title":"Southwind Cleft","type":3,"max":1}    
    ]},
]};

const exploreEasternKingdoms={id:42, title: 'Eastern Kingdoms Explorer', trackCriteria:true, text:'Explore the regions of Eastern Kingdoms.', completed: false, accountCompleted:false,  icon:'achievements_zone_brokenshore', type:1, criteria:[
    {"id":779,"tooltipId":2403,"title":"Explore Loch Modan","text":"Explore Loch Modan, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1181,"tooltipId":1101,"title":"Grizzlepaw Ridge","type":3,"max":1},{"id":1176,"tooltipId":1103,"title":"The Loch","type":3,"max":1},{"id":1183,"tooltipId":1105,"title":"Stonesplinter Valley","type":3,"max":1},{"id":1178,"tooltipId":1107,"title":"North Gate Pass","type":3,"max":1},{"id":1180,"tooltipId":1109,"title":"Ironband's Excavation Site","type":3,"max":1},{"id":1177,"tooltipId":1111,"title":"Silver Stream Mine","type":3,"max":1},{"id":1175,"tooltipId":1102,"title":"Mo'grosh Stronghold","type":3,"max":1},{"id":1182,"tooltipId":1104,"title":"Thelsamar","type":3,"max":1},{"id":1184,"tooltipId":1106,"title":"Valley of Kings","type":3,"max":1},{"id":1179,"tooltipId":1108,"title":"The Farstrider Lodge","type":3,"max":1},{"id":1174,"tooltipId":1110,"title":"Stonewrought Dam","type":3,"max":1}  
    ]},
    {"id":858,"tooltipId":2405,"title":"Explore Ghostlands","text":"Explore Ghostlands, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1548,"tooltipId":3575,"title":"Thalassian Pass","type":3,"max":1},{"id":1540,"tooltipId":3577,"title":"Howling Ziggurat","type":3,"max":1},{"id":1546,"tooltipId":3579,"title":"Elrendar Crossing","type":3,"max":1},{"id":1504,"tooltipId":3581,"title":"Tranquillien","type":3,"max":1},{"id":1537,"tooltipId":3583,"title":"Sanctum of the Sun","type":3,"max":1},{"id":1507,"tooltipId":3585,"title":"Windrunner Village","type":3,"max":1},{"id":1505,"tooltipId":3587,"title":"Suncrown Village","type":3,"max":1},{"id":1543,"tooltipId":3589,"title":"Amani Pass","type":3,"max":1},{"id":1542,"tooltipId":3576,"title":"Zeb'Nowa","type":3,"max":1},{"id":1545,"tooltipId":3578,"title":"Bleeding Ziggurat","type":3,"max":1},{"id":1539,"tooltipId":3580,"title":"Farstrider Enclave","type":3,"max":1},{"id":1536,"tooltipId":3582,"title":"Sanctum of the Moon","type":3,"max":1},{"id":1538,"tooltipId":3584,"title":"Dawnstar Spire","type":3,"max":1},{"id":1506,"tooltipId":3586,"title":"Goldenmist Village","type":3,"max":1},{"id":1541,"tooltipId":3588,"title":"Deatholme","type":3,"max":1},{"id":1544,"tooltipId":3590,"title":"Windrunner Spire","type":3,"max":1}    
    ]},
    {"id":776,"tooltipId":2407,"title":"Explore Elwynn Forest","text":"Explore Elwynn Forest, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1156,"tooltipId":1677,"title":"Crystal Lake","type":3,"max":1},{"id":1153,"tooltipId":1679,"title":"Brackwell Pumpkin Patch","type":3,"max":1},{"id":1147,"tooltipId":1681,"title":"Goldshire","type":3,"max":1},{"id":1154,"tooltipId":1683,"title":"Eastvale Logging Camp","type":3,"max":1},{"id":1146,"tooltipId":1685,"title":"Northshire Valley","type":3,"max":1},{"id":14147,"tooltipId":1687,"title":"Westbrook Garrison","type":3,"max":1},{"id":1157,"tooltipId":1678,"title":"Stone Cairn Lake","type":3,"max":1},{"id":1152,"tooltipId":1680,"title":"Tower of Azora","type":3,"max":1},{"id":1148,"tooltipId":1682,"title":"Fargodeep Mine","type":3,"max":1},{"id":1155,"tooltipId":1684,"title":"Ridgepoint Tower","type":3,"max":1},{"id":1151,"tooltipId":1686,"title":"Jerod's Landing","type":3,"max":1}    ]},
    {"id":802,"tooltipId":2409,"title":"Explore Westfall","text":"Explore Westfall, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1249,"tooltipId":7441,"title":"Saldean's Farm","type":3,"max":1},{"id":1256,"tooltipId":7443,"title":"Moonbrook","type":3,"max":1},{"id":1248,"tooltipId":7445,"title":"Sentinel Hill","type":3,"max":1},{"id":1252,"tooltipId":7447,"title":"Jangolode Mine","type":3,"max":1},{"id":1261,"tooltipId":7449,"title":"The Dust Plains","type":3,"max":1},{"id":1258,"tooltipId":7451,"title":"Demont's Place","type":3,"max":1},{"id":14156,"tooltipId":7453,"title":"The Raging Chasm","type":3,"max":1},{"id":1260,"tooltipId":7442,"title":"The Dagger Hills","type":3,"max":1},{"id":1255,"tooltipId":7444,"title":"The Dead Acre","type":3,"max":1},{"id":1251,"tooltipId":7446,"title":"The Jansen Stead","type":3,"max":1},{"id":1257,"tooltipId":7448,"title":"Alexston Farmstead","type":3,"max":1},{"id":1253,"tooltipId":7450,"title":"The Molsen Farm","type":3,"max":1},{"id":1250,"tooltipId":7452,"title":"Furlbrow's Pumpkin Farm","type":3,"max":1}    ]},
    {"id":761,"tooltipId":2411,"title":"Explore Arathi Highlands","text":"Explore Arathi Highlands, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":964,"tooltipId":3504,"title":"Galen's Fall","type":3,"max":1},{"id":966,"tooltipId":3506,"title":"Faldir's Cove","type":3,"max":1},{"id":965,"tooltipId":3508,"title":"Stromgarde Keep","type":3,"max":1},{"id":971,"tooltipId":3510,"title":"Circle of Outer Binding","type":3,"max":1},{"id":963,"tooltipId":3512,"title":"Northfold Manor","type":3,"max":1},{"id":967,"tooltipId":3514,"title":"Circle of Inner Binding","type":3,"max":1},{"id":972,"tooltipId":3516,"title":"Witherbark Village","type":3,"max":1},{"id":974,"tooltipId":3518,"title":"Dabyrie's Farmstead","type":3,"max":1},{"id":969,"tooltipId":3505,"title":"Boulderfist Hall","type":3,"max":1},{"id":970,"tooltipId":3507,"title":"Refuge Pointe","type":3,"max":1},{"id":975,"tooltipId":3509,"title":"Circle of East Binding","type":3,"max":1},{"id":962,"tooltipId":3511,"title":"Circle of West Binding","type":3,"max":1},{"id":976,"tooltipId":3513,"title":"Hammerfall","type":3,"max":1},{"id":968,"tooltipId":3515,"title":"Thandol Span","type":3,"max":1},{"id":973,"tooltipId":3517,"title":"Go'Shek Farm","type":3,"max":1},{"id":2044,"tooltipId":3519,"title":"Boulder'gor","type":3,"max":1}    ]},
    {"id":778,"tooltipId":2413,"title":"Explore Duskwood","text":"Explore Duskwood, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1171,"tooltipId":1690,"title":"Darkshire","type":3,"max":1},{"id":1167,"tooltipId":1692,"title":"The Yorgen Farmstead","type":3,"max":1},{"id":1170,"tooltipId":1694,"title":"Tranquil Gardens Cemetery","type":3,"max":1},{"id":1162,"tooltipId":1696,"title":"Addle's Stead","type":3,"max":1},{"id":1172,"tooltipId":1698,"title":"Manor Mistmantle","type":3,"max":1},{"id":1163,"tooltipId":1700,"title":"Raven Hill","type":3,"max":1},{"id":1169,"tooltipId":1702,"title":"The Rotting Orchard","type":3,"max":1},{"id":1165,"tooltipId":1691,"title":"Vul'Gol Ogre Mound","type":3,"max":1},{"id":1168,"tooltipId":1693,"title":"Brightwood Grove","type":3,"max":1},{"id":1173,"tooltipId":1695,"title":"The Darkened Bank","type":3,"max":1},{"id":1161,"tooltipId":1697,"title":"The Hushed Bank","type":3,"max":1},{"id":1166,"tooltipId":1699,"title":"Twilight Grove","type":3,"max":1},{"id":1164,"tooltipId":1701,"title":"Raven Hill Cemetery","type":3,"max":1}    ]},
    {"id":859,"tooltipId":2415,"title":"Explore Eversong Woods","text":"Explore Eversong Woods, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1515,"tooltipId":4523,"title":"Stillwhisper Pond","type":3,"max":1},{"id":1513,"tooltipId":4525,"title":"East Sanctum","type":3,"max":1},{"id":1517,"tooltipId":4527,"title":"Fairbreeze Village","type":3,"max":1},{"id":1525,"tooltipId":4529,"title":"Lake Elrendar","type":3,"max":1},{"id":1526,"tooltipId":4531,"title":"Runestone Falithas","type":3,"max":1},{"id":1532,"tooltipId":4533,"title":"Zeb'Watha","type":3,"max":1},{"id":1528,"tooltipId":4535,"title":"Saltheril's Haven","type":3,"max":1},{"id":1531,"tooltipId":4537,"title":"Tranquil Shore","type":3,"max":1},{"id":1520,"tooltipId":4539,"title":"The Scorched Grove","type":3,"max":1},{"id":1522,"tooltipId":4541,"title":"Azurebreeze Coast","type":3,"max":1},{"id":1509,"tooltipId":4543,"title":"Ruins of Silvermoon","type":3,"max":1},{"id":1514,"tooltipId":4545,"title":"Farstrider Retreat","type":3,"max":1},{"id":1529,"tooltipId":4547,"title":"Golden Strand","type":3,"max":1},{"id":1511,"tooltipId":4524,"title":"Sunsail Anchorage","type":3,"max":1},{"id":1516,"tooltipId":4526,"title":"Duskwither Grounds","type":3,"max":1},{"id":1521,"tooltipId":4528,"title":"Silvermoon City","type":3,"max":1},{"id":1519,"tooltipId":4530,"title":"Tor'Watha","type":3,"max":1},{"id":1527,"tooltipId":4532,"title":"Runestone Shan'dor","type":3,"max":1},{"id":1523,"tooltipId":4534,"title":"Elrendar Falls","type":3,"max":1},{"id":1510,"tooltipId":4536,"title":"West Sanctum","type":3,"max":1},{"id":1508,"tooltipId":4538,"title":"Sunstrider Isle","type":3,"max":1},{"id":1518,"tooltipId":4540,"title":"The Living Wood","type":3,"max":1},{"id":1530,"tooltipId":4542,"title":"Thuron's Livery","type":3,"max":1},{"id":1512,"tooltipId":4544,"title":"North Sanctum","type":3,"max":1},{"id":1524,"tooltipId":4546,"title":"Goldenbough Pass","type":3,"max":1}]},    
    {"id":627,"tooltipId":2417,"title":"Explore Dun Morogh","text":"Explore Dun Morogh, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":508,"tooltipId":5682,"title":"Amberstill Ranch","type":3,"max":1},{"id":519,"tooltipId":5684,"title":"Gates of Ironforge","type":3,"max":1},{"id":510,"tooltipId":5686,"title":"Gol'Bolar Quarry","type":3,"max":1},{"id":512,"tooltipId":5688,"title":"Frostmane Hold","type":3,"max":1},{"id":505,"tooltipId":5690,"title":"Kharanos","type":3,"max":1},{"id":502,"tooltipId":5692,"title":"Coldridge Pass","type":3,"max":1},{"id":14149,"tooltipId":5694,"title":"Frostmane Front","type":3,"max":1},{"id":14150,"tooltipId":5696,"title":"New Tinkertown","type":3,"max":1},{"id":509,"tooltipId":5683,"title":"Helm's Bed Lake","type":3,"max":1},{"id":504,"tooltipId":5685,"title":"Shimmer Ridge","type":3,"max":1},{"id":511,"tooltipId":5687,"title":"North Gate Outpost","type":3,"max":1},{"id":517,"tooltipId":5689,"title":"Iceflow Lake","type":3,"max":1},{"id":507,"tooltipId":5691,"title":"The Tundrid Hills","type":3,"max":1},{"id":14148,"tooltipId":5693,"title":"Coldridge Valley","type":3,"max":1},{"id":14151,"tooltipId":5695,"title":"Ironforge Airfield","type":3,"max":1}    ]},
    {"id":777,"tooltipId":2419,"title":"Explore Deadwind Pass","text":"Explore Deadwind Pass, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1158,"tooltipId":4483,"title":"Deadman's Crossing","type":3,"max":1},{"id":1160,"tooltipId":4485,"title":"Karazhan","type":3,"max":1},{"id":1159,"tooltipId":4484,"title":"The Vice","type":3,"max":1}    ]},
    {"id":768,"tooltipId":2421,"title":"Explore Tirisfal Glades","text":"Explore Tirisfal Glades, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1051,"tooltipId":8353,"title":"Venomweb Vale","type":3,"max":1},{"id":1038,"tooltipId":8355,"title":"Solliden Farmstead","type":3,"max":1},{"id":1042,"tooltipId":8357,"title":"Cold Hearth Manor","type":3,"max":1},{"id":1047,"tooltipId":8359,"title":"Balnir Farmstead","type":3,"max":1},{"id":1041,"tooltipId":8361,"title":"Nightmare Vale","type":3,"max":1},{"id":1039,"tooltipId":8363,"title":"Agamand Mills","type":3,"max":1},{"id":1045,"tooltipId":8365,"title":"Ruins of Lordaeron","type":3,"max":1},{"id":14154,"tooltipId":8367,"title":"The Bulwark","type":3,"max":1},{"id":1049,"tooltipId":8354,"title":"Scarlet Watch Post","type":3,"max":1},{"id":1046,"tooltipId":8356,"title":"Brightwater Lake","type":3,"max":1},{"id":1044,"tooltipId":8358,"title":"Garren's Haunt","type":3,"max":1},{"id":1048,"tooltipId":8360,"title":"Crusader Outpost","type":3,"max":1},{"id":1037,"tooltipId":8362,"title":"Deathknell","type":3,"max":1},{"id":1043,"tooltipId":8364,"title":"Brill","type":3,"max":1},{"id":14153,"tooltipId":8366,"title":"Scarlet Monastery Entrance","type":3,"max":1},{"id":14155,"tooltipId":8368,"title":"Calston Estate","type":3,"max":1}
    ]},
    {"id":774,"tooltipId":2423,"title":"Explore Searing Gorge","text":"Explore Searing Gorge, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1134,"tooltipId":4855,"title":"Grimesilt Dig Site","type":3,"max":1},{"id":1131,"tooltipId":4857,"title":"Blackchar Cave","type":3,"max":1},{"id":1129,"tooltipId":4859,"title":"Firewatch Ridge","type":3,"max":1},{"id":15121,"tooltipId":4861,"title":"Blackrock Mountain","type":3,"max":1},{"id":1130,"tooltipId":4856,"title":"The Cauldron","type":3,"max":1},{"id":1132,"tooltipId":4858,"title":"The Sea of Cinders","type":3,"max":1},{"id":1135,"tooltipId":4860,"title":"Dustfire Valley","type":3,"max":1},{"id":15120,"tooltipId":4862,"title":"Thorium Point","type":3,"max":1}    ]},
    {"id":782,"tooltipId":2425,"title":"Explore Swamp of Sorrows","text":"Explore Swamp of Sorrows, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1228,"tooltipId":1797,"title":"Stonard","type":3,"max":1},{"id":1231,"tooltipId":1799,"title":"Sorrowmurk","type":3,"max":1},{"id":1232,"tooltipId":1801,"title":"Bogpaddle","type":3,"max":1},{"id":1225,"tooltipId":1803,"title":"The Harborage","type":3,"max":1},{"id":1229,"tooltipId":1805,"title":"Pool of Tears","type":3,"max":1},{"id":14164,"tooltipId":1807,"title":"Marshtide Watch","type":3,"max":1},{"id":1230,"tooltipId":1798,"title":"Stagalbog","type":3,"max":1},{"id":1233,"tooltipId":1800,"title":"Misty Reed Strand","type":3,"max":1},{"id":1224,"tooltipId":1802,"title":"Misty Valley","type":3,"max":1},{"id":1226,"tooltipId":1804,"title":"Splinterspear Junction","type":3,"max":1},{"id":1227,"tooltipId":1806,"title":"The Shifting Mire","type":3,"max":1},{"id":14163,"tooltipId":1808,"title":"Purespring Cavern","type":3,"max":1}    ]},
    {"id":770,"tooltipId":2427,"title":"Explore Western Plaguelands","text":"Explore Western Plaguelands, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1073,"tooltipId":4018,"title":"Felstone Field","type":3,"max":1},{"id":1071,"tooltipId":4020,"title":"Andorhal","type":3,"max":1},{"id":1074,"tooltipId":4022,"title":"Dalson's Farm","type":3,"max":1},{"id":1077,"tooltipId":4024,"title":"Hearthglen","type":3,"max":1},{"id":1068,"tooltipId":4026,"title":"Darrowmere Lake","type":3,"max":1},{"id":1075,"tooltipId":4028,"title":"The Writhing Haunt","type":3,"max":1},{"id":1072,"tooltipId":4030,"title":"The Bulwark","type":3,"max":1},{"id":1079,"tooltipId":4019,"title":"The Weeping Cave","type":3,"max":1},{"id":1080,"tooltipId":4021,"title":"Thondroril River","type":3,"max":1},{"id":1078,"tooltipId":4023,"title":"Gahrron's Withering","type":3,"max":1},{"id":1070,"tooltipId":4025,"title":"Sorrow Hill","type":3,"max":1},{"id":1069,"tooltipId":4027,"title":"Caer Darrow","type":3,"max":1},{"id":1076,"tooltipId":4029,"title":"Northridge Lumber Camp","type":3,"max":1},{"id":14170,"tooltipId":4031,"title":"Redpine Dell","type":3,"max":1}    ]},
    {"id":780,"tooltipId":2404,"title":"Explore Redridge Mountains","text":"Explore Redridge Mountains, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1194,"tooltipId":6911,"title":"Stonewatch Keep","type":3,"max":1},{"id":1185,"tooltipId":6913,"title":"Lakeshire","type":3,"max":1},{"id":1190,"tooltipId":6915,"title":"Render's Camp","type":3,"max":1},{"id":1188,"tooltipId":6917,"title":"Lake Everstill","type":3,"max":1},{"id":1193,"tooltipId":6919,"title":"Render's Valley","type":3,"max":1},{"id":1189,"tooltipId":6921,"title":"Redridge Canyons","type":3,"max":1},{"id":14161,"tooltipId":6923,"title":"Shalewind Canyon","type":3,"max":1},{"id":1195,"tooltipId":6912,"title":"Galardell Valley","type":3,"max":1},{"id":1186,"tooltipId":6914,"title":"Three Corners","type":3,"max":1},{"id":1191,"tooltipId":6916,"title":"Alther's Mill","type":3,"max":1},{"id":1192,"tooltipId":6918,"title":"Stonewatch Falls","type":3,"max":1},{"id":1187,"tooltipId":6920,"title":"Lakeridge Highway","type":3,"max":1},{"id":14162,"tooltipId":6922,"title":"Camp Everstill","type":3,"max":1}    ]},
    {"id":775,"tooltipId":2406,"title":"Explore Burning Steppes","text":"Explore Burning Steppes, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1138,"tooltipId":4984,"title":"Terror Wing Path","type":3,"max":1},{"id":1141,"tooltipId":4986,"title":"Black Tooth Hovel","type":3,"max":1},{"id":1145,"tooltipId":4988,"title":"Blackrock Mountain","type":3,"max":1},{"id":1137,"tooltipId":4990,"title":"Morgan's Vigil","type":3,"max":1},{"id":1140,"tooltipId":4992,"title":"Ruins of Thaurissan","type":3,"max":1},{"id":1139,"tooltipId":4985,"title":"Blackrock Pass","type":3,"max":1},{"id":1144,"tooltipId":4987,"title":"Altar of Storms","type":3,"max":1},{"id":1136,"tooltipId":4989,"title":"Dreadmaul Rock","type":3,"max":1},{"id":1143,"tooltipId":4991,"title":"The Whelping Downs","type":3,"max":1},{"id":1142,"tooltipId":4993,"title":"Blackrock Stronghold","type":3,"max":1}    ]},
    {"id":781,"tooltipId":2408,"title":"Explore Northern Stranglethorn","text":"Explore Northern Stranglethorn, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1199,"tooltipId":1779,"title":"Rebel Camp","type":3,"max":1},{"id":1212,"tooltipId":1781,"title":"Mizjah Ruins","type":3,"max":1},{"id":1197,"tooltipId":1783,"title":"Nesingwary's Expedition","type":3,"max":1},{"id":1218,"tooltipId":1785,"title":"The Vile Reef","type":3,"max":1},{"id":1215,"tooltipId":1787,"title":"Lake Nazferiti","type":3,"max":1},{"id":1200,"tooltipId":1789,"title":"Kurzen's Compound","type":3,"max":1},{"id":14062,"tooltipId":1791,"title":"Balia'mah Ruins","type":3,"max":1},{"id":14066,"tooltipId":1793,"title":"Zuuldaia Ruins","type":3,"max":1},{"id":1220,"tooltipId":1780,"title":"Ruins of Zul'Kunda","type":3,"max":1},{"id":1198,"tooltipId":1782,"title":"Grom'gol Base Camp","type":3,"max":1},{"id":1217,"tooltipId":1784,"title":"Bal'lal Ruins","type":3,"max":1},{"id":1222,"tooltipId":1786,"title":"Zul'Gurub","type":3,"max":1},{"id":1216,"tooltipId":1788,"title":"Kal'ai Ruins","type":3,"max":1},{"id":1213,"tooltipId":1790,"title":"Mosh'Ogg Ogre Mound","type":3,"max":1},{"id":14063,"tooltipId":1792,"title":"Bambala","type":3,"max":1},{"id":14064,"tooltipId":1794,"title":"Fort Livingston","type":3,"max":1}    ]},
    {"id":841,"tooltipId":2410,"title":"Explore Wetlands","text":"Explore Wetlands, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1264,"tooltipId":6357,"title":"Bluegill Marsh","type":3,"max":1},{"id":1263,"tooltipId":6359,"title":"Black Channel Marsh","type":3,"max":1},{"id":1267,"tooltipId":6361,"title":"Saltspray Glen","type":3,"max":1},{"id":1266,"tooltipId":6363,"title":"Sundown Marsh","type":3,"max":1},{"id":1273,"tooltipId":6365,"title":"Mosshide Fen","type":3,"max":1},{"id":1262,"tooltipId":6367,"title":"Menethil Harbor","type":3,"max":1},{"id":14157,"tooltipId":6369,"title":"Dun Algaz","type":3,"max":1},{"id":1271,"tooltipId":6371,"title":"Thelgen Rock","type":3,"max":1},{"id":1270,"tooltipId":6358,"title":"Angerfang Encampment","type":3,"max":1},{"id":1265,"tooltipId":6360,"title":"Whelgar's Excavation Site","type":3,"max":1},{"id":1268,"tooltipId":6362,"title":"Ironbeard's Tomb","type":3,"max":1},{"id":1269,"tooltipId":6364,"title":"Dun Modr","type":3,"max":1},{"id":1275,"tooltipId":6366,"title":"Raptor Ridge","type":3,"max":1},{"id":1274,"tooltipId":6368,"title":"Direforge Hill","type":3,"max":1},{"id":1272,"tooltipId":6370,"title":"Greenwarden's Grove","type":3,"max":1},{"id":14158,"tooltipId":6372,"title":"Slabchisel's Survey","type":3,"max":1}    ]},
    {"id":868,"tooltipId":2412,"title":"Explore Isle of Quel'Danas","text":"Explore Isle of Quel'Danas, revealing the covered areas of the world map.","type":3,"max":1},
    {"id":771,"tooltipId":2414,"title":"Explore Eastern Plaguelands","text":"Explore Eastern Plaguelands, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1086,"tooltipId":3293,"title":"Darrowshire","type":3,"max":1},{"id":1097,"tooltipId":3295,"title":"Zul'Mashar","type":3,"max":1},{"id":1088,"tooltipId":3297,"title":"Corin's Crossing","type":3,"max":1},{"id":1100,"tooltipId":3299,"title":"Terrordale","type":3,"max":1},{"id":1085,"tooltipId":3301,"title":"The Fungal Vale","type":3,"max":1},{"id":1093,"tooltipId":3303,"title":"The Noxious Glade","type":3,"max":1},{"id":1083,"tooltipId":3305,"title":"The Undercroft","type":3,"max":1},{"id":1096,"tooltipId":3307,"title":"Northdale","type":3,"max":1},{"id":1090,"tooltipId":3309,"title":"Tyr's Hand","type":3,"max":1},{"id":1099,"tooltipId":3311,"title":"Quel'Lithien Lodge","type":3,"max":1},{"id":1095,"tooltipId":3313,"title":"Blackwood Lake","type":3,"max":1},{"id":1082,"tooltipId":3315,"title":"The Marris Stead","type":3,"max":1},{"id":1092,"tooltipId":3294,"title":"The Infectis Scar","type":3,"max":1},{"id":1087,"tooltipId":3296,"title":"Pestilent Scar","type":3,"max":1},{"id":1101,"tooltipId":3298,"title":"Plaguewood","type":3,"max":1},{"id":1084,"tooltipId":3300,"title":"Crown Guard Tower","type":3,"max":1},{"id":1089,"tooltipId":3302,"title":"Lake Mereldar","type":3,"max":1},{"id":1081,"tooltipId":3304,"title":"Thondroril River","type":3,"max":1},{"id":1094,"tooltipId":3306,"title":"Eastwall Tower","type":3,"max":1},{"id":1098,"tooltipId":3308,"title":"Northpass Tower","type":3,"max":1},{"id":1091,"tooltipId":3310,"title":"Light's Hope Chapel","type":3,"max":1},{"id":1102,"tooltipId":3312,"title":"Stratholme","type":3,"max":1},{"id":8749,"tooltipId":3314,"title":"Ruins of the Scarlet Enclave","type":3,"max":1}
    ]},
    {"id":766,"tooltipId":2416,"title":"Explore Blasted Lands","text":"Explore Blasted Lands, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1031,"tooltipId":6332,"title":"Serpent's Coil","type":3,"max":1},{"id":1033,"tooltipId":6334,"title":"Altar of Storms","type":3,"max":1},{"id":1034,"tooltipId":6336,"title":"Dreadmaul Post","type":3,"max":1},{"id":1030,"tooltipId":6338,"title":"Nethergarde Keep","type":3,"max":1},{"id":14165,"tooltipId":6340,"title":"Shattershore","type":3,"max":1},{"id":14167,"tooltipId":6342,"title":"Surwich","type":3,"max":1},{"id":14169,"tooltipId":6344,"title":"The Tainted Forest","type":3,"max":1},{"id":1029,"tooltipId":6333,"title":"Nethergarde Supply Camps","type":3,"max":1},{"id":1032,"tooltipId":6335,"title":"The Dark Portal","type":3,"max":1},{"id":1035,"tooltipId":6337,"title":"The Tainted Scar","type":3,"max":1},{"id":1036,"tooltipId":6339,"title":"Rise of the Defiler","type":3,"max":1},{"id":14166,"tooltipId":6341,"title":"Sunveil Excursion","type":3,"max":1},{"id":1028,"tooltipId":6343,"title":"Dreadmaul Hold","type":3,"max":1},{"id":14168,"tooltipId":6345,"title":"The Red Reaches","type":3,"max":1}    
    ]},
    {"id":4995,"tooltipId":2418,"title":"Explore Cape of Stranglethorn","text":"Explore Cape of Stranglethorn, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":14050,"tooltipId":15258,"title":"Booty Bay","type":3,"max":1},{"id":14052,"tooltipId":15260,"title":"Gurubashi Arena","type":3,"max":1},{"id":14054,"tooltipId":15262,"title":"Jaquero Isle","type":3,"max":1},{"id":14061,"tooltipId":15264,"title":"The Wild Shore","type":3,"max":1},{"id":14056,"tooltipId":15266,"title":"Nek'mani Wellspring","type":3,"max":1},{"id":14051,"tooltipId":15259,"title":"Crystalvein Mine","type":3,"max":1},{"id":14053,"tooltipId":15261,"title":"Hardwrench Hideaway","type":3,"max":1},{"id":14058,"tooltipId":15263,"title":"Ruins of Jubuwal","type":3,"max":1},{"id":14055,"tooltipId":15265,"title":"Mistvale Valley","type":3,"max":1},{"id":14057,"tooltipId":15267,"title":"Ruins of Aboraz","type":3,"max":1}    ]},
    {"id":772,"tooltipId":2420,"title":"Explore Hillsbrad Foothills","text":"Explore Hillsbrad Foothills, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1105,"tooltipId":3265,"title":"Crushridge Hold","type":3,"max":1},{"id":1107,"tooltipId":3267,"title":"Dandred's Fold","type":3,"max":1},{"id":1111,"tooltipId":3269,"title":"Gallows' Corner","type":3,"max":1},{"id":1112,"tooltipId":3271,"title":"Gavin's Naze","type":3,"max":1},{"id":1106,"tooltipId":3273,"title":"Dalaran Crater","type":3,"max":1},{"id":1114,"tooltipId":3275,"title":"The Sludge Fields","type":3,"max":1},{"id":15109,"tooltipId":3277,"title":"Purgation Isle","type":3,"max":1},{"id":15115,"tooltipId":3279,"title":"Strahnbrad","type":3,"max":1},{"id":15111,"tooltipId":3281,"title":"Slaughter Hollow","type":3,"max":1},{"id":15113,"tooltipId":3283,"title":"Southpoint Gate","type":3,"max":1},{"id":15116,"tooltipId":3285,"title":"Tarren Mill","type":3,"max":1},{"id":15118,"tooltipId":3287,"title":"The Uplands","type":3,"max":1},{"id":15107,"tooltipId":3289,"title":"Misty Shore","type":3,"max":1},{"id":1103,"tooltipId":3266,"title":"Azurelode Mine","type":3,"max":1},{"id":1108,"tooltipId":3268,"title":"Darrow Hill","type":3,"max":1},{"id":1113,"tooltipId":3270,"title":"Growless Cave","type":3,"max":1},{"id":1109,"tooltipId":3272,"title":"Dun Garok","type":3,"max":1},{"id":1110,"tooltipId":3274,"title":"Durnholde Keep","type":3,"max":1},{"id":1104,"tooltipId":3276,"title":"Corrahn's Dagger","type":3,"max":1},{"id":15110,"tooltipId":3278,"title":"Ruins of Alterac","type":3,"max":1},{"id":15112,"tooltipId":3280,"title":"Sofera's Naze","type":3,"max":1},{"id":15106,"tooltipId":3282,"title":"Brazie Farmstead","type":3,"max":1},{"id":15114,"tooltipId":3284,"title":"Ruins of Southshore","type":3,"max":1},{"id":15117,"tooltipId":3286,"title":"The Headland","type":3,"max":1},{"id":15119,"tooltipId":3288,"title":"Chillwind Point","type":3,"max":1},{"id":15108,"tooltipId":3290,"title":"Nethander Stead","type":3,"max":1}    ]},
    {"id":765,"tooltipId":2422,"title":"Explore Badlands","text":"Explore Badlands, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1016,"tooltipId":6632,"title":"Agmond's End","type":3,"max":1},{"id":1027,"tooltipId":6634,"title":"Camp Kosh","type":3,"max":1},{"id":1017,"tooltipId":6636,"title":"Uldaman","type":3,"max":1},{"id":16092,"tooltipId":6638,"title":"Bloodwatcher Point","type":3,"max":1},{"id":1014,"tooltipId":6640,"title":"Lethlor Ravine","type":3,"max":1},{"id":1021,"tooltipId":6633,"title":"The Dustbowl","type":3,"max":1},{"id":1018,"tooltipId":6635,"title":"Camp Cagg","type":3,"max":1},{"id":1020,"tooltipId":6637,"title":"Scar of the Worldbreaker","type":3,"max":1},{"id":16093,"tooltipId":6639,"title":"New Kargath","type":3,"max":1},{"id":1023,"tooltipId":6641,"title":"Angor Fortress","type":3,"max":1}    ]},
    {"id":769,"tooltipId":2424,"title":"Explore Silverpine Forest","text":"Explore Silverpine Forest, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1065,"tooltipId":4175,"title":"Forsaken High Command","type":3,"max":1},{"id":1054,"tooltipId":4177,"title":"The Decrepit Fields","type":3,"max":1},{"id":1056,"tooltipId":4179,"title":"The Skittering Dark","type":3,"max":1},{"id":1064,"tooltipId":4181,"title":"Shadowfang Keep","type":3,"max":1},{"id":1059,"tooltipId":4183,"title":"Valgan's Field","type":3,"max":1},{"id":1062,"tooltipId":4185,"title":"Olsen's Farthing","type":3,"max":1},{"id":1053,"tooltipId":4187,"title":"The Battlefront","type":3,"max":1},{"id":14159,"tooltipId":4189,"title":"Forsaken Rear Guard","type":3,"max":1},{"id":1058,"tooltipId":4176,"title":"Fenris Isle","type":3,"max":1},{"id":1055,"tooltipId":4178,"title":"The Forsaken Front","type":3,"max":1},{"id":1061,"tooltipId":4180,"title":"Deep Elem Mine","type":3,"max":1},{"id":1057,"tooltipId":4182,"title":"North Tide's Beachhead","type":3,"max":1},{"id":1060,"tooltipId":4184,"title":"The Sepulcher","type":3,"max":1},{"id":1063,"tooltipId":4186,"title":"Ambermill","type":3,"max":1},{"id":14160,"tooltipId":4188,"title":"North Tide's Run","type":3,"max":1}    ]},
    {"id":773,"tooltipId":2426,"title":"Explore The Hinterlands","text":"Explore The Hinterlands, revealing the covered areas of the world map.","type":3,"max":1, criteria:[
        {"id":1126,"tooltipId":8173,"title":"Shaol'watha","type":3,"max":1},{"id":1117,"tooltipId":8175,"title":"Zun'watha","type":3,"max":1},{"id":1123,"tooltipId":8177,"title":"The Altar of Zul","type":3,"max":1},{"id":1121,"tooltipId":8179,"title":"Agol'watha","type":3,"max":1},{"id":1124,"tooltipId":8181,"title":"Seradane","type":3,"max":1},{"id":1125,"tooltipId":8183,"title":"Skulk Rock","type":3,"max":1},{"id":1116,"tooltipId":8185,"title":"Plaguemist Ravine","type":3,"max":1},{"id":1115,"tooltipId":8174,"title":"Aerie Peak","type":3,"max":1},{"id":1122,"tooltipId":8176,"title":"The Creeping Ruin","type":3,"max":1},{"id":1127,"tooltipId":8178,"title":"Jintha'Alor","type":3,"max":1},{"id":1118,"tooltipId":8180,"title":"Quel'Danil Lodge","type":3,"max":1},{"id":1128,"tooltipId":8182,"title":"The Overlook Cliffs","type":3,"max":1},{"id":1119,"tooltipId":8184,"title":"Shadra'Alor","type":3,"max":1},{"id":1120,"tooltipId":8186,"title":"Valorwind Lake","type":3,"max":1}    ]},
]};

const brawlersGuild = [
    {"name":"Oso", "displayId":74594},
    {"name":"Grandpa Grumplefloot", "displayId":48265 },
    {"name":"Ooliss", "displayId":74442 },
    {"name":"Wildhammer Council", "displayId":[73758,73735,73757] },
    {"name":"Dippy", "displayId":47244 },
    {"name":"Bill the Janitor", "displayId":74419 },
    {"name":"Saniorak", "displayId":12002 },
    {"name":"Master Paku", "displayId":41568 },
    {"name":"Doomflipper", "displayId":61339},
    {"name":"Splat", "displayId":48117},
    {"name":"Shadowmaster Aameen", "displayId":74331},
    {"name":"Johnny Awesome", "displayId":73752},
    {"name":"Burnstachio", "displayId":74633},
    {"name":"Meatball", "displayId":46798},
    {"name":"GG Engineering", "displayId":[47014, 46312]},
    {"name":"Stitches", "displayId":1693},
];

const greenFire = {title:'Green Fire', type:"header", text:"Loot the Sealed Tome of the Lost Legion from enemies on the Isle of Thunder to begin your quest.", "icon":"inv_misc_codexofxerrath_nochains", criteria:[
    {id:32295, title: 'An Unusual Tome', text:"Speak with your demonic minion to determine the origins of the tome.", trackCriteria:false, completed: false, type:2 },
    {id:32295, title: 'Reader for the Dead Tongue',text:"Bring the codex to a Warlock trainer in your capital city.", trackCriteria:false, completed: false, type:2 },    
    {id:32310, faction:0, title: 'A Tale of Six Masters',text:"Read the first chapter of the Legacy of the Masters.", trackCriteria:false, completed: false, type:2 },    
    {id:32309, faction:1, title: 'A Tale of Six Masters',text:"Read the first chapter of the Legacy of the Masters.", trackCriteria:false, completed: false, type:2 },    
    {id:32317, title: 'Seeking the Soulstones',text:"Read Jubeka's Journal and use the clues within to locate the four soulstone fragments.", trackCriteria:false, completed: false, type:2 },        
    {id:32324, title: 'Seek the Signal',text:"Follow the soulstone to the gates of the Black Temple.", trackCriteria:false, completed: false, type:2 },        
    {id:32325, title: 'Infiltrating the Black Temple',text:"Look for Jubeka's mark on the main entrance of the Black Temple. Once inside, speak to Jubeka at the Temple Summit.", trackCriteria:false, completed: false, type:2 },        
    
]
};    

export default {
    pathfinder,
    legionReputation,
    reputationsStanding,
    classColors,
    classes,
    races,
    mageTowerQuests,
    alliedRaces,
    argus,
    classMount,
    exploreCataclysm,
    exploreNorthrend,
    exploreOutland,
    exploreEasternKingdoms,
    draenorPathfinder,
    pandariaLoremaster,
    cataclysmLoremaster,
    northrendLoremaster,
    outlandLoremaster,
    greenFire
}