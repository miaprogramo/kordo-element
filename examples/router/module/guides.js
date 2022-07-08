import { guides } from "@/utils/navList";

let routes = [];
guides.forEach((item) => {
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
