<template>

  <body>
    <ModalSolution v-if="dataModal.visible" @close="dataModal.visible = false" @image="dataModal.image">
      <template v-slot:image>
        <img :src="dataModal.image" />
      </template>
    </ModalSolution>
    <div class="container">
      <QuestionComponent v-for="question in data" :question="question" :key="question.id">
      </QuestionComponent>
    </div>
  </body>
</template>

<script>
import { getAnswer } from "../services/answer"
import { getQuestion } from "../services/question"
import ModalSolution from "../components/ModalSolution.vue"
import QuestionComponent from "./Question/QuestionComponent.vue"

const axios = require('axios')
export default {
  name: "ForumComponent",
  components: {
    ModalSolution,
    QuestionComponent
  },
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

  mounted() {
    // console.log("OK")
    this.getListPost()
  },
  methods: {
    seeAnswer($content) {
      this.dataModal.visible = true
      this.dataModal.image = $content
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
    async getListPost() {
      this.data = []

      const response = await getQuestion()
      const responseQuestionNormal = response.data

      // console.log(response.data)
      // console.log("responseQuestionNormal")
      // console.log(responseQuestionNormal)
      responseQuestionNormal.map(
        async question => {
          // console.log(question.id)
          var pushedData = { ...question }

          // const params = {
          //   'id': question.id
          // }
          const response = await getAnswer(question.id)
          const answers = response.data
          pushedData.answers = answers
          // console.log("Before")
          // console.log(this.data)
          this.data.push(pushedData)
          // console.log("After")
          // console.log(this.data[0].answers)
        })

      // console.log("Data")
      // const ar = this.data
      // console.log(ar)
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
    async handleGetData() {

    },

  }
}
</script>
<style>
.container {
  margin: 0 15%;
}

.img-question {
  width: 100%;

}

.block-question {
  margin-top: 20px;
  border: #dd4040 solid 2px;
}

.submit-star-file {
  display: flex;
}

.stars {
  width: 50%;
}

form.list-star {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}

#post1 input.star {
  display: none;
}

#post1 label.star {
  float: left;
  font-size: 36px;
  color: #444;
  transition: all .2s;
}

#post1>input.star:checked~label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}

#post1>label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}

/* Answer1 */
#answer1 input.star {
  display: none;
}

#answer1 label.star {
  float: left;
  font-size: 36px;
  color: #444;
  transition: all .2s;
}

#answer1>input.star:checked~label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}

#answer1>label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}

/* Answer2 */
#answer2>input.star {
  display: none;
}

#answer2>label.star {
  float: left;
  font-size: 36px;
  color: #444;
  transition: all .2s;
}

#answer2 input.star:checked~label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}

#answer2 label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}

/* Answer3 */
#answer3>input.star {
  display: none;
}

#answer3>label.star {
  float: left;
  font-size: 36px;
  color: #444;
  transition: all .2s;
}

#answer3>input.star:checked~label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}

#answer3>label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}

/* Answer4 */
#answer4>input.star {
  display: none;
}

#answer4>label.star {
  float: left;
  font-size: 36px;
  color: #444;
  transition: all .2s;
}

#answer4>input.star:checked~label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}

#answer4>label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}

/* .filupp>input[type=file] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
} */
.filupp>input[type=file] {
  width: 1px;
  height: 1px;
}

.upload-file {
  display: block;
  float: right;
  width: 50%;

}

.filupp {
  position: relative;
  display: block;
  padding: 1em;
  font-size: 1em;
  width: 100%;
  height: 100%;
  color: #fff;
  box-sizing: border-box;
  background-color: #242424;
  cursor: pointer;
}

.filupp:before {
  content: "";
  position: absolute;
  top: 1.5em;
  right: 0.75em;
  width: 2em;
  height: 1.25em;
  border: 3px solid 0;
  border-top: 0;
  text-align: center;
}

.filupp:after {
  content: "➜";
  transform: rotate(90deg);
  position: absolute;
  top: 0.65em;
  right: 0.45em;
  font-size: 2em;
  color: #dd4040;
  line-height: 0;
}

.filupp-file-name {
  color: white;
}

.circle-questioner {
  display: inline-block;
  height: 128px;
  width: 128px;
  border: 8px solid rgba(200, 200, 200, 0.4);
  border-radius: 50%;
}


.answer {
  display: flex;
}

.information-user {
  display: flex;
}

.information {
  display: flex;
  flex-direction: column;
}

.solution {
  display: flex;
  background-color: #242424;
  width: 100%;
  height: 60px;
  border-radius: 6px;
  color: #fff;
  justify-content: center;
  align-items: center;
}

.see-solution {
  background-color: #dd4040;
  width: 80px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.evalue {
  font-size: 16px;
  color: #dd4040
}
</style>