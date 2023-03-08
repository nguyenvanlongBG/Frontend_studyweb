<template>
    <div class="container-competition">
        <table v-if="step == 1">
            <tr class="field-competition">
                <td class="label">
                    <label for="name">Tên cuộc thi</label>
                </td>
                <input type="text" id="name" class="input-info-competition" placeholder="Tên cuộc thi" />
            </tr>
            <tr class="field-competition">
                <td class="label">
                    <label for="number_users">Số người 1 nhóm</label>
                </td>
                <input type="number" id="number_users" class="input-info-competition" placeholder="Số người 1 nhóm" />
            </tr>
            <tr class="field-competition">
                <td class="label">
                    <label for="knowledge">
                        Lĩnh vực kiến thức
                    </label>
                </td>
                <input type="text" id="knowledge" class="input-info-competition" placeholder="Lĩnh vực kiến thức" />
            </tr>
            <tr class="field-competition">
                <td class="label">
                    <label for="start">
                        Thời gian bắt đầu
                    </label>
                </td>
                <Datepicker id="start" v-model="dataSend.time_start" />
            </tr>
            <tr class="field-competition">
                <td class="label">
                    <label for="finish">Thời gian kết thúc</label>
                </td>
                <Datepicker id="finish" v-model="dataSend.time_start" />
            </tr>
            <tr class="submit-competition">
                <input type="submit" value="Lưu & Tiếp tục" class="button-submit" @click="nextList" />
            </tr>
        </table>
        <UpdateListQuestion @back="backGeneral" @next="nextBig" v-else-if="step == 2" />
        <UpdateBigQuestion @back="backList" v-else-if="step == 3" />
    </div>
</template>
<script>
import Datepicker from '@vuepic/vue-datepicker';
import UpdateBigQuestion from './UpdateBigQuestion.vue'
import UpdateListQuestion from './UpdateListQuestion.vue'
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';
export default {
    name: "UpdateCompetition",
    components: {
        Datepicker, UpdateListQuestion, UpdateBigQuestion
    },
    setup() {
        const step = ref(1)
        return {
            step
        }
    },
    data() {
        return {
            dataSend: {
                time_start: new Date(),
                time_finish: ""
            }
        }
    },
    methods: {
        backGeneral() {
            this.step = 1
        },
        nextList() {
            this.step = 2
        },
        backList() {
            this.step = 2
        },
        nextBig() {
            this.step = 3
        }
    }
}
</script>
<style scoped>
.container-competition {
    margin: 0 20%
}

table {
    width: 100%
}

.field-competition {
    display: flex;
    padding: 2px;
}

.label {
    width: 25%;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
}

.input-info-competition {
    width: 75%;
    height: 30px
}

.submit-competition {
    display: flex;
    justify-content: flex-end;
}

.button-submit {
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 15px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.button-submit:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

@import url('vue-multiselect/dist/vue-multiselect.css');
</style>