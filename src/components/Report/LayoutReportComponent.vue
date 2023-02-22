<template>
    <figure>
        <div class="y-axis">
            <h3>Y-Axis Title</h3>
        </div>

        <div class="graphic">

            <div class="row">
                <h6>Bar One</h6>
                <div class="chart">
                    <span class="block" title="Category A">
                        <span class="value">57%</span>
                    </span>
                    <span class="block" title="Category B">
                        <span class="value">13%</span>
                    </span>
                    <span class="block" title="Category C">
                        <span class="value">8%</span>
                    </span>
                    <span class="block" title="Category D">
                        <span class="value">2%</span>
                    </span>
                    <span class="block" title="Category E">
                        <span class="value">17%</span>
                    </span>
                    <span class="block" title="Category F">
                        <span class="value">3%</span>
                    </span>
                </div>
            </div>

            <div class="row">
                <h6>Bar Two</h6>
                <div class="chart">
                    <span class="block" title="Category A">
                        <span class="value">29%</span>
                    </span>
                    <span class="block" title="Category B">
                        <span class="value">21%</span>
                    </span>
                    <span class="block" title="Category C">
                        <span class="value">19%</span>
                    </span>
                    <span class="block" title="Category D">
                        <span class="value">6%</span>
                    </span>
                    <span class="block" title="Category E">
                        <span class="value">19%</span>
                    </span>
                    <span class="block" title="Category F">
                        <span class="value">6%</span>
                    </span>
                </div>
            </div>

            <div class="row">
                <h6>Bar Three</h6>
                <div class="chart">
                    <span class="block" title="Category A">
                        <span class="value">8%</span>
                    </span>
                    <span class="block" title="Category B">
                        <span class="value">11%</span>
                    </span>
                    <span class="block" title="Category C">
                        <span class="value">34%</span>
                    </span>
                    <span class="block" title="Category D">
                        <span class="value">2%</span>
                    </span>
                    <span class="block" title="Category E">
                        <span class="value">32%</span>
                    </span>
                    <span class="block" title="Category F">
                        <span class="value">13%</span>
                    </span>
                </div>
            </div>

        </div>

        <div class="x-axis">
            <h3>X-Axis Title</h3>
            <ul class="legend">
                <li>Category A</li>
                <li>Category B</li>
                <li>Category C</li>
                <li>Category D</li>
                <li>Category E</li>
                <li>Category F</li>
            </ul>
        </div>

    </figure>
</template>
<script>
export default {
    name: "LayoutReportComponent",
    methods: {

    }
}
</script>
<style scoped>
body {
    background-color: #272b34;
    font-family: 'Khula', sans-serif;
    font-weight: 300;
    color: white;
    line-height: 1em;
    padding: 2em;
}

h3,
h6 {
    margin: 0;
    line-height: 1em;
}

h3 {
    margin-bottom: 1em;
}

h6 {
    font-size: .8em;
    padding: 0 0 .5em;
    color: #919191;
}

figure {
    margin: 0 auto;
    max-width: 1100px;
    position: relative;
}

.graphic {
    padding-left: 30px;
}

.row {
    margin-bottom: 1.5em;
}

@keyframes expand {
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    @keyframes expand {
        from {
            width: 0%;
        }

        to {
            width: calc(100% - 75px);
        }
    }
}

.chart {
    overflow: hidden;
    width: 0%;
    animation: expand 1.5s ease forwards;
}

.row+.row .chart {
    animation-delay: .2s;
}

.row+.row+.row .chart {
    animation-delay: .4s;
}

.block {
    display: block;
    height: 100px;
    color: #fff;
    font-size: .75em;
    float: left;
    background-color: #334D5C;
    position: relative;
    overflow: hidden;
    opacity: 1;
    transition: opacity, .3s ease;
    cursor: pointer;
}

.block:nth-of-type(2),
.legend li:nth-of-type(2):before {
    background-color: #45B29D;
}

.block:nth-of-type(3),
.legend li:nth-of-type(3):before {
    background-color: #EFC94C;
}

.block:nth-of-type(4),
.legend li:nth-of-type(4):before {
    background-color: #E27A3F;
}

.block:nth-of-type(5),
.legend li:nth-of-type(5):before {
    background-color: #DF5A49;
}

.block:nth-of-type(6),
.legend li:nth-of-type(6):before {
    background-color: #962D3E;
}

.block:hover {
    opacity: .65;
}

.value {
    display: block;
    line-height: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
}

.x-axis {
    text-align: center;
    padding: .5em 0 2em;
}

.y-axis {
    height: 20px;
    transform: translate(-32px, 170px) rotate(270deg);
    position: absolute;
    left: 0;
}

.legend {
    margin: 0 auto;
    padding: 0;
    font-size: .9em;
}

.legend li {
    display: inline-block;
    padding: .25em 1em;
    line-height: 1em;
}

.legend li:before {
    content: "";
    margin-right: .5em;
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #334D5C;
}

@media screen and (min-width: 768px) {
    h6 {
        padding: 0;
        width: 75px;
        float: left;
        line-height: 100px;
    }

    .block {
        font-size: 1em;
    }

    .legend {
        width: 50%;
    }
}
</style>