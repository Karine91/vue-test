import Vue from "vue";
import Vuex from "vuex";
import VueResourse from "vue-resource";

Vue.use(Vuex);
Vue.use(VueResourse);

import goods from "./modules/goods";

export const store = new Vuex.Store({
  getters: {
    $http: () => VueResourse
  },
  modules: {
    goods
  }
});
