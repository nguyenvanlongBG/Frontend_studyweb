<template>
    <div class="modal-respondent-overlay" style="overflow-y: hidden scroll" v-if="render">
        <div class="respondents-modal">
            <button @click="close()" class="close-modal-solution">X</button>
            <div class="content-solution">
                <h2>Thành viên nhóm trả lời</h2>
                <div class="answer-group" v-if="!statusUpdate">
                    <div class="list-respondent">
                        <div class="respondent" v-for="respondent in respondents" :key="respondent.id">
                            <a href="" class="circle">
                                <img width="45" height="45" :src="respondent?.avatar" />
                            </a>
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
                    </div>
                </div>
                <div class="action-respondents" v-if="statusUpdate">
                    <div class="add-respondent">
                        <!-- <CustomOption>
                            <template v-slot:okCustom>
                                <div>Ok</div>
                            </template>
                        </CustomOption> -->
                        <VueMultiselect class="multiple-select-respondent" v-model="respondents" open-direction="bottom"
                            :options="chapters" :multiple="true" :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Chương" label="id" track-by="id" deselectLabel=" "
                            :preselect-first="false">
                            <template v-slot:tag="{ option, remove }">
                                <div class="respondent-selected">
                                    <a href="" class="circle">
                                        <img width="45" height="45"
                                            src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                                    </a>
                                    <div class="information">
                                        <span class="name-user">
                                            Nguyễn Văn A
                                        </span>
                                        <span class="level-user">
                                            <i class="fa-solid fa-medal"></i>Chuyên gia ra đề
                                        </span>
                                    </div>
                                    <div class="box-remove-respondent">
                                        <button class="remove-respondent" @click="remove(option)">X</button>

                                    </div>
                                </div>
                            </template>
                            <template v-slot:option>
                                <div class="respondent">
                                    <a href="" class="circle">
                                        <img width="45" height="45"
                                            src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                                    </a>
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
                            </template>
                        </VueMultiselect>
                        <span>Thêm thành viên</span>
                    </div>
                </div>
                <div class="action-respondents">
                    <button class="tool-button" @click="updateList">
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { getNormalAnswer } from '../../services/answer'
import VueMultiselect from 'vue-multiselect'
export default {
    components: {
        VueMultiselect
    },
    setup() {
        const filterChapters = ref([])
        const solution = ref({})
        const render = ref(true)
        const displayChat = ref(false)
        const statusUpdate = ref(false)
        return {
            filterChapters, solution, render, displayChat, statusUpdate
        }
    },
    data() {
        return {
            chapters: [
                { id: 1, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 2, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 3, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 4, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 5, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 6, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 7, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 8, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },

            ],
            respondents: [
                { id: 1, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 2, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 3, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 4, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 5, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 6, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 8, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 9, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },

            ],
        }
    },
    mounted() {
        this.handleGetData()
    },
    props: ['idSolution', 'question'],
    methods: {
        async handleGetData() {
            const response = await getNormalAnswer(this.idSolution)
            this.solution = response.data
            this.render = false
            this.$nextTick(() => {
                this.render = true
            })
        },
        openChat() {
            this.displayChat = !this.displayChat
        },
        close() {
            this.$emit('close')
        },
        updateList() {
            this.statusUpdate = true
        }
    }
}

</script>
<style scoped>
.modal-respondent-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #3432329a;
    z-index: 100;
}

.respondents-modal {
    min-height: 400px;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 10px;
    background-color: white;
}

.list-respondent {
    display: grid;
    grid-template-columns: auto auto;
}

.respondent {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}


.content-solution {}

.name-user {}

.level-user {}

.school-user {}

.close-modal-solution {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: blueviolet;
}

.box-remove-respondent {
    height: 100%;
    position: absolute;
    right: -5px;
    top: -5px
}

.remove-respondent {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    margin-right: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgb(233, 89, 11);
}

.action-respondents {
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
}

.tool-button {
    margin-left: 2px;
    margin-top: 2px;
    min-height: 35px;
    min-width: 65px;
    /* height: 35px; */
    box-shadow: 0 8px #999;
    padding: 2px;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.tool-button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.add-respondent {
    /* width: 200px; */
    width: 100%;
}

.multiple-select-respondent {
    width: 100%;
    /* display: grid;
    grid-template-columns: auto auto; */
}



.respondent-selected {
    width: 50%;
    display: inline-flex;
    justify-content: center;
    position: relative;
    border: 2px solid #666;
}
</style>