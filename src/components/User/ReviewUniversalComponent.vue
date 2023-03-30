<template>
    <div class="review-run">
        <div id="dude">
            <div id="legl" class="leg"></div>
            <div id="body">^</div>
            <div id="legr" class="leg"></div>
        </div>
        <div id="girl">
            <div id="arm1"></div>
            <div id="arm2"></div>
            <div id="hip1">
                <div id="knee1">
                </div>
            </div>
            <div id="hip2">
                <div id="knee2">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ReviewUniversalComponent",
    data() {
        return {
            speed: 4,
            stop: false
        }
    }
}
</script>
<style scoped>
.review-run {
    width: 100%;
    height: 100%;
    background-color: #000;
}

#dude {
    position: fixed;
    bottom: 0px;
    left: 60px;
}

.leg {
    position: absolute;
    width: 60px;
    height: 120px;
    bottom: 0;
    left: 0;
    border-radius: 30px 30px 0 0;
}

#legl {
    background-color: #00cccc;
    animation: leg 1s infinite linear;
}

#legr {
    background-color: #33ffff;
    animation: leg 1s 0.5s infinite linear;
}

#body {
    width: 160px;
    height: 160px;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    bottom: 80px;
    left: -20px;
    text-align: right;
    line-height: 160px;
    font-size: 32px;
    animation: body 0.5s infinite linear;
}

#body:after {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    background-color: #ffdae0;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 50px;
}

@keyframes leg {
    0% {
        left: 0px;
        bottom: 0px;
    }

    10% {
        left: 0px;
        bottom: 10px;
    }

    40% {
        left: 30px;
        bottom: 10px;
    }

    50% {
        left: 30px;
        bottom: 0px;
    }

    100% {
        left: 0px;
    }
}

@keyframes body {
    0% {
        bottom: 70px;
    }

    50% {
        bottom: 80px;
    }

    100% {
        bottom: 70px;
    }
}

#bg,
#bg2 {
    width: 200vw;
    height: 100vh;
    position: fixed;
    bottom: 0;
    left: 0;
    /*background-image: linear-gradient( 90deg, @col3, @col4,@col3 50%, @col4, @col3); */
    background-color: transparent;
    background-image: linear-gradient(aqua 2px, transparent 2px), linear-gradient(90deg, aqua 2px, transparent 2px), linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
    background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

#bg {
    animation: bg 16s infinite linear;
    filter: blur(2px);
}

#bg2 {
    animation: bg 12s infinite linear;
    filter: blur(1px);
}

@keyframes bg {
    0% {
        left: 0;
    }

    100% {
        left: -100vw;
    }
}

/*------GIRL-----*/
#girl {
    width: 0;
    height: 0;
    position: fixed;
    bottom: 14px;
    border: 10px solid transparent;
    border-bottom: 30px solid rgb(240, 125, 125);
    transform: rotate(40deg);
    left: 240px;
    animation: girl 0.25s infinite;
}

#girl:after,
#girl:before {
    content: "";
    display: block;
    background-color: rgb(228, 153, 153);
    position: absolute;
}

#girl:before {
    width: 20px;
    height: 10px;
    border-radius: 10px 10px 0 0;
    left: -14px;
    top: -8px;
    transform: rotate(-45deg);
    background-color: aqua;
    z-index: 1;
}

#girl:after {
    content: "^";
    font-size: 12px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    top: -7px;
    left: -6px;
    text-align: right;
}

@keyframes girl {
    0% {
        bottom: 14px;
    }

    50% {
        bottom: 18px;
    }

    100% {
        bottom: 14px;
    }
}

#hip1,
#hip2,
#knee1,
#knee2 {
    position: absolute;
    width: 4px;
    height: 14px;
    border-radius: 2px;
    background-color: #eb7e7e;
    transform-origin: top center;
}

#hip1,
#hip2 {
    bottom: -40px;
}

#hip1 {
    animation: hip 0.5s infinite linear;
}

#hip2 {
    animation: hip 0.5s 0.25s infinite linear;
}

#knee1,
#knee2 {
    background-color: rgb(228, 150, 147);
    bottom: -12px;
}

