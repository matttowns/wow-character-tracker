<template>
    <div class="content-container">
        <div class="section-header">Battlegrounds</div>
        <app-table :headings="headings" :tableData="tableData"></app-table>
    </div>
</template>

<script>
import table from './general/table/Table.vue'
export default {
    data(){
        return{
            headings:[
                {name:'Battleground', value: 'battleground', columns:12, mobileColumns:2, alignment:'left'},
                {name:'Games', value: 'games', columns:1, mobileColumns:1},
                {name:'Wins', value: 'wins', columns:1, mobileColumns:1},
                {name:'%', value: 'percentage', columns:1, mobileColumns:1}
            ]
        }
    },
    computed:{
        tableData(){
            let data = [];
            this.$store.getters.battlegroundStats.forEach((battleground)=>{
                data.push({
                    battleground: {value: battleground.name, display:battleground.name}, 
                    games: {value: battleground.total, display:battleground.total}, 
                    wins: {value: battleground.wins, display: battleground.wins},
                    percentage:{value: battleground.total >0 ? (battleground.wins/battleground.total) * 100 : '-', display: battleground.total >0 ? ((battleground.wins/battleground.total) * 100).toFixed(0) + "%" :'-'}});
            });
            return data;
        },
    },
    components:{
        appTable: table
    },
}
</script>

<style>

</style>
