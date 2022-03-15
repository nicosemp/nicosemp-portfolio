import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CurriculumView from "@/views/CurriculumView.vue";

declare module "vue-router" {
  interface RouteMeta {
    enterClass?: string;
    leaveClass?: string;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
        leaveClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/cv",
      name: "curriculum-vitae",
      component: CurriculumView,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
        leaveClass: "animate__animated animate__fadeOut",
      },
    },
  ],
});

export default router;
