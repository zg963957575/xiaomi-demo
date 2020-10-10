import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRouter from "vue-router";
import Vant from "vant";
import LyTab from "ly-tab";
import VueLazyload from "vue-lazyload";

import "vant/lib/index.css";
import "./assets/css/reset.css";
import "./assets/css/normalize.css";
import "./assets/js/rem";

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(LyTab);
Vue.use(VueLazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
