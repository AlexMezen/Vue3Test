<template>
<button class="btn">
    <slot></slot>
</button>
</template>

<script>
export default{

}
</script>

<style>
.btn{
    margin-top: 15px;
    margin-right: 15px;
    padding: 10px 15px;
    background: none;
    color:  rgb(0, 92, 128);
    border: 1px solid rgb(0, 92, 128);
    align-self: flex-end;
    
}
</style>