#knee1 {
    animation: knee 0.5s infinite linear;
}

#knee2 {
    animation: knee 0.5s 0.25s infinite linear;
}

@keyframes hip {
    0% {
        transform: rotate(45deg);
    }

    25% {
        transform: rotate(-120deg);
    }

    30% {
        transform: rotate(-120deg);
    }

    100% {
        transform: rotate(45deg);
    }
}

@keyframes knee {
    0% {
        transform: rotate(90deg);
    }

    33% {
        /*voor*/
        transform: rotate(90deg);
    }

    45% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(90deg);
    }
}

#arm1,
#arm2 {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    border: solid rgb(241, 140, 140) 3px;
    border-top: solid transparent 3px;
    border-left: solid transparent 3px;
    transform-origin: left bottom;
    position: absolute;
    top: -2px;
    left: -2px;
}

#arm1 {
    animation: arm 0.5s infinite linear;
}

#arm2 {
    animation: arm 0.5s 0.25s linear infinite;
}

@keyframes arm {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.ana {
    margin-top: -170px;
    margin-left: 150px;
    zoom: 65%;
}

.yatay {
    width: 250px;
    height: 50px;
    background-color: white;
    position: relative;
    left: 300px;
    top: 300px;
    border-radius: 50px;
}

.ilkyuvarlak {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    left: 320px;
    top: 195px;
}

.ikinciyuvarlak {
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    left: 380px;
    top: 70px;
}

[class*="damla-"] {
    width: 4px;
    height: 25px;
    background-color: white;
    /* burada classı damla- olan her şeyi seçtim !!!*/
    border-radius: 50px;
    box-shadow: 10px 10px 5px white;
}

.damla-bir {
    position: relative;
    margin-left: 315px;
    margin-top: 100px;
    animation: bir 1s linear infinite;
}

.damla-iki {
    position: relative;
    margin-left: 400px;
    animation: iki 1s linear infinite;
    animation-delay: 0.5s;
}

.damla-uc {
    position: relative;
    margin-left: 470px;
    margin-top: -50px;
    animation: uc 1s linear infinite;
    animation-delay: 0.9s;
}

.damla-dort {
    position: relative;
    margin-left: 530px;
    animation: dort 1s linear infinite;
    animation-delay: 1.1s;
}

.damla-bes {
    position: relative;
    margin-left: 500px;
    animation: bes 1s linear infinite;
    animation-delay: 1.3s;
}

.damla-alti {
    position: relative;
    margin-left: 350px;
    animation: alti 1s linear infinite;
    animation-delay: 1.5s;
}

.damla-yedi {
    position: relative;
    margin-left: 440px;
    margin-top: -10px;
    animation: yedi 1s linear infinite;
    animation-delay: 1.7s;
}

@keyframes bir {
    0% {
        transform: translateY(-70px);
    }

    100% {
        transform: translateY(120px);
    }
}

@keyframes iki {
    0% {
        transform: translateY(-70px);
    }

    100% {
        transform: translateY(120px);
    }
}

@keyframes uc {
    0% {
        transform: translateY(-70px);
    }

    100% {
        transform: translateY(140px);
    }
}

@keyframes dort {
    0% {
        transform: translateY(-70px);
    }

    100% {
        transform: translateY(130px);
    }
}

@keyframes bes {
    0% {
        transform: translateY(-70px);
    }

    100% {
        transform: translateY(90px);
    }
}

@keyframes alti {
    0% {
        transform: translateY(-70px);
    }

    100% {
        transform: translateY(150px);
    }
}

@keyframes yedi {
    0% {
        transform: translateY(-70px);
    }

    100% {
        transform: translateY(100px);
    }
}



.wrapper {
    width: 100px;
    height: 50px;
    border-radius: 20px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
}

.round {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
}

.sun {
    z-index: -1;
    background-color: yellow;
    box-shadow: 0px 0px 100px 10px yellow;
    animation: sunrise 10s linear infinite alternate;
}

@keyframes sunrise {
    0% {
        margin-top: 200px;
        transform: scale(0.8);
    }

    100% {
        margin-top: -100px;
        transform: scale(1.2);
    }
}


#background {
    position: relative;
    width: 100%;
    min-height: 520px;
    overflow-y: hidden scroll;
    overflow-x: hidden;
    animation-name: sky;
    animation-direction: normal;
    animation-delay: 0s;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
    transition-timing-function: ease-in-out;
}

