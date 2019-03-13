<template>
    <div class="container" >
        <div class="tracker-container">
            <app-dropdown :options="subMenu" :defaultSelection="0" class="tracker-dropdown"></app-dropdown>
            <ul class="nav-menu sub-menu">
                <router-link :to="{ name: 'battle'}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Battle for Azeroth</a></router-link>
                <router-link :to="{ name: 'legion'}" activeClass="active" tag="li" class="nav-item" ><a class="nav-link">Legion</a></router-link>
                <router-link :to="{ name: 'draenor'}" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Draenor</a></router-link>
                <router-link :to="{ name: 'pandaria'}" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Pandaria</a></router-link>
                <router-link :to="{ name: 'cataclysm'}" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Cataclysm</a></router-link>
                <router-link :to="{ name: 'wrath'}" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Wrath</a></router-link>
                <router-link :to="{ name: 'outland'}" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Burning Crusade</a></router-link>
                <!--<router-link to="/tracker" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Classic</a></router-link>-->
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Dropdown from './general/dropdown/Dropdown.vue'
    export default {
        data(){
            return{
                subMenu: [
                    {value:0, display:'Battle for Azeroth', to:{ name: 'battle'}},
                    {value:1, display:'Legion', to:{ name: 'legion'}},
                    {value:2, display:'Draenor', to:{ name: 'draenor'}},
                    {value:3, display:'Pandaria', to:{ name: 'pandaria'}},
                    {value:4, display:'Cataclysm', to:{ name: 'cataclysm'}},
                    {value:5, display:'Wrath', to:{ name: 'wrath'}},
                    {value:6, display:'Burning Crusade', to:{name: 'outland'}},
                ]
            }
        },
        created(){
            if(!this.$store.getters.reputationLoaded){
                this.$store.dispatch('initReputation');
            }
        },
        components:{
            appDropdown: Dropdown
        }
    }
</script>

<style lang="scss">
    .tracker-container{
        max-width:1480px;
        border-top:1px solid orange;
        margin-left:auto;
        margin-right:auto;
        color:white;
        .tracker-dropdown{
            color:black;
            margin: 1em auto;
            @include breakpoint('lg'){
                display:none;
            }
        }
        .nav-menu{
            margin:0;
            display:none;
            @include breakpoint('lg'){
                display:flex;
            }
        }
        .tracker-category-container{
            border-top:1px solid orange;
        }
    }
     .pathfinder-container{
        max-width: 1480px;
        margin-left:auto;
        margin-right:auto;
    }
    .tracker{
        margin:1.5em;
    }
    .tracker-header{
        margin-bottom:1.5em;
    }
    .tracker-header-container{
        flex-flow:row;
        display:flex;
        align-items:center;
        img{
            margin-right:20px;
        }
    }
    .tracker-title{
        font-size:1.0625em;
        @include breakpoint('md'){
            font-size:1.5em;
        }
        margin:.75em 0;
        font-weight:400;
        text-transform:uppercase;
        a{
            text-decoration:none;
            color:white;
            &:visited{
                color:white;
            }
        }
    }
    .achievement-title, .achievement-progress{
        font-size:1em;
        color:orange;
        font-weight:400;
    }
    .tracker-achievement{
        width:100%;
        padding-bottom:.5em;
        a{
            color:white;
            &:visited{
                color:white;
            }
        }
    }
    .achievement-child{
        font-size:.875em;
    }
    .tracker-achievements{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        color:white;
    }
    .tracker-achievement-details{
        margin:.25em 0;
    }
    .tracker-achievement-description{
        padding:10px 0;
        font-size:.875em;
    }
    .criteria-title{
        margin:.25em 0;
    }
    .tracker-achievement-header{
        display:flex;
        flex-flow:row;
        align-items:center;
        color:white;
        @include breakpoint('sm'){
            padding-right:40px;
        }
        justify-content: space-between;
        a{
            text-decoration:none;
            &:visited{
                color:white;
            }
        }
    }
    .achievement-link{
        width:100%;
        text-align:left;
        padding-left:20px;
        padding-right:20px;
    }
        .achievement-link-nopadding
        {
            padding-right:20px;
            @include breakpoint('md'){
                padding-right:0;
            }
            padding-left:0;
        }

    .achievement-image img{
        border:1px solid grey;
        height:44px;
        width:44px;

    }

    .tracker-achievements{
        width:100%;
        @media screen and (min-width: 768px){
            width:50%;
        }
        align-items: flex-start;
        align-content: flex-start;
        .tracker-achievement{
            width:100%;
            .achievement-child:last-of-type{
                padding-bottom:2em;
            }
        }
    }

    .progress-tracker{
        margin-bottom:1em;
        small{
            position:absolute; 
            width:100%;
            @include compatibility("ie"){
                top:0;
            }
        }
    }
    .tracker{
        margin:1.5em;
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
    }
    .tracker-header{
        width:100%;
    }
    .tracker-achievement-details{
        margin:.25em 0;
    }
</style>
