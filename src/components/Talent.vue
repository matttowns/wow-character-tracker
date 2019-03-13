<template>
    <div class="spec">
        <div class="spec-details">
            <div class="spec-details-content">
                <img class="spec-icon" :src="getIcon(talent.spec.icon, 'large')">
                <h3>{{talent.spec.name}}</h3>
                <p>{{talent.spec.description}}</p>
            </div>
        </div>
        <div class="talents">
            <div class="talents-content">
                <div class="talent-details" v-for="selectedTalent in sortedTalents" :key="selectedTalent.spell.id">
                    <div class="talent-level">{{selectedTalent.level}}</div>
                    <template v-if="selectedTalent.spell.id != 0">
                        <a class="talent-link" :href="'http://wowhead.com/spell='+selectedTalent.spell.id" ><img class="talent-icon" :src="getIcon(selectedTalent.spell.icon, 'medium')"></a>
                        <div class="talent-name"><a class="talent-link" :href="'http://wowhead.com/spell='+selectedTalent.spell.id">{{selectedTalent.spell.name}}</a></div>
                    </template>
                    <template v-else>
                        <img class="talent-icon" :src="getIcon(selectedTalent.spell.icon, 'medium')">
                        <div class="talent-name">{{selectedTalent.spell.name}}</div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getIcon} from '../mixins/mixins'
export default {
    props:['talent'],
    mixins: [getIcon],
    data(){
        return{
            talentLevels:[15,30,45,60,75,90,100]
        }
    },
    computed:{
        sortedTalents(){
            let talents =  this.talent.talents.sort((a,b)=>a.tier > b.tier);
            let length = talents.length;
            talents.forEach((talent, index)=>{
                talent.level = this.talentLevels[index];
            });
            if(length < 7){
                let spell = {};
                spell.icon = 'inv_misc_questionmark';
                spell.id = 0;
                spell.name = "";
                for(let i = length; i< 7; i++){
                    talents.push({tier:i, spell:spell, level:this.talentLevels[i]});
                }
            }
            return talents;
        }
    }

}
</script>

<style lang="scss">
    .spec{
        display:flex;
        flex-flow:column;
        width:100%;
        @include breakpoint('lg'){
            flex-flow:row;
        }
    }
    .spec-details{
        width:100%;
        text-align:center;
        font-size:1em;
        color:white;
        display: flex;
        
        @include breakpoint('lg'){
            width:32.5%;
            font-size:1em;
        }
        .spec-details-content{
            margin:1em;
            padding:20px;
            border:1px solid rgba(255,255,255,.35);
            background-color:rgba(20,20,40,1);
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            @include compatibility('ie'){
                display:block;
            }
            p{
                margin:.25em;
            }
        }
        h3{
            font-size:1.5em;
            margin:.25em;
            font-weight:400;
            color:orange;
        }
    }
    .spec-icon{
        height:44px;
        width:44px;
                border:1px solid rgba(255,255,255,.35);

    }
    .talents{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        color:orange;
        flex-grow:1;
        @include breakpoint('lg'){
            width:67.5%;
            font-size:1em;        
        }
    }
    .talents-content{
        margin:1em;
        border:1px solid rgba(255,255,255,.35);
        //background:rgba(131, 123, 123, 0.842);
        background-color:rgba(20,20,40,1);
        padding:15px;
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        width:100%;
    }
    .talent-details{
        display:flex;
        width:100%;
        align-items:center;
        padding:.125em 0;
        margin:.125em 0;
        @include breakpoint('sm'){
            width:50%;
            font-size:.875em;
        }
        @include breakpoint('md'){
            width:33.33%;
            font-size:1em;
        }
        @include breakpoint('lg'){
             padding:.5em 0;
        }
        .talent-level{
            width:40px;
            font-size:1.125em;
        }
        .talent-name{
            font-size:.875em;
        }
        h2,h6{
            margin:0;
            display:inline-block;
            padding-right:.5em;
        }
    }
    .talent-icon{
        margin:0 .5em;
        border:1px solid rgba(255,255,255,.35);
    }
    .talent-link{
        color:white;
        text-decoration:none;
        display:flex;
        &:visited{
            color:white;
        }
    }
</style>
