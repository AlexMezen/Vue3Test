<template>
<button class="btn"
   >
    <slot></slot>
</button>
</template>

<script>
export default{
}
</script>

<style scoped>
.btn{
    margin-top: 15px;
    margin-right: 15px;
    padding: 10px 15px;
    background: none;
    color:  rgb(0, 92, 128);
    border: 1px solid rgb(0, 92, 128);
    align-self: flex-end;
    cursor: pointer;
    transition-duration: 0.5s;
}
.btn:hover {
  background-color: teal;
  color: aliceblue;
  border-radius: 5px;
  transition: all border-radius 0.5s;
}
.btn:active{
  background-color: rgba(7, 150, 102, 0.636);
}

</style>
