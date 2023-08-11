<!-- <template>
<div class="post">
    <div>
    <div><strong>Post title:</strong> {{post.title}}</div>
    <div><strong>Description:</strong> {{post.body}}</div>
    
    </div>
    <div class="pst-btns">
        <post-button @click="$emit('edit', post)">Edit</post-button>
        <post-button @click="$emit('remove', post)">Delete</post-button>
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
    },
    
}
</script>

<style scoped>
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
</style> -->

<template>
    <div class="post">
      <div v-if="!editing">
        <div><strong>Post title:</strong> {{ post.title }}</div>
        <div><strong>Description:</strong> {{ post.body }}</div>
      </div>
      <div v-else>
        <input v-model="editedTitle" placeholder="Title">
        <textarea v-model="editedBody" placeholder="Description"></textarea>
      </div>
        <div class="pst-btns">
        <post-button @click="toggleEditMode">{{ editing ? 'Save' : 'Edit' }}</post-button>
        <post-button @click="$emit('remove')">Delete</post-button>
      </div>
    </div>
  </template>
  
  <script>
  import PostButton from './PostButton.vue';
  
  export default {
    components: {
      PostButton,
    },
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        editing: false,
        editedTitle: this.post.title,
        editedBody: this.post.body,
      };
    },
    methods: {
      toggleEditMode() {
        if (this.editing) {
          this.$emit('edit', {
            ...this.post,
            title: this.editedTitle,
            body: this.editedBody,
          });
        }
        this.editing = !this.editing;
      },
    },
  };
  </script>
  <style scoped>
  /* .post{
      padding: 15px;
      margin: 15px;
      border: 2px solid rgb(0, 92, 128);
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .pst-btns{
      margin-top: -15px;
      margin-right: -20px;
      width: 15%;
  } */
  .post {
    display: flex;
    justify-content: space-between;
    align-items: center;
  padding: 15px;
  margin: 15px;
  border: 2px solid rgb(0, 92, 128);
  font-size: 13px;
}

.pst-btns {
    display: flex;
    flex-wrap: nowrap;
}
.pst-btns .btn:first-of-type{
    margin-right: 15px;
    width: 75px;
}
  </style>
  