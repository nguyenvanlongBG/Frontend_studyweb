<template>
    <div class="information-user-big">
        <!-- Khối thông tin User -->
        <div class="avatar-questioner">
            <a href="" class="circle-questioner">
                <img width="128" height="128"
                    src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
            </a>
        </div>
        <div class="information-questioner">
            <!-- Thông tin tên, giờ post bài -->
            <span class="name-questioner">
                Nguyễn Văn A
            </span>
            <span class="time-post">
                10/01/2022
            </span>
        </div>
    </div>

</template>
<script>
export default {
    name: "InfoGeneralComponent"
}
</script>
<style>
.circle-questioner {
    display: inline-block;
    height: 128px;
    width: 128px;
    border: 8px solid rgba(200, 200, 200, 0.4);
    border-radius: 50%;
}

.circle-questioner img {
    border-radius: 50%;
}

.circle-questioner:hover {
    transition: ease-out 0.2s;
    border: 8px solid rgba(203, 31, 31, 0.25);
}

.information-user-big {
    display: flex;
}

.information-questioner {
    display: flex;
    flex-direction: column;
}

.information-questioner {
    margin: 10px 15px;
    font-size: 20px;
    font-weight: bold;
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

.answer {
    display: flex;
}

.information-user {
    display: flex;
}

.information {
    display: flex;
    flex-direction: column;
}
</style>