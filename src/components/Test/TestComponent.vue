<template>

    <div class="grid-item">

        <div class="header-test">
            <div class="mask">
                <button class="tool-button" @click="tryTest(test.id)">
                    Thi thử
                </button>
                <button class="tool-button-do" @click="doTest(test.id)">
                    <span class="fee">5 xu</span>
                    <span class="do">Làm đề</span>
                </button>
                <button class="tool-button" @click="updateTest(test.id)">
                    Sửa
                </button>
                <button class="tool-button" @click="historyTest(test.id)">
                    Lịch sử
                </button>
                <button class="tool-button" @click="deleteTest(test.id)">
                    Xóa
                </button>
            </div>
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
                    <span>
                        Nguyễn Văn A
                    </span>
                    <span>
                        10/01/2022
                    </span>
                </div>
            </div>
            <!-- Khối thông tin người tạo đề thi -->
        </div>
        <div>
            Kì thi: {{ test.name }}
        </div>
        <div>
            Mã đề thi: {{ test.id }}
        </div>
        <div>
            Số câu hỏi:
        </div>
        <div>
            Thời gian
        </div>
        <div>
            Thời gian mở đề: {{ test.time_start }}
        </div>
        <div>
            Ghi chú: {{ test.note }}
        </div>

        <div>
            Số học sinh tham gia: {{ test.candidates }}
        </div>
    </div>
</template>
<script>
import router from '@/router';

export default {
    name: "TestComponent",
    props: ['test'],
    methods: {
        tryTest() {

        },
        doTest(testId) {
            console.log(testId)
            router.push({ name: 'doTest', params: { idTest: testId } })
        },
        updateTest(testId) {
            router.push({ name: 'updateTest', params: { idTest: testId } })
        },
        historyTest(testId) {
            router.push({ name: 'historyTest', params: { idTest: testId } })
        },
        deleteTest(testId) {
            router.push({ name: 'deleteTest', params: { idTest: testId } })
        },

    }
}


</script>
<style>
.header-tests {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.mask {
    display: none;
}

.grid-item:hover .mask {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-sizing: border-box;
    background-color: #3f3e3eda;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    text-decoration: none;


}



.tool-button {
    margin-top: 5px;
    min-height: 35px;
    width: 40%;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;

}

.tool-button-do {
    margin-top: 5px;
    min-height: 35px;
    width: 40%;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.fee {
    display: none;
}

.tool-button-do:hover .fee {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    /* background-color: #0fde0cda; */
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
}

.tool-button-do:hover .do {
    display: none;
}

.information-user {
    display: flex;
}

.information {
    display: flex;
    flex-direction: column;

}

.circle {
    display: inline-block;
    height: 64px;
    width: 64px;
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

.grid-item {
    position: relative;
    box-sizing: border-box;
    background-color: #222;
    border: 2px solid #ea4f4c;
    width: 24.5%;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    padding: 20px;
    padding-top: 10px;
    font-size: 20px;
    text-align: center;
    margin-left: 2px;
    margin-top: 5px;
    text-decoration: none;
}

.header-test {
    display: flex;
    justify-content: space-between;
}
</style>
