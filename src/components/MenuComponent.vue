<template>
    <head class="header">
        <nav class="navigationWrapper">
            <div class="logo-menu">
                <div class="logoWrapper">
                    <span class="stylish">
                        Edu
                    </span>
                    <span class="logo">
                        Network
                    </span>
                </div>

                <ul class="navigation">
                    <li class="parent">
                        <a class="link" href="/login">
                            Trang chủ
                        </a>
                    </li>
                    <li class="parent" id="library" @click="clickLibrary">
                        <a class="link" href="#">
                            <i class="fas fa-minus"></i>
                            Thư viện
                            <i class="fas fa-plus"></i>
                        </a>
                        <ul class="subnavigation">
                            <li>
                                <a class="link" href="/library/documents">Tài liệu</a>
                            </li>
                            <li>
                                <a class="link" href="/library/videos">Video</a>
                            </li>
                            <li>
                                <a class="link" href="/library/courses">Trực tuyến</a>
                            </li>
                        </ul>
                    </li>
                    <li class="parent">
                        <a class="link" href="/forum">Diễn đàn</a>
                    </li>
                    <li class="parent">
                        <a class="link" href="/test">Kỳ thi</a>
                    </li>
                    <li class="parent">
                        <a class="link" href="/competition">
                            Sự kiện
                        </a>
                    </li>
                    <li class="parent">
                        <a class="link" href="/glories">
                            Bảng vinh danh
                        </a>
                    </li>
                    <li class="parent">
                        <a class="link" href="/confidential">
                            Lời tâm sự
                        </a>
                    </li>
                    <li class="parent">
                        <a class="link" href="/introduce">
                            Giới thiệu
                        </a>
                    </li>
                    <li href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </li>
                </ul>
            </div>
            <div class="avatar-user">
                <div href="" class="circle-menu" @click="userMenu">
                    <img width="32" height="32"
                        src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                </div>
                <Transition name="slide-fade">
                    <ul class="user-nav" v-if="displayUserMenu">
                        <li>
                            <a href="/user/1">
                                Trang cá nhân
                            </a>
                        </li>
                        <li>
                            <a href="/user/1/questions-bank">
                                Ngân hàng câu hỏi
                            </a>

                        </li>
                        <li>
                            <a href="/user/1/courses">
                                Khóa học
                            </a>
                        </li>
                        <li>
                            <a href="/classes">
                                Lớp học
                            </a>
                        </li>
                        <li>
                            <a href="/groups">
                                Học nhóm
                            </a>
                        </li>
                        <li>
                            <a href="/user/1/review">
                                Ôn tập
                            </a>
                        </li>
                        <li>
                            <a href="/user/1/mission">
                                Nhiệm vụ
                            </a>
                        </li>
                        <li>
                            <a href="/user/1/user-report">
                                Báo cáo
                            </a>
                        </li>
                        <li>
                            <a>
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </Transition>
            </div>

        </nav>

    </head>
</template>
<script>
import { ref } from 'vue';

export default {
    name: "MenuComponent",
    setup() {
        const displayUserMenu = ref(false)
        return {
            displayUserMenu
        }
    },
    methods: {
        userMenu() {
            if (this.displayUserMenu) {
                this.displayUserMenu = false
            } else {
                this.displayUserMenu = true
            }
        },
        clickLibrary() {
            this.$router.push('/library');
            var library = document.getElementById('library');

            library.addEventListener('click', function () {
                // Chưa có thì thêm có thì xóa
                library.classList.toggle("active");

                var elements = document.querySelectorAll('.parent:not(#library)');
                elements.forEach(element => {
                    element.classList.toggle("invisible");
                });
            }, false);


        },

    }
}


