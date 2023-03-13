// import { h, resolveComponent } from "vue";
import LoginComponent from "@/components/LoginComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
import {h, resolveComponent} from "vue";
const routes = [{
        path: "",
        name: "Home",
        redirect: "/login",
        children: [
            {
                name: "login",
                path: "/login",
                component: LoginComponent
            },
            {
                name: "RegisterComponent",
                path: "/register",
                component: RegisterComponent
            },
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
                        component: () => import ('../components/Library/DocumentsComponent')
                    }, {
                        path: 'videos',
                        name: 'VideoComponent',
                        component: () => import ('../components/Library/VideosComponent')
                    }, {
                        path: 'courses',
                        name: 'CoursesComponent',
                        component: () => import ('../components/Library/CoursesComponent')
                    }, {
                        path: ':id',
                        name: 'DetailReference',
                        component: () => import ('@/views/Library/DetailReference')
                    }

                ]
            },
            {
                path: "/forum",
                name: "forum",
                component: () => import ("../components/ForumComponent.vue")
            }, {
                path: "/groups",
                name: "groups",
                component: () => import ("../components/Group/GroupsComponent.vue")
            }, {
                path: "/play/:id",
                name: "roomPlay",
                component: () => import ("../components/Play/CardGameBoardComponent.vue")
            }, {
                path: "/classes",
                name: "Classes",
                component: {
                    render() {
                        return h(resolveComponent('router-view'))
                    }
                },
                children: [
                    {
                        path: '',
                        name: "ListClassroom",
                        component: () => import ("../views/Classroom/ListClassroom.vue")
                    }, {
                        path: ':id',
                        name: "Classroom",
                        component: () => import ("../views/Classroom/DetailClassroom.vue"),
                        children: [
                            {
                                path: '',
                                name: 'StudyRoom',
                                component: () => import ("../components/Classes/StudyRoomComponent.vue")
                            },
                            {
                                path: 'play',
                                name: 'PlayRoom',
                                component: () => import ("../components/Classes/PlayRoomComponent.vue")
                            },
                            {
                                path: 'self-learning',
                                name: 'SelfLearningRoom',
                                component: () => import ("../components/Classes/SelfLearningComponent.vue")
                            },
                            {
                                path: 'q-a',
                                name: 'QARoom',
                                component: () => import ("../components/Classes/QARoomComponent.vue")
                            }, {
                                path: 'achieves',
                                name: 'AchievesClassroom',
                                component: () => import ("../components/Classes/AchivesComponent.vue")
                            }, {
                                path: 'report',
                                name: 'ReportClassroom',
                                component: () => import ("../components/Classes/ReportClassComponent.vue")
                            }


                        ]
                    }
                ]
            }, {
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
                        component: () => import ("../components/Test/TestLayoutComponent.vue"),
                        redirect: {
                            name: 'detailTest'
                        },
                        children: [
                            {
                                path: '',
                                name: 'detailTest',
                                component: () => import ("../components/Test/DetailTestComponent.vue")
                            },
                            {
                                path: 'do',
                                name: 'doExam',
                                component: () => import ("../components/Exam/DoExamComponent.vue")
                            },
                            {
                                path: 'report',
                                name: 'reportTest',
                                component: () => import ("../components/Test/ReportTestComponent.vue")
                            },
                            {
                                path: 'update',
                                name: 'updateTest',
                                component: () => import ("../components/Test/UpdateTestComponent.vue")
                            }, {
                                path: 'exams',
                                name: 'listExam',
                                component: () => import ("../components/Test/ListExamComponent.vue")
                            }, {
                                path: 'mark/:idExam',
                                name: 'markExam',
                                component: () => import ("../components/Exam/MarkExamComponent.vue")
                            }, {
                                path: 'exam',
                                name: 'layoutHistoryTest',
                                component: () => import ("../components/Test/HistoryTestComponent.vue"),
                                children: [
                                    {
                                        path: ":idExam",
                                        name: 'historyTest',
                                        component: () => import ("../components/Exam/HistoryExamComponent.vue")
                                    }, {
                                        path: ":idExam/report",
                                        name: 'reportExam',
                                        component: () => import ("../components/Exam/ReportExamComponent.vue")
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, {
                path: "/competition",
                name: "competitions",
                redirect: {
                    name: "listCompetition"
                },
                children: [
                    {
                        path: "/competition/",
                        name: "listCompetition",
                        component: () => import ("../components/CompetitionsComponent.vue")
                    }, {
                        path: ":id",
                        redirect: {
                            name: "detailCompetition"
                        },
                        children: [
                            {
                                path: "",
                                name: "detailCompetition",
                                component: () => import ("../components/Competition/DetailCompetitionComponent")
                            }, {
                                path: "participate",
                                name: "ParticipateCompetition",
                                component: () => import ("../components/Competition/ParticipateCompetitionComponent")
                            }, {
                                path: "update",
                                name: "UpdateCompetition",
                                component: () => import ("../views/Competition/UpdateCompetition")
                            },

                        ]
                    }
                ]
            }, {
                path: "/glories",
                name: "glories",
                component: () => import ("../components/Glorie/GloriesComponent.vue")
            }, {
                path: "/confidential",
                name: "confidential",
                component: () => import ("../components/Confidential/ConfidentialsComponent")
            }, {
                path: "/introduce",
                name: "introduce",
                component: () => import ("../components/IntroduceComponent.vue")
            }, {
                path: "user/:id",
                name: "user",
                redirect: {
                    name: "profile"
                },
                children: [
                    {
                        path: '',
                        name: 'profile',
                        component: () => import ("../components/User/ProfileComponent")
                    },
                    {
                        path: 'target',
                        name: 'target',
                        component: () => import ("../components/User/TargetComponent"),
                        children: [
                            {
                                path: "detail"
                            }
                        ]
                    },

                    {
                        path: 'questions-bank',
                        name: 'questions-bank',
                        component: () => import ("../components/User/QuestionsBankComponent")
                    },
                    {
                        path: 'mission',
                        name: 'user-mission',
                        component: () => import ("../components/User/MissionComponent")
                    }, {
                        path: 'user-report',
                        name: 'user-report',
                        component: () => import ("../components/User/ReportTeacherComponent")
                    }, {
                        path: 'review',
                        name: 'user-review',
                        redirect: {
                            name: "detail-review"
                        },
                        children: [
                            {
                                path: '',
                                name: "list-review",
                                component: () => import ("../components/User/ReviewComponent")
                            }, {
                                path: ':id',
                                name: "detail-review",
                                component: () => import ("../components/User/ReviewDetailComponent")
                            }
                        ]
                    }

                ]
            }
        ]
    },];

export default routes;
