<template>
    <div class="container collections-container page-container">
        <app-dropdown :options="subMenu" :defaultSelection="0" class="collections-dropdown"></app-dropdown>
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
import Dropdown from './general/dropdown/Dropdown.vue'

export default {
    data(){
        return{
            subMenu: [{value:0, display:'Pets', to:{name: "pets"}},{value:1, display:'Mounts', to:{name: "mounts"}}]
        }
    },
    components:{
        appPets: Pets,
        appMounts: Mounts,
        appDropdown: Dropdown
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
    .collections-container{
        .collections-dropdown{
            margin:1em auto;
            @media screen and(min-width:992px){
                display:none;
            }
        }
        .sub-menu{
            display:none;
            @media screen and(min-width:992px){
                display:flex;
            }
        }
    }

</style>