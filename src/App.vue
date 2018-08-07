<template>
    <div>
        <div class="main">
          <app-header v-if="dataLoaded && !searchCheck" style="z-index:1; position:relative;"></app-header>
          <router-view v-if="dataLoaded || searchCheck" ></router-view>
        </div>
        <app-frame v-if="frameOpen" :pet="currentFrameItem" :type="frameType"></app-frame>
        
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Frame from './components/general/Frame.vue';

export default {
  components: {
    appHeader: Header,
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
    body{
        font-size: 16px;
        color: #333;
        margin: 0 auto;
        padding: 0;
        font-family:Open Sans;
        width:100%;
        background-color:rgb(51, 51, 57);
    }

    .table{
        display:flex;
        flex-wrap:wrap;
    }
    .table.sub-table{
        margin:0;
        width:100%;
        flex-wrap:wrap;
        display:flex;
        max-height:0;
        transition: max-height 0.4s linear;
        overflow:hidden;
    }
    .table.sub-table.show{
        transition: max-height 0.4s linear;
    }
    @for $i from 1 through 18{
        .sub-table-#{$i}.show{
            max-height: (50 * $i) * 1px ;
        }
    }
        
    .table-cell{
        box-sizing:border-box;
        flex-grow:1;
        width:100%;
        overflow:hidden;
        list-style:none;
        color:black;
        text-align:center;
        padding:.5em;
        background-color: lighten(darkgrey, 15%);
        cursor:pointer;
    }
    .table-cell.table-cell-child{
        background-color: lighten(darkgrey, 30%);
        color:black;
        cursor:default;
    }

    .table-cell.table-header{
        background:darkgrey;
        color:black;
        font-weight:bold;
        cursor:default;
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
        border:1px solid lightgray;
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
        max-width:1480px;
        margin-left:auto;
        margin-right:auto;
                min-height:100vh;
                position:relative;
    }

    .centered-text{
        text-align:center;
    }

    .section-header{
        font-size:1.75em;
        margin:1em 0;
        color:white;
        font-weight:600;
    }
</style>
