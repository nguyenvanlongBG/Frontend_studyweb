<template>
    <!-- <img src="image/logo.png" class="img-question" /> -->
    <LatexComponent :questionDetail="questionDetail"></LatexComponent>
</template>
<script>
import LatexComponent from "../LatexComponent.vue"
export default {
    name: "ContentQuestionComponent",
    components: {
        LatexComponent
    },
    props: ['questionDetail'],

}
</script>