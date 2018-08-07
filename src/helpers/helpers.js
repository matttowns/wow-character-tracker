export const getItemIcon = (iconURL)=>{
    return 'https://wow.zamimg.com/images/wow/icons/large/' + iconURL + '.jpg';
};

const brawlersGuildReputation = [2011, 1690, 2010, 1374,1419,1691];

export const getReputation = (rep, state, stateReputation)=>{
    let currentReputation = state.characterData.reputation.find((reputation)=>{
        return reputation.id == rep.id;
    });

    if(currentReputation != null){
        if(rep.faction>=0){
            currentReputation.faction = rep.faction;
        }
        if(rep.subfactions){
            currentReputation.subfactions = [];
            rep.subfactions.forEach((subfaction)=>{
                getReputation(subfaction, state, currentReputation.subfactions); 
            });
        }
        if(rep.friend){
            currentReputation.friend = rep.friend;
        }
        currentReputation.expansion = rep.expansion;
        if(brawlersGuildReputation.indexOf(rep.id) > -1 ){
            if(currentReputation.value % 250 == 0) {
                if(currentReputation.value == 0){
                    currentReputation.standing == 1;
                }
                else if(currentReputation.standing === 4){
                    currentReputation.value += 3000;
                    let newStanding = (Math.round(currentReputation.value/1000));
                    currentReputation.standing = newStanding;
                    currentReputation.value = currentReputation.value - (1000 * (currentReputation.standing-1));
                }   
                currentReputation.brawlers = true;
                currentReputation.max = 1000;
                stateReputation.push(currentReputation);
            }
        }
        else{
            stateReputation.push(currentReputation);

        }
    }
    else if(rep.headerFaction == 1){
        currentReputation = {id:rep.id, name:rep.name, expansion:rep.expansion, headerFaction:1};
        if(rep.faction){
            currentReputation.faction  = rep.faction;
        }
        if(rep.subfactions){
            currentReputation.subfactions = [];
            rep.subfactions.forEach((subfaction)=>{
                getReputation(subfaction, state, currentReputation.subfactions); 
            });
        }     
        stateReputation.push(currentReputation);     
    }
    else{
        if(!rep.depreciated){
            currentReputation = {id:rep.id, max:3000, name:rep.name, standing:3, value:0, expansion:rep.expansion};
            if(rep.faction){
                currentReputation.faction  = rep.faction
            }
            if(rep.subfactions){
                currentReputation.subfactions = [];
                rep.subfactions.forEach((subfaction)=>{
                    getReputation(subfaction, state, currentReputation.subfactions); 
                });
            }
            if(rep.friend){
                currentReputation.friend = rep.friend;
            }
            stateReputation.push(currentReputation);     
        }
    }
}

export const achievementCheck = (state,achievement) =>{
    if(achievement.id == 5779){
        console.log(achievement);
    }
    let achievementsCompleted = state.characterData.achievements.achievementsCompleted;
    let achievements = state.characterData.achievements;     
    let cri = "";
    if(!achievement.type || achievement.type == 1){
        let index = achievementsCompleted.indexOf(achievement.id);
        if(index > -1){
            achievement.accountCompleted=true;
            achievement.timeCompleted = state.characterData.achievements.achievementsCompletedTimestamp[index];
        }
    }
    else if(achievement.type== 2){
        achievement.completed = questCheck(state, achievement.id);
        if(!achievement.completed && achievement.alternateId && achievement.alternateId.length>0){
            achievement.alternateId.forEach((id) =>{
                if(questCheck(state, id)){
                    achievement.completed = true;
                    return;
                }                           
            });
        }
    }
    else if(achievement.type == 3 || achievement.type ==4){
        let criteriaPosition = achievements.criteria.indexOf(achievement.id);
        if(criteriaPosition == -1){
            achievement.completed = false;
        }
        else{
            if(achievements.criteriaQuantity[criteriaPosition] >= achievement.max){
                achievement.completed = true;
            }
        }
    }
    if(achievement.criteria){
        let completed = 0;
        let length = 0;
        achievement.criteria.forEach((criteria)=>{
            if(achievement.accountCompleted){
                criteria.accountCompleted = true;
            }
            achievementCheck(state,criteria);
            if(criteria.completed == true && criteria.tooltipId){
                cri = criteria.tooltipId +":"+cri;
            }
            if(!criteria.faction || criteria.faction == state.characterData.faction){
                length++;
            }
            if(criteria.completed){
                completed++;
            }
        });
        if(achievement.criteriaMax){
            length = achievement.criteriaMax;
        }
        if (completed >= length){
            achievement.completed = true;
        }

    }
    if(achievement.achievements){
        achievement.achievements.forEach((achievement)=>{
            achievementCheck(state,achievement);             
        });
    }
    if(achievement.categories){
        achievement.categories.forEach((category)=>{
            category.achievements.forEach((achievement)=>{
                achievementCheck(state,achievement);             
            });
        });
    }
    else{
        if(achievementsCompleted.includes(achievement.id)){
            achievement.completed=true;
        } 
    }
    if(cri != null){
        achievement['cri'] = cri.slice(0,-1);
    }
};

export const questCheck = (state,questId)=>{
    return state.characterData.quests.includes(questId);
};

export const criteriaCount = (achievement) =>{
    if(achievement.criteria){
        let completed = 0;
        let length = 0;
        achievement.criteria.forEach((criteria) =>{
            if(!criteria.faction || criteria.faction == state.characterData.faction){
                length++;
            }
            if(criteria.completed){
                completed++;
            }
        });
        return {length,completed};
    }
    return false;
};

export const setItems = (state)=>{
    let itemSlots = ['head', 'neck', 'shoulder', 'back', 'chest', 'shirt', 'tabard', 'wrist', 'hands', 'waist', 'legs', 'feet', 'finger1', 'finger2', 'trinket1', 'trinket2', 'mainHand', 'offHand'];    
    itemSlots.forEach((itemSlot)=>{
        if(state.characterData.items.hasOwnProperty(itemSlot)){
            let item = state.characterData.items[itemSlot];
            
            item.bonus = item.bonusLists.join(":");
            let gem = "";
            
            if(item.tooltipParams.gem0){
                gem = item.tooltipParams.gem0;
            }
            if(item.tooltipParams.gem1){
                gem += ":"+item.tooltipParams.gem1;
            }
            if(item.tooltipParams.gem2){
                gem += ":"+item.tooltipParams.gem2;
            }
            
            if(item.tooltipParams.set){
                
                item.set = item.tooltipParams.set.join(":");
            }
            item.gems = gem; 
            state.items[itemSlot] = item;    
        }
        else{
            state.items[itemSlot]  = {icon: '', quality:0};  
                  
        }
    })
    Object.keys(state.characterData.items).forEach((slot,index)=> {
        if(index >=2){

        }
    });
}