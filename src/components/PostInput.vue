<template>
<input :value="modelValue" @input="updateInput" class="input">
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style scoped>
.input{
    margin-top: 15px;
    padding: 15px;
    width: 99%;
    border:1px solid rgb(0, 92, 128);
    color: rgb(0, 92, 128);
}

</style>