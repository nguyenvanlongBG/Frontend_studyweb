<template>
    <div class="styleEditor">
        <div v-if="render">
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" :disabled="disabled">
            </ckeditor>
        </div>
    </div>
</template>

<script>

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref } from 'vue'
export default {
    name: 'LatexComponent',
    props: ['isUpdate', 'content', 'isAnswer'],
    watch: {
        isUpdate() {
            this.disabled = !this.isUpdate
        },
        disabled() {
            this.render = false
            this.editorConfig.toolbar = this.disabled ? { items: [] } : {
                items: ['Mathtype', "bold",
                    "italic", "imageUpload", "insertTable"]
            };
            this.$nextTick(() => {
                this.render = true
            })
        },
        editorData() {
            this.$emit('update', this.editorData)
        }

    },
    setup() {
        const editor = ref(ClassicEditor);
        return {
            editor
        }
    },
    // Lần đầu tiên phải mout cho disabled
    mounted() {
        this.disabled = !this.isUpdate
    },
    data() {

        return {
            editorData: this.content,
            // editorData: "<a href='#' onclick='alert('XSS')'>Test</a>",
            editorConfig: {
                toolbar: [],
            },
            disabled: true,
            render: true
        }
    },
    methods: {
        reRender() {
            this.render = false
            this.$nextTick(() => {
                this.render = true
            })
        }

    },

}
</script>

<style scoped>
.styleEditor {
    /* margin-top: 5px; */
    color: #222;
}

.ck .ck-reset .ck-editor .ck-rounded-corners {
    min-height: 500px !important;
    border: 2px dotted olive !important;
    background-color: yellow !important;
}

.ck-editor__editable {
    min-height: 500px !important;
    border: 2px dotted green !important;
    background-color: yellow !important;
}

.ck-editor__editable_inline {
    min-height: 500px !important;
    border: 2px dotted blue;
    background-color: yellow !important;
}

:host ::ng-deep .ck-editor__editable_inline {
    min-height: 500px !important;
    border: 2px dotted red !important;
    background-color: yellow !important;
}
</style>