<template>
<div class="post">
    <div>
    <div><strong>Post title:</strong> {{post.title}}</div>
    <div><strong>Description:</strong> {{post.body}}</div>
    </div>
    <div class="pst-btns">
        <post-button>Delete</post-button>
    </div>
</div>
</template>

<script>
import PostButton from './PostButton.vue';
export default{
    components:{
        PostButton,
    },
    props:{
        post:{
            type:Object,
            required:true,
        }
    }
}
</script>

<style>
.post{
    padding: 15px;
    margin: 15px;
    border: 2px solid rgb(0, 92, 128);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.pst-btns{
    margin-top: -15px;
    margin-right: -15px;
}
</style>