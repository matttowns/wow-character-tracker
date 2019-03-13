<template>
    <div class="achievements-container page-container">
        <div class="achievement-categories">            
            <div class="achievement-category" v-for="(category,index) in achievements">
                <router-link :to="{ name: 'achievementCategory', params: { category: categoryRouteName(category), subcategory:'global' }}" tag="div" class="achievement-category-content">
                    <a class="category-link">
                        <div class="progress-circle">
                            <svg width="120" height="120" viewBox="0 0 120 120" style="transform: rotate(-90deg);">
                                <circle cx="60" cy="60" :r="radius" fill="none" stroke="#e6e6e6" stroke-width="15" />
                                <circle cx="60" cy="60" :r="radius" fill="none" stroke="#222222" stroke-width="14" />
                                <circle class="circle-path" cx="60" cy="60" :r="radius" fill="none" :stroke="getProgressColor(completionPercentages[index].percentage)" stroke-width="15" :stroke-dasharray="completionPercentages[index].strokeDasharray"  />
                            </svg>
                            <div class="achievement-category-percentage">{{completionPercentages[index].percentage}}</div>

                        </div>

                        <div class="achievement-category-name">{{category.name}}</div>
                        <div class="achievement-category-points"><font-awesome-icon icon="shield" /> {{completionPercentages[index].points}}</div>  
                    </a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './general/Loading.vue';

export default {
    data(){
        return{
            radius: 52.5,
            completionPercentageValues:{},
            progressColors:[
                {color: "#808080", min: 0},
                {color: "#FFA500", min: 30},
                {color: "#007800", min: 90}
            ]
        }
    },
    computed:{
        achievements(){
            return this.factionFilter(this.$store.getters.achievements);
        },
        circumference(){
            return this.radius * 2 * Math.PI;
        },
        completionPercentages(){
            let completionArray = [];
            this.achievements.forEach((category)=>{
                let completed = 0;
                let count = 0;
                let points = 0;
                let completedArray = [];
                if(category.achievements){
                    completedArray = category.achievements.filter(x=>x.accountCompleted);
                }

                if(completedArray.length >0){
                    completed += completedArray.length;
                    count += category.achievements.length;
                    completedArray.forEach((achievement)=>{
                        points += achievement.points;
                    });
                }

                if(category.hasOwnProperty('categories')){
                    category.categories.forEach((subCategory)=>{
                        completedArray = subCategory.achievements.filter(x=>x.accountCompleted);
                        completed += completedArray.length;
                        count += subCategory.achievements.length;
                        completedArray.forEach((achievement)=>{
                            points += achievement.points;
                        });
                    });
                }
                let percentage = ((completed / count)* 100).toFixed(0)  + "%";
                let strokeDasharray = this.circumference * (completed/count);
                completionArray.push({"percentage": percentage, "points": points, "strokeDasharray": strokeDasharray + ' ' + this.circumference});
            });
            return completionArray;
        }

    },
    methods:{
        getProgressColor(percentage){
            let progress = parseInt(percentage);
            let color = "";
            this.progressColors.forEach((element)=>{
                if(progress > element.min){
                    color = element.color;
                }
            });
            return color;
        },
        factionFilter(categories){
            let faction = this.$store.getters.characterData.faction;
            categories.forEach((category)=>{
                if(category.achievements){
                    category.achievements = category.achievements.filter(x=>(x.factionId == faction || x.factionId == 2));   
                }
                if(category.categories){
                    category.categories.forEach((subCategory)=>{
                        subCategory.achievements = subCategory.achievements.filter(x=>(x.factionId == faction || x.factionId == 2));   
                    });
                }
            });
            return categories;
        },
        categoryRouteName(category){
            category.name = category.name.replace(/\./g,'');
            return category.name.replace(/\s+/g, '-').toLowerCase();
        },
        graphRotation(percentage){
            let first = 0;
            let second = 0;
            let third = 0;
            let fourth = 0;
            let full = parseInt((parseFloat(percentage) * 3.6));
            if(full <= 90){
                first = 90;
                second = 90 + full;
            }
            else{
                first = 90;
            }
            if(full <= 180){
                if(full>90){
                    second = full;
                }
            }
            else{
                second = 180;
            }
            if(full <= 270){
                if(full>180){
                    third = full;
                }
            }
            else{
                third = 270;
            }
            if(full <= 360){
                if(full>270){
                    fourth = full;
                }
            }
            else{
                fourth = 360;
            }
            return {full, first,second,third,fourth};

        }
    },
    components:{
        appLoading:Loading
    }
}
</script>

<style lang="scss">
    .achievement-categories{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        flex-grow:1;
        margin: 0 -1em;
    }
    .achievement-category{
        width:100%;
        flex-grow:1;
        display:flex;
        @include breakpoint('sm'){
            width:50%;
            max-width:50%;
        }
         @include breakpoint('md'){
            width:25%;
            max-width:25%;
        }
         @include breakpoint('xl'){
            width:20%;
            max-width:20%;
        }
    }
    .achievement-category-content{
        border:1px solid rgba(255,255,255,.33);
        background-color:darken(#373c44,7.5%);
        margin:1em;
        flex-grow:1;
        &:hover{
            border: 1px solid orange;
            cursor:pointer;
        }
    }
    .achievement-category-name{
        font-size:1em;
        text-align:center;
        color:orange;
        padding-top:2em;
    }
    .achievement-category-percentage{
        font-size:1.5em;
        text-align:center;
        padding:.5em 0;
        color:white;
        font-weight:700;
        position:absolute;
        @include compatibility("ie"){
            margin:auto;
            top:30px;
            left:0;
            right:0;
            bottom:0;
        }
    }
    .achievement-category-points{
        font-size:1em;
        text-align:center;
        padding:.5em 0;
        color:orange;
        font-weight:400;
    }
    .progress.achievement-progress{
        width:80%;
        margin:1em auto;
    }
    .category-link{
        text-decoration:none;
    }
    .progress-circle{
        display: flex;
        justify-content: center;
        margin-top: 2em;
        position: relative;
        align-items:center;
    }
    .circle-path{
        animation:progress 1s ease-in-out;
    }
    @keyframes progress{
        0%{
            stroke-dasharray: 0 329.8672286269283;
        }
    }
</style>
