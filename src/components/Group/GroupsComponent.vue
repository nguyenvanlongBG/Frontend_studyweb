<template>
    <div class="container">
        <div class="nav-list-group">
            <div class="header-list-group">
                <h3>Nhóm học tập</h3>
                <i class="fa-solid fa-circle-plus create-group"></i>
            </div>
            <div class="bar-find-group">
                <div class="box-find-group">
                    <i class="fa-solid fa-magnifying-glass find-group-icon"></i>
                    <input type="text" class="find-group" placeholder="Tìm nhóm" />
                </div>
            </div>
            <div class="list-group">
                <div class="label-group group-active">
                    <div class="avatar">
                        <a href="" class="circle">
                            <img width="45" height="45"
                                src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                        </a>
                    </div>
                    <div>
                        Nhóm số 1
                    </div>
                </div>
                <div class="label-group">
                    <div class="avatar">
                        <a href="" class="circle">
                            <img width="45" height="45"
                                src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                        </a>
                    </div>
                    <div>
                        Nhóm số 2
                    </div>
                </div>
                <div class="label-group">
                    <div class="avatar">
                        <a href="" class="circle">
                            <img width="45" height="45"
                                src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                        </a>
                    </div>
                    <div>
                        Nhóm số 3
                    </div>
                </div>
                <div class="label-group">
                    <div class="avatar">
                        <a href="" class="circle">
                            <img width="45" height="45"
                                src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                        </a>
                    </div>
                    <div>
                        Nhóm số 4
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-group">
            <DetailGroupComponent />
        </div>
    </div>
</template>
<script>
import DetailGroupComponent from './DetailGroupComponent.vue';
export default {
    name: "GroupsComponent",
    components: { DetailGroupComponent }
}
</script>
<style scoped>
.container {
    margin: 0 15%;
    display: flex;
    height: 100%;
}

.nav-list-group {
    width: 25%;
}

.header-list-group {
    display: flex;
    justify-content: space-between;
}

.create-group {
    display: flex;
    align-items: center;
    margin-right: 5px;
    color: #045565;
    cursor: pointer;
}

.bar-find-group {
    padding-left: 15px;
    padding-right: 15px;
}

.box-find-group {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;
    border-radius: 5px;
    background-color: #c4cdce;
}

.find-group-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.find-group-icon:hover {
    color: #f79b65;
}

.find-group {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 25px;
    border: 2px solid #a0a1a1;
    font-size: 15px;
}

.list-group {
    margin-top: 10px;
}

.label-group {
    min-height: 40px;
    border-radius: 5px;
    display: flex;

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

.detail-group {
    width: 75%;
}
</style>