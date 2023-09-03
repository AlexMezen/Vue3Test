<template>
<select class="formSelect" :value="modelValue" @change="changeOption">
    <option disabled value="">Select from the list</option>
    <option v-for="option in options" 
    :key="option.value" 
    :value="option.value">
    {{ option.name }}

</option>
</select>
</template>

<script>
export default{
    
props:{
    modelValue:{
        type: String
    },
    options:{
        type: Array,
        default: () => []
        
    }
},
methods:{
    changeOption(event){
    this.$emit('update:modelValue', event.target.value)
    debugger;
    }
}
}
</script>

<style>
.formSelect {
  padding: 10px;
  font-size: 14px;
  border: 1px solid teal;
  border-radius: 4px;
  background-color: white;
  width: 15%;
  box-sizing: border-box;
}


.formSelect option {
  font-size: 16px;
  color: teal;
}

.formSelect:focus {
  border-color: teal;
  outline: 0;
  box-shadow: 0 0 0 0.2rem  rgb(131, 202, 168);
}


</style>