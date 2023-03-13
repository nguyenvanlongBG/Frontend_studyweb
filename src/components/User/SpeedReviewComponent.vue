<template>
    <template v-if="step == 1">
        <div>
            <BackgroudReviewSpeed>
                <template v-slot:vehicles>
                    <div class="select-vehicle">
                        <div @click="selectSpeed(1)" class="box-vehicle">
                            <SnailComponent />
                        </div>
                        <div @click="selectSpeed(2)" class="box-vehicle">
                            <TurtleComponent />
                        </div>
                        <div @click="selectSpeed(3)" class="box-vehicle">
                            <BikeComponent />
                        </div>
                        <div @click="selectSpeed(4)" class="box-vehicle">
                            <CarComponent />
                        </div>

                    </div>

                </template>
                <template v-slot:slot-board>
                    <div class="notice-board board-even side-move">
                        <div class=" board">
                            <QuestionComponent :question="question" type="2" />
                        </div>
                        <div class="bottom-board">
                            <div class="scape">
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:road-lane>
                    <div class="road-lane speed-road-2"></div>
                </template>
            </BackgroudReviewSpeed>
        </div>
    </template>
    <template v-else>
        <div>
            <BackgroudReviewSpeed>
                <template v-slot:vehicles>
                    <component :is="Component"></component>
                </template>
                <template v-slot:slot-board>
                    <div class="notice-board board-even side-move">
                        <div class="board">
                            <QuestionComponent :question="question" type="2" />
                        </div>
                        <div class="bottom-board">
                            <div class="scape">
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:road-lane>
                    <div :class="'road-lane' + ' speed-road-' + speed"></div>
                </template>
            </BackgroudReviewSpeed>
        </div>

    </template>
</template>
<script>
import router from '@/router'
import CarComponent from './CarComponent.vue'
import BikeComponent from './BikeComponent.vue'
import SnailComponent from './SnailComponent.vue'
import TurtleComponent from './TurtleComponent.vue'
import BackgroudReviewSpeed from './BackgroundReviewSpeed.vue'
import QuestionComponent from '../Question/QuestionComponent.vue'
import { ref } from 'vue'


export default {
    name: "SpeedReviewComponent",
    components: { QuestionComponent, BackgroudReviewSpeed, CarComponent, BikeComponent, TurtleComponent, SnailComponent },
    setup() {
        const step = ref(1)
        return {
            step
        }
    },
    mounted() {
        this.moveBoard()
    },

    data() {

        return {
            speed: 2,
            Component: null,
            indexBoard: -2,
            boards: [
                {
                    content: "Biển 1"
                },
                {
                    content: "Biển 2"
                },
                {
                    content: "Biển 3"
                },
                {
                    content: "Biển 4"
                },
                {
                    content: "Biển 5"
                },
                {
                    content: "Biển 6"
                },
                {
                    content: "Biển 7"
                },
                {
                    content: "Biển 8"
                }
            ],
            numericalQuestion: {
                data: {

                }
            },
            question: {
                question: {
                    question_id: 1,
                    type: 2,
                    content: 'OK',
                    suggest: null
                },
                choices: [

                ],
                page: 1
            },
        }
    },
    methods: {
        moveBoard() {
            if (this.indexBoard < this.boards.length - 2) {
                this.indexBoard += 2

            } else {
                this.indexBoard = 0

            }
            setTimeout(this.moveBoard, 20000)
        },
        moveTest() {
            router.push({ name: "detailTest", params: { idTest: 1 } })
        },
        selectSpeed(speed) {
            if (speed == 1) {
                this.Component = SnailComponent
            }
            if (speed == 2) {
                this.Component = TurtleComponent
            }
            if (speed == 3) {
                this.Component = BikeComponent
            }
            if (speed == 4) {
                this.Component = CarComponent
            }
            this.speed = speed
            this.step = 2
        }
    }
}
</script>
<style scoped>
body {
    padding: 0;
    margin: 0;
}

.box-vehicle {
    cursor: pointer;
}

.select-vehicle {
    display: flex;
}

.side-move {
    bottom: -100px;
    animation-name: move-even;
    animation-direction: normal;
    animation-delay: 0s;
    animation-duration: 120s;
    animation-timing-function: linear;
    animation-play-state: running;
    animation-iteration-count: infinite;
}


@keyframes move-even {
    0% {
        left: 60%;
        border-color: #008;
    }


    100% {
        left: -71%;
    }
}

@keyframes move-odd {
    0% {
        left: 160%;
    }

    100% {
        left: -10%;
    }
}

.notice-board {
    padding: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 800px;
    position: absolute;
    overflow-y: hidden scroll;
    min-height: 200px;
    top: 15px;
    z-index: 10;
}

.board-even {
    position: absolute;
    bottom: 0px;
}

.board-odd {
    position: absolute;
    bottom: 0px;
}

.board {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #69b4dc;
    border: 5px solid #222;
    overflow-y: auto;
    z-index: 10;
}

.name-test {
    font-size: 30px;
    font-weight: bold;
}

.point {
    font-size: 20px;
}

.button-see-more {
    background-color: #b3adad;
    cursor: pointer;
}

.button-see-more:hover {
    color: white;
}

.bottom-board {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 9;
}

.scape {
    height: 100%;
    background-color: #562c02;
    width: 20px;
}

#carblock {
    width: 100%;
    min-height: 500px;
    /* background: linear-gradient(0deg, #007, #abf, #ddf); */
    overflow: hidden;
    /* margin: 0; */

}

/* start of background */
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
    animation-duration: 35s;
    animation-timing-function: linear;
    animation-play-state: running;
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
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-play-state: running;
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

/* end of background */

/* start of road */
#road {
    position: absolute;
    background-color: #555;
    width: 100%;
    height: 100px;
    bottom: 0px;
    overflow: hidden;
    animation-name: road;
    animation-duration: 60s;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 11;
}

@keyframes road {
    0% {
        background-color: #555;
    }

    10% {
        background-color: #555;
    }

    20% {
        background-color: #555;
    }

    30% {
        background-color: #aaa;
    }

    40% {
        background-color: #555;
    }

    50% {
        background-color: #555;
    }

    60% {
        background-color: #333;
    }

    70% {
        background-color: #333;
    }

    80% {
        background-color: #333;
    }

    /* //90% {background-color: #444;} */
    100% {
        background-color: #555;
    }
}

.speed-road-1 {
    animation-duration: 64s;
}

.speed-road-2 {
    animation-duration: 32s;
}

.speed-road-3 {
    animation-duration: 16s;
}

.speed-road-4 {
    animation-duration: 1s;
}

.road-lane {
    position: relative;
    width: 50%;
    height: 10px;
    float: right;
    top: 35%;
    background-color: #fff;
    opacity: 0.8;
    animation-name: road-lane;
    animation-delay: 0s;
    animation-direction: normal;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
}

@keyframes road-lane {
    0% {
        right: -50%;
        transform: skewX(45deg);
    }

    100% {
        right: 100%;
        transform: skewX(-45deg);
    }
}

.vehicle {
    position: absolute;
    bottom: 10px;
    z-index: 12;
}

/* end of road */

/* start of wheels */




/* end of car body*/
</style>
