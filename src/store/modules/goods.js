const goods = {
  state: {
    goods: []
  },
  getters: {
    goods: ({ goods }) => goods
  },
  mutations: {
    setGoods(state, data) {
      state.goods = data;
    },
    setGoodsItem(state, data) {
      let elemToChange = state.goods.find(elem => elem.id === data.id);
      elemToChange.amount = data.amount;
    },
    deleteFromBusket(state, data) {
      state.goods = state.goods.filter(item => !data.includes(item.id));
    }
  },
  actions: {
    getGoods({ commit, rootGetters }) {
      const { $http } = rootGetters;
      return $http
        .get("/goods.json")
        .then(res => commit("setGoods", res.body.goods));
    }
  }
};

export default goods;
