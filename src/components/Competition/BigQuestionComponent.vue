<template>
    <div class="big-question">
        <LatexComponent content="Hãy cho biết đây là địa danh nào" />
        <div class="grid-container">
            <div class="grid-row">
                <QuestionComponent v-for="(nummerical, index) in [1, 2, 3, 4]" :key="index" />
            </div>
            <div class="grid-row">
                <QuestionComponent v-for="(nummerical, index) in [1, 2, 3, 4]" :key="index" />
            </div>
            <div class="grid-row">
                <QuestionComponent v-for="(nummerical, index) in [1, 2, 3, 4]" :key="index" />
            </div>
            <div class="grid-row">
                <QuestionComponent v-for="(nummerical, index) in [1, 2, 3, 4]" :key="index" />
            </div>
        </div>
    </div>
</template>
<script>
import LatexComponent from "../LatexComponent.vue";
import QuestionComponent from "./QuestionComponent.vue";
export default {
    name: "BigQuestionComponent",
    components: {
        QuestionComponent,
        LatexComponent,
    },
    setup() {

    },
    methods: {

    }
}
</script>
<style>
.big-question {
    min-height: 600px;
}

.grid-container {
    display: table;
    width: 100%;
}

.grid-row {
    display: table-row;
}
</style>