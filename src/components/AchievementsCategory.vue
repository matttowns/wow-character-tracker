<template>
    <div class="achievements-container page-container">
        <app-loading v-if="!achievementsLoaded" message="Checking your achievements!"></app-loading>
        <div class="achievements" v-else> 
            <div class="achievements-dropdown-container">
                <app-dropdown :options="categoryList" :defaultSelection="subCategoryIndex+1" class="achievements-dropdown"></app-dropdown>
            </div>
            <ul class="nav-menu sub-menu">
                <router-link v-for="category in categories" :to="{ name: 'achievementCategory', params: { subcategory: category.url }}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">{{category.name}}</a></router-link>
            </ul>
            <router-link :to="{ name:'achievements'}" class="achievement-return">< Back to achievements</router-link>           
            <template v-if="achievements.length>0 ">
                <div class="achievement-window" v-for="(achievement, index) in achievements">
                    <div class="achievement" :class="{'achievement-incomplete': !achievement.completed, 'achievement-with-reward': achievement.reward}">
                        <div class="achievement-icon"><img :src="getIcon(achievement.icon, 'large')"></div>
                        <div class="achievement-details">
                            <div class="achievement-title achievement-data" :class="{'achievement-title-account' : achievement.accountWide}">{{achievement.title}}</div>
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
                <div class="achievement-window achievement-none">
                    <div class="achievement">
                        You have not yet earned any achievements in this category.

                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Loading from './general/Loading.vue';
import { getIcon } from '../mixins/mixins';
import {mapState } from 'vuex';
import Dropdown from './general/dropdown/Dropdown.vue'

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
            selectedIndex:0
        }
    },
    created(){

    },
    computed:{
        ...mapState({
            achievementData: state => state.achievements
        }),
        categoryIndex(){
            let selectedCategory = this.$route.params.category;
            let index = this.achievementData.findIndex((category)=>{
                return selectedCategory == category.name.replace(/\s+/g, '-').toLowerCase();
            });  
            return index;
        },
        subCategoryIndex(){
            let index = -1;
            let achievementSubcategories =  this.achievementData[this.categoryIndex];
            if(this.$route.params.hasOwnProperty('subcategory')){
                let selectedCategory = this.$route.params.subcategory;
                if(achievementSubcategories.hasOwnProperty('categories')){
                    index = achievementSubcategories.categories.findIndex((category)=>{
                        let categoryName = category.name.replace(/\./g, '').toLowerCase()
                        return selectedCategory == categoryName.replace(/\s+/g, '-').toLowerCase();
                    });
                }
                else index = -1;
            }
            return index;

        },
        faction(){
            return this.$store.getters.characterData.faction;
        },
        achievements(){
            let achievements = [];
            if(this.subCategoryIndex == -1){
                achievements = this.achievementData[this.categoryIndex].achievements;
            }
            else{
                achievements = this.achievementData[this.categoryIndex].categories[this.subCategoryIndex].achievements;
            }
            let completed = [];
            let criteriaList = [];
            if(achievements){

                achievements = achievements.filter(x=>x.factionId == 2 || x.factionId == this.faction);
                completed = achievements.filter(x=>x.accountCompleted);
                if(this.categoryIndex<11){
                    let incomplete = achievements.filter(x=>!x.accountCompleted);
                    completed = completed.concat(incomplete);

                }
            }
            return completed;
        },
        categories(){
            let categories = [{"name":'Global', "url":'global'}];
            if(this.achievementData[this.categoryIndex].hasOwnProperty('categories')){
                this.achievementData[this.categoryIndex].categories.forEach(category=>{
                    let categoryName = category.name.replace(/\./g,'');
                    categories.push({"name": category.name, "url":categoryName.replace(/\s+/g, '-').toLowerCase()});
                });
            }
            return categories;
        }, 
        categoryList(){
            let categories = [{value:0, display:'Global', to:{name: "achievementCategory", params: {subcategory:'global'}}}];
             if(this.achievementData[this.categoryIndex].hasOwnProperty('categories')){
                this.achievementData[this.categoryIndex].categories.forEach((category,index)=>{
                    let categoryName = category.name.replace(/\./g,'');
                    categories.push({value:index+1, display:category.name, to:{name: "achievementCategory", params: {subcategory:categoryName.replace(/\s+/g, '-').toLowerCase()}}});
                });
            }
            return categories
        },
        currentFrameItem(){
            return this.$store.getters.currentFrameItem;
        },
        frameItems(){
            return this.$store.getters.frameItems;
        },
        achievementsLoaded(){
            return this.$store.getters.achievements.length > 0;
        }
    },
    methods:{
        getDate(timestamp){
            let newDate = new Date(timestamp);
            return newDate.toLocaleDateString("en-GB");
        }
    },
    components:{
        appLoading:Loading,
        appDropdown: Dropdown
    }
}
</script>

<style lang="scss">
    .achievements-container{
        max-width:1480px;
        margin-left:auto;
        margin-right:auto;

        .nav-menu{
            margin:0;
            display:none;
            @media screen and (min-width:992px){
                display:flex;
            }
        }
        .achievements-dropdown-container{
            border-bottom:1px solid orange;
            @media screen and (min-width:992px){
                display:none;
            }
            .achievements-dropdown{
                display:block;
                margin:1em auto;

            }
        }

        .achievements{
            & > .achievement-window{
                border-top:1px solid rgba(255,255,255,.33);
            }
            > .achievement-window ~ .achievement-window{
                border-top:none;
            }
        }
    }

    .achievement-window{
        border-bottom:1px solid rgba(255,255,255,.33);
        &.achievement-none{
            .achievement{
                justify-content: center;
                padding:2em;
            }
            
            &:after{
                display:none;
            }

        }
    }
    .achievement{
        display:flex;
        flex-flow:row;
        margin:0 .5em;
 
        align-items:center;
        justify-content:space-between;
        padding:.5em;
        flex-wrap:wrap;
        color:white; 
    }

    .achievement-reward{
        width:100%;
        text-align:center;
        font-size:.75em;
        color:lightgrey;
        margin-top:1em;
        @media screen and (min-width:768px){
            margin-top:0;
        }
    }
    .achievement-details{
        text-align:left;
        flex:1;
        @media screen and (min-width:768px){
            padding-left:2em;
            padding-right:2em;
        }
    }
    .achievement-icon{
        img{
            height:80%;
            width:80%;
            border:1px solid lightgray;
        }
        display:none;
        @media screen and (min-width:480px){
            display:block;
        }
    }
    .achievement-title{
        font-size:1.15em;
        color:orange;
        font-weight:400;
        text-align:left;

        &.achievement-title-account{
            color:#0081ff;
        }
    }
    .achievement-text{
        color:lightgrey;
        font-size:.9125em;
        text-align:left;

    }
    .achievement-points{
        text-align:right;
        font-size:1.125em;
        svg{
            color:orange;
        }
        color:white;
        font-weight:400;
    }
    .achievement-completion{
        width:90px;
        text-align:right;

    }
    .achievement-date{
        font-size:.75em;
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
        font-size:.875em;
        display:block;
    }
</style>
