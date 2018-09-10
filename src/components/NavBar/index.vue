<template lang='pug'>
    ul.navbar
        nav-item(
            v-for="(nav, index) in menu" :key="index"
            :item="nav"
            :index="index"
        )
</template>
<script>
export default {
  data() {
    return {
      menu: [
        "каталог продукции",
        "все бренды",
        "подарки на 14 февраля",
        "подарки на 23 февраля",
        "подарки на 8 марта"
      ]
    };
  },
  components: {
    navItem: require("./NavBarItem")
  }
};
</script>
<style lang='scss' src='./style.scss' scoped></style>