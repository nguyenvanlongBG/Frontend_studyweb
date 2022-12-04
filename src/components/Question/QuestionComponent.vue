<template>
    <div class="block-question">
        <InfoGeneralComponent />
        <ContentQuestionComponent :questionDetail="question.content" />
        <CommentQuestionComponent :answers="question.answers" />
    </div>

</template>
<script>

import InfoGeneralComponent from "../Question/InfoGeneralComponent.vue"
import ContentQuestionComponent from "../Question/ContentQuestionComponent.vue"
import CommentQuestionComponent from "../Question/CommentQuestionComponent.vue"

export default {
    name: "QuestionComponent",
    components: {
        InfoGeneralComponent,
        ContentQuestionComponent,
        CommentQuestionComponent
    },
    props: ['question'],
    data() {
        return {
            // solution: {},
            dataModal: {
                visible: false,
                image: ''
            },
            data: [],
            solutions: [],
        }
    },
}
</script>
<style>

</style>