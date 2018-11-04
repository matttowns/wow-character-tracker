<template>
    <div>
        <div class="loremaster-container">
            <div class="tracker" style="margin-bottom:1em">
                <div class="tracker-header">
                    <div class="tracker-header-container">
                        <div class="achievement-image">
                                <img src="http://media.blizzard.com/wow/icons/36/inv_icon_heirloomtoken_weapon01.jpg" style="display:flex;vertical-align:middle;" >
                        </div>
                        <div class="tracker-title">
                                Mage Tower Challenges
                        </div>
                    </div>
                </div>
                <div class="tracker-achievements">
                    <div class="tracker-achievement" v-for="(achievement,index) in mageTower" v-if="index <= (mageTower.length-1)/2">
                        <div class="tracker-achievement-header tracker-achievement-details" >
                            <div class="achievement-image" >
                                <img :src="getIcon(achievement.icon, 'medium')" style="display:flex;vertical-align:middle;" >
                            </div>
                                <a class="achievement-link" :href="'//www.wowhead.com/quest='+achievement.id"  :data-wowhead="achievement.id" style="text-align:left; width:100%; padding-left:10px;" >
                                    <div class="achievement-title" style="margin-bottom:0;padding-left:10px; line-height:32px;">{{achievement.title}}</div>
                                </a>
                            <div :class="{'completed': achievement.completed, 'incomplete': !achievement.completed}">{{achievement.completed ? "Complete" : "Incomplete" | capitalize}}</div>
                        </div>
                        <p class="tracker-achievement-description" style="padding-top:10px;  width:100%;">{{achievement.text}}</p>
                    </div>
                </div>
                <div class="tracker-achievements">
                    <div class="tracker-achievement" v-for="(achievement,index) in mageTower" v-if="index > (mageTower.length-1)/2">
                        <div class="tracker-achievement-header tracker-achievement-details" >
                            <div class="achievement-image" >
                                <img :src="getIcon(achievement.icon, 'medium')" style="display:flex;vertical-align:middle;" >
                            </div>
                                <a class="achievement-link" :href="'//www.wowhead.com/quest='+achievement.id"  :data-wowhead="achievement.id" style="text-align:left; width:100%; padding-left:10px;" >
                                    <div class="achievement-title" style="margin-bottom:0;padding-left:10px; line-height:32px;">{{achievement.title}}</div>
                                </a>
                            <div :class="{'completed': achievement.completed, 'incomplete': !achievement.completed}">{{achievement.completed ? "Complete" : "Incomplete" | capitalize}}</div>
                        </div>
                        <p class="tracker-achievement-description" style="padding-top:10px;  width:100%;">{{achievement.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getIcon } from '../../mixins/mixins';
    export default {
        props: [
            'achievements'
        ],
        mixins: [ getIcon ],
        computed:{
            mageTower(){
                return this.$store.getters.mageTower;
            },
        
        },

        methods:{

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
    .loremaster-container{
        max-width: 1480px;
        margin-left:auto;
        margin-right:auto;
        border-bottom:1px solid rgba(255,255,255,.35);
    }

</style>
