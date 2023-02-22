<template>
    <div class="modal-answer-overlay" style="overflow-y: scroll">
        <div class="form-create-test">
            <h1>Tạo kì thi</h1>
            <table class="table-input">
                <tr>
                    <th class="label-input">
                        Tên kì thi
                    </th>
                    <td>
                        <input v-model="dataSend.name" id="name" type="text" class="input-data"
                            placeholder="Tên kì thi" />
                    </td>
                </tr>
                <tr>
                    <th class="label-input">
                        Kì thi môn
                    </th>
                    <td>
                        <VueMultiselect v-model="valueSubject" :options="subjects ? subjects : []" :multiple="false"
                            :close-on-select="true" :clear-on-select="true" :preserve-search="true"
                            placeholder="Môn học" label="name" track-by="name" :preselect-first="true">
                        </VueMultiselect>
                    </td>
                </tr>
                <tr>
                    <th class="label-input">
                        Ghi chú
                    </th>
                    <td>
                        <input v-model="dataSend.note" id="nameTest" type="text" class="input-data"
                            placeholder="Ghi chú" />
                    </td>
                </tr>
                <tr>
                    <th class="label-input">
                        Phần thưởng
                    </th>
                    <td>
                        <input v-model="dataSend.reward_init" id="nameTest" type="number" class="input-data"
                            placeholder="Số exu" />
                    </td>
                </tr>
                <tr>
                    <th class="label-input">
                        Làm nhiều lần
                    </th>
                    <td class="radio-choice">
                        <div class="choice">
                            <input v-model="dataSend.allow_rework" id="allowRework_1" type="radio" name="allowRework"
                                class="radio" value=true />
                            <label class="label-content" for="allowRework_1">Có</label>
                        </div>
                        <div class="choice">
                            <input v-model="dataSend.allow_rework" id="allowRework_0" type="radio" name="allowRework"
                                class="radio" value=false />
                            <label class="label-content" for="allowRework_0">Không</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th class="label-input">
                        Xem đáp án ngay sau khi nộp bài
                    </th>
                    <td class="radio-choice">
                        <div class="choice">
                            <input v-model="dataSend.mark_option" id="markOption_1" type="radio" name="markOption"
                                class="radio" value=1 />
                            <label class="label-content" for="markOption_1">Có</label>
                        </div>
                        <div class="choice">
                            <input v-model="dataSend.mark_option" id="markOption_0" type="radio" name="markOption"
                                class="radio" value=0 />
                            <label class="label-content" for="markOption_1">Không</label>
                        </div>
                    </td>
                </tr>

                <tr>
                    <th class="label-input">
                        Thời gian bắt đầu
                    </th>
                    <td>
                        <Datepicker v-model="dataSend.time_start" />
                    </td>
                </tr>

                <tr>
                    <th class="label-input">
                        Thời gian kết thúc
                    </th>
                    <td>
                        <Datepicker v-model="dataSend.time_finish" />

                    </td>
                </tr>

            </table>
            <div class="buttons">
                <button class="button-submit" @click="close()">Quay lại</button>
                <button class="button-submit" @click="submit()">Tạo đề thi</button>
            </div>
            <br>


            <!-- <label>
                Phạm vi
            </label>
            <input name='status' /> -->
        </div>

        <button @click="close()" class="close">X</button>

    </div>
</template>

<script>
import router from '@/router';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { createTest } from '../services/test'
import VueMultiselect from 'vue-multiselect'
import { ref } from 'vue';
export default {
    name: 'ModalCreateTest',
    components: {
        VueMultiselect,
        Datepicker
    },
    setup() {
        const subjects = ref([
            { name: 'Toán', id: 2 },
            { name: 'Hóa học', id: 3 },
            { name: 'Vật lý', id: 4 }
        ])
        return {
            subjects
        }
    },
    data() {
        return {
            valueSubject: {},
            dataSend: {
                type: 0,
                name: "",
                subject_id: 1,
                note: "",
                belong_id: null,
                reward_init: 0,
                allow_rework: true, // Cho phép làm lại
                mark_option: 0,   // 0 Xem đáp án ngay sau khi nộp bài 1 Khi kết thúc thời gian mới xem đáp án
                time_start: new Date(),
                time_finish: ""
            }
        }
    },
    methods: {
        async submit() {
            this.dataSend.time_start = this.dataSend.time_start.toISOString().substring(0, 10) + ' ' + this.dataSend.time_start.toISOString().substring(11, 19)
            if (this.dataSend.time_finish) {
                this.dataSend.time_finish = this.dataSend.time_finish.toISOString().substring(0, 10) + ' ' + this.dataSend.time_finish.toISOString().substring(11, 19)
            }
            this.dataSend.subject_id = this.valueSubject.id
            if (parseInt(this.dataSend.mark_option) >= 0) {
                this.dataSend.mark_option = parseInt(this.dataSend.mark_option)
            }
            console.log(typeof (this.dataSend.mark_option))
            console.log(this.dataSend)
            let test = await createTest(this.dataSend)
            if (test.success) {
                router.push({ name: 'updateTest', params: { idTest: test.data.test_id } })
            }
        },
        close() {
            this.$emit("close")
        }
    }
}

</script>
<style scoped>
.modal-answer-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: white;
    background-color: #000000da;
    z-index: 100;
    align-items: center;

}



.form-create-test {
    width: 50%;
    text-align: center;
    align-items: center;
    border: 2px solid #dd4040;
}

.row {
    display: flexbox;
    align-items: center;
}

tr {
    padding: 0 10px;
}

td {
    display: flex;
    justify-content: center;
    align-items: center;
}

.label-input {
    font-size: 20px;
}

.buttons {
    display: flex;
    margin-top: 5px;

    width: 100%;
    justify-content: flex-end;
}

.button-submit {
    margin-right: 15px;
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

.button-submit:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.input-block {
    display: flex;

}

.choice {
    display: flex;
    margin-left: 15px;
    justify-content: center;
    align-items: center;
}

.radio-choice {
    display: flex;
    justify-content: center;
    align-items: center;
}

.label-content {
    display: flex;
    font-size: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-left: 5px;
}

.radio {
    height: 20px;
    width: 20px
}

.input-data {
    box-sizing: border-box;
    min-height: 35px;
    width: 100%;

}

.input-data-datepicker {}

.table-input {
    width: 100%;
}

.label-input {
    width: 30%;
}

.close-modal-create {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 30px 0 0 2px; */
    margin-bottom: 21%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: blueviolet;
}

@import url('vue-multiselect/dist/vue-multiselect.css');
</style>