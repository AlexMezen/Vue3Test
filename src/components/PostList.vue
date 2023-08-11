<template>
    <div v-if="posts.length > 0">
        <h3 class="pl">Post list</h3>
        <TransitionGroup name="post-list">
        <post-item class="post"
         v-for="post in posts" 
        :post="post" 
        :key="post.id"
        @edit="handleEdit"
        @remove="$emit('remove', post)">
    </post-item>
</TransitionGroup>
        
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
    },
    methods:{
        handleEdit(editedPost){
            this.$emit('edit', editedPost)
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
    display: flex;
    margin-left: 15px;
    color:red
}
.post-list-enter-active,
.post-list-leave-active {
  transition: opacity 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
}
.post-list-move{
    transition: transform 0.4s ease
}
</style>