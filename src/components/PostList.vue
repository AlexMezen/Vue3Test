<template>
    <div>
        <h3 class="pl">Post list</h3>
        <post-item class="post" v-for="post in posts" :post="post"></post-item>
    </div>
 
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
</style>