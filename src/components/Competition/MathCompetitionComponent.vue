<template>
    <div>
        <div v-if="!doFinal">
            <div>
                <QuestionComponent :type="1" :isOwner="false" :question="questions[index]" v-if="refresh" />
                <div class="navigation-question">
                    <button class="action-button-move" @click="moveQuestion(-1)"
                        v-if="index <= (questions.length - 1) && index > 0">Quay
                        lại
                    </button>
                    <button class="action-button-move" @click="moveQuestion(1)" v-if="index < questions.length - 1">
                        Tiếp tục
                    </button>
                    <button class="action-button-move" v-if="index == questions.length - 1" @click="finalChallenge()">
                        Thử thách
                    </button>
                </div>
            </div>
        </div>
        <MagicMathComponent v-else />
</div>
</template>
<script>
import MagicMathComponent from './MagicMathComponent.vue';
import QuestionComponent from "../Question/QuestionComponent.vue";
import { ref } from 'vue';

export default {
    name: "MathCompetitionComponent",
    components: { MagicMathComponent, QuestionComponent },
    setup() {
        const refresh = ref(true)
        const displayFinal = ref(false)
        const doFinal = ref(false)
        const index = ref(0)
        return {
            doFinal, index, refresh, displayFinal
        }
    },
    created() {
        console.log("Created")
        console.log(this.indexQuestion)
    },

    data() {
        return {
            questions: [{
                question: {
                    question_id: 1,
                    type: 3,
                    content: 'OK1'
                },
                page: 1
            }, {
                question: {
                    question_id: 1,
                    type: 3,
                    content: 'OK2'
                },
                page: 1
            }]
        }
    },
    methods: {
        moveQuestion(move) {
            console.log(this.index)
            this.index += move
            console.log(this.index)
            this.refresh = false
            this.$nextTick(() => {
                this.refresh = true
            })
        },
        finalChallenge() {
            this.doFinal = true
        }
    }
}

</script>
<style scoped>
.action-button-move {
    margin-left: 12px;
    margin-top: 2px;
    margin-right: 12px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.action-button-move:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.navigation-question {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 55px;
    background-color: #222;
}
</style>