<template>
    <div class="reputation-container">
        <app-loading v-if="!reputationLoaded" message="Fetching reputation..."></app-loading>
        <app-reputation-item v-for="expansion in reputationByExpansion" :expansion="expansion" v-else></app-reputation-item>

        <hr style="color:white; margin:0 5%;">
    </div>
</template>

<script>
    import ReputationItem from './ReputationItem.vue'
    import Loading from './general/Loading.vue';

    export default {
        props:['expansion'],
        data(){
            return{
                expansions:[
                    {"id": 0, "title": 'Classic'},
                    {"id": 1, "title": 'The Burning Crusade'},
                    {"id": 2, "title": 'Wrath of the Lich King'},
                    {"id": 3, "title": 'Cataclysm'},
                    {"id": 4, "title": 'Mists of Pandaria'},
                    {"id": 5, "title": 'Warlords of Draenor'},
                    {"id": 6, "title": 'Legion'},
                ],
            }
        },
        created(){
            this.$store.dispatch('initReputation');
        },
        computed:{
            characterData(){
                return this.$store.getters.characterData;
            },
            reputationLoaded(){
                return this.$store.getters.reputationLoaded;
            },
            reputationsCompleted(){
                let completed =0; 
                this.expansion.expansion.forEach((rep)=>{
                    if(rep.standing ==7){
                        completed++;
                    }
                });
                return completed;               
            },
            reputation(){
                return this.$store.getters.reputation;
            },
            reputationByExpansion(){
                let expansionReputations=[];
                this.expansions.slice().reverse().forEach((expansion) => {
                    let reputations = this.reputation.filter((reputation)=>{
                        return reputation.expansion == expansion.id;
                    });
                    expansionReputations.push({expansion, reputations});
                });
                return expansionReputations;
            },
        },
        components:{
            appReputationItem: ReputationItem,
            appLoading: Loading
        }
    }
</script>

<style lang="scss">
    .reputation-expansion{
        color:white;
        padding-bottom:1em;
        @media screen and (min-width:768px){
            max-width:1480px;
            margin-left:auto;
            margin-right:auto;
        }
    }

    .reputation-container{
        margin:0 1em;
        .section-header{
            padding:0;
        }
    }
    .exalted{
        background: linear-gradient(to right, darken(#2ee6e6,20%), lighten(#2ee6e6,20%));
    }
    .revered{
        background: linear-gradient(to right, darken(#53e9bc,20%), lighten(#53e9bc,20%));       
    }
    .honored{
        background: linear-gradient(to right, darken(#5fe65d,20%), lighten(#5fe65d,20%));       
    }
    .friendly{
        background: linear-gradient(to right, darken(#33ff33,20%), lighten(#33ff33,20%));       
    }
    .neutral{
        background: linear-gradient(to right, darken(#e4e400,20%), lighten(#e4e400,20%));       
    }
    .unfriendly{
        background: linear-gradient(to right, darken(#f26000,20%), lighten(#f26000,20%));       
    }
    .hostile{
        background: linear-gradient(to right, darken(#ff0000,20%), lighten(#ff0000,20%));       
    }
    .hated{
        background: linear-gradient(to right, darken(#cc0000,20%), lighten(#cc0000,20%));       
    }
    .reputation-expansion h2{
        margin-top:0;
        padding-top:1em;
        @media screen and (min-width:768px){
            order:2;
            margin-bottom:1em;
            text-align:left;
        }
    }
    .reputation{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        width:100%;
        align-items:center;
        padding-bottom:15px;
    }
    .reputation-standing{
        width:50%;
        text-align:right;
        font-size:.875em;
        margin:.5em 0;
        font-weight:400;
        @media screen and (min-width:768px){
            width:10%;
            order:2;
            text-align:left;
        }
    }
    .reputation-title, .subfaction-title{
        width:50%;
        text-align:left;
        font-size:.875em;
        margin:.5em 0;
        font-weight:400;
        @media screen and (min-width:768px){
            width:25%;
            order:0;
            text-align:right;
        }
    }
    .reputation-parent{
        padding-top:20px;
    }
    .reputation-parent .reputation-title{
        font-size:1.25em;
        font-weight:600;
        margin:0;
        &.reputation-title-full{
            margin-right:50%;
            @media screen and (min-width:768px){
                margin-right:75%;
            }
        }
    }

    .reputation-parent>.reputation{
        padding-top:10px;
        padding-bottom:0;
        @media screen and (min-width:768px){
            order:3;
        }
    }
</style>
