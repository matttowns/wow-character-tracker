<template>
    <div class="pvp-summary-container">

    </div>
</template>

<script>
    export default {
        data(){
            return{
                raidIcons:[
                    'antorus-the-burning-throne',
                    'tomb-of-sargeras',
                    'the-nighthold',
                    'trial-of-valor',
                    'the-emerald-nightmare'
                ],
                difficulty:[1,3,4,5]
            }
        },
        methods:{
            getRaidIcon(icon){
                return "https://render-eu.worldofwarcraft.com/zones/"+icon+"-small.jpg"
            },
            progression(raidId,difficulty){
                let raid = this.raids.find(x => x.id == raidId);
               
                
            }
        }
    }
</script>

<style lang="scss">
    .progression-raids{
        margin:0;
        padding:0;
        display: flex;
        flex-flow:row;
        flex-wrap:wrap;
    }

    .progression-raid{
        list-style:none;
        width:25%;        
        display: flex;
        flex-flow:column;
    }

    .raid-blocks{
        display: flex;
        flex-flow:row;
    }
    .raid-content{
        width:22%;
        flex-grow:0;
        margin:.5em 1em;
        &.raid-image-content{
            width:12%;
        }
    }
    
    .progress-block{
        border:1px solid lightgrey;
        position:relative;
        flex-grow:1;
    }
    
    .raid-progress-block{
        height:25px;
        text-align:center;
        &.raid-complete{
            background-color:green;
        }
        &.raid-incomplete{
            background-color:orange;
        }
    }
    .raid-progression-overlay{
        position:absolute;
        top:0;
        width:100%;
        height:100%;
        color:white;
        font-weight:600;
        display: flex;
        align-items:center;
        justify-content:center;
        font-size:1em;
        text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);        
    }
    .raid-image{
        width:100%;
    }

    .difficulty-name{
        color:white;
        padding-left:1em;
        width:22%;
    }
    .raid-name{
        color:white;
        margin-left:1em;
        width:100%;
    }

    .progression-headers{
        display: flex;
        flex-flow:row;
        align-items:flex-end;
    }


    .raid-difficulty{
        width:75px;
    }
    .raid-difficulty-block{
        display:flex;
        flex-flow:row;
        width:95%;
        margin-left:auto;
        align-items:center;
        color:white;
    }

    .raid-block{
        margin:1em;
        border:1px solid lightgray;
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        padding-bottom:.5em;
    }
</style>

