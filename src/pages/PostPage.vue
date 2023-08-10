<template>
    <div>
        <h1 class="pwp">Page with posts</h1>
        <div class="inpcl"><post-input v-model="searchQuery" placeholder="Search..."/></div>
      <div class="mtb"><post-button @click="showDialog">Create a post</post-button></div>  
      <div class="mtb"><post-select v-model="selectedSort" :options="sortOptions"></post-select></div>
        <dialog-post v-model:show="dialogVisible">
        <post-form @create="createPost"></post-form>
        </dialog-post>
       <post-list :posts="SortedSearchedPosts" @remove="removePost" v-if="!postsLoading"></post-list>
       <h3 v-else>Loading...</h3>
       <div ref ='observer' class="observer"></div>
       
    </div>

</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import DialogPost from "@/components/DialogPost.vue"
import PostButton from "@/components/PostButton.vue"
import PostSelect from "@/components/PostSelect.vue"
import PostInput from "@/components/PostInput.vue"
import axios from "axios"
export default{
    components: {
        PostForm, PostList, DialogPost, PostButton, PostSelect, PostInput,
    },
    data(){
        return{
            posts: [],
            dialogVisible: false,
            postsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions:[
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By content'}
            ] 
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
            }
        },
        async loadMorePosts(){
            try{
                this.page += 1; 
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                    params:{
                        _page: this.page,
                        _limit: this.limit
                    } 
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data];
            } 
            catch(e){
                alert('Error')
            }
        }
    },
    mounted(){
        this.fetchPosts();
        const options = {
  rootMargin: "0px",
  threshold: 1.0,
};
const callback =  (entries, observer) => {
    if(entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
    }
};
const observer = new IntersectionObserver(callback, options);
observer.observe(this.$refs.observer)
    },
    computed: {
        sortedPosts(){
            return [...this.posts].sort((post1,post2)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        SortedSearchedPosts(){
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery))
    }
    },
   
}
</script>
<style>

.mtb{
    display: inline-block;   
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 15px;
}
.pwp{
    margin-left: 15px;
}
.inpcl{
    width: 20%;
    margin-left: 15px;
}
::selection{
    color: whitesmoke;
    background-color: darkcyan;
}
.observer{
    height: 30px;
}
</style>