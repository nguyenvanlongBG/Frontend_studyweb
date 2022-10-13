// import { h, resolveComponent } from "vue";
import LoginComponent from "@/components/LoginComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
const routes = [
  {
    path: "",
    name: "Home",
    component: () => import("../components/DashBoard.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../components/HomeComponent.vue"),
      },
      {
        path: "/library",
        name: "library",
        component: () => import("../components/Library.vue"),
      },
      {
        path: "/exam",
        name: "exam",
        component: () => import("../components/ExamComponent.vue"),
      },
      {
        path: "/charts",
        name: "charts",
        component: () => import("../components/ChartsComponent.vue"),
      },
      {
        path: "/introduce",
        name: "introduce",
        component: () => import("../components/IntroduceComponent.vue"),
      },
    ],
  },

  {
    name: "login",
    path: "/login",
    component: LoginComponent,
  },
  {
    name: "register",
    path: "/register",
    component: RegisterComponent,
  },
];
export default routes;
