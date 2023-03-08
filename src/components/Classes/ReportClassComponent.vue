<template>
    <div class="container-report-classroom">
        <div class="list-action-report-class">
            <button @click="openGeneral" class="button-report">Báo cáo điểm</button>
            <button @click="openFilter" class="button-report">Chi tiết</button>
        </div>
        <div class="barricades"></div>
        <ReportGeneral v-if="type == 1" />
        <ReportFilterClass v-else-if="type == 2" />
    </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ReportFilterClass from './Report/ReportFilterClass.vue'
import ReportGeneral from './Report/ReportGeneral.vue'
export default {
    name: "ReportClassComponent",
    components: {
        ReportGeneral,
        ReportFilterClass
    },
    setup() {
        const idTest = parseInt(useRoute().params.idTest)
        const render = ref(true)
        const refresh = ref(true)
        const type = ref(1)
        return {
            idTest, render, refresh, type
        }
    },
    mounted() {
        // this.handleGetData()
    },

    methods: {
        openGeneral() {
            this.type = 1
        },
        openFilter() {
            this.type = 2
        },
    }
}
</script>
<style>
.container-report-classroom {
    margin-top: 5px;
}

.barricades {
    margin-top: 10px;
    height: 2px;
    background-color: #d1c7c7;
}

.list-action-report-class {
    display: flex;
    justify-content: flex-end;

}

.button-report {
    display: flex;
    padding: 3px 3px;
    /* height: 35px; */
    border: 2px solid #ea4f4c;
    border-radius: 5px;
    box-shadow: 0 8px #999;
    background-color: #222;
    color: white;
    /* flex-basis: 25px; */
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    margin-left: 5px;
}

.button-report:active {
    box-shadow: 0 5px #666;
    background-color: #dfdcdc;
    color: #222;
    transform: translateY(4px);
}
</style>