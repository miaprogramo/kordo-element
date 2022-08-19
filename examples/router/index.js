import Vue from "vue";
import VueRouter from "vue-router";
import moduleRouter from "./module/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Introduce",
    component: () => import("@/views/index"),
  },
  ...moduleRouter,
  {
    path: "*",
    redirect: {
      name: "Introduce",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
