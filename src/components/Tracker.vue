<template>
    <div class="container" >
        <div class="tracker-container">
            <ul class="nav-menu sub-menu">
                <router-link :to="{ name: 'legion'}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Legion</a></router-link>
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
    export default {
        created(){
            if(!this.$store.getters.reputationLoaded){
                this.$store.dispatch('initReputation');
            }
        }
    }
</script>

<style lang="scss">
    .tracker-container{
        max-width:1480px;
        margin-left:auto;
        margin-right:auto;
        color:white;
        .nav-menu{
            border-bottom:2px solid white;
            margin:0;
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
        flex-wrap:wrap;
        display:flex;
        align-items:center;
        img{
            margin-right:20px;
        }
    }
    .tracker-title{
        font-size:1.0625em;
        @media screen and (min-width:768px){
            font-size:1.5em;
        }
        margin:.75em 0;
        font-weight:600;
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
        font-weight:600;
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
        margin-bottom:2em;
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
        padding-right:40px;
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
        &.achievement-link-nopadding
        {
            padding-left:0;
        }
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
        }
    }
</style>
