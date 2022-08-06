import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/button",
      name: "button",
      component: () => import("../views/ButtonView.vue"),
    },
    {
      path: "/confirm",
      name: "confirm",
      component: () => import("../views/ConfirmView.vue"),
    },
  ],
});

export default router;
