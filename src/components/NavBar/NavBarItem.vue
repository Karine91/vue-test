<template lang='pug'>
    li.navbar__item(
        :class="{'navbar__item--active' : isActive}" 
        @click="onClick"
    ) 
            | {{item}}
            <svg class="navbar__icon" width="12" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>
</template>
<script>
export default {
  props: {
    item: String,
    index: Number
  },
  data() {
    return {
      isActive: this.index === 0 ? true : false
    };
  },
  mounted() {
    this.$root.$on("setActive", this.resetActive);
  },
  methods: {
    onClick() {
      this.$root.$emit("setActive", this.index);
      this.isActive = true;
    },
    resetActive(ind) {
      if (this.index !== ind) {
        this.isActive = false;
      }
    }
  }
};
</script>
<style lang='scss' src='./style.scss' scoped></style>