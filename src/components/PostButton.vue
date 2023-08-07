<template>
<button class="btn hov">
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
}
.hov:hover{
    color: black;
    border: 2px solid teal;
    font-weight: bolder;

}

</style>