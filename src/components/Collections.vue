<template>
    <div class="container">
        <!--<app-mounts ></app-mounts>-->
        <ul class="nav-menu sub-menu">
            <router-link :to="{ name: 'pets'}" activeClass="active" tag="li" class="nav-item" exact><a class="nav-link">Pets</a></router-link>
            <router-link :to="{ name: 'mounts'}" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Mounts</a></router-link>
        </ul> 
        <router-view></router-view>
      
    </div>
</template>

<script>
import Pets from './Pets.vue';
import Mounts from './Mounts.vue';

export default {

    components:{
        appPets: Pets,
        appMounts: Mounts
    }
  
}
</script>

<style lang="scss">
    .container{
        max-width:1480px;
        margin-left:auto;
        margin-right:auto;
    }
    button{
        font-family:'Open Sans';
    }

</style>