<template>
    <div class="box-window-spaceship">
        <ReviewUniversalComponent>
            <template v-slot:navlist>
                <NavbarListComponent :numericalQuestion="numericalQuestion" @moveQuestion="moveQuestion" />
            </template>
            <template v-slot:slot-board>
                <div class="board-question side-move-speed-4">
                    <QuestionComponent :question="question" type="2" />
                </div>
            </template>
        </ReviewUniversalComponent>
    </div>
</template>
<script>
import ReviewUniversalComponent from '../../components/User/ReviewUniversalComponent.vue'
import NavbarListComponent from '../../components/Test/NavbarListComponent.vue'
import QuestionComponent from '@/components/Question/QuestionComponent.vue';
export default {
    name: "ReviewSpeed",
    components: {
        ReviewUniversalComponent,
        NavbarListComponent,
        QuestionComponent
    },
    data() {

        return {
            stop: false,
            speed: 4,
            Component: null,
            indexBoard: -2,
            boards: [
                {
                    content: "Biển 1"
                },
                {
                    content: "Biển 2"
                },
                {
                    content: "Biển 3"
                },
                {
                    content: "Biển 4"
                },
                {
                    content: "Biển 5"
                },
                {
                    content: "Biển 6"
                },
                {
                    content: "Biển 7"
                },
                {
                    content: "Biển 8"
                }
            ],
            numericalQuestion: {
                data: [{
                    id: 1,
                    type: 1,
                    page: 1
                }]
            },
            questions: [
                {
                    question: {
                        question_id: 1,
                        type: 2,
                        content: 'OK1',
                        suggest: null
                    },
                    choices: [
                        {
                            id: 1,
                            content: 'OK1'
                        }
                    ],
                    page: 1
                },
                {
                    question: {
                        question_id: 1,
                        type: 2,
                        content: 'OK2',
                        suggest: null
                    },
                    choices: [
                        {
                            id: 1,
                            content: 'OK1'
                        },
                        {
                            id: 2,
                            content: 'OK2'
                        },
                        {
                            id: 3,
                            content: 'OK3'
                        },
                        {
                            id: 4,
                            content: 'OK4'
                        }
                    ],
                    page: 1
                },
            ],
            question: {
                question: {
                    question_id: 1,
                    type: 2,
                    content: 'OK',
                    suggest: null
                },
                choices: [
                    {
                        id: 1,
                        content: 'OK1'
                    },
                    {
                        id: 2,
                        content: 'OK2'
                    },
                    {
                        id: 3,
                        content: 'OK3'
                    },
                    {
                        id: 4,
                        content: 'OK4'
                    }
                ],
                page: 1
            },
        }
    },
}
</script>
<style >
.box-window-spaceship {
    position: relative;
    height: 100%;
    background: whitesmoke;
}

.board-question {
    padding: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 78%;
    position: absolute;
    right: 0px;
    overflow-y: hidden scroll;
    min-height: 200px;
    top: 15px;
    z-index: 12;

}

.side-move-speed-1 {
    animation-name: move-position;
    animation-direction: normal;
    animation-delay: 0s;
    animation-duration: 120s;
    animation-timing-function: linear;
    animation-play-state: running;
    animation-iteration-count: infinite;
}

.side-move-speed-2 {
    bottom: -100px;
    animation-name: move-position;
    animation-direction: normal;
    animation-delay: 0s;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-play-state: running;
    animation-iteration-count: infinite;
}

.side-move-speed-3 {
    bottom: -100px;
    animation-name: move-position;
    animation-direction: normal;
    animation-delay: 0s;
    animation-duration: 40s;
    animation-timing-function: linear;
    animation-play-state: running;
    animation-iteration-count: infinite;
}

.side-move-speed-4 {
    bottom: -100px;
    animation-name: move-position;
    animation-direction: normal;
    animation-delay: 0s;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-play-state: running;
    animation-iteration-count: infinite;
}

@keyframes move-position {
    0% {
        left: 120%;
        border-color: #008;
    }

    1% {
        left: 115%;
        border-color: #008;
    }

    2% {
        left: 110%;
        border-color: #008;
    }

    3% {
        left: 100%;
        border-color: #008;
    }

    4% {
        left: 90%;
        border-color: #008;
    }

    5% {
        left: 80%;
        border-color: #008;
    }

    6% {
        left: 75%;
        border-color: #008;
    }

    7% {
        left: 70%;
        border-color: #008;
    }

    8% {
        left: 65%;
        border-color: #008;
    }

    9% {
        left: 60%;
        border-color: #008;
    }

    100% {
        left: -71%;
    }
}
</style>