<template lang="pug">
  #app
    app-header
    busket-page
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader: require("./components/Header"),
    busketPage: require("./components/BusketPage")
  }
};
</script>

<style lang="scss">
#app {
  padding: 30px 85px;
}
</style>
