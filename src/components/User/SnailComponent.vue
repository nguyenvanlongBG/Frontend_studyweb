<template>
    <div class="container-snail">
        <h1></h1>
        <div id="snail">
            <div id="shell">
            </div>
            <div id="slug"></div>
        </div>
        <div id="slime"></div>
    </div>
</template>
<script>
export default {
    name: "SnailComponent"
}
</script>
<style scoped>
.container-snail {
    width: 200px;
    height: 200px;
}

body {
    overflow: hidden;
}

h1 {
    text-align: center;
    font-size: 65px;
    font-family: helvetica neue, helvetica, arial, sans-serif;
    font-weight: 100;
    color: #4e4644;
}

#snail {
    height: 75px;
    width: 120px;
    position: absolute;
    z-index: 1;
    top: 100px;
    animation: 25s snailCrawl linear infinite;
}

#snail #shell {
    height: 64px;
    width: 74px;
    border-radius: 100%;
    background: #8c4f13;
    /* Old browsers */
    background: -moz-linear-gradient(left, #8c4f13 44%, #8c4f13 51%, #5f3001 100%);
    /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(44%, #8c4f13), color-stop(51%, #8c4f13), color-stop(100%, #5f3001));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(left, #8c4f13 44%, #8c4f13 51%, #5f3001 100%);
    /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(left, #8c4f13 44%, #8c4f13 51%, #5f3001 100%);
    /* Opera 11.10+ */
    background: -ms-linear-gradient(left, #8c4f13 44%, #8c4f13 51%, #5f3001 100%);
    /* IE10+ */
    background: linear-gradient(to right, #8c4f13 44%, #8c4f13 51%, #5f3001 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8c4f13", endColorstr="#5f3001", GradientType=1);
    /* IE6-9 */
    position: absolute;
    z-index: 1;
    top: 5px;
    left: 20px;
    overflow: visible;
    transform: rotate(20deg);
}

#snail #shell:after {
    content: "";
    display: block;
    position: absolute;
    right: 49px;
    width: 0;
    height: 0;
    border-right: 54px solid #8c4f13;
    border-top: 32px solid transparent;
    border-bottom: 32px solid transparent;
    border-radius: 64px;
}

#snail #slug {
    width: 170px;
    height: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: green;
    border-radius: 0 15px 5px 0;
    animation: 1.25s slugSquish ease-in-out infinite;
}

#snail #slug:before {
    /* creates antennae */
    content: ".";
    font-size: 50px;
    line-height: 0px;
    color: transparent;
    text-shadow: -7px -12px 0 #b7df2d, -1px -7px 0 #b7df2d;
    display: block;
    position: absolute;
    height: 30px;
    width: 2px;
    background: green;
    right: 10px;
    top: -25px;
    transform: rotate(30deg);
    box-shadow: 6px 5px 0 green;
}

#snail #slug:after {
    /* creates tail */
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    left: -100px;
    height: 0;
    width: 0;
    border-left: 100px solid transparent;
    border-bottom: 40px solid green;
}

#slime {
    height: 5px;
    width: 50%;
    background: -moz-linear-gradient(left, rgba(183, 223, 45, 0) 0%, #b7df2d 100%);
    /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(183, 223, 45, 0)), color-stop(100%, #b7df2d));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(left, rgba(183, 223, 45, 0) 0%, #b7df2d 100%);
    /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(left, rgba(183, 223, 45, 0) 0%, #b7df2d 100%);
    /* Opera 11.10+ */
    background: -ms-linear-gradient(left, rgba(183, 223, 45, 0) 0%, #b7df2d 100%);
    /* IE10+ */
    background: linear-gradient(to right, rgba(183, 223, 45, 0) 0%, #b7df2d 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00b7df2d", endColorstr="#b7df2d", GradientType=1);
    /* IE6-9 */
    position: absolute;
    z-index: 0;
    top: 172px;
    left: -50%;
    animation: 25s slimeSpread linear infinite;
    border-radius: 3px;
}

@keyframes snailCrawl {
    0% {
        /* left: -120px; */
    }

    100% {
        /* left: calc(100% + 120px); */
    }
}

@keyframes slimeSpread {
    0% {
        left: -50%;
        opacity: 0.5;
    }

    95% {
        opacity: 0.5;
    }

    100% {
        left: calc(50% + 240px);
        opacity: 0;
    }
}

@keyframes slugSquish {
    0% {
        width: 50px;
        right: -5px;
    }

    50% {
        width: 40px;
        right: 0px;
    }

    100% {
        width: 50px;
        right: -5px;
    }
}
</style>