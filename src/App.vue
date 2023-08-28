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
    transition: opacity 0.2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
body {
  overflow: auto;
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(131, 202, 168);
}

body::-webkit-scrollbar-thumb:hover {
  background-color: teal;
  border-radius: 4px;
}
</style>