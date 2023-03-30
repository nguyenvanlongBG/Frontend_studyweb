<template>
    <div class="modal-bank-overlay">
        <div class="container-create-review">
            <div class="close-button">
                <button @click="close()" class="close-modal-solution">X</button>
            </div>
            <div class="container-list-question">
                <div>
                    <div class="body-container-create-review">
                        <h3>Nội dung</h3>
                        <div class="container-choice-topic">
                            <LatexComponent :isUpdate="true" :content="content" @update="update" ref="dataUpload" />
                        </div>
                        <div class="flex-end">
                            <button class="button" @click="close()">
                                Trở lại
                            </button>
                            <button class="button" @click="upload()">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LatexComponent from '@/components/LatexComponent.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { importTest } from '../../services/test'
export default {
    name: "ModalImportTest",
    components: {
        LatexComponent,
    },
    setup() {
        const typeCreate = ref(1)
        const testId = useRoute().params.idTest
        const step = ref(1)
        const displayAdd = ref(false)
        const solution = ref({})
        const render = ref(true)
        return {
            testId, typeCreate, step, displayAdd, solution, render
        }
    },
    watch: {
        selectAll() {
            this.displayAdd = !this.displayAdd
            if (this.selectAll[0]) {
                this.questions.forEach(question => {
                    this.selectQuestions.add(question.question.question_id)
                });
                console.log(this.selectQuestions)
            } else {
                this.selectQuestions = new Set()
            }
        },
        selectQuestions() {
            if (this.selectQuestions.size != 0) {
                this.displayAdd = true
            } else {
                this.displayAdd = false
            }
            console.log("Question Select")
            console.log(this.selectQuestions)
        }
    },
    computed: {

    },
    data() {
        return {
            content: '<p>Bài 1&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><munder><mi>lim</mi><mrow><mn>1</mn><mo>→</mo><mo>∞</mo></mrow></munder></math></p>',
            selectAll: [],
            selectQuestions: new Set(),
            listFilters: [{ id: 1, name: "OK" }],
        }
    },
    mounted() {
        this.handleGetData()
    },
    props: ['idSolution'],
    methods: {
        async handleGetData() {

        },
        close() {
            this.$emit('close')
        },
        addTopicLevel() {
            this.topics.push({
                id: 4, name: {
                    id: '', name: ''
                }, level: {
                    id: '',
                    name: ''
                }
            })
        },
        async upload() {
            let data = {
                document: this.$refs.dataUpload['editorData']
            }
            console.log(data)
            await importTest(this.testId, data)
        }
    }
}

</script>
<style scoped>
.modal-bank-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    background-color: #2b2929da;
    z-index: 100;
}

.container-create-review {
    margin: 0 22.5%;
    background-color: rgba(82, 113, 130, 0.495);
    height: 100%;
}

.container-list-question {
    padding-left: 35px;
    padding-right: 35px;
    overflow-y: hidden scroll;
}





.close-button {
    display: flex;
    justify-content: flex-end;
}

.close-modal-solution {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgb(248, 74, 5);
}

.flex-end {
    display: flex;
    justify-content: flex-end;
}

.button {
    margin-right: 2px;
    margin-left: 2px;
    margin-top: 2px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.body-container-create-review {
    height: 650px;
    overflow-y: auto;
}

.container-choice-topic {
    height: 540px;
    overflow-y: auto;
}

.topic-level {
    display: flex;
    margin-top: 2px;
}

.add-topic-level {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ea4f4c;
    background-color: #222;
    min-height: 35px;
    border-radius: 5px;
    cursor: pointer;
}

.add-topic-level:hover {

    background-color: #8b8b8b;

}

@import url('vue-multiselect/dist/vue-multiselect.css');
</style>