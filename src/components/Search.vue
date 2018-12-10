<template>
        <div class="search">
            <div class="search-frame">
                <div class="search-content">
                    <div class="search-header">
                        Character Search
                    </div>
                    <div class="search-input">
                        <label class="search-label">Region</label>
                        <fieldset>
                            <div class="region-fields">
                                <div class="checkbox">
                                    <input type="radio" id="eu" name="region" checked  v-model="region"  v-bind:value="'EU'" @change="clearRegion()">
                                    <label for="eu" class="region-label">EU</label>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" id="us" name="region" checked  v-model="region" v-bind:value="'US'"  @change="clearRegion()">
                                    <label for="us" class="region-label">US</label>
                                </div>                               
                            </div>
                        </fieldset>
                    </div>
                    <div class="search-input">        
                        <label class="search-label">Realm</label>
                        <select class="realm" v-model="selectedRealm" :disabled="region == ''">
                            <option v-for="realm in realmsByRegion" :value="realm.slug">
                                {{realm.name}}
                            </option>
                        </select>
                    </div>
                    <div class="search-input">
                        <label class="search-label">Character</label>
                        <input type="text" class="character-input" v-model="characterName" @keyup="validate()">
                    </div>
                    <div class="search-input">
                        <button @click="search" v-html="searchButtonText" :disabled="isButtonDisabled" :class="[isButtonDisabled ? '': 'button-enabled']"></button>     
                    </div>    
                    <div class="search-error" :class="[searchError ? 'search-error-displayed' : '']">
                        <p>Character not found. Please try again.</p>
                    </div>         
                </div>
            </div> 
        </div>
</template>

<script>
import realmList from '../data/realms.json';
export default {
    data(){
        return{
            region:"",
            selectedRealm:"",
            characterName:"",
            region:"",
            searchButtonText: "Search",
            isButtonDisabled: true,
            searchError: false,
        }
    },
    computed:{
        realmsByRegion(){
            return realmList.filter(x=>x.region==this.region);
        },
        
    },
    methods:{
        search(){
            this.isButtonDisabled = true;
            this.searchButtonText = '<i class="fas fa-spinner fa-pulse"></i>';
            let searchDetails = {"name":this.characterName.toLowerCase(), "realm":this.selectedRealm.toLowerCase(), "region":this.region.toLowerCase()};
            this.$store.dispatch('initCharacter', searchDetails)
                .then(()=>{
                    this.searchError = false;
                    this.$router.push({name: "character", params:{region: searchDetails.region, realm: searchDetails.realm, character: searchDetails.name}});
                })
                .catch(()=>{
                    this.searchButtonText = 'Search';
                    this.searchError = true;
                })
        },
        validate(){
            if (this.region != "" && this.selectedRealm != "" && this.characterName != ""){
                this.isButtonDisabled = false;
            }
            else{
                this.isButtonDisabled = true;
            }
        },
        clearRegion(){
            this.selectedRealm = "";
            this.isButtonDisabled = true;
        }
    }
}
</script>

<style lang="scss">
    .search{
        font-size:1em;
        color:white;
        position:fixed;
        width:100%;
        left:0;
        button{
            &.button-enabled{
                cursor:pointer;
                color:black;
                &:hover{
                    background-color:orange;
                    color:black;
                }
            }
            background-color:white;
            color:#999;
            border:1px solid gray;
            padding:.5em;
            font-size:.75em;
            font-weight:300;
            transition: all .5s;
            width:100px;
            cursor:default;
        }
        height:100%;
        display:flex;
        align-items:center;
        .search-frame{
            margin-left:auto;
            margin-right:auto;
            width:100%;
            @media screen and (min-width:768px){
                width:600px;

            }
            background-color:#333339;
            border:1px solid rgba(255,255,255,.33);
            color:black;
            .search-content{
                padding:.5em;
                @media screen and (min-width: 768px){
                    padding:2em;
                }
            }
        }
        .search-input{
            margin:1em;
            font-size:1.25em;
            display:flex;
            flex-flow:column;
            justify-content:center;
            @media screen and (min-width:768px){
                flex-flow:row;
            }
            .search-label{
                width:100px;
                border-right:none;
                padding:.125em;
                font-size:.75em;
                text-align:left;
                color:orange;
            }
        }
    }   
    fieldset{
        border:none;
        margin:0;
        padding:.125em 0;
        font-size:.75em;

    }
    .region-fields{
        display:flex;
        flex-flow:row;
        width:100%;
        @media screen and (min-width:768px){
            width:250px;
            border:none;
        }
        justify-content:space-around;
        border:1px solid grey;
        padding:.25em 0;
        .checkbox{
            cursor:pointer;
            input, label{
                cursor:pointer;
                color:orange;
            }
            font-size:.875em;
        }
    }
    .realm{
        width:100%;
        @media screen and (min-width:768px){
            width:250px;
        }
        padding:.25em 0;
        box-sizing:content-box;
        border:1px solid grey;

    }
    .character-input{
        width:calc(100% - 10px);
        @media screen and (min-width:768px){
            width:240px;
        }
        box-sizing:content-box;
        border:1px solid grey;
        padding:5px;
    }
    .search-error {
        display:none;
        &.search-error-displayed{
            display:block;
        }
        p{
            font-size:.75em;
            color:red;
            text-align:center;
        }
    }
    .search-header{
        text-align:center;
        color:white;
        font-weight:400;
        font-size:1.5em;
    }

</style>
