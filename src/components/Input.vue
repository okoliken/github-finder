<template>
  <input
    type="search"
    class="form-control"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Search for a Github User"
    required
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
};
</script>

<style></style>
