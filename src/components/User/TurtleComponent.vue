<template>
    <!-- werk oppervlak -->
    <div class="container-turtle">
        <div class="totaal">
            <div class="lichaam"> </div>
            <div class="hoofd">
                <div class="oog"> </div>
            </div>
            <div class="poot_voor"> </div>
            <div class="poot_achter"> </div>
            <div class="staart"> </div>
        </div>
        <div class="quote"> </div>
    </div>
</template>
<script>
export default {
    name: "TurtleComponent"
}
</script>
<style scoped>
.container-turtle {
    width: 200px;
    height: 200px;
}

.totaal {
    position: relative;
}

.lichaam {
    position: absolute;
    width: 230px;
    height: 120px;
    background-color: #663f03;
    border: 3px solid #002b09;
    border-radius: 200px 200px 20px 20px;
    margin-top: 50px;
    z-index: 2;
}

.hoofd {
    position: absolute;
    width: 100px;
    height: 70px;
    border: 3px solid #004401;
    background-color: #9a7504;
    border-radius: 200px 200px 100px 100px;
    transform: rotate(-10deg);
    margin-top: 90px;
    margin-left: 210px;
    animation: spin 2s 3s infinite alternate backwards;

}


@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-10deg);
    }
}

.poot_achter {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 3px solid #004401;
    background-color: #c08a47;
    border-radius: 200px 200px 100px 100px;
    transform: rotate(10deg);
    margin-top: 160px;
    margin-left: 30px;
    animation: spin-foot 2s 3s infinite alternate backwards;
}

.poot_voor {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 3px solid #004401;
    background-color: #c08a47;
    border-radius: 200px 200px 100px 100px;
    transform: rotate(-10deg);
    margin-top: 160px;
    margin-left: 180px;
    animation: spin-foot 2s 3s infinite alternate backwards;

}

@keyframes spin-foot {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-20deg);
    }
}

.staart {
    position: absolute;
    width: 40px;
    height: 10px;
    border: 3px solid #004401;
    background-color: #c08a47;
    border-radius: 200px 200px 200px 200px;
    transform: rotate(10deg);
    margin-top: 150px;
    margin-left: 130px;
    animation: spin2 1s 2s infinite alternate backwards;
}

@keyframes spin2 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(10deg);
    }
}


.oog {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: black;
    border-radius: 50%;
    z-index: 3;
    margin-left: 70px;
    margin-top: 35px;
}
</style>