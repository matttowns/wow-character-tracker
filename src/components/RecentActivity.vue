<template>
    <div class="container content-container">
        <div class="recent-activity">
            <div class="recent-activity-header">
                <div class="section-header">Recent Activity</div>
            </div>
            <div class="recent-activity-content">
                <div class="recent-activity-block">
                    <div class="section-sub-header">Loot/Achievements</div>
                    <app-table :headings="headings" :table-data="tableData.loot" :sortInitial="{column:2, order:'desc'}" v-if="tableData.loot.length>0"></app-table>
                    <div class="activity-empty" v-else>No activity to display.</div>
                </div>
                <div class="recent-activity-block">
                    <div class="section-sub-header">Kills</div>
                    <app-table :headings="headings" :table-data="tableData.kills" :sortInitial="{column:2, order:'desc'}" v-if="tableData.kills.length>0"></app-table>
                    <div class="activity-empty" v-else>No activity to display.</div>
                </div>
            </div>  

        </div>
    </div>
</template>

<script>
import Table from './general/table/Table.vue'
import {getItemIcon} from '../helpers/helpers'
import axios from 'axios'
import {config} from '../config.js';

export default {
    data(){
        return{
            headings:[
                {name:'', value :'icon', columns:1},
                {name:'Activity', value: 'description', columns:5, alignment:'left'},
                {name:'Date', value: 'date', columns:2}
            ],
            tableData:{}
        }
    },
    created(){
       this.tableData = this.getTableData();
    },
    computed:{
        accessToken(){
            return this.$store.getters.accessToken;
        }
    },
    methods:{
        getTableData(){
            let tableData ={loot:[], kills:[]};
            let recentActivity =  this.$store.getters.recentActivity;
            recentActivity.forEach((element)=>{
                if(element.type=='LOOT'){
                    this.getItemFromAPI(element,(itemTableData)=>{
                        tableData.loot.push(
                            {icon: {value:itemTableData.icon, display:itemTableData.icon}, 
                            description: itemTableData.description, 
                            date:{value:element.timestamp, display:this.getDate(element.timestamp)}});
                    });
                }
                else if(element.type=="ACHIEVEMENT"){
                    tableData.loot.push(
                        {icon: {value:'<img src="'+getItemIcon(element.achievement.icon)+'">', display:'<img src="'+getItemIcon(element.achievement.icon)+'">'},
                        description: {value:element.achievement.title, display:'<a class="item-link" target="_blank" href="//www.wowhead.com/achievement='+element.achievement.id +'">'+element.achievement.title+'</a>'}, 
                        date:{value:element.timestamp, display:this.getDate(element.timestamp)}});
                }
                else if(element.type=="BOSSKILL"){
                    tableData.kills.push(
                        {icon:{value:'<img src="'+getItemIcon("inv_misc_bone_skull_03")+'">', display:'<img src="'+getItemIcon("inv_misc_bone_skull_03")+'">'},
                        description: {value:element.achievement.title, display:element.quantity + " " + element.achievement.title}, 
                        date:{value:element.timestamp, display:this.getDate(element.timestamp)}});
                }
            });
            return tableData;
        },
        getDate(timestamp){
            let newDate = new Date(timestamp);
            return newDate.toLocaleDateString("en-GB");
        },
        getItemFromAPI(item, callback){
            axios.get('https://eu.api.blizzard.com/wow/item/'+item.itemId+'?locale=en_GB&access_token='+this.accessToken)
            .then((response) =>{
                let itemDetails = {icon: '<img src="'+getItemIcon(response.data.icon)+'">', 
                    description: {value:response.data.name, display:'<a class="item-link" target="_blank" href="//www.wowhead.com/item='+item.itemId + this.bonusLists(item)+'" data-wowhead="'+item.bonusLists.join(':')+'">'+response.data.name+'</a>'}};
                callback(itemDetails);
            })
            .catch((e)=>{
                console.log(e);
            });
        },
        bonusLists(item){
            let bonus = "";
            if(item.hasOwnProperty('bonusLists')){
                bonus = "&bonus="+item.bonusLists.join(':');
            }
            return bonus;
        }
    },
    components:{
        appTable:Table
    }
}
</script>

<style lang="scss">

.recent-activity{
    padding:0 1em;
    .recent-activity-content{
        display:flex;
        flex-flow:row;
        flex-wrap:wrap;
        .recent-activity-block{
            width:100%;
            @include breakpoint('md'){
                width:50%;
            }
            .activity-empty{
                text-align:center;
                color:white;
                padding-top:1em;
            }
            .table-container{
                @include breakpoint('md'){
                    margin:0 1em;
                }
                .table-row .table-cell{
                    padding:.5em;
                }
            }
        }
    }
    img{
        height:25px;
        width:25px;
    }
    .item-link{
        color:white;
        &:hover{
            color:orange;
        }
        &:visited{
            color:white;
        }
    }

}

</style>
