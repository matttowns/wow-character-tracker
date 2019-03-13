<template>
    <div class="container content-container">
        <div class="talent-container">
            <div class="talent-header">
                <div class="section-header">Talents</div>
                <ul class="talent-icons">
                    <li v-for="(icon, index) in talentIcons" :key="index" :class="[selectedIndex() == index ? 'selected' : '']" @click="swapTalents(index)"><img :src="getIcon(talentIcons[index],'medium')"></li>
                </ul>
            </div>
            <app-talent v-for="(talent,index) in talents" :talent="talent" v-if="talent.show" :key="index"></app-talent>
        </div>

    </div>
</template>

<script>
import {getIcon} from '../mixins/mixins'
import Talent from './talent.vue'
export default {
    mixins: [getIcon],
    computed:{
        talentIcons(){
            let icons = [];
            this.talents.forEach((spec)=>{
                icons.push(spec.spec.icon);
            });
            return icons;
        },
        talents(){
            this.$store.getters.characterData.talents[0].show = true;
            return this.$store.getters.characterData.talents
        }
    },
    components:{
        appTalent: Talent
    },
    methods:{
        selectedIndex(){
            return this.talents.findIndex(x=>x.show);
        },
        swapTalents(index){
            let selected = this.selectedIndex();
            if(selected == index){
                return;
            }
            else{
                let old = this.talents[selected];
                old.show = false;
                let current = this.talents[index];
                current.show = true;
                this.talents[selected].show = false;
                this.talents[index].show = true;
                this.$forceUpdate();
            }
        }
    }
}
</script>

<style lang="scss">
    .container{
        width:100%;
    }
    h2{
        margin:0;
        color:white;
        text-transform:uppercase;
    }
    .talent-container{
        max-width:1480px;
        margin-left:auto;
        margin-right:auto;
    }

    .talent-icons{
        display: flex;flex-flow:row;
        list-style:none;
        padding:0;

        li{
            margin:0 .25em;
            opacity:.5;
            &:hover{
                opacity:.8;
                cursor:pointer;
            }
            &.selected{
                opacity:1;
            }
            img{
                border:1px solid rgba(255,255,255,.35);
            }
        }
    }

    .talent-header{
        display: flex;flex-flow:row;
        justify-content: space-between;
        align-items:center;
        padding:0 1em;
        .section-header{
            padding:0;
        }
    }
</style>
