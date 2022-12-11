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
                redirect: {
                    name: 'DocumentsComponent'
                },

                children: [
                    {
                        path: 'documents',
                        name: 'DocumentsComponent',
                        component: () => import ('../components/DocumentsComponent.vue')
                    }, {
                        path: 'video',
                        name: 'VideoComponent',
                        component: () => import ('../components/VideoComponent.vue')
                    },

                ]
            },
            {
                path: "/forum",
                name: "forum",
                component: () => import ("../components/ForumComponent.vue")
            },
            {
                path: "/test",
                name: "Test",
                redirect: "test/list",
                children: [
                    {
                        path: "list",
                        name: "listTest",
                        component: () => import ("../components/TestsComponent.vue")
                    }, {
                        path: ":idTest",
                        name: "testDetail",
                        component: () => import ("../components/Test/TestDetailComponent.vue"),
                        children: [
                            {
                                path: 'do',
                                name: 'doTest',
                                component: () => import ("../components/Test/DoTestComponent.vue")

                                // component: () => import ("../components/TestComponent.vue")
                            }, {
                                path: 'update',
                                name: 'updateTest',
                                component: () => import ("../components/Test/UpdateTestComponent.vue"),
                                props: {
                                    status: 1
                                }

                            }, {
                                path: 'history',
                                name: 'historyTest',
                                component: () => import ("../components/Test/HistoryTestComponent.vue"),
                                props: {
                                    status: 2
                                }

                            }


                        ]
                    },
                ]
            },
            {
                path: "/charts",
                name: "charts",
                component: () => import ("../components/ChartsComponent.vue")
            }, {
                path: "/introduce",
                name: "introduce",
                component: () => import ("../components/IntroduceComponent.vue")
            },


        ]
    }, {
        name: "login",
        path: "/login",
        component: LoginComponent
    }, {
        name: "register",
        path: "/register",
        component: RegisterComponent
    },
];
export default routes;
