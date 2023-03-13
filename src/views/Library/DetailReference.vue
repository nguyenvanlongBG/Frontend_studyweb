<template>
    <div class="container-detail-reference">
        <div class="layout-video">
            <VideoComponent />
        </div>
        <div class="layout-test">
            <router-view>
                <component :is="Component" :testId="testId" @do="doExam" @update="updateTest" @report="reportTest"
                    @delete="deleteTest">
                </component>
            </router-view>
        </div>
        <!-- <DetailTestComponent type="1" /> -->
    </div>
</template>
<script>
import VideoComponent from '@/components/Library/VideoComponent.vue'
import DetailTestComponent from '@/components/Test/DetailTestComponent.vue';
import DetailReferenceComponent from '@/components/Library/DetailReferenceComponent.vue'
import UpdateTestComponent from '@/components/Test/UpdateTestComponent.vue';
// import router from '@/router';
export default {
    name: "DetailReference",
    components: {
        VideoComponent,
        DetailTestComponent,
        DetailReferenceComponent
    },
    data() {
        return {
            testId: null,
            Component: DetailReferenceComponent
        }
    },
    mounted() {
        // router.push({ name: 'doExam', params: { idTest: 1 } })
    },
    methods: {
        updateTest(testId) {
            this.testId = testId
            this.Component = UpdateTestComponent
        }
    }
}

</script>
<style>
.container-detail-reference {
    display: grid;
    /* grid-template-columns: 50% 50%; */
}

.layout-video {
    padding: 10px;
}

.layout-test {
    padding: 10px;
}
</style>