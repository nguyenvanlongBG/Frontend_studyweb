<template>
    <div class="introduce">
        <div class="container">
            <div class="title-introduce">
                EduNetwork
            </div>
            <div class="introduce-edunetwork">
                <div class="content-introduce">
                    EduNetwork là một mạng xã hội dành riêng cho giáo dục.
                    Với mong muốn tạo ra một môi trường cho giáo viên và học
                    sinh có thể vừa học tập vừa trải nghiệm.
                    Nơi học sinh không chỉ có thể học tập mà còn có thể có thêm những trải nghiệm, kỹ năng cho bản
                    thân. Nơi mà học sinh, giáo viên có thể chia sẻ và học hỏi những kiến thức từ những người mà có thể
                    mình
                    chưa gặp bao giờ.
                    <br>
                    <br>
                    Rất mong nhận được sự đóng góp của quý thày cô và các bạn học sinh cùng đội ngũ EduNetwork để cộng
                    đồng EduNetwork  phát
                    triển hơn nữa
                </div>
                <div class="heart">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "IntroduceComponent",
}
</script>
<style scoped>
.introduce {
    background-color: #e2e2e5;
    height: calc(100% - 40px);
    position: absolute;
    place-content: center;
    width: 100%;
}

.container {
    margin: 0 15%;
    background-color: white;
    height: 500px;
    margin-top: 50px;
    border: 2px solid #ea4f4c;
    border-radius: 5px;
}


.title-introduce {
    font-size: 50px;
    font-weight: 900;
    margin-top: 50px;
    display: flex;
    justify-content: center;
}

.introduce-edunetwork {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content-introduce {
    color: #999;
    font-size: 20px;
    line-height: 1.5;
    margin: 40px;
}

.red-color {
    color: red;
}

.heart {
    background: rgb(223, 76, 142);
    position: relative;
    height: 100px;
    width: 100px;
    transform: rotate(-45deg) scale(1);
    animation: pulse 2s linear infinite;
}


.heart::after {
    /* background:blue; */
    background: inherit;
    border-radius: 50%;
    content: '';
    position: absolute;
    top: -50%;
    left: 0;
    height: 100px;
    width: 100px;
}

.heart::before {
    background: inherit;
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 0;
    right: -50%;
    height: 100px;
    width: 100px;
}

@keyframes pulse {
    0% {
        transform: rotate(-45deg) scale(1);
        opacity: 0;
    }

    50% {
        transform: rotate(-45deg) scale(1.3);
        opacity: 1;
    }

    100% {
        transform: rotate(-45deg) scale(1);
        opacity: 1;
    }
}
</style>