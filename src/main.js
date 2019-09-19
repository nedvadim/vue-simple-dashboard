import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import VueRouter from "vue-router";
import { routes } from "./routes";
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
