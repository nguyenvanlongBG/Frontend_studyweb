<template>
    <div class="container">
        <div class="detail-event">
            <div class="name-event">Cuộc thi ai là thiên tài</div>
            <h2 class="rule-title">Thể lệ</h2>
            <textarea class="rule-event" disabled>
                    Mỗi nhóm sẽ gồm 4 thành viên( 1 leader) các thành viên sẽ trải qua các câu hỏi mỗi câu hỏi sẽ đúng sẽ
                    được 10 điểm.
                    Câu hỏi lớn sẽ gồm 16 mảnh ghép, mỗi mảnh ghép là một câu hỏi nhở nếu trả lời đúng sẽ mở
                    được mảnh ghép đó. Nhóm nào trả lời đúng câu hỏi cuối nhanh nhất sẽ được 100 điểm, nhóm thứ 2 50
                    điểm, nhóm thứ 3 20 điểm. Cuối dùng nhóm nào đạt số điểm cao nhất là nhóm vô địch.
                </textarea>
            <div class="group-event">
                <div class="user-event leader">
                    <div class="information-user">
                        <!-- Khối thông tin User -->
                        <div class="avatar">
                            <a href="" class="circle">
                                <img width="45" height="45"
                                    src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                            </a>
                        </div>

                        <div class="information">
                            <!-- Thông tin tên, giờ post bài -->
                            <span>Đội trưởng</span>
                            <span>
                                Nguyễn Văn A
                            </span>

                        </div>
                    </div>
                </div>
                <div class="user-event partner">
                    <div class="information-user">
                        <!-- Khối thông tin User -->
                        <div class="avatar">
                            <a href="" class="circle">
                                <img width="45" height="45"
                                    src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                            </a>
                        </div>

                        <div class="information">
                            <!-- Thông tin tên, giờ post bài -->
                            <span>Đồng đội</span>
                            <span>
                                Nguyễn Văn A
                            </span>

                        </div>
                    </div>
                </div>
                <div class="user-event partner">
                    <div class="information-user">
                        <!-- Khối thông tin User -->
                        <div class="avatar">
                            <a href="" class="circle">
                                <img width="45" height="45"
                                    src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                            </a>
                        </div>

                        <div class="information">
                            <!-- Thông tin tên, giờ post bài -->
                            <span>Đồng đội</span>
                            <span>
                                Nguyễn Văn A
                            </span>

                        </div>
                    </div>
                </div>
                <div class="user-event partner">
                    <div class="information-user">
                        <!-- Khối thông tin User -->
                        <div class="avatar">
                            <a href="" class="circle">
                                <img width="45" height="45"
                                    src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                            </a>
                        </div>

                        <div class="information">
                            <!-- Thông tin tên, giờ post bài -->
                            <span>Đồng đội</span>
                            <span>
                                Nguyễn Văn A
                            </span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="action-event">
                <button class="action-button-event" @click="participate">+ Mời người</button>
                <button class="action-button-event" @click="participate">Tham gia</button>
                <button class="action-button-event" @click="register">Đăng kí</button>
            </div>
        </div>

    </div>
</template>
<script>
import router from '@/router';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const id = useRoute().params.id
        return {
            id
        }
    },
    methods: {
        participate() {
            router.push({ name: "ParticipateCompetition", params: { id: this.id } })
        }
    }
}
</script>
<style scoped>
.container {
    margin: 0 15%;
    margin-top: 5px;
    background-color: #434141;
    color: white;
    height: 600px;
    border: 2px solid #eb452b;
    border-radius: 5px;
    overflow-y: hidden scroll;
}

.detail-event {
    margin-left: 50px;
    margin-right: 50px;
}

.action-event {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.rule-title {}

.name-event {
    margin-top: 25px;
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

.rule-event {
    background-color: #434141;
    width: 98%;
    color: white;
    border: #222;
    min-height: 125px;
    overflow-y: hidden scroll;
    font-size: 20px;
}

.image-event {
    height: 500px;
    width: 100%;
}

.group-event {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

.leader {
    background-image: url('https://thuthuatnhanh.com/wp-content/uploads/2022/04/Anh-nen-cute-mau-xanh-duong-ngo-nghinh.jpg');
    background-size: cover;
}

.partner {
    background-image: url('https://thuthuatnhanh.com/wp-content/uploads/2022/04/Hinh-nen-cute-mau-xanh-duong-hai-huoc.jpg');
    background-size: cover;
}

.user-event {
    background-color: #0e0e0e;
    min-width: 23%;
    margin-left: 5px;
    border-radius: 5px;
    min-height: 250px;
}

.information-user {
    display: flex;
}

.information {
    display: flex;
    flex-direction: column;
    color: #0f0e0e;
    font-weight: bold;

}

.circle {
    display: inline-block;
    height: 45px;
    width: 45px;
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

.action-button-event {
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

.action-button-event:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>