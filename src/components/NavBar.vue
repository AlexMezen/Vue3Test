<template>
<div class="nav">
    <div class="wrap" @click="$router.push('/')"><img class="main-img" src="data:image/jpeg;base64,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"></div>
    <div class="nav-btns">
        <post-button @click="$router.push('account')">Account</post-button>
        <post-button @click="$router.push('about')">About</post-button>
        <div class="form-check form-switch mt-3 ml">
    <input
    class="form-check-input"
  :class="{ 'dark-mode': darkMode }"
  type="checkbox"
  id="darkModeSwitch"
  @change="toggleDarkMode"
    />
    <label class="form-check-label" for="darkModeSwitch">
      {{ darkMode ? 'Dark Mode' : 'Light Mode' }}
    </label>
  </div>
    </div>
</div>
</template>

<script>
import PostButton from './PostButton.vue';
export default {
  components: {
    PostButton,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
  this.darkMode = !this.darkMode;
  document.body.classList.toggle('dark-mode');

  }}}
</script>


<style>
.nav{
    height: 100px;
    background-color: rgb(131, 202, 168);
    box-shadow: 0px 2px 4px grey;
        display: flex;
    align-items: center;
    padding: 0px 15px;
}
.nav-btns{
margin-left: auto;
margin-top: 16px;
margin-bottom: 0px;
}
.main-img{
    object-fit: cover;
    height: 90px;
    width: 100px;
    transition-duration: 0.5s;

    
}
.wrap{
    overflow: hidden;
    border: 1px solid black;
    height: 89px;
    width: 99px;

}

.main-img:hover{
    transition:  1s ease;
    transform: scale(2.0, 2.0);
    cursor: pointer;

}
.form-check-input:checked {
  background-color: teal !important;
  border-color: teal !important;
}
.form-check-input:focus {
  box-shadow: none !important;
}
body.dark-mode {
  background-color: #333;
}

body.dark-mode * {
  color: white;
}
body.dark-mode .input{
 background-color: #555454 !important;  
 color: aliceblue;
}
body.dark-mode textarea,
body.dark-mode textarea:focus
{
background-color:#555454;
border-color:aquamarine;
color: aliceblue;
}
body.dark-mode ::placeholder{
color: #a7a7a7;
}
body.dark-mode select{
  background-color: #555454;
  color: white;
}
body.dark-mode .formSelect option{
  color: white;
}
body.dark-mode .img-thumbnail{
  background: #333;
}
body.dark-mode .post{
border-color: aquamarine;
}
body.dark-mode .btn{
border-color: aquamarine;
color: aliceblue;
}
body.dark-mode .dialog-post-cont{
  background:#333;
}
body.dark-mode .nav{
  background-color: rgb(99, 152, 126);
}
body.dark-mode .input{
border-color: aquamarine;
}
body.dark-mode .close-bar2  {
  background-color: rgb(146, 151, 156);
}
body.dark-mode .form-check-input:checked {
  background-color: teal !important;
  border-color: teal !important;
}
body.dark-mode .none-style{
  color: white;
}
.dark-mode .form-check-input {
  background-color: darkgray;
  border-color: darkgray;
}


.ml{
  margin-left: 57px;
  margin-top: 10px !important;
}
</style>