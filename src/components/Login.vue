<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <post-input v-focus v-model="username" type="text" id="username" required placeholder="Username"/>
      <br>
      <post-input v-model="password" type="password" id="password" placeholder="Password" required/>
      <br>
      <post-button class="mtb mr" type="submit">Login</post-button>
      <GoogleLogin :callback="googleLoginCallback"></GoogleLogin>
    </form>
  </div>
</template>

<script>
import { GoogleLogin } from 'vue3-google-login';
import PostButton from './PostButton.vue';
import PostInput from './PostInput.vue';

export default {
  components: {
    PostButton,
    PostInput,
    GoogleLogin,
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
    googleLoginCallback(googleUser) {
      // Обработка успешного входа через Google
      // Здесь вы можете выполнить необходимые действия, такие как отправка данных на сервер и получение токена, если требуется.

      // После успешного входа перенаправьте пользователя на главную страницу.
      this.$emit("login");
      this.$router.push("/");
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
  border-bottom-color: rgb(0,255,132);
  transition: border-bottom-color .3s;
}

.login button[type=submit] {
  margin-top:20px;
  padding:12px;
  background-color:rgb(4,148,79);
  color:aliceblue;
  border-radius:5px;
}

.login button[type=submit]:hover{
   background-color:rgb(11,177,141);
}
</style>
