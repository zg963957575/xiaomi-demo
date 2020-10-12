import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flag: true
  },
  mutations: {
    f1(state,val){
        state.flag=val
    }
  },
  actions: {},
  modules: {}
});
