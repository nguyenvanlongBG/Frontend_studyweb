<template>
    <div class="container">
        <div class="card">
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
                    <span>
                        Nguyễn Văn A
                    </span>
                    <span>
                        10/01/2022
                    </span>
                </div>
            </div>
            <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
            </div>
            <div class="circle-glorie">
                <div class="cover-content-glorie">
                    <div class="content-glorie">
                        9/10
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
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
                    <span>
                        Nguyễn Văn A
                    </span>
                    <span>
                        10/01/2022
                    </span>
                </div>
            </div>
            <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
            </div>
            <div class="circle-glorie">
                <div class="cover-content-glorie">
                    <div class="content-glorie">
                        9/10
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
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
                    <span>
                        Nguyễn Văn A
                    </span>
                    <span>
                        10/01/2022
                    </span>
                </div>
            </div>
            <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
            </div>
            <div class="circle-glorie">
                <div class="cover-content-glorie">
                    <div class="content-glorie">
                        9/10
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
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
                    <span>
                        Nguyễn Văn A
                    </span>
                    <span>
                        10/01/2022
                    </span>
                </div>
            </div>
            <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
            </div>
            <div class="circle-glorie">
                <div class="cover-content-glorie">
                    <div class="content-glorie">
                        9/10
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
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
                    <span>
                        Nguyễn Văn A
                    </span>
                    <span>
                        10/01/2022
                    </span>
                </div>
            </div>
            <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
            </div>
            <div class="circle-glorie">
                <div class="cover-content-glorie">
                    <div class="content-glorie">
                        9/10
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "GlorieUserComponent"
}
</script>
<style scoped>
body {
    background-color: #16170e;
    font-family: 'Open Sans', sans-serif;
}


.circle {
    display: flex;
    padding: 2px;
    /* border: 2px solid; */
    max-width: 45px;
    max-height: 45px;
    /* border: 4px solid rgba(200, 200, 200, 0.4);  */
    border-radius: 50%;
}

.circle img {
    align-items: center;
    border-radius: 50%;
}

.circle:hover {
    background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%);
    transition: 1s ease-out;
}

.information {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    color: #222;
    font-weight: bold;
}

.information-user {
    display: flex;
}

.cover-content-glorie {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%);
}

.cover-content-glorie:hover {
    width: 64px;
    height: 64px;
    background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%);
    transition: 4s ease-out;
    padding: 2px;
}

.content-glorie {
    border-radius: 50%;
    background-color: #323334;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.container {
    position: absolute;
    height: 350px;
    width: 600px;
    top: 60px;
    /* background-color: #b79c3a; */
    /* left: calc(50% - 300px); */
    display: flex;
}

.card {
    display: flex;
    height: 280px;
    width: 200px;
    background-color: #c48129;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #f7e455;
    /*   margin-left: -50px; */
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
}

.card:not(:first-child) {
    margin-left: -50px;
}

.card:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
}

.card:hover~.card {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
}

.title {
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 15px;
}

.bar {
    position: absolute;
    top: 100px;
    left: 20px;
    height: 5px;
    width: 150px;
}

.emptybar {
    background-color: #2e3033;
    width: 100%;
    height: 100%;
}

.filledbar {
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0, 154, 217);
    background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%);
    transition: 0.6s ease-out;
}

.card:hover .filledbar {
    width: 120px;
    transition: 0.4s ease-out;
}

.circle-glorie {
    position: absolute;
    top: 150px;
    left: calc(50% - 60px);
}

.stroke {
    stroke: white;
    stroke-dasharray: 360;
    stroke-dashoffset: 360;
    transition: 0.6s ease-out;
}

svg {
    fill: #17141d;
    stroke-width: 2px;
}

.card:hover .stroke {
    stroke-dashoffset: 100;
    transition: 0.6s ease-out;
}
</style>