<template>
    <div>
        <div class="submit-star-file">
            <div class="stars">
                <span class="evalue">Đánh giá</span>

            </div>
            <div class="upload-file">
                <label for="custom-file-upload" class="filupp">
                    <span class="filupp-file-name js-value">
                        Brower Files
                    </span>
                    <input type="file" name="attachment-file" id="custom-file-upload" />
                </label>
                <!-- <button @click="uploadSolution(question.id)">OK</button> -->
            </div>
        </div>
        <div>

            <div v-for="answer in answers" :key="answer.id">
                <div class="information-user">
                    <!-- Khối thông tin User -->
                    <div class="avatar">
                        <a href="" class="circle">
                            <img width="64" height="64"
                                src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                        </a>
                    </div>
                    <div class="information">
                        <!-- Thông tin tên, giờ post bài -->
                        <span>
                            Nguyễn Văn A
                        </span>
                        <span>
                            10/01/2022
                        </span>
                    </div>
                </div>

                <div>
                    <!-- Khối bài giải -->
                    <div>
                        <!-- Ảnh  -->
                        <div class="solution">
                            <div class="see-solution" @click="seeAnswer(answer.content)">Xem</div>
                        </div>
                        <div class="stars">
                            <form action="" class="list-star" id="answer1">
                                <input class="star star-1" id="answer1_star-1" type="radio" name="star" />
                                <label class="star star-1" for="answer1_star-1"></label>
                                <input class="star star-2" id="answer1_star-2" type="radio" name="star" />
                                <label class="star star-2" for="answer1_star-2"></label>
                                <input class="star star-3" id="answer1_star-3" type="radio" name="star" />
                                <label class="star star-3" for="answer1_star-3"></label>
                                <input class="star star-4" id="answer1_star-4" type="radio" name="star" />
                                <label class="star star-4" for="answer1_star-4"></label>
                                <input class="star star-5" id="answer1_star-5" type="radio" name="star" />
                                <label class="star star-5" for="answer1_star-5"></label>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                Các khối thông tin tham khảo khác
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "CommentQuestionComponent",
    props: ['answers'],
    methods: {
        seeAnswer($content) {
            this.dataModal.visible = true
            this.dataModal.image = $content
        },
    }
}
</script>
<style>

</style>