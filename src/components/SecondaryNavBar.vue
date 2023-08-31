<template>
  <div class="secondary-navbar">
    <p>{{ currentPage }}</p>
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

.secondary-navbar p {
  margin: 0;
  padding-left: 35px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: large;
}
</style>