<template>
    <div class="container-car">
        <div id="wheelfront">
            <div id="front-spinner1"></div>
            <div id="front-spinner2"></div>
            <div id="front-spinner3"></div>
        </div>
        <div id="wheelrear">
            <div id="front-spinner1"></div>
            <div id="front-spinner2"></div>
            <div id="front-spinner3"></div>
        </div>
        <div id="carbody">
            <div id="ctop"></div>
            <div id="cbottom"></div>
            <div id="headlight">
                <div id="lightbeam"></div>
            </div>
            <div id="taillight"></div>
            <div id="doorhandle"></div>
        </div>
        <div id="carshadow">
        </div>
    </div>
</template>
<script>
export default {
    name: "CarComponent"
}
</script>
<style>
.container-car {
    width: 845px;
    height: 280px;
    position: relative;
}

#wheelfront {
    left: 398px;
}

#wheelrear {
    left: 88px;
}

#wheelfront,
#wheelrear {
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 20px solid #222;
    background-color: #555;
    bottom: 30px;
    z-index: 15;
    /* box-shadow: 0px 3px 5px 0 yellow; */
    animation-name: wheel;
    animation-duration: 0.3s;
    animation-iteration-count: infinite;
    animation-delay: 0s;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

@keyframes wheel {
    25% {
        transform: rotateZ(90deg);
    }

    55% {
        transform: rotateZ(180deg);
    }

    75% {
        transform: rotateZ(270deg);
    }

    100% {
        transform: rotateZ(360deg);
    }
}

#front-spinner1,
#front-spinner2,
#front-spinner3 {
    position: relative;
    width: 10px;
    height: 15px;
    background-color: #ccc;
    border-radius: 50% 50% 0 0;
}

#front-spinner1 {
    top: 10px;
    left: 3px;
    transform: rotateZ(90deg);
}

#front-spinner2 {
    top: 9px;
    left: 21px;
    transform: rotateZ(330deg);
}

#front-spinner3 {
    top: -27px;
    left: 23px;
    transform: rotateZ(210deg);
}

/* end of wheels */

/* start of car body*/
#carbody {
    position: absolute;
    width: 60%;
    bottom: 160px;
    height: 90%;
    animation-name: carbody;
    animation-direction: normal;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    z-index: 12;
}

@keyframes carbody {
    20% {
        transform: translateY(1px);
    }

    40% {
        transform: translateY(-1px);
    }

    60% {
        transform: translateY(1px);
    }

    80% {
        transform: translateY(-1px);
    }

    100% {
        transform: translateY(1px);
    }
}

#carbody #cbottom {
    position: relative;
    background: linear-gradient(.5deg, #500, #a22 13%, #c22, #c00);
    width: 100%;
    height: 40%;
    left: 18px;
    top: 160px;
    border-radius: 100px 200px 10px 5px;
    box-shadow: 0px 40px 30px -10px rgba(0, 0, 0, 0.3);
    animation-name: cbottomshadow;
    animation-direction: normal;
    animation-duration: 60s;
    animation-delay: 0s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes cbottomshadow {
    0% {
        box-shadow: 0px 40px 30px -10px rgba(0, 0, 0, 0.3);
    }

    50% {
        box-shadow: 0px 40px 30px -10px rgba(0, 0, 0, 0.3);
    }

    60% {
        box-shadow: 0px 40px 30px -10px rgba(0, 0, 0, 0.6);
    }

    90% {
        box-shadow: 0px 40px 30px -10px rgba(0, 0, 0, 0.6);
    }

    100% {
        box-shadow: 0px 40px 30px -10px rgba(0, 0, 0, 0.3);
    }
}

#carbody #ctop {
    position: relative;
    background: linear-gradient(-20deg, rgba(80, 48, 48, 1), rgba(32, 32, 32, 1), rgba(80, 64, 64, 0.95), rgba(32, 16, 16, 1), rgba(16, 16, 16, 1));
    width: 48%;
    height: 32%;
    left: 88px;
    top: 212px;
    transform: rotateZ(-15deg) skewX(30deg);
    border: 10px solid #c00;
    border-top: 10px solid #c00;
    border-radius: 0 50px 0 0;
}

