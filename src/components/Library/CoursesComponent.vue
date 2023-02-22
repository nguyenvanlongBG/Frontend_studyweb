<template>
    <div class="container-courses">
        <div class="info-special">
            <div class="motivation">
                Nỗ lực hôm nay, tương lai ngày mai.
                <br>
                Hãy cố gắng lên bạn nhé<i class="fa-sharp fa-solid fa-heart red-color"></i>
            </div>
            <div class="special-test-reference">
                <span class="title-reference">Tài liệu</span>
                <div>
                    <div>
                        <input type="radio" class="hidden-radio" id="1" name="tab" :value="1" />
                        <label @click="getData(1)" class="label-tab" :for="1">Toán học</label>
                        <input type="radio" class="hidden-radio" id="2" name="tab" :value="2" />
                        <label @click="getData(2)" class="label-tab" :for="2">Hóa học</label>
                        <input type="radio" class="hidden-radio" id="3" name="tab" :value="3" />
                        <label @click="getData(3)" class="label-tab" :for="3">Vật lý</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-detail-reference">
            <VueMultiselect :class="colorSelect" v-model="filterChapters" open-direction="bottom"
                :options="chapters ? chapters : []" :multiple="true" :close-on-select="false" :clear-on-select="false"
                :preserve-search="true" placeholder="Chương" label="name" track-by="name" :preselect-first="false"
                @select="selectItems" @remove="removeItems">
            </VueMultiselect>
            <div>
                <div class="container-course">
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
                            <span class="name-user">
                                Nguyễn Văn A
                            </span>
                            <span class="level-user">
                                <img src="../../../public/image/expert.png" />Chuyên gia ra đề
                            </span>
                            <span class="school-user">
                                Trường THPT Lục Nam
                            </span>
                        </div>
                    </div>
                    <div class="introduce-course">
                        <div class="content-course">
                            Trong buổi học này cô sẽ hướng dẫn các em giải dạng toán giải phương trình tích phân.
                            Sau khóa học các em sẽ nắm được phương pháp giải phương trình bằng phương pháp đạo hàm.
                        </div>
                        <div class="time-course">
                            Thời gian: 9h30 -11h30 ngày 14/2/2023
                        </div>
                        <div class="fee-course">
                            Học phí: 500 <img width="20" src="../../../public/image/coin.png" />
                        </div>
                        <div class="image-course">
                            <img src="../../../public/image/goals.png" class="image-coin" />
                        </div>
                        <div class="register-course">
                            <button class="register-button-course">
                                Một số dạng bài
                            </button>
                            <button class="register-button-course">
                                Đăng kí
                            </button>
                        </div>
                    </div>
                </div>

                <div class="container-course">
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
                            <span class="name-user">
                                Nguyễn Văn A
                            </span>
                            <span class="level-user">
                                <img src="../../../public/image/gold_medal.png" />Chuyên nghiệp
                            </span>
                            <span class="school-user">
                                Trường THPT Lục Nam
                            </span>
                        </div>
                    </div>
                    <div class="introduce-course">
                        <div class="content-course">
                            Trong buổi học này cô sẽ hướng dẫn các em giải dạng toán giải phương trình tích phân.
                            Sau khóa học các em sẽ nắm được phương pháp giải phương trình bằng phương pháp đạo hàm.
                        </div>
                        <div class="time-course">
                            9h30 -11h30 ngày 14/2/2023
                        </div>
                        <div class="fee-course">
                            500 <img width="20" src="../../../public/image/coin.png" class="image-coin" />
                        </div>
                        <div class="image-course">
                            <img src="../../../public/image/goals.png" />
                        </div>
                        <div class="register-course">
                            <button class="register-button-course">
                                Một số dạng bài
                            </button>
                            <button class="register-button-course">
                                Đăng kí
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import VueMultiselect from 'vue-multiselect';
export default {
    name: "CoursesComponent",
    components: { VueMultiselect },
    setup() {
        const type = ref(1)
        return {
            type
        }
    },
    data() {
        return {
            category: 2,
        }
    },
    methods: {
        getData(category) {
            if (category == 1) {
                this.type = 1
                this.category = category
            } else {
                if (category == 2) {
                    this.type = 2
                    this.category = category
                }
                if (category == 3) {
                    this.type = 2
                    this.category = category
                }
            }
        }
    }
}
</script>
<style>
.container-courses {
    margin: 0 20%;
    min-width: 60%;
    max-width: 1100px;
    display: flex;
}

.container-course {
    margin-top: 15px;
    margin-left: 2px;
    background-color: #e2e2e5;
    padding-bottom: 15px;
    border: 2px solid #c6c3c3;
    border-radius: 5px;
}

.introduce-course {}

.name-user {
    font-weight: bold;
}

.level-user {
    font-weight: bold;
}

.school-user {
    font-weight: bold;
}

.title-reference {
    font-weight: bold;
}

.info-special {
    display: flex;
    flex-direction: column;
    width: 25%;
}

.tab-detail-reference {
    width: 75%;
}

.motivation {
    font-size: 20px;
    color: #999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.red-color {
    color: red;
}

.special-test-reference {}




.information-user {
    display: flex;
    padding: 5px;
}

.information {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.circle {
    display: inline-block;
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

input.hidden-radio {
    display: none;
}

.label-tab {
    display: block;
    padding: 3px;
    margin-left: 2px;
    font-family: 'Kalam', cursive;
    margin-top: 2px;
    /* margin-right: 15px; */
    margin-bottom: 15px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    color: white;
    /* border: 2px solid #ea4f4c; */
    background-color: #222;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.hidden-radio:checked+.label-tab {
    box-shadow: 0 5px #666;
    background-color: #dfdcdc;
    color: #222;
    transition: 0.6ms ease-in-out;
}

.box-item {
    width: 20%;
    color: white;
    box-sizing: border-box;
    border-radius: 5px;
    margin-left: 2px;
    min-height: 250px;
    border: 3px solid rgb(209, 175, 6);
    background-color: #222;

}

.content-course {
    padding: 5px;
}

.time-course {
    padding: 5px;
}

.image-coin {
    margin-left: 2px;
}

.fee-course {
    padding: 5px;
    display: flex;
    align-items: center;
}

.image-course {
    display: flex;
    justify-content: center;
}

.register-course {
    display: flex;
    justify-content: flex-end;
}

.register-button-course {
    margin-right: 10px;
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

.register-button-course:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import url('vue-multiselect/dist/vue-multiselect.css');
</style>