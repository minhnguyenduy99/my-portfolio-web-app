import { createRouter, createWebHistory } from "vue-router";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";
import Experiences from "../views/Experiences.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "About" },
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: Experiences,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/aboutme",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
