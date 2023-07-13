<template>
    <div class="app">
        <h1 class="pwp">Page with posts</h1>
      <div class="mtb"><post-button @click="showDialog">Create a post</post-button></div>  
        <dialog-post v-model:show="dialogVisible">
        <post-form @create="createPost"></post-form>
        </dialog-post>
       <post-list :posts="posts" @remove="removePost" v-if="!postsLoading"></post-list>
       <h3 v-else>Loading...</h3>
       
    </div>

</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import DialogPost from "./components/DialogPost.vue"
import PostButton from "./components/PostButton.vue"
import axios from "axios"
export default{
    components: {
        PostForm, PostList, DialogPost, PostButton,
    },
    data(){
        return{
            posts: [],
            dialogVisible: false,
            postsLoading: false,
        }
        
    },
    methods:{
        createPost(post){
            this.posts.push(post)
            this.dialogVisible = false;
        },
        removePost(post){
            console.log(post.id);
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog(){
            this.dialogVisible = true;
        },
         async fetchPosts(){
            try{
                this.postsLoading = true;
                let resp = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                this.posts = resp.data;
                this.postsLoading = false;
            } 
            catch(e){
                alert('Error')
            }
        }
    },
    mounted(){
        this.fetchPosts();
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
.mtb{
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 15px;
}
.pwp{
    margin-left: 15px;
}
</style>