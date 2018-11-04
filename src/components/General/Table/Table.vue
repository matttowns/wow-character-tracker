<template>
    <div class="table-container">
        <div class="table-component">
            <div class="table-row table-header" :class="['table-'+columnCount+'-columns', 'table-'+mobileColumnCount+'-mobile-columns']">
                <div class="table-cell" v-for="(heading,index) in headings" :class="['table-cell-'+heading.columns, classes(index)]" @click="changeSort(heading.value, heading.name.length==0)" >
                    <div class="cell-content"><span :class="{'heading-full' : heading.shortDisplay}" >{{heading.name}}</span><span class="heading-short" v-if="heading.shortDisplay">#</span> <font-awesome-icon v-if="(sortable && heading.name!='' && sort.column == heading.value && sort.order == 'asc')" icon="caret-down" />  <font-awesome-icon v-if="(sortable && heading.name!='' && sort.column == heading.value && sort.order == 'desc')" icon="caret-up" /></div> 
                </div>
            </div>
            <template v-for="(row,index) in sortedData">
                <div class="table-row" :class="['table-'+columnCount+'-columns','table-'+mobileColumnCount+'-mobile-columns', {'table-row-shaded' : index %2 == 0, 'table-row-subtable-parent' : row.subTable}]" @click="toggleSubtable">
                    <div class="table-cell" v-for="(data,key,cellIndex) in row" v-if="key!='subTable'" :class="['table-cell-'+headings[cellIndex].columns, classes(cellIndex)]" v-html="data.display">       </div>
                </div>
                <div class="sub-table"  v-if="row.subTable">
                    <div class="table-row" :class="['table-'+columnCount+'-columns', {'table-row-shaded' : index % 2 == 0}]" v-for="subRow in row.subTable">
                        <div class="table-cell" v-for="(data,key,subIndex) in subRow" :class="['table-cell-'+headings[subIndex].columns, classes(subIndex)]"><span class="cell-content"  v-html="data.display"></span></div>     
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
   props:{
       headings:Array, 
       tableData: Array,
       sortable: {
           type: Boolean,
           default: true
       },
       sortInitial:{
           type: Object,
           default: function () { return {} }
       }
   },
   watch: { 
        tableData: function(val, oldVal) { // watch it
          this.$forceUpdate;
        }
   },
   data(){
       return{
            sort:{column:this.headings[0].value, order:'asc'},
       }
   },
   created(){
        if(Object.keys(this.sortInitial).length>0){
            this.sort.column = this.headings[this.sortInitial.column].value;
            this.sort.order = this.sortInitial.order;
        }
   },
    computed:{
        columnCount(){
            let count = this.headings.reduce((acc,current)=>{
               return acc + current.columns;
            },0)
            return count;
        },
        mobileColumnCount(){
            let count = this.headings.reduce((acc,current)=>{
               return acc + current.mobileColumns;
            },0)
            return count;
        },
        sortedData(){
            if(this.sortable){
                let sorted = this.tableData.sort((a,b)=>{
                    if(this.sort.order == 'asc'){
                        if ((a[this.sort.column].value == "-" && b[this.sort.column].value != "-") || a[this.sort.column].value<b[this.sort.column].value)
                            return -1;
                        if ((b[this.sort.column].value == "-" && a[this.sort.column].value != "-") || a[this.sort.column].value>b[this.sort.column].value)
                            return 1;
                    }
                    else if(this.sort.order == 'desc'){
                        if ((b[this.sort.column].value == "-" && a[this.sort.column].value != "-") || a[this.sort.column].value>b[this.sort.column].value)
                            return -1;
                        if ((a[this.sort.column].value == "-" && b[this.sort.column].value != "-") || a[this.sort.column].value<b[this.sort.column].value)
                            return 1;
                    }
                    return 0;
                });           
                return sorted;
            }
            return this.tableData; 
        }
    },
    methods:{
        isValidDate(value) {
            var dateWrapper = new Date(value);
            return !isNaN(dateWrapper.getDate());
        },
        toggleSubtable(event){
            let row = event.currentTarget;
            let subtable = event.currentTarget.nextElementSibling;
            subtable.classList.toggle('show-table');
        },
        classes(index){
            let classObject = {};
            if(this.headings[index].alignment){
                classObject['table-cell-'+this.headings[index].alignment] = true;
            }
            if(this.headings[index].mobileColumns){
                classObject['table-cell-mobile-'+this.headings[index].mobileColumns] = true;
            }
            return classObject;
        },
        changeSort(column, blankName){
            if(this.sortable && !blankName){
                if (column == this.sort.column){
                    this.sort.order = this.sort.order == 'asc' ? 'desc' : 'asc';
                }
                else{
                    this.sort.column = column;
                    this.sort.order = 'asc';
                }
            }
        }
    }
}
</script>

<style lang="scss">
    .table-component{
        margin:2em auto;
        width:100%;
        color:white;
        @media screen and (min-width:768px){
            font-size:1em;
        }
        font-size:.875em;
        .table-row{
            margin:0 .5em;
            @media screen and(min-width:768px){
                margin:0;
            }
            display:flex;
            flex-flow:row;
            justify-content:space-between;
            border-bottom:1px solid rgba(255,255,255,.25);
            &.table-row-shaded{
                background-color:rgba(255,255,255,.025);
                .sub-table .table-row:nth-child(2n+1){
                    background-color:rgba(255,255,255,.025);

                }
            }
            &.table-row-subtable-parent{
                cursor:pointer;
            }
            .table-cell{
                display:flex;
                align-items:center;
                font-size:.875em;
                padding:1em 0.4375em;
                @media screen and (min-width:768px){
                    padding:1em;
                }
                justify-content:center;
                &.table-cell-left{
                    justify-content:flex-start
                }
                &.table-cell-right{
                    justify-content:flex-end;
                }
            }
            &.table-header{
                .table-cell{
                    cursor:pointer;
                    user-select:none;
                    font-size:1em;
                    padding:.875em 0.4143125em;
                    @media screen and (min-width:768px){
                        padding:.875em;
                    }
                    font-weight:600;
                    color:orange;
                    .cell-content{
                        display:inline-block;
                        position:relative;
                        svg{
                            position:absolute;
                            top:.25em;
                            right:-15px;
                        }
                    }   
                }
            }
        }
        .sub-table{
            display:none;
            &.show-table{
                display:block;
            }
            .table-row{
                cursor:default;
                & > .table-cell .cell-content{
                    padding-left:1.5em;
                }
                & > .table-cell ~ .table-cell{
                     .cell-content{
                        padding-left:0;
                     }
                }
            }
        }
        @for $i from 1 through 32{
            @for $j from 1 through $i{
                .table-#{$i}-columns > .table-cell-#{$j}{
                    width: (100% / $i) * $j;
                }
                .table-#{$i}-mobile-columns > .table-cell-mobile-#{$j}{
                    @media screen and (max-width:767px){
                        width: (100% / $i) * $j !important;
                    }
                }
            }
        }
    }

    .heading-full{
        display: none;
        @media screen and (min-width:768px){
            display:inline-block;
        }
    }
    .heading-short{
        display: inline-block;
        @media screen and (min-width:768px){
            display:none;
        }
    }
</style>
