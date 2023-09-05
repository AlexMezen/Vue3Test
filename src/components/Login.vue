<template>
  <div class="login">
    <h2>{{ loginHeader }}</h2>
    <form @submit.prevent="login" v-show="!showRegisterForm">
      <post-input v-focus v-model="username" type="text" id="username" required placeholder="Username" />
      <br>
      <post-input v-model="password" type="password" id="password" placeholder="Password" :class="{ 'incorrect': loginError }"  required />
      <p v-show="loginError" class="registered-message-error">Invalid credentials</p>

      <br>
      <post-button class="mtb mr widthLoginBtn" type="submit">{{ loginButtonLabel }}</post-button>
    </form>
    <form class="loginRegister" @submit.prevent="register" v-show="showRegisterForm">
      <post-input v-model="registerUsername" type="text" id="register-username" required placeholder="Username" />
      <br>
      <post-input v-model="registerPassword" type="password" id="register-password" placeholder="Password" required />
      <br>
      <post-button class="mtb mr with-margin" type="submit">Sign up</post-button>
    </form>
    <transition name="fade" mode="out-in">
      <button :class="['register-btn', { 'with-margin': showRegisterForm }]" @click="toggleRegisterForm">{{ registerButtonLabel }}</button>    </transition>
    <transition name="fade">
      <div>
        <p v-show="registered" class="registered-message">You are registered!</p>
      </div>
      
    </transition>
    <GoogleLogin :callback="googleLoginCallback" :class="{ 'dspNone': showRegisterForm } "></GoogleLogin>

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
      registerUsername: "",
      registerPassword: "",
      showRegisterForm: false,
      registered: false,
      loginError: false,
    };
  },
  computed: {
    loginHeader() {
      return this.showRegisterForm ? 'Register' : 'Login';
    },
    loginButtonLabel() {
      return this.showRegisterForm ? 'Sign up' : 'Login';
    },
    registerButtonLabel() {
      return this.showRegisterForm ? 'Back to login' : 'Sign up';
    },
  },
  methods: {
    login() {
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
      const user = registeredUsers.find(user => user.username === this.username && user.password === this.password);
      if (user) {
        this.$emit("login");
        this.$router.push("/");
      } else {
        // Set loginError to true to display the error message
        this.loginError = true;
        // Clear the error message after a short delay (e.g., 2 seconds)
        setTimeout(() => {
          this.loginError = false;
        }, 2000);
      }
    },
    register() {
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
      registeredUsers.push({ username: this.registerUsername, password: this.registerPassword });
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
      this.registered = true;
      setTimeout(() => {
        this.registered = false;
        this.showRegisterForm = false;
      }, 2000); // Hide the message and form after 2 seconds
    },
    toggleRegisterForm() {
      this.showRegisterForm = !this.showRegisterForm;
    },
    googleLoginCallback(googleUser) {
      // Existing Google login callback method
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

.login h2, .register {
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
  margin-top:15px;
  padding:12px;
  background-color:rgb(4,148,79);
  color:aliceblue;
  border-radius:5px;
}

.login button[type=submit]:hover{
   background-color:rgb(11,177,141);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.register-btn{
  background: none;
  border: none;
  margin-bottom: 15px;
  margin-left: 277px;

}
.register-btn:hover{
  color:rgb(4,148,79) ;
}
.register-btn:active{
  color:rgb(13, 202, 161) ;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.registered-message {
  text-align: center;
  margin-top: 10px;
  color: green;
}
.with-margin{
  
  margin-left: 260px;
}
.widthLoginBtn{
  width: 79.5px;
}
.dspNone{
display: none;
}
.incorrect {
  
}
.registered-message-error{
  color: red;
font-size: small;
box-sizing: border-box;
margin-bottom: -20px;
}
</style>
