<template>
    <ModalCreateQuestion v-if="modalCreateQuestion.visible" @close="modalCreateQuestion.visible = false">

    </ModalCreateQuestion>
    <div class="exam">
        <NavbarListComponent />
        <TestLayout :questions="questions" :idTest="idTest" />
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { getQuestionTest } from '../services/questionTest'
import { getInfoTestById } from "../services/test";
import ModalCreateQuestion from "../components/ModalCreateQuestion.vue"
import TestLayout from "../components/layouts/TestLayout.vue"
import NavbarListComponent from "../components/Test/NavbarListComponent.vue"

// import { answerTest } from '../services/answerTest'
export default {
    name: "TestComponent",
    components: {
        ModalCreateQuestion,
        TestLayout,
        NavbarListComponent
    },
    data() {
        const idTest = useRoute().params.idTest

        return {
            idTest,
            infoTest: {},
            questions: [],
            modalCreateQuestion: {
                visible: false,
            },
            formula: 'Giải phương trình $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            this.infoTest = await getInfoTestById(this.idTest);
            var params = {
                'idTest': this.idTest
            }
            var responseQuestions = await getQuestionTest(params);
            this.questions = responseQuestions.data
            console.log(this.questions.data)
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
    display: flex;
    justify-content: flex-end;
}
</style>