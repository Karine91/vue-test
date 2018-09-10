<template lang='pug'>
    .counter(@click.stop="")
        button(@click="decrement").counter__btn -
        input.input.counter__value-input(type="text" :value="amount" @input="onInput")
        button(@click="increment").counter__btn +
</template>
<script>
export default {
  props: {
    amountData: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      amount: this.amountData,
      min: 1,
      max: 9999
    };
  },
  watch: {
    amount() {
      this.$emit("changeAmount", this.amount);
    }
  },
  methods: {
    increment() {
      if (this.amount + 1 <= this.max) {
        this.amount++;
      }
    },
    decrement() {
      if (this.amount - 1 >= this.min) {
        this.amount--;
      }
    },
    onInput(e) {
      let value = e.target.value;
      if (value <= this.max && value >= this.min) {
        this.amount = value;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-basis: 60px;

  &__value-input {
    width: 60px;
    margin: 0 5px;
    text-align: center;
  }

  &__btn {
    background: #559abc;
    border: none;
    width: 20px;
    height: 20px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
  }
}
</style>