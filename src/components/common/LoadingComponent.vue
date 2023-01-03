<template>
    <div class="loading-overlay">
        <h1>Tại sao bạn thông minh vậy nhỉ?
            <br>
            Đợi tôi nghĩ xíu nha
        </h1>
    </div>
</template>
<script>

export default {
    name: 'LoadingComponent',
    props: ['isLoading']

}
</script>
<style>
.loading-overlay {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    align-items: center;
    color: white;
    background-color: #000000da;
    margin-top: 3px;
    margin-right: 2px;
    position: absolute;
    right: 0;
    z-index: 10;

}

.info-list-question {
    /* width: 79%; */
    margin-top: 3px;
    margin-right: 2px;
    position: absolute;
    right: 0;
}
</style>