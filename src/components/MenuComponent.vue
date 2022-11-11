<template>

    <head class="header">
        <div class="login-logout">
            Phần đăng kí đăng nhập, tìm kiếm
        </div>
        <nav class="navigationWrapper">
            <div class="logoWrapper">
                <span class="stylish">
                    LongBG
                </span>
                <span class="logo">
                    OK
                </span>
            </div>

            <ul class="navigation">

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
                            <a class="link" href="/library/video">Video</a>
                        </li>
                    </ul>
                </li>
                <li class="parent">
                    <a class="link" href="/forum">Diễn đàn</a>
                </li>
                <li class="parent">
                    <a class="link" href="/exams">Kỳ thi</a>
                </li>
                <li class="parent">
                    <a class="link">
                        Bảng xếp hạng
                    </a>
                </li>
                <li class="parent">
                    <a class="link">
                        Giới thiệu
                    </a>
                </li>
            </ul>

        </nav>
    </head>

</template>
<script>
export default {
    name: "MenuComponent",
    methods: {
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
<style>
head {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    /* height: 100vh; */
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

.header {
    position: sticky;
    top: 0;
}

.navigationWrapper {
    position: relative;

    display: flex;
    width: 100%;
    align-items: center;
    padding: 20px;
    background-color: #222;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: white;
    text-transform: uppercase;
    overflow: hidden;
}

.navigationWrapper .logoWrapper {
    display: flex;
}

.navigationWrapper .logoWrapper .stylish {
    font-weight: bold;
}

.navigationWrapper .logoWrapper .logo {
    padding-left: 4px;
    color: #ea4f4c;
}

.navigationWrapper .navigation {
    display: flex;
    list-style-type: none;
    width: 100%;
    justify-content: center;
}

.navigationWrapper .navigation li {
    opacity: 1;
    list-style-type: none;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

.navigationWrapper .navigation .parent {
    padding: 0 10px;
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

.invisible {
    opacity: 0 !important;
    transform: translate(50px, 0);
}
</style>