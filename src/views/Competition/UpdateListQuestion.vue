<template>
    <div>
        <h3>Cập nhật câu hỏi</h3>
        <div v-for="(question, index) in questions" :key="index">
            <QuestionComponent :type="2" :isOwner="false" :question="question" />
        </div>
        <div class="list-button">
            <button class="button button-next" @click="back">Trở lại</button>
            <button class="button button-next" @click="next">Lưu & Tiếp tục</button>
        </div>
    </div>
</template>
<script>
import QuestionComponent from '@/components/Question/QuestionComponent.vue';

export default {
    data() {
        return {
            questions: [{
                question: {
                    question_id: 1,
                    type: 2,
                    content: "OK"
                },
                choices: [],
                page: 1
            }, {
                question: {
                    question_id: 1,
                    type: 3,
                    content: "OK"
                },
                page: 1
            }]
        };
    },
    components: { QuestionComponent },
    methods: {
        back() {
            this.$emit('back')
        },
        next() {
            this.$emit('next')
        }
    }
}
</script>
<style>
.list-button {
    display: flex;
    justify-content: flex-end;
}

.button {
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 15px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>