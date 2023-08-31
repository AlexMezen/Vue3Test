<template>
  <div class="secondary-navbar">
    <transition name="fade-slide" mode="out-in">
      <div class="content-container" :key="currentPage">
        <p class="animated-text">{{ currentPage }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SecondaryNavbar',
  computed: {
    currentPage() {
      switch (this.$route.path) {
        case '/':
          return 'Page with posts';
        case '/about':
          return 'About';
        case '/account':
          return 'Account';
        default:
          return '';
      }
    },
  },
}
</script>

<style scoped>
.secondary-navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  background-color: rgba(131, 202, 168, 0.34);
}

.content-container {
  display: flex;
  align-items: center;
}

.secondary-navbar p {
  margin: 0;
  padding-left: 35px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: large;
}

/* Анимация */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-slide-enter, .fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-slide-enter-to, .fade-slide-leave {
  opacity: 1;
  transform: translateX(0);
}
</style>