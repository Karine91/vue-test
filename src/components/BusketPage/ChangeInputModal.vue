<template lang='pug'>
    .change-modal(v-if="show" id="modal")
        .change-modal__title Изменить количество
        .change-modal__content
            .col {{data.price}}
            counter.col(@changeAmount="changeAmount" :amountData="amount")
            .col.text-right {{resultPrice | currency}}
        .change-modal__buttons
            a.change-modal__btn.change-modal__btn--blue(href="#" @click.prevent.stop="saveChanges") Сохранить    
            a.change-modal__btn(href="#" @click.prevent.stop ="() => $emit('close')") Отменить    
</template>
<script>
export default {
  props: {
    data: Object,
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      amount: +this.data.amount || 1
    };
  },
  computed: {
    resultPrice() {
      return this.amount * this.data.price;
    }
  },
  watch: {
    show(show) {
      if (show) {
        document.addEventListener("click", this.closeListenHandler);
      } else {
        document.removeEventListener("click", this.closeListenHandler);
      }
    }
  },
  methods: {
    changeAmount(val) {
      this.amount = val;
    },
    closeListenHandler(e) {
      if (!e.target.closest("#modal")) {
        this.$emit("close");
      }
    },
    saveChanges() {
      this.$emit("saveChange", this.amount);
      this.$emit("close");
    }
  },
  components: {
    counter: require("../Common/Counter")
  }
};
</script>
<style lang='scss' scoped>
.change-modal {
  position: absolute;
  top: 95%;
  left: 0;
  background: #fff;
  z-index: 10;
  box-shadow: 0 0 13px rgba(#000, 0.25);
  width: 320px;
  padding: 20px 30px;

  &__title {
    color: #006599;
    font-family: "PFBeauSansPro-SeBold", sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__buttons {
    margin-top: 20px;
  }

  &__btn {
    margin-right: 20px;
    font-family: "PFBeauSansPro-SeBold", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    color: #333333;

    &--blue {
      color: #006599;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      text-decoration: none;
    }
  }
}
</style>