<template>
    <div class="overview-exam">
        <span class="nameUser">
            Họ và tên: Nguyễn Văn A
        </span>
        <div>
            <span class="navbar-list-question">
                Danh sách câu hỏi
            </span>
            <div class="list-numberical-question">
                <div class="stt-question" id="question_1">
                    1
                </div>
                <div class="stt-question" id="question_2">
                    2
                </div>
                <div class="stt-question" id="question_3">
                    3
                </div>
                <div class="stt-question" id="question_4">
                    4
                </div>
                <div class="stt-question">
                    5
                </div>
                <div class="stt-question">
                    6
                </div>
                <div class="stt-question">
                    7
                </div>
                <div class="stt-question">
                    8
                </div>
                <div class="stt-question">
                    9
                </div>
                <div class="stt-question">
                    10
                </div>
                <div class="stt-question">
                    11
                </div>
                <div class="stt-question">
                    12
                </div>
                <div class="stt-question">
                    13
                </div>
                <div class="stt-question">
                    14
                </div>
                <div class="stt-question">
                    15
                </div>
                <div class="stt-question">
                    16
                </div>
                <div class="stt-question">
                    17
                </div>
                <div class="stt-question">
                    18
                </div>
                <div class="stt-question">
                    19
                </div>
                <div class="stt-question">
                    20
                </div>
                <div class="stt-question">
                    21
                </div>
                <div class="stt-question">
                    22
                </div>
                <div class="stt-question">
                    23
                </div>
                <div class="stt-question">
                    24
                </div>
                <div class="stt-question">
                    25
                </div>
                <div class="stt-question">
                    26
                </div>
                <div class="stt-question">
                    27
                </div>
                <div class="stt-question">
                    28
                </div>
                <div class="stt-question">
                    29
                </div>
                <div class="stt-question">
                    30
                </div>

            </div>
        </div>

    </div>

</template>
<script>
export default {
    name: "NavbarListComponent",
    methods: {

    }
}
</script>
<style>
.overview-exam {

    width: 20%;

    position: fixed;
    border-style: solid;
    /* border-top: 5px solid #ea4f4c; */
}

.list-numberical-question {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    margin-top: 10px;
    padding-top: 5px;
    border-top: 5px solid #ea4f4c;

}

.navbar-list-question {
    font-weight: bold;
}

.stt-question {
    display: inline-grid;
    text-align: center;
    align-items: center;
    margin: 1px;
    height: 40px;
    border-style: solid;
    border-radius: 5px;
}
</style>