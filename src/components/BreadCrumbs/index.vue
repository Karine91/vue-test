<template lang='pug'>
    ul.breadcrumbs
        li.breadcrumbs__item(v-for="(route, ind) in routes" :key="ind")
            a.breadcrumbs__link(href="#") {{route}}

</template>
<script>
export default {
  props: {
    routes: Array
  }
};
</script>
<style lang='scss' src='./style.scss' scoped></style>