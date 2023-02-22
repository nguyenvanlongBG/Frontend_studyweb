<template>
    <div class="container-profile">
        <div class="info-special">
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
                        <i class="fa-solid fa-medal"></i>Chuyên gia ra đề
                    </span>
                    <span class="school-user">
                        Trường THPT Lục Nam
                    </span>
                </div>
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
            <TabLibraryComponent category="1" />
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import TabLibraryComponent from './TabLibraryComponent.vue';
export default {
    name: "DocumentsComponent",
    components: { TabLibraryComponent },
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
.container-profile {
    margin-left: 15%;
    min-width: 70%;
    max-width: 1100px;
    display: flex;
}

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

.special-test-reference {}




.information-user {
    display: flex;
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
</style>