import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home";
import Shop from "../views/shop/Shop";
import Classify from "../views/classify/Classify";
import Mine from "../views/mine/Mine";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop
  },
  {
    path: "/classify",
    name: "Classify",
    component: Classify
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine
  }
];

const router = new VueRouter({
  routes
});

export default router;
