<template>
    <div class="container-detail-test">
        <div class="information-user">
            <!-- Khối thông tin User -->
            <div class="avatar">
                <a href="" class="circle">
                    <img width="64" height="64"
                        src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                </a>
            </div>
            <div class="information">
                <!-- Thông tin tên, giờ post bài -->
                <span class="name-user">
                    Nguyễn Văn A
                </span>
                <span class="level-user">
                    <i class="fa-solid fa-medal"></i>Chuyên gia ra đề
                </span>
                <span class="school-user">
                    Trường THPT Lục Nam
                </span>
            </div>
        </div>
        <div class="info-detail-test">
            <h2>Giới thiệu về đề thi</h2>
            <div class="action-change-test">
                <button class="tool-button-test" @click="updateTest(testId)" v-if="displayUpdate">
                    Sửa đề
                </button>
                <button class="tool-button-test" @click="deleteTest(testId)" v-if="displayDelete">
                    Sửa giới thiệu
                </button>
                <button class="tool-button-test" @click="deleteTest(testId)" v-if="displayDelete">
                    Xóa đề thi
                </button>
            </div>
            <div class="introduce-test">
                <LatexComponent isUpdate="true" />
            </div>
            <h3>Phí dự thi: Miễn phí</h3>
            <div class="action-normal">
                <button class="tool-button-test" @click="tryTest(testId)" v-if="displayTry">
                    Thi thử
                </button>
                <button class="tool-button-test" @click="doTest(testId)" v-if="displayDo">
                    Làm đề
                </button>
                <button class="tool-button-test" @click="continueTest(testId)" v-if="displayContinue">
                    Làm tiếp
                </button>
                <button class="tool-button-test" @click="markTest(testId)" v-if="displayMark">
                    Chấm điểm
                </button>
                <button class="tool-button-test" @click="reportTest(testId)" v-if="displayMark">
                    Báo cáo
                </button>
                <button class="tool-button-test" @click="historyTest(testId)" v-if="displayHistory">
                    Lịch sử
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import LatexComponent from '../LatexComponent.vue';
// import { createExam } from '@/services/exam';
export default {
    name: "DetailReferenceComponent",
    components: {
        LatexComponent
    },
    setup() {
        const displayDo = ref(true)
        const displayUpdate = ref(true)
        const displayDelete = ref(true)
        const displayTry = ref(true)
        const displayContinue = ref(true)
        const displayHistory = ref(true)
        const displayMark = ref(true)
        return {
            displayDo, displayUpdate, displayDelete, displayTry, displayContinue, displayHistory, displayMark
        }
    },
    props: ['type'],
    created() {
        this.testId = 1
    },
    data() {
        return {
            testId: 1
        }
    },
    mounted() {

    },
    methods: {
        tryTest() {

        },
        doTest(testId) {
            // console.log(testId)
            this.$emit('do', testId)
        },
        continueTest(testId) {
            this.$emit('continue', testId)
        },
        markTest(testId) {
            this.$emit('mark', testId)
        },
        reportTest(testId) {
            this.$emit('report', testId)
        },
        updateTest(testId) {
            this.$emit('update', testId)
        },
        historyTest(testId) {
            this.$emit('history', testId)
        },
        deleteTest(testId) {
            this.$emit('delete', testId)
        },
    },
}
</script>
<style scoped>
/* 
.answer-content-choice {
    background-color: #222;
    border-color: #222;
    color: white;
} */
.container-detail-test {
    display: flex;
}

.info-detail-test {
    width: 100%;
    padding-left: 5px;
    padding-bottom: 5px;
}

.information-user {
    display: flex;
    border: 2px solid #c4c0c0;
    border-radius: 5px;
}

.information {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.introduce-test {
    margin-top: 10px;
}

.circle {
    display: inline-block;
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

.introduce-test {
    /* min-height: 400px; */
}

.tool-button-test {
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

.tool-button-test:active {

    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.action-question {
    margin-top: 2px;
    display: flex;
    justify-content: flex-end;
}

.action-change-test {
    display: flex;
    justify-content: flex-end;
}

.action-normal {
    display: flex;
    justify-content: flex-end;
}
</style>