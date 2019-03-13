<template>
    <div class="loading">
        <div class="loading-container">
            <i class="fas fa-spinner fa-spin loading-icon"></i>
            <div class="loading-message">{{message}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['message']
}
</script>
<style lang="scss">
    .loading{
        align-items:center;
        display:flex;
        height:calc(100vh - 154px);
        justify-content: center;
    }
    .loading-container{
        align-items:center;
        background-color:lighten(#120c1b, 10%);
        border:white 1px solid;
        color:orange;
        display:flex;
        flex-flow:column;
        flex-wrap:wrap;
        height:200px;
        justify-content:center;
        padding:1em;
        width:200px;
 
        .loading-icon{
            font-size: 4.5em;
        }
        .loading-message{
            margin-top:1.5em;
            font-size:1.25em;
            margin-bottom:0;
            text-align:center;
            @include compatibility("ie"){
                align-self: stretch;
            }
        }
    }
</style>
