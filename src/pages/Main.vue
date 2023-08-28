<template>
    <div>
      <h1 class="pwp">Page with posts</h1>
      <div class="inpcl">
        <post-input v-focus v-model="searchQuery" placeholder="Search..." />
      </div>
      <div class="mtb">
        <post-button @click="showDialog">Create a post</post-button>
      </div>
      <div class="mtbSelect">
        <post-select v-model="selectedSort" :options="sortOptions"></post-select>
      </div>
      <dialog-post v-model:show="dialogVisible">
        <post-form @create="createPost"></post-form>
      </dialog-post>
      <post-list
        :posts="SortedSearchedPosts"
        @remove="removePost"
        @edit="editPost"
        v-if="!postsLoading"
      ></post-list>
      
      <div>
        <div class="loading-bar" v-if="postsLoading">
          <div class="loading-progress"></div>
        </div>
      </div>
      <div class="error-container" :style="{ display: hasError ? 'block' : 'none' }">
          Something went wrong. Please try again.
        </div>
    
      <div ref="observer" class="observer"></div>
    </div>
  </template>
  <script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogPost from "@/components/DialogPost.vue";
import PostButton from "@/components/PostButton.vue";
import PostSelect from "@/components/PostSelect.vue";
import PostInput from "@/components/PostInput.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    DialogPost,
    PostButton,
    PostSelect,
    PostInput,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      postsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 20,
      totalPages: 0,
      hasError: false,
      sortOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By content" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    editPost(editedPost) {
      const index = this.posts.findIndex((post) => post.id === editedPost.id);
      if (index !== -1) {
        const updatedPosts = [...this.posts];
        updatedPosts[index] = editedPost;
        this.posts = updatedPosts;
        localStorage.setItem("posts", JSON.stringify(this.posts));
      }
    },

    showDialog() {
      this.dialogVisible = true;
    },

    async fetchPosts() {
      try {
        this.hasError = false;
        this.postsLoading = true;
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
        this.removeDuplicatePosts();
        this.postsLoading = false;
      } catch (e) {
        this.hasError = true;
        this.postsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
        this.removeDuplicatePosts();
      } catch (e) {
        alert("Error");
      }
    },
    removeDuplicatePosts() {
      const uniqueTitles = new Set();
      const uniquePosts = [];
      for (const post of this.posts) {
        if (!uniqueTitles.has(post.title)) {
          uniqueTitles.add(post.title);
          uniquePosts.push(post);
        }
      }
      this.posts = uniquePosts;
    },
  },
  mounted() {
    if (localStorage.getItem("posts")) {
      this.posts = JSON.parse(localStorage.getItem("posts"));
    }
    this.fetchPosts();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    SortedSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery)
      );
    },
  },
};
  </script>
  <style>
  .mtb {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 15px;
    margin-left: 15px;
  }
  .mtbSelect {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    margin-right: 20px;
    
  }
  .pwp {
    margin-left: 15px;
  }
  .inpcl {
    width: 20%;
    margin-left: 15px;
  }
  ::selection {
    color: whitesmoke;
    background-color: darkcyan;
  }
  .loading-bar {
    margin-top: 30px;
    margin-left: 10px;
    width: 99%;
    height: 10px;
    background-color: #ccc;
    position: relative;
  }
  
  .loading-progress {
    margin-right: 10px;
    height: 100%;
    width: 0;
    background-color: teal;
    position: absolute;
    animation: loadingAnimation 2s linear infinite;
  }
  
  @keyframes loadingAnimation {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    background-color: #ffcccc;
    color: #f00;
    padding: 10px;
    border: 1px solid #f00;
    border-radius: 4px;
    margin-top: 20px;
    animation: fadeInUp 0.5s ease-in-out forwards;
    margin-left: 40%;
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .observer {
    height: 30px;
  }
  </style>
  