import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./Home/"),
  },
  {
    path: "/sorting",
    name: "Sorting",
    component: () => import("./Sorting/"),
  },
  {
    path: "/pathfinding",
    name: "Pathfinding",
    component: () => import("./Pathfinding/"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
