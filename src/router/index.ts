import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../components/Login.vue";
import Main from "../components/Main.vue";
import Home1 from "../views/Home1.vue";
import Home2 from "../views/Home2.vue";
import Register from '../components/Register.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home1",
    component: Home1,
  },
  {
    path: "/home/:id",
    name: "Home2",
    component: Home2,
  },
  {
    path:"/register",
    name:"Register",
    component:Register
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
