<template>
    <ModalAddQuestionBank v-if="visibleModal" @close="closeModalAdd" />
    <div class="container-user-bank">
        <div class="bank">
            <div class="navbar-folder">
                <div class="title-folder">Thư mục</div>
                <div v-for="folder in folders" :key="folder.id">
                    <input type="radio" class="hidden-radio" :id="folder.id" :name="folders" :value="folder.id" />
                    <label class="label-folder" :for="folder.id">{{ folder.name }}</label>
                </div>
            </div>
            <div class="detail-folder">
                <div class="box-search-filter-questions">
                    <div class="search-filter-questions" v-if="displayBox">
                        <div class="content-search-filter">
                            <div class="search-question">
                                <LatexComponent :isUpdate="true" />
                            </div>
                            <div class="filter-questions">
                                <VueMultiselect :class="colorSelect" v-model="filterChapters" open-direction="bottom"
                                    :options="chapters ? chapters : []" :multiple="true" :close-on-select="false"
                                    :clear-on-select="false" :preserve-search="true" placeholder="Chương" label="name"
                                    track-by="name" :preselect-first="false" @select="selectItems" @remove="removeItems">
                                </VueMultiselect>
                                <VueMultiselect :class="colorSelect" v-model="filterLevels" open-direction="bottom"
                                    :options="levels ? levels : []" :multiple="true" :close-on-select="false"
                                    :clear-on-select="false" :preserve-search="true" placeholder="Mức độ" label="name"
                                    track-by="name" :preselect-first="false" @select="selectItems" @remove="removeItems">
                                </VueMultiselect>
                            </div>
                        </div>
                        <div class="icon-search-questions">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div class="box-nav" @click="displayBoxSearch">
                        <span class="title-search">Tìm kiếm</span>
                        <i class="fa-sharp fa-solid fa-caret-up icon-visible-filter" v-if="displayBox"></i>
                        <i class="fa-sharp fa-solid fa-caret-down icon-visible-filter" v-if="!displayBox"></i>
                    </div>
                </div>
                <div class="list-action">
                    <button class="button" @click="openModalAdd">Tạo câu hỏi</button>
                </div>
                <div class="list-question">
                    <QuestionComponent :type="4" :isOwner="false" v-for="(question, index) in questions" :key="index"
                        :question="question" />
                    <paginate :page-count="2" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
                        :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'"
                        :active-class="'active-class'">
                    </paginate>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import QuestionComponent from '../Question/QuestionComponent.vue';
import VueMultiselect from 'vue-multiselect'
import LatexComponent from '../LatexComponent.vue';
import Paginate from 'vuejs-paginate-next';
import { ref } from 'vue';
import ModalAddQuestionBank from '../Question/ModalAddQuestionBank.vue';
export default {
    name: "QuestionsBankComponent",
    components: { QuestionComponent, VueMultiselect, LatexComponent, paginate: Paginate, ModalAddQuestionBank },
    setup() {
        const visibleModal = ref(false)
        const displayBox = ref(false)
        const levels = ref([
            {
                id: 1,
                name: "Nhận biết"
            }, {
                id: 2,
                name: "Thông hiểu"
            },
            {
                id: 3,
                name: "Vận dụng"
            },
            {
                id: 4,
                name: "Vận dụng cao"
            }
        ])
        const filterLevels = ref([])
        const filterChapters = ref([])
        const styleObject = ref({
            "box-shadow": "0 5px #666",
            "transform": "translateY(4px)"
        })
        return {
            visibleModal, displayBox, levels, filterChapters, filterLevels, styleObject
        }
    },
    data() {
        return {
            folders: [{ id: 1, name: "Không gian chung" }, { id: 2, name: "Tích phân" }, { id: 3, name: "Hàm số" }, { id: 4, name: "Hình học không gian" }, { id: 5, name: "Bất đẳng thức" }],
            chapters: [{ id: 1, name: "Tích phân" }, { id: 2, name: "Hàm số" }, { id: 3, name: "Hình học" }, { id: 4, name: "Bất đẳng thức" }],
            questions: [
                { question: { question_id: 1, content: 'OK1', page: 1, type: 1, index: 1, result_id: "", contentResult: "", scope: 1, dependence_id: 1 } },
                {
                    question: { question_id: 2, content: 'OK2', page: 1, type: 2, index: 1, result_id: "", contentResult: "", scope: 1, dependence_id: 1 },
                    choices: [
                        { id: 3, question_id: 2, content: '<p>Phương án A</p>' },
                        { id: 4, question_id: 2, content: '<p>Phương án B</p>' },
                        { id: 5, question_id: 2, content: '<p>Phương án C</p>' },
                        { id: 6, question_id: 2, content: '<p>Phương án D</p>' }
                    ]
                },
                {
                    question: { question_id: 2, content: 'OK2', page: 1, type: 2, index: 1, result_id: "", contentResult: "", scope: 1, dependence_id: 1 },
                    choices: [
                        { id: 3, question_id: 2, content: '<p>Phương án A</p>' },
                        { id: 4, question_id: 2, content: '<p>Phương án B</p>' },
                        { id: 5, question_id: 2, content: '<p>Phương án C</p>' },
                        { id: 6, question_id: 2, content: '<p>Phương án D</p>' }
                    ]
                },
                {
                    question: { question_id: 2, content: 'OK2', page: 1, type: 2, index: 1, result_id: "", contentResult: "", scope: 1, dependence_id: 1 },
                    choices: [
                        { id: 3, question_id: 2, content: '<p>Phương án A</p>' },
                        { id: 4, question_id: 2, content: '<p>Phương án B</p>' },
                        { id: 5, question_id: 2, content: '<p>Phương án C</p>' },
                        { id: 6, question_id: 2, content: '<p>Phương án D</p>' }
                    ]
                },
            ]

        }
    },
    methods: {
        displayBoxSearch() {
            this.displayBox = !this.displayBox
        },
        openModalAdd() {
            this.visibleModal = true
        },
        closeModalAdd() {
            this.visibleModal = false
        }
    }
}
</script>
<style scoped>
.container-user-bank {
    margin: 0 10%;
}