@keyframes sky {
    0% {
        background-color: #aaf;
    }

    10% {
        background-color: #ccf;
    }

    20% {
        background-color: #ddf;
    }

    30% {
        background-color: #ccf;
    }

    40% {
        background-color: #bbf;
    }

    50% {
        background-color: #55f;
    }

    60% {
        background-color: #00a;
    }

    70% {
        background-color: #005;
    }

    80% {
        background-color: #006;
    }

    90% {
        background-color: #008;
    }

    100% {
        background-color: #aaf;
    }
}

#stars {
    position: absolute;
    height: 0px;
    width: 100%;
    overflow: visible;
    animation: stars;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes stars {
    0% {
        opacity: 0;
        left: -10%;
    }

    40% {
        opacity: 0;
        left: -10%;
    }

    55% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        left: -25%;
    }
}

#starshine1,
#starshine2,
#starshine3 {
    position: absolute;
    display: inline;
    letter-spacing: 10px;
    left: -10%;
}

#starshine1 {
    color: #fcc;
    animation: starshine1;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes starshine1 {
    0% {
        opacity: 1.2;
    }

    100% {
        opacity: 0.2;
    }
}

#starshine2 {
    color: #dfd;
    animation: starshine2;
    animation-duration: 2.1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes starshine2 {
    0% {
        opacity: 0.8;
    }

    100% {
        opacity: 0.2;
    }
}

#starshine3 {
    color: #ddf;
    animation: starshine3;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes starshine3 {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0.2;
    }
}

.time-speed-move-0 {
    animation-duration: 0s;
}

.time-speed-move-1 {
    animation-duration: 160s;
}

.time-speed-move-2 {
    animation-duration: 80s;
}

.time-speed-move-3 {
    animation-duration: 40s;
}

.time-speed-move-4 {
    animation-duration: 20s;
}

#sun {
    position: relative;
    height: 50px;
    width: 50px;
    background: radial-gradient(#fe0, #fb0, #ff0);
    border-radius: 50%;
    box-shadow: 0px 0px 10px 30px rgba(250, 230, 0, 0.5), 0 0 50px 300px rgba(250, 230, 0, 0.1);
    left: 102%;
    top: 300px;
    animation-name: sun;
    animation-delay: 0s;
    animation-duration: 60s;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: backwards;
}

