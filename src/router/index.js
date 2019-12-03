import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ResumeCode from "../views/ResumeCode.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/resumecode",
    name: "resumecode",
    component: ResumeCode
  }
];

// Always leave this as last one
routes.push({
  path: "*",
  component: () => import("../views/Error404.vue")
});

const router = new VueRouter({
  // mode: 'history',
  routes
});

export default router;
