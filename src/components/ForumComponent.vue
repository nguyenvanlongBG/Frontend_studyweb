<template>

  <div>
    <ModalSolution :idAnswer="idAnswer" v-if="displaySolution" @close="closeSolution" />

    <div class="container">
      <QuestionComponent v-for="(question, index) in  questions" :key="index" :question="question"
        :ref="'question_' + question.question.question_id" :id="'question_' + question.question.question_id"
        :index="startIndex + index" :type="0" :send="sendData" @send="sendData" @seeSolution="seeSolution" />
    </div>
  </div>
</template>

<script>
// import { getAnswer } from "../services/answer"
import { getQuestionNormal } from "../services/question"
import ModalSolution from "../components/ModalSolution.vue"
import QuestionComponent from "./Question/QuestionComponent.vue"
import { ref } from '@vue/reactivity'
const axios = require('axios')
export default {
  name: "ForumComponent",
  components: {
    ModalSolution,
    QuestionComponent,
  },
  setup() {
    const isLoading = ref(false)
    const canUpdate = ref(true)
    const isUpdateEssay = ref(false)
    const questions = ref([])
    const moveTo = ref("")
    const render = ref(true)
    const displaySolution = ref(false)
    const sendData = ref({})
    const startIndex = ref(1)
    const idAnswer = ref(0)
    return {
      isLoading,
      displaySolution,
      canUpdate,
      isUpdateEssay,
      questions,
      moveTo,
      sendData,
      startIndex,
      idAnswer,
      render
    }
  },

  mounted() {
    // console.log("OK")
    this.handleGetData()
  },
  methods: {
    seeSolution(id) {

      this.idAnswer = id
      this.displaySolution = true
    },
    closeSolution() {
      this.displaySolution = false
      this.idAnswer = 0
    },
    uploadSolution(e, $id) {
      console.log($id);
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      axios.post('http://localhost:8000/api/createQuestionNormal', {})
        .then(response => {
          console.log(response)
        })
        .catch(response => {
          console.log(response)
        })
    }
    ,
    async handleGetData() {
      this.data = []

      const responseQuestions = await getQuestionNormal()
      this.questions = responseQuestions.data.data.questions;
      console.log(this.questions)


    },
    showMenu() {
      var library = document.getElementById('library');

      library.addEventListener('click', function () {
        // Chưa có thì thêm có thì xóa
        library.classList.toggle("active");

        var elements = document.querySelectorAll('.parent:not(#library)');
        elements.forEach(element => {
          element.classList.toggle("invisible");
        });
      }, false);


    },
    choiceAnswer() {

    },

  }
}
</script>
<style>
.container {
  margin: 0 15%;
}
</style>