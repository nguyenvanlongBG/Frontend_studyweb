<template>
    <div class="container">
        <div class="header-list-exams">
            <h1>
                Danh sách bài thi
            </h1>
            <div class="menu-create">
                <button class="create-button-type" @click="createQuestion(2)">
                    Trắc nghiệm
                </button>
                <button class="create-button-type" @click="createQuestion(1)">
                    Điền đáp án
                </button>
                <button class="create-button-type" @click="createQuestion(3)">
                    Tự luận
                </button>
            </div>
        </div>
        <div class="container-table">

            <div class="table">
                <div class="table-header">
                    <div class="header__item"><a id="name" class="filter__link" href="#">Mã bài thi</a></div>
                    <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Họ và
                            tên</a>
                    </div>
                    <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Thời gian
                            nộp bài</a>
                    </div>
                    <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Điểm</a>
                    </div>
                    <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Hành
                            động</a>
                    </div>
                </div>
                <div class="table-content">
                    <div class="table-row">
                        <div class="table-data">Tom</div>
                        <div class="table-data">2</div>
                        <div class="table-data">0</div>
                        <div class="table-data">1</div>
                        <div class="table-data">
                            <button class="tool-button-mark green" @click="mark">
                                Chấm
                            </button>
                            <button class="tool-button-mark blue" @click="remark">
                                Chấm lại
                            </button>
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-data">Dick</div>
                        <div class="table-data">1</div>
                        <div class="table-data">1</div>
                        <div class="table-data">2</div>
                        <div class="table-data">3</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: "ListExamComponent",
    methods: {
        mark() {
            router.push({ name: 'markExam', params: { idExam: 1 } })
        }
    }
}
</script>
<style>
.container {
    margin: 0 15%;
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

}

.container-table {
    max-width: 1000px;
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
    padding: 18px 0;
}

.menu-create {
    display: flex;
    align-items: center;
}

.create-button-type {
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
    flex: 1 1 20%;
    text-align: center;
}

.header__item {
    text-transform: uppercase;
}

.filter__link {
    color: white;
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding-left: 24px;
    padding-right: 24px;
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
</style>