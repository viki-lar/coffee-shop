import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView.vue";
import OurCoffeeVue from "../views/OurCoffeeVue.vue";
import GoodsPageVue from "../views/GoodsPageVue.vue";
import ContactsPageVue from "../views/ContactsPageVue.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeVue },
  { path: "/goods-page", component: GoodsPageVue },
  { path: "/contacts", component: ContactsPageVue },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
