<template>
    <button class="scroll-to-top-btn" @click="scrollToTop" v-show="showButton">
      <span>↑</span>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showButton = window.scrollY > 100;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .scroll-to-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: teal;
    color: aliceblue;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  
  .scroll-to-top-btn span {
    font-size: 24px;
  }
  .scroll-to-top-btn:hover {
    opacity: 1;
  }
  </style>