#headlight {
    position: relative;
    width: 10px;
    height: 20px;
    background-color: #ff0;
    top: 90px;
    left: 488px;
    border: 1px solid silver;
    border-radius: 0 50% 50% 0;
    transform: skewX(30deg) skewY(30deg);
}

#lightbeam {
    position: relative;
    width: 300px;
    height: 100px;
    background: linear-gradient(90deg, rgba(255, 255, 0, 0.5), rgba(255, 255, 0, 0.3), rgba(255, 255, 0, 0.2), rgba(255, 255, 0, 0.1));
    border-radius: 0 20% 50% 100%;
    transform: skewX(0deg) skewY(0deg) rotateZ(-30deg);
    box-shadow: 0px 0px 25px 15px rgba(255, 255, 0, 0.1);
    top: -75px;
    left: 5px;
    animation-name: lightbeam;
    animation-delay: 0s;
    animation-duration: 60s;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
}

@keyframes lightbeam {
    0% {
        opacity: 0;
    }

    49% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    95% {
        opacity: 1;
    }

    96% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

#taillight {
    position: relative;
    width: 10px;
    height: 20px;
    background-color: #f00;
    top: 60px;
    left: 155px;
    border: 1px solid silver;
    border-radius: 100% 10% 10% 10%;
    box-shadow: -5px 0 10px 10px rgba(255, 0, 0, 0);
    animation-name: taillight-glow;
    animation-direction: normal;
    animation-duration: 60s;
    animation-iteration-count: infinite;
}

@keyframes taillight-glow {
    0% {
        box-shadow: -5px 0 10px 10px rgba(255, 0, 0, 0);
    }

    49% {
        box-shadow: -5px 0 10px 10px rgba(255, 0, 0, 0);
    }

    50% {
        box-shadow: -5px 0 10px 10px rgba(255, 0, 0, 0.5);
    }

    95% {
        box-shadow: -5px 0 10px 10px rgba(255, 0, 0, 0.5);
    }

    96% {
        box-shadow: -5px 0 10px 10px rgba(255, 0, 0, 0);
    }

    100% {
        box-shadow: -5px 0 10px 10px rgba(255, 0, 0, 0);
    }
}

#doorhandle {
    position: relative;
    height: 5px;
    width: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    border-top: 5px solid #333;
    border-right: 10px solid #333;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 10px;
    top: 30px;
    left: 380px;
}

#carshadow {
    position: relative;
    width: 500px;
    height: 70px;
    top: 130px;
    left: 150px;
    border-radius: 20px;
    animation-name: carshadow;
    animation-direction: normal;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    background-color: #000;
}

@keyframes carshadow {
    0% {
        border-radius: 0px 0px 100% 10px;
        opacity: 0.05;
    }

    10% {
        border-radius: 0px 0px 95% 20px;
        opacity: 0.06;
    }

    20% {
        border-radius: 0px 0px 90% 20%;
        opacity: 0.07;
    }

    30% {
        border-radius: 5px 5px 50% 10%;
        opacity: 0.1;
    }

    40% {
        border-radius: 20px 0px 0px 80%;
        opacity: 0.07;
    }

    50% {
        border-radius: 30px 0px 0px 100%;
        opacity: 0.05;
    }

    52% {
        border-radius: 0px 0px 100% 5px;
        opacity: 0.01;
    }

    60% {
        border-radius: 0px 0px 100% 15px;
        opacity: 0.02;
    }

    70% {
        border-radius: 0px 0px 95% 0px;
        opacity: 0.03;
    }

    80% {
        border-radius: 0px 0px 90% 90%;
        opacity: 0.04;
    }

    90% {
        border-radius: 50px 0px 10% 80%;
        opacity: 0.03;
    }

    100% {
        border-radius: 0px 0px 70% 30%;
        opacity: 0.02;
    }
}
</style>