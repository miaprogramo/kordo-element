import { methods } from "@/utils/navList";

let routes = [];
methods.forEach((item) => {
  routes.push({
    path: item.path,
    name: item.name,
    component: () => import("@/views/index"),
    meta: {
      title: item.title,
    },
  });
});

export default routes;
