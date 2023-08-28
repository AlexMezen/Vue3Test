<template>
  <div>
      <h3 class="aboutPage" v-if="isVisible.aboutPage">This is a test website where there is an opportunity to interact with posts. It is built on Vue 3. 
        Additionally, there is a separate identical page with posts written using Vuex. As the page is scrolled to the end, new posts are automatically loaded.
        When the page fetches new data, a loading bar appears to indicate that the data is gradually appearing.If there is an issue while loading data, we will see an error message.
        Axios is also utilized for requesting posts. Also, the posts are not being deleted after page reload. However, there is an exception. Posts with the same title are being deleted after page reload.If there are identical posts on the page, then posts with unique titles are loaded. If there are none, the loading doesn't trigger.</h3>
      <p class="aboutInteractive" v-if="isVisible.aboutInteractive">Interactive elements on the website:</p>
      <p class="aboutInteractive" v-if="isVisible.inpAbout">  Search: At the top of the page, there is a search field where users can input a keyword, and the application will display all posts whose titles contain that keyword.</p>
      <post-input class="inpAbout" placeholder="Search..." v-if="isVisible.aboutInteractive2"/>
      <p class="aboutInteractive" v-if="isVisible.aboutBtn">Creating Posts: There is a "Create a post" button that opens a dialog window where users can write their post and submit it. After submission, the post will become visible on the page.</p>
      <post-button class="aboutBtn" v-if="isVisible.aboutInteractive3">Create a post</post-button>
      <p class="aboutInteractive" v-if="isVisible.postButton1">Sorting: Users can choose how to sort the posts. They can select sorting by post title or by content.</p>
      <post-select class="aboutBtn" v-if="isVisible.postButton2"/>
      <p class="aboutInteractive" v-if="isVisible.postButton3">Editing and Deletion: Each post on the page has editing and deletion buttons. Users can modify the content of a post or completely remove it.</p>
      <post-button class="aboutBtn" v-if="isVisible.postButton4">Edit</post-button>
      <post-button class="aboutBtn" v-if="isVisible.postButton5">Delete</post-button>
  </div>
  </template>
  
  <script>
  import PostButton from '@/components/PostButton.vue';
  import PostInput from '@/components/PostInput.vue';
  import PostSelect from '@/components/PostSelect.vue';
  
  export default {
      components: {
          PostButton, PostInput, PostSelect
      },
      data() {
          return {
              isVisible: {
                  aboutPage: false,
                  aboutInteractive: false,
                  inpAbout: false,
                  aboutInteractive2: false,
                  aboutBtn: false,
                  aboutInteractive3: false,
                  postButton1: false,
                  postButton2: false,
                  postButton3: false,
                  postButton4: false,
                  postButton5: false
              }
          };
      },
      mounted() {
          const delay = 300;
  
          setTimeout(() => {
              this.isVisible.aboutPage = true;
          }, delay);
  
          setTimeout(() => {
              this.isVisible.aboutInteractive = true;
          }, delay * 2);
  
          setTimeout(() => {
              this.isVisible.inpAbout = true;
          }, delay * 3);
  
          setTimeout(() => {
              this.isVisible.aboutInteractive2 = true;
          }, delay * 4);
  
          setTimeout(() => {
              this.isVisible.aboutBtn = true;
          }, delay * 5);
  
          setTimeout(() => {
              this.isVisible.aboutInteractive3 = true;
          }, delay * 6);
  
          setTimeout(() => {
              this.isVisible.postButton1 = true;
          }, delay * 7);
  
          setTimeout(() => {
              this.isVisible.postButton2 = true;
          }, delay * 8);
  
          setTimeout(() => {
              this.isVisible.postButton3 = true;
          }, delay * 9);
  
          setTimeout(() => {
              this.isVisible.postButton4 = true;
          }, delay * 10);
  
          setTimeout(() => {
              this.isVisible.postButton5 = true;
          }, delay * 11);
      }
  }
  </script>
  
  <style scoped>
  .animate {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .animate.show {
      opacity: 1;
      transform: translateY(0);
  }
  
  .aboutPage {
      font-style: italic;
      margin-left: 15px;
      margin-right: 30px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .aboutInteractive {
      margin-top: 30px;
      margin-left: 30px;
      margin-right: 30px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: large;
  }
  
  .inpAbout {
      margin-left: 25px;
      width: 30%;
  }
  
  .aboutBtn {
      margin-left: 25px;
      margin-top: 10px;
  }
  
  .aboutNumSpan {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  </style>