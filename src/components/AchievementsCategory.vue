<template>
    <div class="achievements-container">
        <app-loading v-if="!achievementsLoaded" message="Checking your achievements!"></app-loading>
        <div class="achievements" v-else> 
            <ul class="nav-menu sub-menu">
                <router-link v-for="category in categories" :to="{ name: 'achievementCategory', params: { subcategory: category.url }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">{{category.name}}</a></router-link>
            </ul>
            <router-link :to="{ name:'achievements'}" class="achievement-return">< Back to achievements</router-link>           
            <template v-if="achievements.length>0">
                <div class="achievement-window" v-for="(achievement,index) in achievements" >
                    <div class="achievement" :class="{'achievement-incomplete': !achievement.completed, 'achievement-with-reward': achievement.reward}">
                        <div class="achievement-icon"><img :src="getIcon(achievement.icon, 'large')"></div>
                        <div class="achievement-details">
                            <div class="achievement-title achievement-data">{{achievement.title}}</div>
                            <div class="achievement-text achievement-data">{{achievement.description}}</div>
                        </div>
                        <div class="achievement-completion">
                            <div class="achievement-points achievement-data"><font-awesome-icon icon="shield" /> {{achievement.points}}</div>
                            <div class="achievement-date achievement-data" v-if="achievement.timeCompleted">{{getDate(achievement.timeCompleted)}}</div>
                        </div>
                        <div class="achievement-reward" v-if="achievement.reward">{{achievement.reward}}</div>

                    </div>
                </div>
            </template>
            <template v-else>
                <div class="achievements-none">
                    You have not yet earned any achievements in this category.
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Loading from './general/Loading.vue';
import { getIcon } from '../mixins/mixins';

export default {
    mixins: [getIcon],
    data(){
        return{
            quality:{
                0: '#9d9d9d',
                1: '#ffffff',
                2: '#1eff00',
                3: '#0070dd',
                4: '#a335ee',
                5: '#ff8000',
                6: '#e6cc80',
                7: '#00ccff'
            },
        }
    },
    created(){

    },
    computed:{
        categoryIndex(){
            let selectedCategory = this.$route.params.category;
            let achievementCategories =  this.$store.getters.achievementCategories;
            let index = achievementCategories.findIndex((category)=>{
                return selectedCategory == category.name.replace(/\s+/g, '-').toLowerCase();
            });  
            return index;
        },
        subCategoryIndex(){
            let index = -1;
            let achievementSubcategories =  this.$store.getters.achievementCategories[this.categoryIndex];
            if(this.$route.params.hasOwnProperty('subcategory')){
                let selectedCategory = this.$route.params.subcategory;
                if(achievementSubcategories.hasOwnProperty('categories')){
                    index = achievementSubcategories.categories.findIndex((category)=>{
                        return selectedCategory == category.name.replace(/\s+/g, '-').toLowerCase();
                    });
                }
                else index = -1;
            }
            return index;

        },
        achievements(){
            let achievementCategories =  this.$store.getters.achievementCategories;
            let achievements = [];
            if(this.subCategoryIndex == -1){
                achievements = achievementCategories[this.categoryIndex].achievements;
            }
            else{
                achievements = achievementCategories[this.categoryIndex].categories[this.subCategoryIndex].achievements;
            }
            let completed = achievements.filter(x=>x.accountCompleted);
            if(this.categoryIndex<13){
                let incomplete = achievements.filter(x=>!x.accountCompleted);
                return completed.concat(incomplete);
            }
            return completed;
        },
        categories(){
            let categories = [{"name":'Global', "url":'global'}];
            let achievementCategories =  this.$store.getters.achievementCategories;
            if(achievementCategories[this.categoryIndex].hasOwnProperty('categories')){
                achievementCategories[this.categoryIndex].categories.forEach((category)=>{
                    categories.push({"name": category.name, "url":category.name.replace(/\s+/g, '-').toLowerCase()});
                });
            }
            return categories;
        }, 
        currentFrameItem(){
            return this.$store.getters.currentFrameItem;
        },
        frameItems(){
            return this.$store.getters.frameItems;
        },
        achievementsLoaded(){
            return this.$store.getters.achievementCategories.length > 0;
        }
    },
    methods:{
        getDate(timestamp){
            let newDate = new Date(timestamp);
            return newDate.toLocaleDateString("en-GB");
        }
    },
    components:{
        appLoading:Loading
    }
}
</script>

<style lang="scss">
    .achievements-container{
        max-width:1480px;
        margin-left:auto;
        margin-right:auto;
        .nav-menu{
            border-bottom:2px solid white;
            margin:0;
        }
    }

    .achievement-window{
        &:first-of-type{
            border-top:1px solid white;
        }
    }
    .achievement{
        display:flex;
        flex-flow:column;
        @media screen and (min-width:480px){
            flex-flow:row wrap;
        }
        align-items:center;
        justify-content:space-between;
        padding:1.5em 2em;
        flex-wrap:wrap;
        color:white;
        border-bottom:1px solid white;
        &.achievement-with-reward{
            padding:1.5em 2em .5em 2em;
        }
    }

    .achievement-reward{
        width:100%;
        text-align:center;
        font-size:.75em;
        color:lightgrey;
    }
    .achievement-details{
        text-align:left;
        flex:1;
        padding-left:2em;
        padding-right:2em;
    }
    .achievement-icon img{
        border:1px solid lightgray;
    }
    .achievement-title{
        font-size:1.25em;
        color:orange;
        font-weight:600;
        text-align:center;
        @media screen and (min-width:480px){
            text-align:left;
        }
    }
    .achievement-text{
        color:lightgrey;
        text-align:center;
        @media screen and (min-width:480px){
            text-align:left;
        }
    }
    .achievement-points{
        text-align:center;
        font-size:1.5em;
        color:orange;
        font-weight:600;
    }
    .achievement-completion{
        width:90px;
    }
    .achievement-data{
        padding:.25em 0;
    }
    .achievement-incomplete{
        opacity:.5;
    }

    .achievement-return{
        color:orange;
        font-weight:400;
        text-decoration:none;
        margin:.5em;
        font-size:.9125em;
        display:block;
    }
</style>
