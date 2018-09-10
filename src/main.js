import Vue from "vue";
import App from "./App.vue";

import { store } from "./store";
import {
  getCurrencyValue,
  getFormatNumber,
  closestPolyfill
} from "./components/Common/utils.js";

closestPolyfill();

//FILTERS

Vue.filter("currency", function(value, minDig = 0, maxDig = 0) {
  return getCurrencyValue(value, minDig, maxDig);
});

Vue.filter("formatNumber", function(value, minDig = 0, maxDig = 0) {
  return getFormatNumber(value, minDig, maxDig);
});

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
