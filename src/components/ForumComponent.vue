<template>

  <div>
    <ModalSolution :idSolution="idSolution" v-if="displaySolution" @close="closeSolution" />
    <div class="container">
      <QuestionComponent v-for="(question, index) in  questions" :key="index" :question="question"
        :ref="'question_' + question.question.question_id" :id="'question_' + question.question.question_id"
        :index="startIndex + index" :type="0" @seeSolution="seeSolution" />
    </div>
  </div>
</template>

<script>
// import { getAnswer } from "../services/answer"
import { getQuestionNormal } from "../services/question"
import ModalSolution from  "./Answer/ModalSolution.vue"
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
    const questions = ref([])
    const moveTo = ref("")
    const render = ref(true)
    const displaySolution = ref(false)
    const sendData = ref({})
    const startIndex = ref(1)
    const idSolution = ref(null)
    return {
      isLoading,
      displaySolution,
      canUpdate,
      questions,
      moveTo,
      sendData,
      startIndex,
      idSolution,
      render
    }
  },

  mounted() {
    // console.log("OK")
    this.handleGetData()
  },
  methods: {
    seeSolution(id) {
      console.log(id)
      this.idSolution = id
      console.log(this.idSolution)
      this.displaySolution = true
    },
    closeSolution() {
      this.displaySolution = false
      this.idSolution = null
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
      const responseQuestions = await getQuestionNormal()
      this.questions = responseQuestions.data.questions;
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