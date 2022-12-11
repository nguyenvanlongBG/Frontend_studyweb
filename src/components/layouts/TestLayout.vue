<template>
    <div class="info-list-question">
        <button class="tool-button-test" @click="createQuestion" v-if="!myTests">
            Thêm câu hỏi
        </button>
        <div class="info-question" v-for="q in  questions" :key="q.id">
            <div class="action-question">
                <button class="tool-button-test" @click="createTest" v-if="!myTests">
                    Sửa
                </button>
                <button class="tool-button-test" @click="createTest" v-if="!myTests">
                    Xóa
                </button>
            </div>
            <span class="question-content">
                Câu :


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
</template>
<script>
export default {
    name: "TestLayout",
    props: [
        'questions',
        'idTest'
    ],
    data() {

        return {

        }
    },

    methods: {

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

</style>