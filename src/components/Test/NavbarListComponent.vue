<template>
    <div class="overview-exam" v-if="render">
        <span class="nameUser">
            Họ và tên: Nguyễn Văn A
        </span>
        <div>
            <span class="navbar-list-question">
                Danh sách câu hỏi
            </span>
            <div class="list-numerical-question">
                <template v-for="(question, index) in numericalQuestion.data" :key="index">
                    <div :class="classType[parseInt(question.type)]" :id="'link_' + question.id"
                        @click="moveToQuestion(question.page, question.id)">
                        {{ index + 1 }}
                    </div>
                </template>

            </div>
        </div>

    </div>

</template>
<script>
import { ref } from 'vue';

export default {
    name: "NavbarListComponent",
    props: ['numericalQuestion'],
    setup() {
        // console.log(this.questions)
        const render = ref(true)
        const classType = ref(['stt-question answer-content-choice', 'stt-question answer-content-choice-checked', 'stt-question answer-content-choice-true', 'stt-question answer-content-choice-wrong'])
        return {
            classType, render
        }
    },


    methods: {
        moveToQuestion(page, id) {
            console.log("In navbar")
            console.log("Navbar page " + page)
            this.$emit('moveQuestion', page, 'question_' + id);

            // this.$emit('clickQuestion', page, index);
        }
    }
}
</script>
<style>
.overview-exam {
    width: 20%;
    position: fixed;
    border-style: solid;
    /* border-top: 5px solid #ea4f4c; */
}

.list-numerical-question {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    margin-top: 10px;
    padding-top: 5px;
    border-top: 5px solid #ea4f4c;

}

.navbar-list-question {
    font-weight: bold;
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

.answer-content-choice {
    background-color: white;
    border-color: #222;
    color: #222;
}

.answer-content-choice-checked {
    background-color: #222;
    border-color: #222;
    color: white;
}

.answer-content-choice-true {
    background-color: rgb(24, 247, 13);
    border-color: #222;
    color: white;
}

.answer-content-choice-wrong {
    background-color: rgb(236, 10, 10);
    border-color: #222;
    color: white;
}
</style>