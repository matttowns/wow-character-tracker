<template>
    <div id="main-frame" class="frame">
        <div class="frame-background"></div>
                    <div class="close" @click="closeFrame()" >x</div>

        <div class="next" @click="nextItem()"  v-if="upperBoundCheck">></div>
        <div class="previous" @click="previousItem()" v-if="lowerBoundCheck"><</div>
        <div class="frame-item frame-center" >
            <div class="frame-image">
                <img :src="getPetImage(pet.displayId)"> 
            </div>
            <div class="pet-details frame-details" >
                <h4 class="pet-name" :style="{color:quality[pet.qualityId]}">{{pet.name}}</h4>
                <template v-if="type == 'pet'">
                    <h4 class="pet-level" v-if="pet.stats.level >0">Level {{pet.stats.level}}</h4>
                    <div class="pet-stats" v-if="pet.stats.level >0">
                        <h6><span>HP:</span> {{pet.stats.health}}</h6>
                        <h6><span>PWR:</span> {{pet.stats.power}}</h6>
                        <h6><span>SPD:</span> {{pet.stats.speed}}</h6>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["pet", "type"],
    data(){
        return{
            quality:{
                0: '#9d9d9d',
                1: '#ffffff',
                2: '#1eff00',
                3: '#0070dd',
                4: '#a335ee',
                5: '#ff8000',
                6: '#e6cc80',
                7: '#00ccff'
            },
        }
    },
    computed:{
        upperBoundCheck(){
            return this.$store.getters.frameItemIndex+1 < this.$store.getters.frameItems.length;
        },
        lowerBoundCheck(){
            return this.$store.getters.frameItemIndex > 0;
        },
        frameType(){}
    },
    mounted(){
        window.addEventListener('keyup', this.keyEvent);

        window.addEventListener('click', (event)=>{
            if(event.target.id=="main-frame"){
                this.closeFrame();
            }
        });
    },
    methods:{
        getPetImage(petId){
            return "https://render-eu.worldofwarcraft.com/npcs/zoom/creature-display-"+petId+".jpg"
        },
        closeFrame(){
            window.removeEventListener('keyup', this.keyEvent);
                this.$store.dispatch('closeFrame');
        },
        nextItem(){
            this.$store.dispatch('changeFrameItem',1);
        },
        previousItem(){
            this.$store.dispatch('changeFrameItem',-1);
        },
        keyEvent(event){
            if(event.keyCode == 37){
                this.previousItem();
            }
            else if(event.keyCode == 39){
                this.nextItem();
            }            
        }
    }
}
</script>

<style lang="scss">
    .frame{
        position: fixed;
        width:100vw;
        height:100vh;
        top:0;
        left:0;
        z-index:999;
        display:flex;
        justify-content:center;
        align-items:center;
        .frame-item{
            border:none;
            margin:10%;
            position:relative;
            text-align:center;
            background-color:#181818;
            border:1px solid grey;
            &.frame-center{
                transform:translateX(0);
                opacity:1;
                transition:.5s all;
            }
        }
        .frame-image img{
            height:75%;
            width:75%;
        }
        .close,.next,.previous{
            position:absolute;  
            font-size:2.5em;
            color:white;
            cursor: pointer;
            user-select: none;
            &:hover{
                color:orange;
            }
        }
        .close{
            top:12px;
            right:25px;
        }
        .next{
            top:50%;
            right:10px;
            font-size:6em;
        }
        .previous{
            top:50%;
            left:10px;
            font-size:6em;

        }
    }
    .frame-details{
        font-size:1.25em;
        padding-bottom:2em;
    }
    .frame-open{
        overflow-x: hidden; 
        overflow-y: hidden;
        .main{
            filter:blur(12px);
            -webkit-filter:blur(12px);
            -webkit-transition : -webkit-filter 250ms linear;
            transition : filter 250ms linear;
                    padding-right:17px;

        }
    }

    .frame-left-out{
        opacity: 0;transition:all .5s;
        transform:translateX(150px);
    }
    .frame-left-in{
        opacity: 0;
        transform:translateX(-150px); 
    }
    .frame-right-out{
        opacity: 0;
        transition:all .5s;
        transform:translateX(-150px);
    }
    .frame-right-in{
        opacity: 0;
        transform:translateX(150px); 
    }
    .main{
        -webkit-transition : -webkit-filter 250ms linear;
            transition : filter 250ms linear;
    }
</style>
