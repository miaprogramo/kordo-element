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
  // {
  //   path: "/404",
  //   name: "404",
  //   component: () => import("@/views/404"),
  // },
  // {
  //   path: "/",
  //   redirect: "/index",
  // },
  // {
  //   path: "*",
  //   redirect: {
  //     name: "index",
  //   },
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
