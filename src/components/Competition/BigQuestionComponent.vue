<template>
    <div class="big-question" v-if="refresh">
        <BigQuestion :question="bigQuestion" :type="2" :isOwner="true">
            <template v-slot:contentBigQuestion>
                <div class="grid-container" v-if="bigQuestion2.type == 1">
                    <div class="update-config" v-if="status == 1">
                        <div class="update-size">
                            <span class="title-update-size">Kích thước</span>
                            <div class="select-height">
                                <select name="heights" id="heights" v-model="heightSize">
                                    <option value="" disabled>Chiều cao</option>
                                    <option value="1">1 ô</option>
                                    <option value="2">2 ô</option>
                                    <option value="3">3 ô</option>
                                    <option value="4">4 ô</option>
                                    <option value="6">6 ô</option>
                                </select>
                            </div>
                            <div class="select-width">
                                <select name="widths" id="widths" v-model="widthSize">
                                    <option value="" disabled>Chiều rộng</option>
                                    <option value="1">1 ô</option>
                                    <option value="2">2 ô</option>
                                    <option value="3">3 ô</option>
                                    <option value="4">4 ô</option>
                                    <option value="6">6 ô</option>
                                </select>
                            </div>
                            <button @click="updateSize" class="button-update-size">OK</button>
                        </div>
                        <div class="upload-crop-image">
                            <span>Tách từ 1 ảnh</span>
                            <input type="file" ref="inputImage" @change="loadImage" id="upload-image-question"
                                class="hidden-input">
                            <label for="upload-image-question" class="icon-image-split"><i
                                    class="fa-solid fa-image"></i></label>
                        </div>
                        <div v-show="false">
                            <img ref="image" :src="imageUrl" v-show="false" />
                            <button @click="splitImage()">Split Image</button>
                        </div>
                        <!-- <button @click="splitImage">Split Image</button> -->
                    </div>
                    <div class="additional-information">
                        <div class="grid-row"
                            v-for="row in Array.from({ length: bigQuestion2.height }, (_, index) => index + 1)" :key="row">
                            <QuestionComponent
                                v-for="column in Array.from({ length: bigQuestion2.width }, (_, index) => index + 1)"
                                :key="column" :status="status"
                                :question="bigQuestion2.questions[(row - 1) * bigQuestion2.width + column - 1]" type="1"
                                @submited="openSuggest" />
                        </div>
                    </div>
                </div>
                <div class="grid-container" v-else-if="bigQuestion2.type == 2">
                    <div class="grid-row wrap">
                        <QuestionComponent v-for="index in bigQuestion2.questions.length" :status="status"
                            :question="bigQuestion2.questions[index - 1]" type="2" :key="index" @submited="openSuggest" />
                        <div v-if="bigQuestion2.questions.length == 0">
                            Khi lưu đáp án ô chữ sẽ xuất hiện ở đây
                        </div>
                    </div>
                </div>
            </template>
        </BigQuestion>

    </div>
