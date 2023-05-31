const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/shop",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/shop.vue") }],
  },
  {
    path: "/upgrades",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/upgrades.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
