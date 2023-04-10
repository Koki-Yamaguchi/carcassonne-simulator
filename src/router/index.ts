import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SimulatorView from "../views/SimulatorView.vue";
import SettingsView from "../views/SettingsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/simulator/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/simulator",
      name: "simulator",
      component: SimulatorView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
