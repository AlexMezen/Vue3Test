<template>
    <div class="app">
        <h1 class="pwp">Page with posts</h1>
      <div class="mtb"><post-button @click="showDialog">Create a post</post-button></div>  
        <dialog-post v-model:show="dialogVisible">
        <post-form @create="createPost"></post-form>
        </dialog-post>
       <post-list :posts="posts" @remove="removePost"></post-list>
       
    </div>

</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import DialogPost from "./components/DialogPost.vue"
import PostButton from "./components/PostButton.vue"
export default{
    components: {
        PostForm, PostList, DialogPost, PostButton,
    },
    data(){
        return{
            posts: [
                {id:1, title:'JavaScript1', body:'Description1'},
                {id:2, title:'JavaScript2', body:'Description2'},
                {id:3, title:'JavaScript3', body:'Description3'},
            ],
            dialogVisible: false
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
        }
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