.bank {
    display: flex;
}

.navbar-folder {
    width: 22%;
}



.title-folder {
    font-family: 'Kalam', cursive;
    text-align: center;
    background-color: #dfdcdc;
    min-height: 25px;
    font-size: 25px;
    color: #0d61df;
}


.label-folder {
    display: block;
    padding: 3px;
    margin-left: 2px;
    font-family: 'Kalam', cursive;
    margin-top: 2px;
    /* margin-right: 15px; */
    margin-bottom: 15px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    color: white;
    /* border: 2px solid #ea4f4c; */
    background-color: #222;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.hidden-radio:checked+.label-folder {
    box-shadow: 0 5px #666;
    background-color: #dfdcdc;
    color: #222;
    transition: 0.6ms ease-in-out;
}

.nav-search-filter {
    background-color: #dfdcdc;
    color: #0d61df;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title-search {
    display: block;
    min-width: 40px;
    margin-left: 15px;
    color: white;
}

.visible-nav-filter {
    display: flex;
    width: 100%;
    background-color: #dfdcdc;
    flex-direction: column;
    justify-content: center;
}

.box-nav {
    display: flex;
    position: relative;
    width: 100%;
    height: 25px;
    margin-top: 5px;
    background-color: #222;
    border-bottom-left-radius: 5px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
}

.icon-visible-filter {
    display: flex;
    position: absolute;
    color: #0d61df;
    margin-left: 50%;
    margin-top: -10px;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    padding-top: 0px;
}



.box-search-filter-questions {}

.search-filter-questions {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.content-search-filter {
    flex-grow: 2;
    padding: 5px;
}

.icon-search-questions {
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
    border: 2px solid #222;
    border-radius: 5px;
    box-shadow: 0 8px #999;
    flex-basis: 25px;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
}

.icon-search-questions:active {
    box-shadow: 0 5px #666;
    background-color: #dfdcdc;
    color: #222;
    transform: translateY(4px);
}

.filter-questions {
    display: flex;
    color: #222;
}

.detail-folder {
    width: 78%;
    padding-left: 10px;
    padding-bottom: 10px;
    background-color: #dfdcdc;

}

.list-action {
    display: flex;
    justify-content: flex-end;
}

.button {
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
}

.button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.list-question {
    margin-top: 10px;
    height: 600px;
    overflow-y: scroll;
}

.pagination {
    display: flex;
    justify-content: center;
}

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import url('vue-multiselect/dist/vue-multiselect.css');
</style>