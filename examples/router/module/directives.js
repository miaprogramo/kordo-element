import { directives } from "@/utils/navList";

let routes = [];
directives.forEach((item) => {
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
