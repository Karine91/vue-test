<template lang='pug'>
    .page-content
        breadcrumbs(:routes='["Главная", "Корзина"]')
        h1.page-title Корзина
        .goods
            .goods__header
                .goods__selected
                    | Выделено 
                    span.goods__selected-count {{selected.length}}
                .goods__controls
                  a.goods__delete-btn(href="#" @click.prevent="deleteSelected")
                    span.goods__delele-wrapper
                       <svg class="goods__delete-icon" width="10" height="10" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg>
                    | Удалить отмеченные  
            .goods__table-wrapper
                table(cellspacing=0).table
                    goods-item(
                        v-for="(item, index) in goods"    
                        :data="item"
                        :index="index +1"
                        :key="item.id"
                        @changePrice="changeTotalPrice"
                        @addSelection="addSelected"
                        @removeSelection="removeSelected"
                    )
                table.table.price-results
                  tbody
                    tr.table__row
                      td.price-results__item Промежуточный итог по корзине: 
                      td.price-results__value {{totalPrice | formatNumber}}
                        span.price-results__currency {{getCurrency()}} 
                    tr.table__row 
                      td.price-results__item В том числе НДС:  
                      td.price-results__value {{tax | formatNumber}}
                        span.price-results__currency {{getCurrency()}} 
                .total
                  span.total__txt Итого: &nbsp;&nbsp;
                  span.total__value {{totalWithTax | formatNumber}}
                  span.total__currency {{getCurrency()}}     
                        


</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { getCurrencySymbol } from "../Common/utils";
export default {
  data() {
    return {
      selected: []
    };
  },
  computed: {
    ...mapGetters(["goods"]),
    totalPrice() {
      return this.goods.reduce((acc, next) => {
        return acc + +next.amount * +next.price;
      }, 0);
    },
    tax() {
      return this.totalPrice * 0.18;
    },
    totalWithTax() {
      return this.totalPrice + this.tax;
    }
  },
  created() {
    this.getGoods();
  },
  methods: {
    ...mapActions(["getGoods"]),
    ...mapMutations(["setGoodsItem", "deleteFromBusket"]),
    changeTotalPrice(changeData) {
      this.setGoodsItem(changeData);
    },
    getCurrency() {
      return getCurrencySymbol("RUB");
    },
    addSelected(id) {
      this.selected.push(id);
    },
    removeSelected(id) {
      let index = this.selected.findIndex(item => item === id);
      this.selected.splice(index, 1);
    },
    deleteSelected() {
      this.deleteFromBusket(this.selected);
      this.selected = [];
    }
  },

  components: {
    breadcrumbs: require("../BreadCrumbs"),
    goodsItem: require("./GoodsItem")
  }
};
</script>
<style lang='scss' src='./style.scss' scoped></style>