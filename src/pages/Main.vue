<template>
<!-- <div>
        <input type="checkbox" id="highload1" name="highload1">
<label for="highload1" data-onlabel="Done" data-offlabel="Undone" class="lb1"></label>
</div> -->
<button @click="toggleCheckmark" :class="{ 'checked': isChecked }">Нажми меня</button>

</template>

<script>
export default{
    data() {
        return {
          isChecked: false
        };
      },
      methods: {
        toggleCheckmark() {
          this.isChecked = !this.isChecked;
        }
      }
}
</script>

<style scoped>
.checked::after {
      content: "\2713"; 
      margin-left: 5px;
    }
/* .lb1 {
    margin: 2em;
}
#highload1 {
    display: none;
}
#highload1+.lb1,
#highload1+.lb1::before,
#highload1+.lb1::after {
    transition: all 0.3s;
}
#highload1+.lb1 {
    display: inline-block;
    position: relative;
    width: 70px; 
    height: 30px; 
    border-radius: 15px; 
    cursor: pointer;
}
#highload1+.lb1::before {
    display: block;
    content: attr(data-offlabel);
    position: absolute;
    top: 9px; 
    right: 5px; 
    color: aliceblue;
    font-family: 'Open Sans', sans-serif;
    font-size: 10px; 
}
#highload1+.lb1::after {
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 1.5px; 
    left: 1.5px; 
    width: 27px; 
    height: 27px;
    background-color: rgb(131, 202, 168);
}
#highload1:checked+.lb1::before {
    content: attr(data-onlabel);
    left: 8px; 
    right: auto;
    color: #fff;
}
#highload1:checked+.lb1::after {
    left: 41.5px;
    background-color: rgb(0, 92, 128);
}
#highload1+.lb1 {
    background-color: rgb(0, 92, 128);
}
#highload1:checked+.lb1 {
    background-color: rgb(131, 202, 168);
}
#highload1:checked+.lb1::before {
    color: #fff;
} */

</style>