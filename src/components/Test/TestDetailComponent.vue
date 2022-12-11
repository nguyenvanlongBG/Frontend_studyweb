<template>
    <ModalCreateQuestion v-if="modalCreateQuestion.visible" @close="modalCreateQuestion.visible = false">

    </ModalCreateQuestion>
    <div class="exam">
        <NavbarListComponent />
        <!-- <DoTestComponent /> -->
        <RouterView></RouterView>
        <!-- <QuestionComponent v-for="question in questions" :key="question.question_id" :question="question" /> -->
    </div>
</template>
<script>
// import { useRoute } from 'vue-router';
// import { getQuestionTest } from '../../services/questionTest'

import ModalCreateQuestion from "../ModalCreateQuestion.vue"
import NavbarListComponent from "../Test/NavbarListComponent.vue"
// import DoTestComponent from './DoTestComponent.vue';
// import QuestionComponent from '../Question/QuestionComponent.vue';

// import { answerTest } from '../services/answerTest'
export default {
    name: "TestDetailComponent",
    components: {
        ModalCreateQuestion,
        NavbarListComponent,
        // DoTestComponent,
        // QuestionComponent
    },
    data() {


        return {
            infoTest: {},
            questions: [],
            modalCreateQuestion: {
                visible: false,
            },
            hasRole: false,
            formula: 'Giải phương trình $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {


        },
        choiceAnswer($id) {
            var answer = document.getElementById("question_" + $id);
            answer.classList.add("answer-content-choice");
        },
        createQuestion() {
            this.modalCreateQuestion.visible = true;
        },
    },
}
</script>
<style>
.exam {
    display: flex;
}





.info-list-question {
    width: 79%;
    margin-top: 3px;
    margin-right: 2px;
    position: absolute;
    right: 0;
}

.info-question {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 5px 15px;
    border-style: solid;
    border-color: #ea4f4c;
    /* padding: px; */
}

.list-choice {
    display: flex;
    flex-wrap: wrap;
    padding: auto;
}

.nameUser {
    font-weight: bold;
}



.choice {
    display: block;
    width: 48%;
    margin-left: 5px;
    margin-top: 5px;
    min-height: 60px;
}

.choice-label {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    border-style: solid;
    border-color: #e2d5d5;

}



input.hidden-radio {
    display: none;

}

.choice-label:hover {
    display: block;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-radius: 5px;
    border-color: #29cadf;
    background-color: rgb(166, 172, 172);
    box-sizing: border-box;
}


input.hidden-radio:checked+span.choice-label {
    display: block;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-radius: 5px;
    border-color: #29cadf;
    background-color: rgb(166, 172, 172);
    box-sizing: border-box;
}

.answer-content-choice {
    background-color: #222;
    border-color: #222;
    color: white;
}

.tool-button-test {
    margin-left: 2px;
    margin-top: 2px;
    height: 35px;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;

}

.action-question {
    margin-top: 2px;
    display: flex;
    justify-content: flex-end;
}
</style>