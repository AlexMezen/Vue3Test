<template>
<div class="dialog-post" v-if="show" @click="hideDialog">
<div @click.stop class="dialog-post-cont">
<slot></slot>
</div>
</div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin"
export default{
  mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog-post{
    top:0;
    bottom:0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
}
.dialog-post-cont{
    margin: auto;
    background: whitesmoke;
    border-radius: 15px;
    min-height: 100px;
    min-width: 400px;
    padding: 20px;
}
</style>