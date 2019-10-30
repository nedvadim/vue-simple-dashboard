import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import VueRouter from "vue-router";
import { routes } from "./routes";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPencilAlt);
library.add(faTrashAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
}); //.$mount("#app");
