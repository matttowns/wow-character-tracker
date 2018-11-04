<template>
    <div class="top-header">
        <ul class="top-header-list">
            <li>Character Profiles</li>
            <li>Guilds</li>
            <li>Leaderboards</li>
        </ul>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

    .top-header{
        width:100%;
        background-color:black;
        height:60px;
        margin-bottom:20px;
        .top-header-list{
            margin:0 auto;
            max-width:1480px;
            display:flex;
            flex-flow:row;
            list-style:none;
            color:white;
            padding:0;
            align-items:center;
            height:100%;
            li{
                padding:0 1em;
            }
        }
    }
</style>