@keyframes sun {
    0% {
        left: 102%;
        top: 300px;
        background: radial-gradient(#fd0, #f90);
        box-shadow: 0px 0px 60px 30px rgba(250, 0, 0, 0.5), 0 0 200px 200px rgba(255, 0, 0, 0.3);
    }

    10% {
        top: 100px;
        background: radial-gradient(#ff0, #fb0);
        box-shadow: 0px 0px 30px 30px rgba(250, 230, 0, 0.5), 0 0 200px 200px rgba(250, 230, 0, 0.3);
    }

    20% {
        top: 25px;
        background: radial-gradient(#ff0, #fd0);
        box-shadow: 0px 0px 30px 30px rgba(250, 230, 0, 0.5), 0 0 200px 200px rgba(250, 230, 0, 0.3);
    }

    30% {
        top: 35px;
        background: radial-gradient(#ff0, #fd0);
        box-shadow: 0px 0px 30px 30px rgba(250, 230, 0, 0.5), 0 0 200px 200px rgba(250, 230, 0, 0.3);
    }

    38% {
        top: 110px;
        background: radial-gradient(#ff0, #fb0);
        box-shadow: 0px 0px 60px 30px rgba(250, 100, 0, 0.5), 0 0 200px 200px rgba(250, 100, 0, 0.3);
    }

    50% {
        left: -20%;
        top: 350px;
        background: radial-gradient(#fd0, #f90);
        box-shadow: 0px 0px 60px 30px rgba(250, 70, 0, 0.5), 0 0 200px 200px rgba(250, 70, 0, 0.3);
    }

    51% {
        left: -40%;
        top: 350px;
    }

    100% {
        left: -40%;
        top: 350px;
    }
}

#moon {
    position: relative;
    height: 1px;
    width: 1px;
    background-color: transparent;
    background: radial-gradient(#fee, #ffd, #fff);
    border-radius: 50%;
    box-shadow: 5px 60px 190px 60px rgba(250, 250, 250, 0.5);
    left: 102%;
    top: 200px;
    animation-name: moon;
    animation-delay: 0s;
    animation-duration: 60s;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: none;
    animation-play-state: running;
}

@keyframes moon {
    0% {
        left: 105%;
        top: 200px;
    }

    50% {
        left: 102%;
        top: 200px;
    }

    60% {
        top: 50px;
    }

    70% {
        top: -50px;
    }

    80% {
        top: -10px;
    }

    90% {
        top: 100px;
    }

    100% {
        left: -20%;
        top: 330px;
    }
}

#mooncurve {
    position: relative;
    width: 70px;
    height: 70px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: -20px 20px 0px 0px #eee;
}

#cloud-back {
    position: relative;
}

#hill2 {
    z-index: ;
    position: absolute;
    bottom: -100px;
    left: -61%;
    left: 100%;
    animation-name: hill2;
    animation-direction: normal;
    animation-delay: 3s;
    animation-timing-function: linear;
    /* animation-play-state: running; */
    animation-iteration-count: infinite;
}

@keyframes hill2 {
    0% {
        left: 100%;
    }

    100% {
        left: -61%;
    }
}

#h2peak1 {
    position: relative;
    width: 130px;
    height: 150px;
    background: linear-gradient(0deg, #311, #422, #522);
    left: 150px;
    top: 390px;
    border-radius: 100% 30% 0 0;
}

#h2peak2 {
    position: relative;
    width: 75px;
    height: 250px;
    background: radial-gradient(#311, #522 80%);
    left: 290px;
    top: 210px;
    border-radius: 100% 50% 0 0;
}

#h2top {
    position: relative;
    width: 400px;
    height: 200px;
    background: radial-gradient(#311, #522 75%);
    left: 100px;
    top: 100px;
    border-radius: 70% 100% 0 0;
}

#h2baseleft {
    position: relative;
    width: 550px;
    height: 150px;
    background: linear-gradient(0deg, #201010, #522 99%);
    left: 50px;
    top: 0px;
    border-radius: 30% 50% 0 0;
    transform: skewX(150deg);
}

#h2baseright {
    position: relative;
    width: 350px;
    height: 110px;
    background: linear-gradient(10deg, #221111, #5a2020);
    left: 470px;
    top: -110px;
    border-radius: 30% 50% 0 0;
    transform: skewX(50deg);
}


#hill1 {
    position: absolute;
    bottom: -100px;
    left: -45%;
    left: 105%;
    animation-name: hill1;
    animation-direction: normal;
    animation-delay: 0s;
    animation-timing-function: linear;
    /* animation-play-state: running; */
    animation-iteration-count: infinite;
}

@keyframes hill1 {
    0% {
        left: 105%;
    }

    100% {
        left: -45%;
    }
}

#h1top {
    position: relative;
    width: 270px;
    height: 150px;
    background: linear-gradient(0deg, #422, #522);
    left: 250px;
    top: 130px;
    border-radius: 100% 50% 0 0;
}

#h1baseleft {
    position: relative;
    width: 350px;
    height: 150px;
    background: linear-gradient(-30deg, #211, #522);
    left: 50px;
    top: 50px;
    border-radius: 30% 30% 0 0;
    transform: skewX(120deg);
}

#h1baseright {
    position: relative;
    width: 300px;
    height: 130px;
    background: linear-gradient(10deg, #211, #522);
    left: 300px;
    top: -100px;
    border-radius: 30% 50% 0 0;
    transform: skewX(20deg);
}

#cloud-front {
    position: relative;
}

#tree {
    position: relative;
}
</style>
