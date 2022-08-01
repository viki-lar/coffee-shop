import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView.vue";
import OurCoffeeView from "../views/OurCoffeeView.vue";
import GoodsPageView from "../views/GoodsPageView.vue";
import ContactsPageView from "../views/ContactsPageView.vue";
import ThanksPageView from "../views/ThanksPageView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/goods-page", component: GoodsPageView },
  { path: "/contacts", component: ContactsPageView },
  { path: "/thank-you", component: ThanksPageView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
