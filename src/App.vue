<template>
    <div class="app">
        <form>
            <h3>Сreating a post</h3>
            <input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Name">
            <input v-bind:value="body"  @input="body = $event.target.value" class="input" type="text" placeholder="Description">
            <button class="btn" @click="createPost">Create</button>
        </form>
        <div class="post" v-for="post in posts">
    <div><strong>Post title:</strong> {{post.title}}</div>
    <div><strong>Description:</strong> {{post.body}}</div>
</div>
    </div>

</template>
<script>
export default{
    data(){
        return{
            posts: [
                {id:1, title:'JavaScript1', body:'Description1'},
                {id:2, title:'JavaScript2', body:'Description2'},
                {id:3, title:'JavaScript3', body:'Description3'},
            ],
            title:'',
            body:'',
        }
        
    },
    methods:{
        createPost(){

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
.post{
    padding: 15px;
    margin: 15px;
    border: 2px solid rgb(0, 92, 128);
}
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