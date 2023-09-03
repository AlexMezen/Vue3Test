<template>
  
      <nav-bar v-if="loggedIn"></nav-bar>
      <secondary-nav-bar v-if="loggedIn"  @logout="logout"></secondary-nav-bar>
      
    <div class="app">
      <div class="scrollable-content">
      <transition name="page" mode="out-in">
        <router-view :key="$route.fullPath" v-if="loggedIn"></router-view>
        <login v-else @login="login"></login>
      </transition>
    </div>
    <scroll-to-top-button></scroll-to-top-button>
            
    </div>
  </template>
  

  <script>
  import NavBar from '@/components/NavBar.vue';
  import Login from '@/components/Login.vue';
  import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
  import SecondaryNavBar from './components/SecondaryNavBar.vue';
  
  export default {
    components: {
      NavBar,
      Login,
      ScrollToTopButton,
      SecondaryNavBar,
    },
    data() {
      return {
        loggedIn: false,
      };
    },
    methods: {
      login() {
        this.loggedIn = true;
      },
      logout() {
        this.loggedIn = false;
      },
    },
  };
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