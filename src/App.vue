<template>
    <div class="app">
       <post-form @create="createPost"></post-form>
       <post-list :posts="posts"></post-list>
    </div>

</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
export default{
    components: {
        PostForm, PostList,
    },
    data(){
        return{
            posts: [
                {id:1, title:'JavaScript1', body:'Description1'},
                {id:2, title:'JavaScript2', body:'Description2'},
                {id:3, title:'JavaScript3', body:'Description3'},
            ],
        }
        
    },
    methods:{
        createPost(post){
            this.posts.push(post)
        },
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
</style>