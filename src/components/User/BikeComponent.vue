<template>
    <div class="container-bike">
        <div class="bike">
            <div class="frame-bike">
                <div class="frame-bike one"></div>
                <div class="frame-bike two"></div>
                <div class="frame-bike three"></div>
                <div class="frame-bike four"></div>
                <div class="frame-bike five"></div>
                <div class="frame-bike six"></div>
                <div class="frame-bike seat"></div>
                <div :class="'frame-bike pedal' + (stop ? ' pause' : ' run')"></div>
                <div class="frame-bike handle"></div>
            </div>
            <div class="wheel">
                <div class="wheel left">
                    <div class="spokes" :class="(stop ? ' pause' : ' run')">
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                    </div>
                </div>
                <div class="wheel right">
                    <div class="spokes" :class="(stop ? ' pause' : ' run')">
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                        <div class="spoke"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BikeComponent",
    props: ['stop']
}
</script>
<style scoped>
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

*:before,
*:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

*:before,
*:after {
    position: absolute;
    content: "";
}

html {
    min-height: 100vh;
    display: grid;
}

body {
    min-height: 100vh;
    display: grid;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #ffd866;
}

.container-bike {
    margin: auto;
    width: 18rem;
    height: 12.5rem;
}

.frame-bike {
    position: absolute;
    z-index: 1;
    background: #e24624;
}

.frame-bike.one {
    top: 6.3rem;
    left: 2.45rem;
    width: 6.2rem;
    height: 0.5rem;
    -webkit-transform: rotate(-50deg);
    -ms-transform: rotate(-50deg);
    transform: rotate(-50deg);
}

.frame-bike.two {
    top: 8.7rem;
    left: 3.3rem;
    width: 6rem;
    height: 0.5rem;
    border-radius: 1rem 0 0 1rem;
}

.frame-bike.three {
    top: 5.5rem;
    left: 4.25rem;
    width: 7.5rem;
    height: 0.5rem;
    border-radius: 1rem;
    -webkit-transform: rotate(72deg);
    -ms-transform: rotate(72deg);
    transform: rotate(72deg);
}

.frame-bike.four {
    top: 4rem;
    left: 7.5rem;
    width: 5.5rem;
    height: 0.5rem;
}

.frame-bike.five {
    top: 6.5rem;
    left: 8rem;
    width: 6rem;
    height: 0.5rem;
    -webkit-transform: rotate(-50deg);
    -ms-transform: rotate(-50deg);
    transform: rotate(-50deg);
}

.frame-bike.six {
    top: 4.7rem;
    left: 8.8rem;
    width: 8.8rem;
    height: 0.5rem;
    border-radius: 1rem;
    -webkit-transform: rotate(72deg);
    -ms-transform: rotate(72deg);
    transform: rotate(72deg);
}

.frame-bike.seat {
    top: 1.5rem;
    left: 5.25rem;
    width: 3rem;
    height: 1.25rem;
    background: #25262a;
    border-radius: 50% 100% 100% 50%/50% 60% 100% 100%;
}

.frame-bike.pedal {
    top: 8.4rem;
    left: 8.6rem;
    width: 1rem;
    height: 1rem;
    background: transparent;
    border: 0.5rem solid #a59c85;
    border-radius: 100%;
    animation-name: wheelSpin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.frame-bike.pedal:before {
    top: -0.15rem;
    left: -0.25rem;
    width: 0.5rem;
    height: 1.23rem;
    background: #fff;
    border-radius: 1rem 1rem 0 0;
}

.frame-bike.pedal:after {
    top: 0.75rem;
    left: -0.5rem;
    width: 1rem;
    height: 0.5rem;
    background: #25262a;
    border-radius: 1rem;
    -webkit-animation: pedalSpin 2s linear infinite;
    animation: pedalSpin 2s linear infinite;
}

.frame-bike.handle {
    top: 0.5rem;
    left: 11.7rem;
    width: 1.5rem;
    height: 0.5rem;
    border-radius: 1rem;
    -webkit-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    transform: rotate(-25deg);
}

.frame-bike.handle:before {
    top: -0.35rem;
    left: 0.2rem;
    width: inherit;
    height: inherit;
    background: #25262a;
    border-radius: inherit;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.wheel {
    position: absolute;
    /* z-index: -1; */
}

.wheel.left,
.wheel.right {
    top: 5.5rem;
    width: 7rem;
    height: 7rem;
    border: 0.5rem solid #25262a;
    border-radius: 100%;
    -webkit-box-shadow: inset 0 0 0 0.5rem #fff;
    box-shadow: inset 0 0 0 0.5rem #fff;
}

.wheel.left:after {
    z-index: 1;
    top: 2.5rem;
    left: 2.5rem;
    width: 1rem;
    height: 1rem;
    background: transparent;
    border: 0.5rem solid #a59c85;
    border-radius: 100%;
}

.wheel.right {
    left: 11rem;
}

.wheel.right:after {
    z-index: 1;
    top: 2.5rem;
    left: 2.5rem;
    width: 1rem;
    height: 1rem;
    background: transparent;
    border: 0.5rem solid #a59c85;
    border-radius: 100%;
}

.spokes {
    position: absolute;
    top: 0.25rem;
    left: 2.85rem;
    width: 0.3rem;
    height: 5.5rem;
    animation-name: wheelSpin;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.spoke {
    position: absolute;
    top: 0;
    width: inherit;
    height: inherit;
    background: #fff;
}

.spoke:nth-child(1) {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
}

.spoke:nth-child(2) {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
}

.spoke:nth-child(3) {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
}

.spoke:nth-child(4) {
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);
}

.spoke:nth-child(5) {
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg);
}

.spoke:nth-child(6) {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}

@-webkit-keyframes wheelSpin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes wheelSpin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes pedalSpin {
    0% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }

    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}

@keyframes pedalSpin {
    0% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }

    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
</style>