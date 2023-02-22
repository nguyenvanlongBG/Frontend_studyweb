<template>
    <div>
        <div class="question">
            <h3 v-if="!display">
                Câu {{ index }}
            </h3>
            <Transition name="slide-fade">
                <QuestionComponent :question="question" :ref="'question_' + question.question.question_id"
                    :id="'question_' + question.question.question_id" :index="index" :type="4" :send="sendData"
                    :isOwner="true" v-if="display" />
            </Transition>
            <div @click="display = !display" class="pull-up-down">
                <i class="fa fa-caret-down color-brand" aria-hidden="true" v-if="!display"></i>
                <i class="fa-solid fa-caret-up color-brand" v-if="display"></i>
            </div>
        </div>
        <div>
            <div class="answer-result">
                <div class="answer-mark">
                    <h4>Đáp án học sinh</h4>
                    <LatexComponent :isUpdate="false" :content="contentAnswer ? contentAnswer : ''" />
                </div>
                <div class="result">
                    <h4>Đáp án </h4>
                    <LatexComponent :isUpdate="false"
                        :content="question.question.contentResult ? question.question.contentResult : ''" />
                </div>
                <div class="mark">
                    <h4>Điểm </h4>
                    <div class="mark-point">
                        <input type="number" :disabled="question.question.type == 2" class="point"
                            :max="question.question.point" min="0" v-model="markPoint" />
                        <span class="max-point">/{{ question.question.point }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, Transition } from 'vue'
import LatexComponent from '../LatexComponent.vue'
import QuestionComponent from '../Question/QuestionComponent.vue'
export default {
    name: "MarkQuestionComponent",
    components: {
        QuestionComponent,
        Transition,
        LatexComponent
    },
    watch: {
        markPoint() {
            this.$emit('mark', { question_id: this.question.question.question_id, point: this.markPoint })
        }
    },
    props: ['question', 'index'],
    setup() {
        const display = ref(true)
        const contentAnswer = ref('')
        return {
            display, contentAnswer
        }
    },
    created() {
        if (this.question.question.type == 2 || this.question.question.type == 1) {
            this.display = false
        }
        if (this.question.question.type == 2) {
            this.question.choices.forEach(choice => {
                if (choice.id == this.question.question.answer) {
                    this.contentAnswer = choice.content
                }
            });
        } else {
            this.contentAnswer = this.question.question.answer
        }
    },
    data() {
        return {
            markPoint: this.question.question.markPoint
        }
    },
    methods: {

    }
}
</script>
<style scoped>
.slide-fade-enter-active {
    transition: all 0.4s linear;
}

.slide-fade-leave-active {
    transition: all 0.4s linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.question {
    background-color: #222;
    color: white;
    margin-top: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.color-brand {
    color: #ea4f4c;
}

.pull-up-down {
    display: flex;
    justify-content: center;
    background-color: rgb(179, 176, 176);
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.answer-result {
    display: flex;
    justify-content: space-between;
}

.answer-mark {
    flex: 1 1 47%;
}

.result {
    flex: 1 1 47%;
}

.mark {
    background-color: white;
}

.point {
    min-width: 45px;
    background-color: rgb(209, 205, 205);
    border: white;
    font-size: 25px;
    font-weight: bold;
}

.mark-point {
    display: flex;
}

.max-point {
    font-size: 25px;
    font-weight: bold;
}
</style>