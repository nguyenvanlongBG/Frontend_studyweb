<template>
    <div class="container-list-point">
        <div class="header-list-exams">
            <VueMultiselect v-model="selectTests" :options="listTest" :multiple="true" :close-on-select="false"
                :clear-on-select="false" :preserve-search="true" placeholder="Kỳ thi" label="name" track-by="name"
                :preselect-first="false">
            </VueMultiselect>
            <div class="icon-search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div class="container-table">

            <div class="table">
                <div class="table-header">
                    <div class="header__item column-id">
                        <a id="id" class="filter__link text-decoration" href="#">ID</a>
                    </div>
                    <div class="header__item label-name"><a id="wins"
                            class="filter__link filter__link--number text-decoration" href="#">Họ
                            và
                            tên</a>
                    </div>
                    <div class="header__item column-point"><a id="draws" class="filter__link filter__link--number"
                            href="http://localhost:8080/test/1/update" target="_blank">
                            Đề 1</a>
                    </div>
                    <div class="header__item column-point">
                        <a id="losses" class="filter__link filter__link--number" href="http://localhost:8080/test/1/update"
                            target="_blank">
                            Đề 2
                        </a>
                    </div>
                    <div class="header__item column-point"><a id="total" class="filter__link filter__link--number"
                            href="http://localhost:8080/test/1/update" target="_blank">
                            Đề 3</a>
                    </div>
                    <div class="header__item column-point"><a id="total" class="filter__link filter__link--number"
                            href="http://localhost:8080/test/1/update" target="_blank">
                            Đề 3</a>
                    </div>
                    <div class="header__item column-point"><a id="total" class="filter__link filter__link--number"
                            href="http://localhost:8080/test/1/update" target="_blank">
                            Đề 3</a>
                    </div>
                    <div class="header__item column-point"><a id="total" class="filter__link filter__link--number"
                            href="http://localhost:8080/test/1/update" target="_blank">
                            Đề 3</a>
                    </div>
                </div>
                <div class="table-content">
                    <div class="table-row" v-for="(user, index) in users" :key="index">
                        <div class="column-id">#{{ user.information.id }}</div>
                        <div class="column-name">{{ user.information.name }}</div>
                        <a class="column-point padding-data" href="http://localhost:8080/test/1/exam/1" target="_blank">{{
                            user.exams[0].point }}</a>
                        <a class="column-point" href="http://localhost:8080/test/1/exam/1" target="_blank">{{
                            user.exams[1].point }}</a>
                        <a class="column-point" href="http://localhost:8080/test/1/exam/1" target="_blank">{{
                            user.exams[0].point }}</a>
                        <a class="column-point" href="http://localhost:8080/test/1/exam/1" target="_blank">{{
                            user.exams[1].point }}</a>
                        <a class="column-point" href="http://localhost:8080/test/1/exam/1" target="_blank">{{
                            user.exams[0].point }}</a>
                        <a class="column-point" href="http://localhost:8080/test/1/exam/1" target="_blank">{{
                            user.exams[1].point }}</a>
                    </div>
                    <div class="table-row-page">
                        <div class="page-list-point">
                            <paginate :page-count="totalPage" :page-range="3" :margin-pages="2"
                                :click-handler="clickCallback" :prev-text="'Prev'" :next-text="'Next'"
                                :container-class="'pagination'" :page-class="'page-item'" :active-class="'active-class'">
                            </paginate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Paginate from 'vuejs-paginate-next';
import VueMultiselect from 'vue-multiselect'
export default {
    name: "ListPointComponent",
    components: {
        paginate: Paginate,
        VueMultiselect
    },
    setup() {

    },
    data() {
        return {
            selectTests: [],
            listTest: [{
                id: 1,
                name: "Test 1"
            }, {
                id: 2,
                name: "Test 2"
            }, {
                id: 3,
                name: "Test 3"
            }, {
                id: 4,
                name: "Test 4"
            }
            ],
            users: [{
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            },
            {
                information: { id: 1, name: "Nguyễn Văn A" },
                exams: [{ point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }, { point: 9 }]
            }
            ]
        }
    },
    mounted() {
    },
    methods: {




    }
}
</script>
<style scoped>
.container-list-point {
    margin-top: 10px;
}

.icon-search {
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
    border: 2px solid #ea4f4c;
    border-radius: 5px;
    box-shadow: 0 8px #999;
    flex-basis: 25px;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 25px;
    cursor: pointer;
}

.icon-search:active {
    box-shadow: 0 5px #666;
    background-color: aliceblue;
    color: #222;
    transform: translateY(4px);
}

@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    padding: 24px;
    font-family: "Source Sans Pro", sans-serif;
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

.header-list-exams {
    display: flex;
    justify-content: space-between;
}

.column-id {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.label-name {
    width: 25%;
    display: flex;
    justify-content: center;
}

.column-name {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(92, 165, 185);
}

.column-point {

    display: flex;
    justify-content: center;
}

.table-row-page {
    display: flex;
    justify-content: flex-end;
}

.page-list-point {
    width: 65%;
    background-color: #9999995e;
    display: flex;
    justify-content: center;
}

.background-data {}

.container-table {
    margin-top: 20px;
    /* margin-right: auto;
    margin-left: auto; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
}

.table {
    width: 100%;
    border: 1px solid #eeeeee;
    max-height: 600px;
    overflow-y: scroll;
}

.table-header {
    display: flex;
    width: 100%;
    background: #000;
    padding: 18px 0;
    position: sticky;
    top: 0px;
}

.table-row {
    display: flex;
    width: 100%;
    border-bottom: 2px solid rgb(202, 198, 198);
}


.tool-button-mark {
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

.tool-button-mark:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.blue {
    background-color: blue;
}

.green {
    background-color: green;
}

.table-row:nth-of-type(odd) {
    background: #eeeeee;
}

.table-data,
.header__item {
    /* flex: 1 1 20%; */
    display: flex;
    justify-content: center;
    align-items: center;
}


.column-point {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.padding-data {
    padding: 18px 0;
}

.header__item {
    text-transform: uppercase;
}

.filter__link {
    color: white;
    /* text-decoration: none; */
    position: relative;
    display: inline-block;
    /* padding-left: 24px; */
    /* padding-right: 24px; */
}

.filter__link::after {
    content: "";
    position: absolute;
    right: -18px;
    color: white;
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
}

.filter__link.desc::after {
    content: "(desc)";
}

.filter__link.asc::after {
    content: "(asc)";
}

.text-decoration {
    text-decoration: none;
    cursor: auto;
}

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import url('vue-multiselect/dist/vue-multiselect.css');
</style>