<template>
    <div v-if="posts.length > 0">
        <h3 class="pl">Post list</h3>
        <post-item class="post"
         v-for="post in posts" 
        :post="post" 
        :key="post.id"
        @remove="$emit('remove', post)">
    </post-item>
    </div>
    <h3 v-else class="ple">Post list is empty</h3>
 
</template>

<script>
import  PostItem  from "@/components/PostItem";
export default{
components:{PostItem},
    props: {
        posts:{
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

.pl{
    display: inline;
    margin-left: 15px;
}
.ple{
    display: inline;
    margin-left: 15px;
    color:red
}
</style>