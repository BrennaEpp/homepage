import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume
  }
];

// Always leave this as last one
routes.push({
  path: "*",
  component: () => import("../views/Error404.vue")
});

const router = new VueRouter({
  routes
});

export default router;
