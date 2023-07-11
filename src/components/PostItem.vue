<template>
<div class="post">
    <div><strong>Post title:</strong> {{post.title}}</div>
    <div><strong>Description:</strong> {{post.body}}</div>
</div>
</template>

<script>
export default{
    props:{
        post:{
            type:Object,
            required:true,
        }
    }
}
</script>

<style>

</style>