<template>

    <body>
        <ModalSolution v-if="dataModal.visible" @close="dataModal.visible = false" @image="dataModal.image">
            <template v-slot:image>
                <img :src="dataModal.image" />
            </template>
        </ModalSolution>
        <div class="container">
            <div v-for="document in data" :key="document.id">
                <div>
                    <div class="information-user-questioner">
                        <!-- Khối thông tin User -->
                        <div class="avatar-questioner">
                            <a href="" class="circle-questioner">
                                <img width="128" height="128"
                                    src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                            </a>
                        </div>
                        <div class="information-questioner">
                            <!-- Thông tin tên, giờ post bài -->
                            <span class="name-questioner">
                                <!-- <math-field virtual-keyboard-mode="manual">

                                </math-field> -->
                                <vue-mathjax :formula="formula"></vue-mathjax>
                            </span>
                            <span class="time-post">
                                10/01/2022
                            </span>
                        </div>
                    </div>

                    <div>
                        <div class="title">{{ document.title }}</div>
                        <div>
                            <a :href="document.content" target="_blank">
                                <img v-bind:src="document.image_preview" class="img-question" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="submit-star-file">
                        <div class="stars">
                            <span class="evalue">Đánh giá</span>
                            <form action="" class="list-star" id="post1">
                                <input class="star star-1" id="post1_star-1" type="radio" name="star" />
                                <label class="star star-1" for="post1_star-1"></label>
                                <input class="star star-2" id="post1_star-2" type="radio" name="star" />
                                <label class="star star-2" for="post1_star-2"></label>
                                <input class="star star-3" id="post1_star-3" type="radio" name="star" />
                                <label class="star star-3" for="post1_star-3"></label>
                                <input class="star star-4" id="post1_star-4" type="radio" name="star" />
                                <label class="star star-4" for="post1_star-4"></label>
                                <input class="star star-5" id="post1_star-5" type="radio" name="star" />
                                <label class="star star-5" for="post1_star-5"></label>
                            </form>
                        </div>

                    </div>
                    <div>


                        <div>
                            Các khối thông tin tham khảo khác
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </body>
</template>
<script>
import { getDocument } from "../services/document"
import ModalSolution from "../components/ModalSolution.vue"
export default {
    name: "DocumentsComponent",
    components: {

        ModalSolution,

    },

    data() {
        return {
            // solution: {},
            formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
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
        seeDocument($content) {
            this.dataModal.visible = true
            this.dataModal.image = $content
        },
        async getListPost() {
            this.data = []

            const response = await getDocument()
            const responseQuestionNormal = response.data
            this.data = responseQuestionNormal
            console.log(this.data)
            // console.log("responseQuestionNormal")
            // console.log(responseQuestionNormal)

        }
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

.submit-star-file {
    display: flex;
}

.stars {
    width: 50%;
}

.title {
    font-weight: bold;
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
    border: 3px solid #dd4040;
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

.circle-questioner img {
    border-radius: 50%;
}

.circle-questioner:hover {
    transition: ease-out 0.2s;
    border: 8px solid rgba(203, 31, 31, 0.25);
}

.information-user-questioner {
    display: flex;
}

.information-questioner {
    display: flex;
    flex-direction: column;
}

.information-questioner {
    margin: 10px 15px;
    font-size: 20px;
    font-weight: bold;
}

.circle {
    display: inline-block;
    height: 64px;
    width: 64px;
    border: 4px solid rgba(200, 200, 200, 0.4);
    border-radius: 50%;
}

.circle img {
    border-radius: 50%;
}

.circle:hover {
    transition: ease-out 0.2s;
    border: 4px solid rgba(203, 31, 31, 0.25);
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