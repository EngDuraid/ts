// src/router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import EventDetails from "../components/events/EventDetails.vue";
import TodoView from "../views/TodoView.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
  {
    path: "/todo",
    name: "Todo",
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
