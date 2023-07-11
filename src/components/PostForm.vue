<template>
 <form @submit.prevent>
            <h3>Сreating a post</h3>
            <input v-model="post.title" class="input" type="text" placeholder="Name">
            <input v-model="post.body" class="input" type="text" placeholder="Description">
            <button class="btn" @click="createPost">Create</button>
        </form>
</template>

<script>
export default{
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
            this.post.id = Date.now;
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
.btn{
    margin-top: 15px;
    margin-right: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color:  rgb(0, 92, 128);
    border: 1px solid rgb(0, 92, 128);;
}
</style>