<template>
<nav-bar></nav-bar>
<div class="app"></div>
<router-view></router-view>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default{
    components:{
        NavBar
    }
}

</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.app{
    padding: 20px;
}
</style>