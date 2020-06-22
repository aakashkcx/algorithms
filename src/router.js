import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sorting-algorithms",
    name: "Sorting Algorithms",
    component: () => import("./SortingAlgorithms/"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