</script>
<style scoped>
head {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
    z-index: 99;
    /* align-items: center; */
    /* justify-content: center; */
    /* height: 100vh; */
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.logo-menu {
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.login-logout {
    background-color: #ea4f4c;
}

body .signature {
    font-style: italic;
    font-size: 12px;
    color: #212121;
    padding-top: 15px;
    transition: all 0.3s ease-in-out;
}

body .signature:hover {
    color: white;
}

.item-user {
    text-decoration: none;
    color: #222;
}

.header {
    position: sticky;
    top: 0;
}

.navigationWrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #222;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: white;
    text-transform: uppercase;
    /* overflow: hidden; */
}

.navigationWrapper .logoWrapper {
    display: flex;
    align-items: center;
}

.navigationWrapper .logoWrapper .stylish {
    font-weight: bold;
}

.navigationWrapper .logoWrapper .logo {
    padding-left: 1px;
    color: #ea4f4c;
}

.navigationWrapper .navigation li {
    opacity: 1;
    list-style-type: none;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

.navigationWrapper .navigation .parent {
    padding: 4px 10px;
    cursor: pointer;
}

.navigationWrapper .navigation .parent .link {
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: white;
}

.navigationWrapper .navigation .parent .link:hover {
    color: #ea4f4c;
}

.navigationWrapper .navigation .parent .link .fa-minus {
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: -16px;
    top: 3px;
}

.navigationWrapper .navigation .parent .link .fa-plus {
    opacity: 1;
    transition: all 0.3s ease-in-out;
}

.navigationWrapper .navigation .parent .link .fas {
    color: #ea4f4c;
    margin: -2px 4px 0;
    font-size: 10px;
    transition: all 0.3s ease-in-out;
}

.invisible {
    opacity: 0 !important;
    transform: translate(50px, 0);
}

.avatar-user {
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
}

.circle-menu {
    display: inline-block;
    border: 4px solid rgba(200, 200, 200, 0.4);
    border-radius: 50%;
}

.circle-menu img {
    border-radius: 50%;
}

.circle-menu:hover {
    transition: ease-out 0.2s;
    border: 4px solid rgba(203, 31, 31, 0.25);
}

@media screen and (min-width: 1080px) {
    .navigationWrapper .navigation {
        display: flex;
        list-style-type: none;
        align-items: center;
        width: 100%;
        justify-content: center;
    }

    .navigationWrapper .navigation .icon {
        display: none;
    }

    .navigationWrapper .navigation .subnavigation {
        display: none;
        list-style-type: none;
        min-width: 500px;
        position: absolute;
        top: 40%;
        left: 25%;
        margin: auto;
        transition: all 0.3s ease-in-out;
        background-color: #222;
    }

    .navigationWrapper .navigation .subnavigation li a {
        font-size: 17px;
        padding: 0 5px;
    }

    .active.parent {
        transform: translate(-40px, -25px);
    }

    .active.parent .link {
        font-size: 12px;
    }

    .active.parent .link .fa-minus {
        opacity: 1 !important;
        font-size: 8px;
    }

    .active.parent .link .fa-plus {
        opacity: 0 !important;
    }

    .active.parent .subnavigation {
        display: flex;
    }

    .active#library .subnavigation {
        transform: translate(-150px, 17px);
    }



    .user-nav {
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
        background-color: rgb(114, 114, 114);
        color: #222;
        list-style-type: none;
        position: absolute;
        min-width: 200px;
        right: -15px;
        top: 50px;
        z-index: 100;
    }

    .user-nav li a {
        text-decoration: none;
        color: #222;
        cursor: pointer;
    }

    .user-nav li a:hover {
        color: white;
        cursor: pointer;
    }

    .user-nav:after {
        content: '';
        /* Required to display content */
        position: absolute;
        /* Sets the position absolute to the top div */
        top: 0;
        left: 90%;
        /* position the little arrow */
        margin-left: -15px;
        margin-top: -15px;
        /* Set margin equal to border px */
        width: 0;
        z-index: 1;
        height: 0;
        border-bottom: solid 10px #FFF;
        /* Creates the arrow pointing up, to change to a notch instead user border-top */
        border-left: solid 10px transparent;
        /* Creates triangle effect */
        border-right: solid 10px transparent;
        /* Creates triangle effect */
    }
}


@media screen and (max-width: 600px) {
    .navigationWrapper .logo-menu {
        display: flex;
        flex-direction: column;
    }


    .navigationWrapper .navigation .parent {
        display: none;
    }

    .navigationWrapper .navigation .icon {
        display: block;
    }
}
</style>