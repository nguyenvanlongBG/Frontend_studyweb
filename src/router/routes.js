// import { h, resolveComponent } from "vue";
import LoginComponent from "@/components/LoginComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
const routes = [
  {
    path: "",
    name: "Home",
    redirect: "/library",
    children: [
      {
        path: "/library",
        name: "Library",
        redirect: {name: 'DocumentsComponent'},
        
        children: [
          {
            path: 'documents',
            name: 'DocumentsComponent',
            component: ()=> import('../components/DocumentsComponent.vue')
          },
           {
            path: 'video',
            name: 'VideoComponent',
            component: ()=> import('../components/VideoComponent.vue')
          },

        ]
      },
      {
        path: "/forum",
        name: "forum",
        component: () => import("../components/ForumComponent.vue"),
      },
      {
        path: "/exams",
        name: "exams",
        redirect: "",
        children: [
          {
          path: "",
          name: "listTest",
          component: () => import("../components/TestsComponent.vue"),
          },
          {
          path: ":idTest",
          name: "TestInfo",
          component: () => import("../components/TestComponent.vue"),
          },
        ]
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
