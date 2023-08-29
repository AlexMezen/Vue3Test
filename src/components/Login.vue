<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <post-input v-focus v-model="username" type="text" id="username" required placeholder="Username"/>
        <br>
        <post-input v-model="password" type="password" id="password" placeholder="Password" required/>
        <br>
        <post-button class="mtb mr" type="submit">Login</post-button>
      </form>
    </div>
  </template>
  
  <script>
  import PostButton from './PostButton.vue';
  import PostInput from './PostInput.vue';
  export default {
    components:{
        PostButton, PostInput
    },
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        if (this.username && this.password) {
          this.$emit("login");
          this.$router.push("/");
        } else {
          alert("Invalid credentials");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login h2 {
    text-align: center;
  }
  
  .login form {
    display: flex;
    flex-direction: column;
  }
  
  .login input {
    padding: 12px;
    border: none;
    border-bottom: solid 2px #ccc;
  }
  
  .login input:focus {
    outline: none;
    border-bottom-color:  rgb(0, 255, 132);
    transition: border-bottom-color 0.5s, background-color 0.5s;
  }
  
  .login button[type=submit] {
    margin-top: 20px;
    padding: 12px;
    background-color: rgb(4, 148, 79);
    color: aliceblue;
    border-radius: 5px;
  }
  
  .login button[type=submit]:hover {
    background-color: rgb(11, 177, 141);
  }
  </style>
  