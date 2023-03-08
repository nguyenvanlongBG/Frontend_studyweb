<template>
    <div class="list-group">
        <div class="label-group group-active" @click="openStudyRoom">
            <div class="avatar">
                <a href="" class="circle">
                    <img width="45" height="45" src="@/../public/image/education.png" />
                </a>
            </div>
            <div>
                Phòng học
            </div>
        </div>
        <div class="label-group" @click="openPlayRoom">
            <div class="avatar">
                <a href="" class="circle">
                    <img width="45" height="45" src="@/../public/image/play.png" />
                </a>
            </div>
            <div>
                Phòng chơi
            </div>
        </div>
        <div class="label-group" @click="openSelfLearning">
            <div class="avatar">
                <a href="" class="circle">
                    <img width="45" height="45" src="@/../public/image/mindset.png" />
                </a>
            </div>
            <div>
                Tự học
            </div>
        </div>
        <div class="label-group" @click="openQARoom">
            <div class="avatar">
                <a href="" class="circle">
                    <img width="45" height="45" src="@/../public/image/qa.png" />
                </a>
            </div>
            <div>
                Phòng hỏi đáp
            </div>
        </div>
        <div class="label-group" @click="openAchieves">
            <div class="avatar">
                <a href="" class="circle">
                    <img width="45" height="45" src="@/../public/image/archive.png" />
                </a>
            </div>
            <div>
                Kho tài liệu
            </div>
        </div>
        <div class="label-group" @click="openReport">
            <div class="avatar">
                <a href="" class="circle">
                    <img width="45" height="45" src="@/../public/image/archive.png" />
                </a>
            </div>
            <div>
                Thống kê
            </div>
        </div>
    </div>
</template>
<script>
import router from '@/router';

export default {
    name: "NewsClassroomComponent",
    methods: {
        openStudyRoom() {
            router.push({ name: "StudyRoom", params: { id: 1 } })
        },
        openPlayRoom() {
            router.push({ name: "PlayRoom", params: { id: 1 } })

        },
        openSelfLearning() {
            router.push({ name: "SelfLearningRoom", params: { id: 1 } })
        },
        openQARoom() {
            router.push({ name: "QARoom", params: { id: 1 } })
        },
        openAchieves() {
            router.push({ name: "AchievesClassroom", params: { id: 1 } })
        },
        openReport() {
            router.push({ name: "ReportClassroom", params: { id: 1 } })

        }
    }
}
</script>
<style>
.list-group {
    margin-top: 10px;
}

.label-group:first-child {
    margin-top: 50px;
}

.label-group {
    min-height: 40px;
    border-radius: 5px;
    display: flex;
    margin-top: 5px;
    cursor: pointer;
}

.group-active {
    background-color: #c8eff7;

}

.label-group:hover {
    background-color: #e7f6f9;
}

.avatar {
    box-sizing: border-box;
}

.circle {
    display: inline-block;
    box-sizing: border-box;
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
</style>