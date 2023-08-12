import {createStore} from "vuex"
export default createStore({
    state: {
        posts: [],
      },
      mutations: {
        addPost(state, post) {
          state.posts.push(post);
        },
        updatePosts(state, posts) {
          state.posts = posts;
        },
      },
})