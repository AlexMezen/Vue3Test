import Vuex from 'vuex';
import axios from 'axios';


export const store = new Vuex.Store({
  state: {
    posts: [],
    postsLoading: false,
    page: 1,
    limit: 5,
    totalPages: 0,
    hasError: false,
    sortOptions: [
      { value: "title", name: "By name" },
      { value: "body", name: "By content" },
    ],
  },
  mutations: {
    createPost(state, post) {
      state.posts.push(post);
      state.dialogVisible = false;
      localStorage.setItem(`post-${post.id}`, JSON.stringify(post));
    },
    removePost(state, post) {
      state.posts = state.posts.filter((p) => p.id !== post.id);
      localStorage.removeItem(`post-${post.id}`);
    },
    editPost(state, editedPost) {
      const index = state.posts.findIndex((post) => post.id === editedPost.id);
      if (index !== -1) {
        state.posts[index] = editedPost;
        localStorage.setItem(`post-${editedPost.id}`, JSON.stringify(editedPost));
      }
    },
    loadPostsFromLocalStorage(state) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("post")) {
          const post = JSON.parse(localStorage.getItem(key));
          state.posts.push(post);
        }
      }
    },
    showDialog(state){
      state.dialogVisible = true;
    },
    async fetchPosts(state) {
      try {
        state.hasError = false;
        state.postsLoading = true;
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        state.totalPages = Math.ceil(
          response.headers["x-total-count"] / state.limit
        );
        state.posts = [...state.posts, ...response.data];
        state.postsLoading = false;
      } catch (e){
        state.hasError = true;
        state.postsLoading = false;
      }
    },
    async loadMorePosts(state){
      try {
        state.page += 1;
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        state.totalPages = Math.ceil(
          response.headers["x-total-count"] / state.limit
        );
        state.posts = [...state.posts, ...response.data];
      } catch (e) {
        alert("Error");
      }
    },
  },
  actions:{
    createPost(context, post){
      context.commit('createPost', post);
    },
    removePost(context, post){
      context.commit('removePost', post);
    },
    editPost(context, editedPost){
      context.commit('editPost', editedPost);
    },
    loadPostsFromLocalStorage(context){
      context.commit('loadPostsFromLocalStorage');
    },
    showDialog(context){
      context.commit('showDialog');
    },
    fetchPosts(context){
      context.commit('fetchPosts');
    },
    loadMorePosts(context){
      context.commit('loadMorePosts');
    }
  }
});