</template>
<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import QuestionComponent from "./QuestionComponent.vue";
import BigQuestion from '../Question/QuestionComponent.vue'
import { ref } from "vue";
import { useRoute } from 'vue-router';
export default {
    name: "BigQuestionComponent",
    props: ['type'],
    //type=2 join type=1 update
    // type=join or update
    components: {
        QuestionComponent,
        BigQuestion
    },
    setup() {
        const status = ref(1)
        const refresh = ref(true)
        return {
            status, refresh
        }
    },
    created() {
        // Test khi chạy thật thì xóa
        if (useRoute().params.id == 4) {
            this.bigQuestion2 = this.bigQuestion1
        }
        // Phần này để end test
        if (this.type == 1) {
            // status=1 Update
            this.status = 1

        }
        if (this.type == 2) {
            // status=0 join
            this.status = 0
        }
    },
    data() {
        return {
            testQuestion: {
                question: {
                    question_id: 1,
                    type: 4,
                    content: 'OK',
                    suggest: null
                },
                page: 1
            },
            widthSize: 2,
            heightSize: 2,
            cropper: null,
            croppedImages: [],
            bigQuestion: {
                question: {
                    question_id: 1,
                    type: 3,
                    content: 'Đây là tên một tỉnh thành',
                },
                page: 1
            },
            bigQuestion1: {
                type: 2, // Ô chữ
                bigQuestion: {
                    question: {
                        question_id: 1,
                        type: 2,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                },

                questions: [{
                    question: {
                        question_id: 1,
                        type: 2,
                        content: 'OK',
                        suggest: null

                    },
                    choices: [
                        {
                            id: 1,
                            content: 'Đáp án 1'
                        },
                        {
                            id: 2,
                            content: 'Đáp án 2'
                        }
                    ],
                    page: 1
                }, {
                    question: {
                        question_id: 2,
                        type: 3,
                        content: 'OK',
                        suggest: null

                    },
                    choices: [
                        {
                            id: 3,
                            content: 'Đáp án 1'
                        },
                        {
                            id: 4,
                            content: 'Đáp án 2'
                        }
                    ],
                    page: 1
                },
                {
                    question: {
                        question_id: 3,
                        type: 2,
                        content: 'OK',
                        suggest: null

                    },
                    choices: [
                        {
                            id: 5,
                            content: 'Đáp án 1'
                        },
                        {
                            id: 6,
                            content: 'Đáp án 2'
                        }
                    ],
                    page: 1
                }, {
                    question: {
                        question_id: 4,
                        type: 3,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                },
                {
                    question: {
                        question_id: 5,
                        type: 3,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                },
                {
                    question: {
                        question_id: 6,
                        type: 3,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                },
                {
                    question: {
                        question_id: 7,
                        type: 3,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                },
                {
                    question: {
                        question_id: 8,
                        type: 2,
                        content: 'OK',
                        suggest: null

                    },
                    choices: [
                        {
                            id: 7,
                            content: 'Đáp án 1'
                        },
                        {
                            id: 8,
                            content: 'Đáp án 2'
                        }
                    ],
                    page: 1
                }
                ]
            },
            bigQuestion2: {
                type: 1, // Ảnh
                width: 2,
                height: 2,
                bigQuestion: {
                    question: {
                        question_id: 1,
                        type: 4,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                },

                questions: [{
                    question: {
                        question_id: 1,
                        type: 4,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                }, {
                    question: {
                        question_id: 2,
                        type: 3,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                },
                {
                    question: {
                        question_id: 3,
                        type: 4,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                }, {
                    question: {
                        question_id: 4,
                        type: 3,
                        content: 'OK',
                        suggest: null

                    },
                    page: 1
                }]
            }
        }
    },
    methods: {
        updateSize() {
            let questions = []
            for (let index = 1; index <= this.widthSize * this.heightSize; index++) {
                questions.push({
                    question: {
                        question_id: index,
                        type: 4,
                        content: 'OK',
                        suggest: null
                    },
                    page: 1
                },)
            }
            this.bigQuestion2.questions = []
            this.bigQuestion2.questions = questions
            console.log(this.bigQuestion2.questions)
            this.bigQuestion2.width = this.widthSize
            this.bigQuestion2.height = this.heightSize
            this.refresh = false
            this.$nextTick(() => {
                this.refresh = true
            })
        },
        loadImage() {
            const inputImage = this.$refs.inputImage;
            const file = inputImage.files[0];
            // Tạo URL cho hình ảnh
            const imageUrl = URL.createObjectURL(file);
            let realWidth = file.naturalWidth;
            let realHeight = file.naturalHeight;
            const image = this.$refs.image
            image.src = imageUrl;
            let isImageLoaded = false;
            image.onload = () => {
                // Xóa bỏ cropper cũ nếu có
                if (this.cropper) {
                    this.cropper.destroy();
                }

                // Tạo cropper mới
                // const imageContainer = this.$refs.imageContainer;
                this.cropper = new Cropper(image, {
                    aspectRatio: (realWidth / realHeight),
                    viewMode: 1,
                    autoCropArea: 1,
                    crop: () => {
                        console.log(this.cropper.getData());
                        console.log("Trong hàm khởi tạo")
                    },
                });
                isImageLoaded = true;
            };

            let myInterval = setInterval(() => {
                if (isImageLoaded) {
                    this.splitImage();
                    clearInterval(myInterval);
                }
            }, 100);
            setTimeout(function () {
                clearInterval(myInterval);
            }, 10000);
        },
        splitImage() {
            const canvas = this.cropper.getCroppedCanvas();
            const width = canvas.width;
            const height = canvas.height;
            const ctx = canvas.getContext('2d');
            for (let i = 0; i < this.bigQuestion2.height; i++) {
                for (let j = 0; j < this.bigQuestion2.width; j++) {
                    const x = j * (width / this.bigQuestion2.width);
                    const y = i * (height / this.bigQuestion2.height);
                    const w = width / this.bigQuestion2.width;
                    const h = height / this.bigQuestion2.height;

                    const imageData = ctx.getImageData(x, y, w, h);
                    const newCanvas = document.createElement('canvas');
                    newCanvas.width = w;
                    newCanvas.height = h;
                    newCanvas.getContext('2d').putImageData(imageData, 0, 0);
                    this.croppedImages.push(newCanvas);
                    // console.log(newCanvas.toDataURL())
                    this.bigQuestion2.questions[i * this.bigQuestion2.width + j].question.suggest = newCanvas.toDataURL()
                }
            }
        },
        openSuggest(data) {
            (this.bigQuestion2.questions).forEach(question => {
                if (question.question.question_id == data.id) {
                    question.question.suggest = data.suggest
                }
            });
        }
    }
}
</script>
<style>
.big-question {
    /* min-height: 600px; */
}



.grid-container {
    display: table;
    width: 100%;
    margin-top: 5px;
}

.update-config {
    display: flex;
    height: 25px;
    justify-content: space-between;
}

.update-size {
    display: flex;
}

.title-update-size {
    font-size: 20px;
}

.select-height {
    margin-left: 5px;
}

.select-width {
    margin-left: 5px;
}

.button-update-size {
    border: 2px solid #ea4f4c;
    border-radius: 4px;
    cursor: pointer;
}

.hidden-input {
    display: none;
}

.icon-image-split {
    margin-left: 5px;
    cursor: pointer;
}

.upload-crop-image {
    display: flex;
}

.grid-row {
    display: flex;
    justify-content: center;
}

.additional-information {
    margin-top: 15px;
}



.wrap {
    flex-wrap: wrap;
}
</style>