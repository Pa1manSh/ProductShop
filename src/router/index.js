import { createRouter, createWebHistory } from "vue-router";
import ProductListView from "../views/ProductListView.vue";
import FavoritesView from "../views/FavoritesView.vue";
import AboutUsView from "../views/AboutUsView.vue";

const routes = [
  { path: "/", component: ProductListView },
  { path: "/favorites", component: FavoritesView },
  { path: "/about", component: AboutUsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
