<template>
    <div class="exam">
        <div class="overview-exam">
            <span class="nameUser">
                Họ và tên: Nguyễn Văn A
            </span>
            <div>
                <span class="navbar-list-question">
                    Danh sách câu hỏi
                </span>
                <div class="list-numberical-question">
                    <div class="stt-question" id="question_1">
                        1
                    </div>
                    <div class="stt-question" id="question_2">
                        2
                    </div>
                    <div class="stt-question" id="question_3">
                        3
                    </div>
                    <div class="stt-question" id="question_4">
                        4
                    </div>
                    <div class="stt-question">
                        5
                    </div>
                    <div class="stt-question">
                        6
                    </div>
                    <div class="stt-question">
                        7
                    </div>
                    <div class="stt-question">
                        8
                    </div>
                    <div class="stt-question">
                        9
                    </div>
                    <div class="stt-question">
                        10
                    </div>
                    <div class="stt-question">
                        11
                    </div>
                    <div class="stt-question">
                        12
                    </div>
                    <div class="stt-question">
                        13
                    </div>
                    <div class="stt-question">
                        14
                    </div>
                    <div class="stt-question">
                        15
                    </div>
                    <div class="stt-question">
                        16
                    </div>
                    <div class="stt-question">
                        17
                    </div>
                    <div class="stt-question">
                        18
                    </div>
                    <div class="stt-question">
                        19
                    </div>
                    <div class="stt-question">
                        20
                    </div>
                    <div class="stt-question">
                        21
                    </div>
                    <div class="stt-question">
                        22
                    </div>
                    <div class="stt-question">
                        23
                    </div>
                    <div class="stt-question">
                        24
                    </div>
                    <div class="stt-question">
                        25
                    </div>
                    <div class="stt-question">
                        26
                    </div>
                    <div class="stt-question">
                        27
                    </div>
                    <div class="stt-question">
                        28
                    </div>
                    <div class="stt-question">
                        29
                    </div>
                    <div class="stt-question">
                        30
                    </div>

                </div>
            </div>

        </div>
        <div class="info-list-question">

            <div class="info-question" v-for="q in  questions" :key="q.id">
                <span class="question-content">
                    Câu : {{ q.question.content }}
                </span>
                <div class="list-choice">
                    <label class="choice" @click="choiceAnswer(1)" for="1" v-for="choice in q.choices" :key="choice.id">
                        <input type="radio" class="hidden-radio" id="1" name="ID_Cau_Hoi_1">
                        <span class="choice-label">
                            A: {{ choice.content }}
                        </span>
                    </label>



                </div>
            </div>










        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { getQuestionTest } from '../services/questionTest'
import { getInfoTestById } from "../services/test";
// import { answerTest } from '../services/answerTest'
export default {
    name: "UpdateQuestionComponent",
    data() {
        const idTest = useRoute().params.idTest

        return {
            idTest,
            infoTest: {},
            questions: [],
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
        }
    },
}
</script>
<style>
.exam {
    display: flex;
}

.overview-exam {

    width: 20%;

    position: fixed;
    border-style: solid;
    /* border-top: 5px solid #ea4f4c; */
}

.list-numberical-question {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    margin-top: 10px;
    padding-top: 5px;
    border-top: 5px solid #ea4f4c;

}

.stt-question {
    display: inline-grid;
    text-align: center;
    align-items: center;
    margin: 1px;
    height: 40px;
    border-style: solid;
    border-radius: 5px;
}

.info-list-question {
    width: 78%;
    margin-top: 10px;
    position: absolute;
    right: 0;
}

.info-question {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 15px;
    border-style: solid;
    border-color: #ea4f4c;
}

.list-choice {
    display: flex;
    flex-wrap: wrap;
}

.nameUser {
    font-weight: bold;
}

.navbar-list-question {
    font-weight: bold;
}

.choice {
    display: block;
    width: 45%;
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
</style>