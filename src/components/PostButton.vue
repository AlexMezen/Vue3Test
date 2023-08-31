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
    padding: 8px 13px;
    background: none;
    color:  rgb(0, 92, 128);
    border: 1px solid rgb(0, 92, 128);
    align-self: flex-end;
    cursor: pointer;
    transition-duration: 0.3s;
}
.btn:first-of-type{
  margin-right: 15px;

}
.btn:hover {
  background-color: teal;
  color: aliceblue;
  border-radius: 5px;
  transition: all border-radius 0.3s;
}
.btn:active{
  background-color: rgba(7, 150, 102, 0.636);
}

</style>
