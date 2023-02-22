<template>
    <div class="container">
        <!-- Giao diện chọn các bộ đề -->
        <ModalCreateTest v-if="modalCreateTest.visible" @close="modalCreateTest.visible = false">

        </ModalCreateTest>
        <div class="header-tests">
            <!-- <h1 class="myListTestTitle">Cuộc thi EduNetwork</h1> -->
            <!-- <div class="list-tool-button-test">
                <button class="tool-button-test" @click="createTest" v-if="hasRole" id="create">
                    Tạo đề thi
                </button>
                <button class="tool-button-test" @click="getMyListTests" :disabled="hasRole" id="doingTest">
                    Chưa hoàn thành
                </button>
                <button class="tool-button-test" @click="getMyListTests" :disabled="hasRole" id="doingTest">
                    Đã hoàn thành
                </button>
                <button class="tool-button-test" @click="getMyListTests" id="myListTest">
                    Bộ đề của tôi
                </button>
                <button class="tool-button-test" @click="getMyListTests" :disabled="!hasMyTests" id="all">
                    Bộ đề khác
                </button>
            </div> -->
        </div>
        <div class="grid-container">
            <div class="grid-item" v-for="(event, index) in events" :key="index">
                <div class="banner-event">
                    <img class="image-event"
                        src="https://images.pexels.com/photos/6499190/pexels-photo-6499190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div class="info-event">
                    <h2 class="name-event">{{ event.name }}</h2>
                    <div>
                        <i class="fa-solid fa-book"></i> Lĩnh vực kiến thức: Tổng hợp
                    </div>
                    <div>Đối tượng: Tất cả</div>
                    <div>Hình thức: Cá nhân</div>
                    <button class="tool-button-detail-event" @click="getCompetition(event.id)">Xem chi tiết</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getTests } from "../services/test"
import ModalCreateTest from "../components/ModalCreateTest.vue"
import { ref } from "vue"
import router from "@/router"

export default {
    name: 'CompetitionsComponent',
    components: {
        ModalCreateTest,
    },
    setup() {
        const type = ref(0)
        return {
            type
        }
    },
    data() {
        return {
            events: [{ id: 1, name: "Cuộc thi ai là thiên tài" }, { id: 2, name: "Cuộc thi đoàn kết" }, { id: 3, name: "Cuộc thi con số may mắn" }],
            data: [],
            modalCreateTest: {
                visible: false,
            },
            hasMyTests: false,
            hasRole: true,
            displayButton: true,
            filter: {},
            title: "Tất cả bộ đề"
        }
    },
    mounted() {
        // this.getListTest()
    },
    methods: {
        async getListTest() {
            const response = await getTests(this.filter)
            this.data = response.data
        },
        getCompetition(id) {
            router.push({ name: "detailCompetition", params: { id: id } })
        },
        createTest() {
            this.modalCreateTest.visible = true
        },
        getMyListTests() {
            this.hasMyTests = true
            this.displayButton = false
            this.filter = {}
            // this.filter.user_id = 2
            this.getListTest()
        }
    }
}
</script>
<style scoped>
.container {
    margin: 0 15%;
    position: relative;
}

.myListTestTitle {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 15px;
}



.list-tool-button-test {
    display: flex;
}

.tool-button-detail-event {
    margin-left: 2px;
    margin-top: 2px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.tool-button-test:active {

    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.share {
    font-size: 22px;
}

.grid-container {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    padding-top: 0px;
    margin-top: 2px;
    box-sizing: border-box;
    border-radius: 20px;

}

.image-event {
    height: 400px;
    width: 400px;
}

.grid-item {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    background-color: #222;
    border: 2px solid #ea4f4c;
    width: 100%;
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

.header-exam {
    display: flex;
    justify-content: space-between;
}

.name-event {
    font-size: 3rem;
    text-align: center;
    /* height: 90vh; */
    line-height: 8vh;
    color: #fcedd8;
    font-family: 'Niconne', cursive;
    font-weight: 700;
    text-shadow: 1px 1px 0px #eb452b,
        2px 2px 0px #efa032,
        3px 3px 0px #46b59b,
        4px 4px 0px #017e7f,
        5px 5px 0px #052939,
        6px 6px 0px #c11a2b,
        7px 7px 0px #c11a2b,
        8px 8px 0px #c11a2b,
        9px 9px 0px #c11a2b;
}

.banner-event {
    width: 50%;
}

.info-event {
    margin-left: 5px;
    font-weight: bold;
}
</style>