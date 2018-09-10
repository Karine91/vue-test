<template lang='pug'>
    .checkbox(:class="{'checkbox--checked' : checked}")
        input.checkbox__input(type="checkbox" :id="id" :checked="checked" @change="onChange")
        label.checkbox__label(:for="id")
</template>
<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    id: String / Number,
    checked: Boolean
  },
  methods: {
    onChange(e) {
      this.$emit("change", !!e.target.checked);
    }
  }
};
</script>
<style lang='scss' src='./style.scss' scoped></style>