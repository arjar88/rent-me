import { createRouter, createWebHistory } from "@ionic/vue-router";
import tabs from "../components/Tabs.vue";

const routes = [
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    path: "/tabs/",
    component: tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "profile",
        component: () => import("../views/Profile.vue"),
      },
      {
        path: "message",
        component: () => import("../views/MessagePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
