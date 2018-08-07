<template>
    <div class="achievements-container">
        <div class="achievement-categories">            
            <div class="achievement-category" v-for="category in achievementCategories">
                <router-link :to="{ name: 'achievementCategory', params: { category: categoryRouteName(category), subcategory:'global' }}" tag="div" class="achievement-category-content">
                    <a class="category-link">
                        <div class="circle">
                            <div class="full-circle"></div>
                            <div class="arc" :class="['arc-'+graphRotation(completionPercentage(category).percentage).first]"></div>
                            <div class="arc" :class="['arc-'+graphRotation(completionPercentage(category).percentage).second]"></div> 
                            <div class="arc" :class="['arc-'+graphRotation(completionPercentage(category).percentage).third]"></div>    
                            <div class="arc" :class="['arc-'+graphRotation(completionPercentage(category).percentage).fourth]"></div>  
                            <div class="achievement-category-percentage">{{completionPercentage(category).percentage}}</div>
                        </div>      
                        <div class="achievement-category-name">{{category.name}}</div>
                        <div class="achievement-category-points"><font-awesome-icon icon="shield" /> {{completionPercentage(category).points}}</div>  
                    </a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './general/Loading.vue';

export default {
    computed:{
        achievementCategories(){
            return this.factionFilter(this.$store.getters.achievementCategories);
        }
    },
    methods:{
        completionPercentage(category){
            let completed = 0;
            let count = 0;
            let points = 0;
            let completedArray = [];
            completedArray = category.achievements.filter(x=>x.accountCompleted);
            completed += completedArray.length;
            count += category.achievements.length;
            
            completedArray.forEach((achievement)=>{
                points += achievement.points;
            });
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
            return {"percentage": percentage, "points": points};
        },
        factionFilter(categories){
            let faction = this.$store.getters.characterData.faction;
            categories.forEach((category)=>{
                category.achievements = category.achievements.filter(x=>(x.factionId == faction || x.factionId == 2));
                if(category.categories){
                    category.categories.forEach((subCategory)=>{
                        subCategory.achievements = subCategory.achievements.filter(x=>(x.factionId == faction || x.factionId == 2));   
                    });
                }
            });
            return categories;
        },
        categoryRouteName(category){
            return category.name.replace(/\s+/g, '-').toLowerCase();
        },
        graphRotation(percentage){
            let first = 0;
            let second = 0;
            let third = 0;
            let fourth = 0;
            let full = parseInt((parseFloat(percentage) * 3.6));
            if(full <= 90){
                first = full;
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
            return {first,second,third,fourth};

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
    }
    .achievement-categories{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        flex-grow:1;
    }
    .achievement-category{
        width:100%;
        @media screen and (min-width:480px){
            width:50%;
        }
         @media screen and (min-width:768px){
            width:25%;
        }
         @media screen and (min-width:1200px){
            width:16.667%;
        }
    }

    .achievement-category-content{
        border:1px solid lightgrey;
        background-color:darken(#373c44,7.5%);
        margin:1em;
        &:hover{
            border: 1px solid orange;
            cursor:pointer;
        }

    }
    .achievement-category-name{
        font-size:1.25em;
        text-align:center;
        color:orange;
        padding-top:2em;
    }

    .achievement-category-percentage{
        font-size:2em;
        text-align:center;
        padding:.5em 0;
        color:white;
        font-weight:600;
    }
    .achievement-category-points{
        font-size:1.5em;
        text-align:center;
        padding:.5em 0;
        color:orange;
        font-weight:600;
    }

    .progress.achievement-progress{
        width:80%;
        margin:1em auto;
    }

    .circle {
        position: relative;
        margin: 3.5em auto 1em auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: none;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .full-circle{
        position: absolute;
        top: -1em;
        right: 50%;
        bottom: 50%;
        left: -1em;
        transform-origin: 100% 100%;
        &:before{
            box-sizing: border-box;
            display: block;
            border: solid 12px lightgrey;
            width: 200%;
            height: 200%;
            border-radius: 50%;
            content: '';
        }
    }
    .arc {
        overflow: hidden;
        position: absolute;
        top: -1em;
        right: 50%;
        bottom: 50%;
        left: -1em;
        transform-origin: 100% 100%;
        &:before{
            box-sizing: border-box;
            display: block;
            border: solid 12px green;
            width: 200%;
            height: 200%;
            border-radius: 50%;
            transform: skewX(0deg);
            content: '';
        }
    }  

    @for $i from 0 through 360{
        .arc-#{$i}{
            transform: rotate(#{$i}deg) skewX(0deg);
        }
    }

    .arc-0{
        display:none;
    }

    .category-link{
        text-decoration:none;
    }



</style>
