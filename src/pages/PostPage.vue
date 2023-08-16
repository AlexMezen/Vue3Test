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
    <h3 v-else>Loading...</h3>
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
      limit: 10,
      totalPages: 0,
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
      // this.savePostsToLocalStorage();
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
      // this.savePostsToLocalStorage();
    },
    editPost(editedPost) {
      const index = this.posts.findIndex((post) => post.id === editedPost.id);
      if (index !== -1) {
        const updatedPosts = [...this.posts];
        updatedPosts[index] = editedPost;
        this.posts = updatedPosts;
      }
      // this.savePostsToLocalStorage();
    },
    

    showDialog() {
      this.dialogVisible = true;
    },
    // async fetchPosts() {
    //   try {
    //     this.postsLoading = true;

    //     const localPosts = JSON.parse(localStorage.getItem("posts"));
    //     if (localPosts) {
    //       this.posts = localPosts;
    //       this.postsLoading = false;
    //     } else {
    //       const response = await axios.get(
    //         "https://jsonplaceholder.typicode.com/posts",
    //         {
    //           params: {
    //             _page: this.page,
    //             _limit: this.limit,
    //           },
    //         }
    //       );
    //       this.totalPages = Math.ceil(
    //         response.headers["x-total-count"] / this.limit
    //       );
    //       this.posts = response.data;
    //       this.postsLoading = false;
    //     }
    //   } catch (e) {
    //     alert("Error");
    //   }
    // },
    async fetchPosts(){
            try{
                this.postsLoading = true;
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                    params:{
                        _page: this.page,
                        _limit: this.limit
                    } 
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
                this.postsLoading = false;
            } 
            catch(e){
                alert('Error')
            }},
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
      } catch (e) {
        alert("Error");
      }
    },
    // savePostsToLocalStorage() {
    //   localStorage.setItem("posts", JSON.stringify(this.posts));
    // },
  },
  mounted() {
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
  // created() {
  //   const localPosts = JSON.parse(localStorage.getItem("posts"));
  //   if (localPosts) {
  //     this.posts = localPosts;
  //   }
  // },
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
  margin: 15px;
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
.observer {
  height: 30px;
}
</style>
