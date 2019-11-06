import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/o-nas",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/vod",
    name: "vod",
    component: () => import("../views/Vod.vue"),
  },
  {
    path: "/kontakt",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
