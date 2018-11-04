<template>
    <div class="dropdown" :class="{'dropdown-displayed': dropdownDisplayed}"  ref="dropdownComponent">
        <div class="selected-value" @click="dropdownDisplayed = !dropdownDisplayed" v-html="selectedValue.display"></div>
        <ul class="dropdown-list" >
            <li v-for="option in options" :value="option.value" class="dropdown-option" @click="handleSelection(option)">{{option.display}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        options: Array,
        defaultSelection: {
            type: Number,
            default: 0
        },
    },
    data(){
        return{
            dropdownDisplayed: false,
            selected: this.defaultSelection
        }
    },
    computed:{
        selectedValue(){
            return this.options.find(x=>x.value == this.selected);
        }
    },
    methods:{
        documentClick(e){
            let el = this.$refs.dropdownComponent
            let target = e.target
            if ((el !== target) && !el.contains(target)) {
                this.dropdownDisplayed=false
            }
        },
        handleSelection(option){
            this.selected=option.value; 
            this.dropdownDisplayed = !this.dropdownDisplayed; 
            this.$emit('selected-change',this.selected);
            if(option.hasOwnProperty('to')){
                this.$router.push(option.to);
            }
        }
    },
    created() {
        document.addEventListener('click', this.documentClick)
    },
    destroyed() {
        document.removeEventListener('click', this.documentClick)
    }
}
</script>

<style lang="scss">
.dropdown{        
    width:250px;
    display:flex;
    flex-flow:column;
    flex-wrap:wrap;
    position:relative;
    z-index:100;
    font-weight:600;
    .selected-value{
        padding:.5em;
        background-color:orange;  
        cursor:pointer;
        margin:0;
        position:relative;
        &:after{
            display:block;
            position:absolute;
            right:15px;
            top:16px;
            content:'';
            border: 7px solid transparent;
            border-color: #000 transparent transparent transparent;
        }
    }
    .dropdown-list{
        position:absolute;
        top:100%;
        list-style:none;
        width:100%;
        padding:0;
        margin:0;
        display:none;
        .dropdown-option{
            padding:.5em;
            background-color:orange;
            margin:0;
            cursor:pointer;
            border-top:1px solid rgba(255,255,255,.25);
            border-bottom:1px solid rgba(255,255,255,.25);
            &:hover{
                background-color:rgb(255, 190, 0);
            }
        }
    }
    &.dropdown-displayed{
        .dropdown-list{
            display:block;
        }
        .selected-value:after{
            border-color: transparent transparent #000 transparent;
            top:8px;
        }
    }
}
   

</style>
