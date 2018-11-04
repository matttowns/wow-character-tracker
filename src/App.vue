<template>
    <div>
        <div class="main" >
          <app-header v-if="dataLoaded && !searchCheck" style=" position:relative;"></app-header>
          <router-view v-if="dataLoaded || searchCheck" ></router-view>
        </div>
        <app-frame v-if="frameOpen" :pet="currentFrameItem" :type="frameType"></app-frame>
    </div>
</template>

<script>

import TopHeader from './components/TopHeader.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Frame from './components/general/Frame.vue';
import achievements from './data/achievements.json'

export default {
  components: {
    appTopHeader: TopHeader,
    appHeader: Header,
    appFooter: Footer,
    appFrame:Frame
  },
  created() {
    if(this.$route.name != "search"){
        let searchDetails = {"region": this.$route.params.region, "name":this.$route.params.character, "realm":this.$route.params.realm};
        this.$store.dispatch('initCharacter', searchDetails);
    }

  },
  computed:{
    dataLoaded(){
      return this.$store.getters.dataLoaded;
    },
    homeCheck(){
      if(this.$route.fullPath == "/"){
        return true;
      };
      return false;
    },
    frameOpen(){
        return this.$store.getters.frameOpen;
    },
    currentFrameItem(){
        return this.$store.getters.currentFrameItem;
    },
    frameType(){
        return this.$store.getters.frameType;
    },
    searchCheck(){
        return this.$route.name == "search";
    }
  }
}
</script>

<style lang="scss">
    $edgeColor:#170e09;
    $backgroundColor:rgb(51, 51, 57);
    html{
        margin-left: calc(100vw - 100%);
    }
    body{
        font-size: 16px;
        color: #333;
        margin: 0 auto;
        padding: 0;
        font-family:Open Sans;
        width:100%;
        background-color:$edgeColor;
    }
    .content-container{
        padding-bottom:2em;
        border-bottom:1px solid rgba(255,255,255,.25);
        @media screen and (min-width:992px){
            border-top:none;
            padding-top:1em;
        }
    }
    .page-container{
        border-top:1px solid rgb(182, 145, 76);
        margin:0 1em;
        @media screen and (min-width:992px){
            border-top:0;
        }
    }
    @for $i from 1 through 18{
        .sub-table-#{$i}.show{
            max-height: (50 * $i) * 1px;
        }
    }

    @for $i from 1 through 8{
        @for $j from 1 through $i{
            .table--#{$i}cols > .table-cell-#{$j}{
                width: (100% / $i) * $j;
            }
        }
    }
    .progress{
        width:100%;
        height:25px;
        color:white;
        text-shadow:0 0 1px transparent, 0 1px 2px rgba(0,0,0,.8);
        text-align:left;
        font-weight:500;
        display: flex;
        align-items:center;
        line-height:25px;
        border:1px solid rgba(255,255,255,.35);
        box-shadow:inset 0 0 16px #000;
        background-color:#181818;
        small{
            padding-left:.5em;

        }
        @media screen and (min-width:768px){
            width:55%;
            order:1;
            margin:0 1em;
        }
    }
    .main{
        margin-left:auto;
        margin-right:auto;
        max-width:1480px;
        min-height:100vh;
        position:relative;
        @media screen and (min-width:768px){
            padding:0 2em;
        }
    }

    .centered-text{
        text-align:center;
    }

    .section-header{
        font-size:1.5em;
        margin:1em 0;
        color:white;
        font-weight:400;
        text-transform:uppercase;
    }

    .section-sub-header{
        font-size:1.25em;
        margin:1em 0;
        color:white;
        font-weight:400;
        text-align:center;
        text-transform:uppercase;     
    }

    .section-header-container{
        justify-content:space-between;
        display:flex;
        flex-flow:row;
                flex-wrap:wrap;
                align-items:center;

        .section-header, .section-header-dropdown{
            width:100%;
            @media screen and (min-width:768px){
                width:50%;
            }
        }
    }

    .section-header-dropdown{
        align-self: center;  
        font-size:.875em;
        text-align:center;
        text-transform:uppercase;
        background-color:orange;
        color:black;
        border:none;
        padding:.75em;
        cursor:pointer;
        &:focus{
            outline:0;
        }
        option{
            color:black;
        }
        &:after{
            font-size:1.25em;
        }
    }
</style>
