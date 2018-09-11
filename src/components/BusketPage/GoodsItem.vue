<template lang='pug'>
    tr.table__row(@click="selectRow")
        td.table__cell(width="90")
            checkBox(v-model="isChecked" :id="data.id")
            span.table__row-count {{index}}
        td.table__cell.table__cell--align-center
            img(:src="data.image", alt="")
        td.table__cell
            | {{data.description}}
        td.table__cell
            .price
                .col.price__per-one {{data.price | currency}}
                .col.text-center x
                .col.text-center
                    .price__amount.input(@click.stop="showAmountModal") {{data.amount}}
                .col.text-center =
                .col.text-right.price__result {{priceResult | currency}}
                modal-change(
                    :show="showModal"
                    :data="data"
                    @close="() => showModal = false"
                    @saveChange="emitChange"
                )



</template>
<script>
export default {
  props: {
    data: Object,
    index: Number
  },
  data() {
    return {
      isChecked: false,
      showModal: false
    };
  },
  watch: {
    isChecked(val) {
      if (val) {
        this.$emit("addSelection", this.data.id);
      } else {
        this.$emit("removeSelection", this.data.id);
      }
    }
  },
  computed: {
    priceResult() {
      return +this.data.price * +this.data.amount;
    }
  },
  methods: {
    emitChange(newAmount) {
      this.$emit("changePrice", { id: this.data.id, amount: newAmount });
    },
    showAmountModal() {
      this.showModal = !this.showModal;
    },
    selectRow() {
      this.isChecked = !this.isChecked;
    }
  },
  components: {
    checkBox: require("../Common/CheckBox"),
    modalChange: require("./ChangeInputModal")
  }
};
</script>
<style lang='scss' scoped>
.table__row {
  cursor: pointer;

  transition: background ease 0.3s;

  &:hover {
    background: #f1f1f1;
  }
}

.table__cell {
  background-image: url("~images/dotted.png");
  background-repeat: repeat-y;
  background-position: top right;
  padding: 20px;
  vertical-align: middle;
  color: #252525;

  &:last-child {
    background: none;
    position: relative;
  }
}
.table__cell--align-center {
  text-align: center;
}

.table {
  &__row-count {
    vertical-align: middle;
    margin-left: 20px;
  }
}

.price {
  display: flex;
  min-width: 300px;
  align-items: center;

  &__per-one {
    color: #626262;
  }

  &__amount {
    display: inline-flex;
  }
}
</style>