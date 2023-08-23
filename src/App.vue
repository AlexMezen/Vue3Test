<template>
    <nav-bar></nav-bar>
    <div class="app">
      <transition name="page" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
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
.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>