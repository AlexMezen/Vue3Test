<template>
  <div class="dialog-post" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog-post-cont">
      <div class="close-icon" @click="hideDialog">
        <div class="close-bar1"></div>
        <div class="close-bar2"></div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
  mixins: [toggleMixin],
};
</script>

<style scoped>
.dialog-post {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;  
  z-index: 2;

}
.dialog-post-cont {
  margin: auto;
  background: whitesmoke;
  border-radius: 15px;
  min-height: 100px;
  min-width: 400px;
  padding: 20px;
  position: relative;
}
.close-icon {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 4;
}
.close-icon:hover .close-bar1 {
    transform: rotate(45deg);
    top: calc(50% - (2.5px /2));
}
.close-icon:hover .close-bar2 {
    transform: rotate(-45deg);
    top: calc(50% - (2.5px /2));
}
.close-bar1,
.close-bar2 {
    content:"";
    position:absolute;
    height:2.5px;
    width:100%;
    top:calc(50% - (2.5px /2));
    left:0%;
    background-color:black;
    transition-duration:.3s;
}
.close-bar1 {
    transform-origin:center center;
}
.close-bar2 {
    transform-origin:center center;
}
.close-icon:hover .close-bar1,
.close-icon:hover .close-bar2 {
  background-color: aquamarine;
  transition-duration: background-color .3s;
}
</style>