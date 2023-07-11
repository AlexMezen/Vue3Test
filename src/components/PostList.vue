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
.post{
    padding: 15px;
    margin: 15px;
    border: 2px solid rgb(0, 92, 128);
}
.pl{
    display: inline;
    margin-left: 15px;
}
</style>