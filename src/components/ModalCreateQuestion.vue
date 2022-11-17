<template>
    <div class="modal-answer-overlay" style="overflow-y: scroll">

        <div class="form-create-test">
            <h1>Tạo kì thi</h1>
            <table class="table-input">
                <tr>
                    <td class="label-input">
                        <h3>Tên kì thi</h3>
                    </td>
                    <td>

                        <math-field default-mode="math" id="formula" mathModeSpace="\," virtual-keyboard-mode="onfocus">

                            x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\,\,\,\,\,\,aaaaaaaa
                        </math-field>

                    </td>
                </tr>

                <tr>
                    <td class="label-input">
                        <h3>Thời gian bắt đầu</h3>
                    </td>
                    <td>
                        <datepicker v-model="timeStart" id="timeStart" class="input-data" />
                    </td>
                </tr>

                <tr>
                    <td class="label-input">
                        <h3>Thời gian kết thúc</h3>
                    </td>
                    <td>
                        <datepicker v-model="timeEnd" id="timeEnd" class="input-data" />

                    </td>
                </tr>
            </table>

            <br>


            <!-- <label>
                Phạm vi
            </label>
            <input name='status' /> -->
        </div>

        <button @click="close()" class="close">X</button>

    </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
export default {
    name: 'ModalCreateTest',
    components: {
        Datepicker
    },
    mounted() {
        const mf = document.getElementById('formula');
        mf.addEventListener('input', () => {
            // document.getElementById('latex').value = mf.value;
            // console.log(mf.HTMLSpanElement);
            // if (ev.inputType == "insertLineBreak") {


            //     console.log(mf);
            //     mf.ariaLabel = "math textarea field";
            //     mf.ariaMultiLine = true;
            //     mf.defaultMode = "text";
            //     // ev.preventDefault();

            // }
            mf.virtualKeyboardMode = "onfocus"

            // mf.mathModeSpace = "\,";
        });
    },
    data() {
        return {
            timeStart: new Date(),
            timeEnd: new Date()
        }
    },
    methods: {
        close() {
            this.$emit("close")
        }
    }
}

</script>
<style>
.modal-answer-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: white;
    background-color: #000000da;
    z-index: 10;
    align-items: center;

}

.form-create-test {
    width: 50%;
    text-align: center;
    align-items: center;
    border: 2px solid #dd4040;
}

.input-block {
    display: flex;

}

.input-data {
    box-sizing: border-box;
    min-height: 35px;
    width: 80%;

}

.table-input {
    width: 100%;
}

.label-input {
    width: 30%;
}

.close {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 30px 0 0 2px; */
    margin-bottom: 21%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: blueviolet;
}
</style>