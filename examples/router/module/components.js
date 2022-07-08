import { components } from "@/utils/navList";

let routes = [];
components.forEach((item) => {
  item.children.forEach((child) => {
    routes.push({
      path: child.path,
      name: child.name,
      component: () => import("@/views/index"),
      meta: {
        title: child.title,
      },
    });
  });
});

export default routes;
