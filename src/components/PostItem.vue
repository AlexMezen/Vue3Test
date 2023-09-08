
<template>
    <div class="post">
      <div v-if="!editing">
        <div><strong>Post title:</strong> {{ post.title }}</div>
        <div><strong>Description:</strong> {{ post.body }}</div>
      </div>
      <div v-else>
        <post-input class="inpList" v-focus v-model="editedTitle" placeholder="Title"/>
        <post-input class="inpList" v-model="editedBody" placeholder="Description"/>
      </div>
      
        <div class="pst-btns">
        <post-button :class="{ 'btn-edit': !editing, 'btn-save': editing }" @click="toggleEditMode">{{ editing ? 'Save' : 'Edit' }}</post-button>
        <post-button class="btn-del" @click="$emit('remove')">Delete</post-button>
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
    .btn-del{
      margin-right: 15px;
    }
  .post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 15px;
  border: 2px solid rgb(0, 92, 128);
  z-index: 1;
}

.pst-btns {
    display: flex;
    flex-wrap: nowrap;
    padding: 8px 13px;
    margin-right: -15px;
    
    
}
.pst-btns .btn:first-of-type{
    margin-right: 15px;
    margin-left: 10px;
    width: 68px;
    padding: 8px 13px;
}
.inpList{
  padding: 0px;
  width: 250px;
  margin-right: 20px;
}
.btn-save {
  background-color: teal; 
  color: aliceblue;
  padding: 8px 13px;
}


  </style>
  