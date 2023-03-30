<template>
    <ModalCreateReview v-if="visibleCreateReview" @close="visibleCreateReview = false" />
    <div class="container-review">
        <div class="action-group">
            <div class="tool-button" @click="createReview">
                + Tạo đề ôn
            </div>
            <div class="tool-button">
                Tạo đề chơi
            </div>
        </div>
        <div class="event-group">
            <div class="detail-event">
                <img class="image-event-group" src="../../../public/image/test.png" />
                <div class="info-event">
                    <div>
                        <div class="info-event-detail">
                            Người tạo:
                            <span class="special-info">Nguyễn Văn A</span>
                        </div>
                        <div class="info-event-detail">
                            Môn học: <span class="special-info">Toán</span>
                        </div>
                        <div class="info-event-detail">
                            Chủ đề: <span class="special-info">Bất đẳng thức</span>
                        </div>
                    </div>
                    <div class="action-event">
                        <button class="tool-button" @click="openTest">Làm thường</button>
                        <button class="tool-button" @click="openTest">Làm tốc độ</button>
                        <button class="tool-button">Lịch sử</button>
                    </div>
                </div>
            </div>
            <div class="detail-event">
                <img class="image-event-group" src="../../../public/image/playing-card.png" />
                <div class="info-event">
                    <div>
                        <div class="info-event-detail">
                            Người tạo:
                            <span class="special-info">Nguyễn Văn A</span>
                        </div>
                        <div class="info-event-detail">
                            Môn học: <span class="special-info">Toán</span>
                        </div>
                        <div class="info-event-detail">
                            Chủ đề: <span class="special-info">Bất đẳng thức</span>
                        </div>
                    </div>
                    <div class="action-event">
                        <button class="tool-button" @click="openRoomPlay">Vào chơi</button>
                        <button class="tool-button">Lịch sử</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '@/router';
import ModalCreateReview from '../../views/Review/ModalCreateReview.vue'
export default {
    name: "ReviewComponent",
    components: {
        ModalCreateReview
    },
    data() {
        return {
            visibleCreateReview: false
        }
    },
    methods: {
        openTest() {
            router.push({
                name: 'detail-review', query: {
                    type: 1,
                }
            })
        },
        createReview() {
            this.visibleCreateReview = true
        }
    }

}
</script>
<style>
.container-review {
    margin: 0 20%;
}

.action-group {
    display: flex;
    justify-content: flex-end;
}

.event-group {
    margin-top: 15px;
    overflow-y: hidden scroll;
}

.detail-event {
    margin-top: 15px;
    display: flex;
    background-color: #dfdcdc;
    border-radius: 5px;
    padding: 15px;
}

.image-event-group {
    height: 300px;
}

.info-event {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}

.action-event {
    display: flex;
    justify-content: flex-end;
    height: 35px;
}

.info-event-detail {
    font-size: 20px;
    font-weight: bold;
}

.special-info {
    color: #02667a;
}

.tool-button {
    margin-left: 2px;
    margin-top: 2px;
    min-height: 25px;
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
</style>
