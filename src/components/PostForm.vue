<template>
 <form @submit.prevent>
            <h3>Сreating a post</h3>
            <PostInput v-model="post.title" class="input" type="text" placeholder="Name"/>
            <PostInput v-model="post.body" class="input" type="text" placeholder="Description"/>
            <post-button @click="createPost">Create</post-button>
        </form>
</template>

<script>
import PostButton from './PostButton.vue';
import PostInput from './PostInput.vue';
export default{
    components:{
        PostButton, PostInput
    },
    data(){
        return{
            post:{
                title:'',
                body:'',
            }
        }
    },
    methods: {
        createPost(){
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post= {
            title:  '',
            body: '',
        }
            
        }
    }
}
</script>

<style>
form{
    display: flex;
    flex-direction: column;
}
.input{
    margin-top: 15px;
    padding: 15px;
    width: 99%;
    border:2px solid rgb(0, 92, 128);
}

</style>