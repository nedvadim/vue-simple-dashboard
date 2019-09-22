import Vue from "vue";
import Vuex from "vuex";

import sidebar from "./modules/sidebar";
import lists from "./modules/layouts/lists/lists";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar,
    lists
  }
});
