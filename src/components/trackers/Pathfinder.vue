<template>
    <div class="container">
        <div class="pathfinder-container">
            <div class="tracker" style="margin-bottom:1em">
                <div class="tracker-header">
                    <div class="tracker-header-container">
                        <div class="achievement-image">
                                <img :src="getIcon(pathfinder.icon, 'large')" style="display:flex;vertical-align:middle;" >
                        </div>
                        <div class="tracker-title">
                            <a :href="'//www.wowhead.com/achievement='+pathfinder.id" >
                                {{pathfinder.title}}
                            </a>
                        </div>
                    </div>
                    <div class="tracker-achievement-description">
                        {{pathfinder.text}}
                    </div>
                </div>
                <div class="tracker-achievements">
                    <div class="tracker-achievement" v-for="(achievement,index) in pathfinder.criteria" v-if="index <= (pathfinder.criteria.length-1)/2">
                        <div class="tracker-achievement-header tracker-achievement-details" style="text-align:left">
                            <div class="achievement-image" >
                                <img :src="getIcon(achievement.icon, 'large')" style="display:flex;vertical-align:middle;" >
                            </div>
                            <a class="achievement-link" :href="'//www.wowhead.com/achievement='+achievement.id" :data-wowhead="achievement.hasOwnProperty('cri') ? achievement.id+'&cri='+achievement.cri : achievement.id" >
                                <div class="achievement-title" >{{achievement.title}}</div>
                            </a>
                            <div v-if="account && achievement.type == 1" class="achievement-progress" :class="{'completed': achievement.accountCompleted, 'incomplete': !achievement.accountCompleted}">{{progessCompleted(achievement)}}</div>
                            <div v-else-if="account && achievement.type != 1" class="achievement-progress" :class="{'completed': achievement.accountCompleted, 'incomplete': !achievement.accountCompleted}">{{achievement.accountCompleted ? "Complete" : "Incomplete" | capitalize}}</div>
                            <div v-else-if="achievement.type == 1" class="achievement-progress" :class="{'completed': achievement.completed, 'incomplete': !achievement.completed}">{{progessCompleted(achievement)}}</div>
                            <div v-else-if="achievement.type != 1" class="achievement-progress" :class="{'completed': achievement.completed, 'incomplete': !achievement.completed}">{{achievement.completed ? "Complete" : "Incomplete" | capitalize}}</div>
                        </div>
                        <p class="tracker-achievement-description" >{{achievement.text}}</p>
                        <template v-if="!achievement.criteriaMax">
                            <div class="achievement-child" v-for="achievement in achievement.criteria" v-if="(!achievement.completed && (!achievement.faction || characterData.faction == achievement.faction))">
                                <div class="tracker-achievement-header tracker-achievement-details tracker-achievement-child"  >    
                                    <div class="criteria-title" >{{achievement.title}}</div>
                                    <div class="criteria-progress" :class="{'completed': achievement.completed, 'incomplete': !achievement.completed}">{{achievement.completed ? "Complete" : "Incomplete" | capitalize}}</div>
                                </div>  
                            </div>                       
                        </template>
                        <div class="progress progress-tracker" style="position:relative; margin-left:0; width:95%;" v-else>
                            <small> {{criteriaCount(achievement).completed >= achievement.criteriaMax ? achievement.criteriaMax : criteriaCount(achievement).completed}} / {{achievement.criteriaMax}}</small>
                            <div style="color:red; background-color:green; height:100%" class="progress-bar" :style="{width: (criteriaCount(achievement).completed >= achievement.criteriaMax ? achievement.criteriaMax : criteriaCount(achievement).completed /achievement.criteriaMax)*100 +'%'}"></div>
                        </div>
                    </div> 
                </div>
                <div class="tracker-achievements">
                    <div class="tracker-achievement" v-for="(achievement,index) in pathfinder.criteria" v-if="index > (pathfinder.criteria.length-1)/2">
                        <div class="tracker-achievement-header tracker-achievement-details" style="text-align:left">
                            <div class="achievement-image" >
                                <img :src="getIcon(achievement.icon, 'large')" style="display:flex;vertical-align:middle;" >
                            </div>
                            <a class="achievement-link" :href="'//www.wowhead.com/achievement='+achievement.id" :data-wowhead="achievement.cri.length>0 ? achievement.id+'&cri='+achievement.cri : achievement.id" >
                                <div class="achievement-title" >{{achievement.title}}</div>
                            </a>
                            <div v-if="account && achievement.type == 1" class="achievement-progress" :class="{'completed': achievement.accountCompleted, 'incomplete': !achievement.accountCompleted}">{{progessCompleted(achievement)}}</div>
                            <div v-else-if="account && achievement.type != 1" class="achievement-progress" :class="{'completed': achievement.accountCompleted, 'incomplete': !achievement.accountCompleted}">{{achievement.accountCompleted ? "Complete" : "Incomplete" | capitalize}}</div>
                            <div v-else-if="achievement.type == 1" class="achievement-progress" :class="{'completed': achievement.completed, 'incomplete': !achievement.completed}">{{progessCompleted(achievement)}}</div>
                            <div v-else-if="achievement.type != 1" class="achievement-progress" :class="{'completed': achievement.completed, 'incomplete': !achievement.completed}">{{achievement.completed ? "Complete" : "Incomplete" | capitalize}}</div>
                        </div>
                        <p class="tracker-achievement-description" >{{achievement.text}}</p>
                        <template v-if="!achievement.criteriaMax">
                            <div class="achievement-child" v-for="achievement in achievement.criteria" v-if="(!achievement.completed && (!achievement.faction || characterData.faction == achievement.faction))">
                                <div class="tracker-achievement-header tracker-achievement-details tracker-achievement-child" v-if="!achievement.hasOwnProperty('faction') || characterData.faction == achievement['faction']" >
                                    <div class="criteria-title" >{{achievement.title}}</div>
                                    <div class="criteria-progress" :class="{'completed': achievement.completed, 'incomplete': !achievement.completed}">{{achievement.completed ? "Complete" : "Incomplete" | capitalize}}</div>
                                </div>  
                            </div>                       
                        </template>
                        <div class="progress progress-tracker" style="position:relative; margin-left:0; width:95%;" v-else>
                            <small> {{criteriaCount(achievement).completed >= achievement.criteriaMax ? achievement.criteriaMax : criteriaCount(achievement).completed}} / {{achievement.criteriaMax}}</small>
                            <div style="color:red; background-color:green; height:100%" class="progress-bar" :style="{width: (criteriaCount(achievement).completed >= achievement.criteriaMax ? achievement.criteriaMax : criteriaCount(achievement).completed /achievement.criteriaMax)*100 +'%'}"></div>
                        </div>
                    </div> 
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import { getIcon } from '../../mixins/mixins';
    export default {
        props:['pathfinder'],
        mixins: [getIcon],

        data(){
            return{
                account:false
            }
        },
        created(){

        },
        computed:{
            characterData(){
                return this.$store.getters.characterData;
            },
            pathfinderCompleted(){
                let completed = true;
                let accountCompleted = true;
                this.pathfinder.forEach((achievement)=>{
                    if(!achievement.completed){
                        completed = false;
                    }
                    if(!achievement.accountCompleted){
                        accountCompleted = false;
                    }
                });
                return {completed, accountCompleted};
            },
        },
        methods:{
            progessCompleted(achievement){
                if(achievement.completed){
                    return '100.00%';
                }
                else if(achievement.criteriaMax){
                    let criteriaCount = this.criteriaCount(achievement);
                    return ((criteriaCount.completed /achievement.criteriaMax)*100).toFixed(2) + "%";                   
                }
                else{
                    let criteriaCount = this.criteriaCount(achievement);
                    return ((criteriaCount.completed /criteriaCount.length)*100).toFixed(2) + "%";
                }

            },
            criteriaCount(achievement){
                if(achievement.criteria){
                    let completed = 0;
                    let length = 0;
                    if(achievement.criteria.length==0){

                        length=1;
                        if(achievement.completed){
                            completed=1;
                        }
                    }
                    else{
                        achievement.criteria.forEach((criteria) =>{
                            if(!criteria.faction || criteria.faction == this.characterData.faction){
                                length++;
                            }
                            if(criteria.completed){
                                completed++;
                            }
                        });
                    }
                    return {length,completed};
                }
                return false;
            },
        }
    }
</script>

<style lang="scss">
    .pathfinder-container{
        max-width: 1480px;
        margin-left:auto;
        margin-right:auto;
        border-bottom:1px solid rgba(255,255,255,.35);
    }

</style>

