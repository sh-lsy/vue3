import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import localStorage from "@/utils/cache"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/home/home.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localStorage.getItem("token")
    if (!token) {
      return "/login"
    }
  }
})

export default router
