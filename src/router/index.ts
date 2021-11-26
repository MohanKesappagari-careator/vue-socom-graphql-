import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../components/Login.vue";
import Main from "../components/Main.vue";
import Home from "../views/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
