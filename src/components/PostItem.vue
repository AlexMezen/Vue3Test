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
        <post-input v-model="editedTitle" placeholder="Title"/>
        <post-input v-model="editedBody" placeholder="Description"/>
      </div>
      
        <div class="pst-btns">
          <!-- <input  type="checkbox" id="doneCheckbox" v-model="doneCheckboxValue">
          <label class="inp-chk" for="doneCheckbox">Done</label> -->
        <post-button @click="toggleEditMode">{{ editing ? 'Save' : 'Edit' }}</post-button>
        <post-button class="btn-del" @click="$emit('remove')">Delete</post-button>
        <post-button @click="toggleCheckmark" :class="{ 'checked': isChecked }">Done</post-button>
      </div>
    </div>
  </template>
  
  <script>
  import PostButton from './PostButton.vue';
  import PostInput from './PostInput.vue';
  
  export default {
    components: {
      PostButton, PostInput,
    },
    props: {
      post: {
        type: Object,
        required: true,
      },
      
    },
    data() {
      return {
        isChecked: false,
        editing: false,
        editedTitle: this.post.title,
        editedBody: this.post.body,
      };
    },
    methods: {
      toggleCheckmark() {
          this.isChecked = !this.isChecked;
        },
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
    .btn-del{
      margin-right: 15px;
    }
    .checked::after {
      content: "\2713"; 
      margin-right: 1px;
      
    }
  .post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 15px;
  border: 2px solid rgb(0, 92, 128);
}

.pst-btns {
    display: flex;
    flex-wrap: nowrap;
    
}
.pst-btns .btn:first-of-type{
    margin-right: 15px;
    margin-left: 10px;
    width: 68px;
}
/* .inp-chk{
  display: flex;
  align-self: center;
} */
  </style>
  