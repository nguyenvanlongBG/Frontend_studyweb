<template>
    <div class="styleEditor">
        <div v-if="render">
            <ckeditor :disabled="disabled" :editor="editor" v-model="editorData" :config="editorConfig">
                {{ editorData }}
            </ckeditor>
        </div>
    </div>
</template>

<script>

// import ClassicEditor from 'ckeditor5-build-classic-mathtype';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ref } from 'vue'
// import ClassicEditor from '@wiris/mathtype-ckeditor5'
export default {
    name: 'LatexComponent',
    props: ['isUpdate', 'content', 'isAnswer'],
    watch: {
        isUpdate() {
            this.disabled = !this.isUpdate
        },
        disabled() {
            this.render = false
            this.editorConfig.toolbar = this.disabled ? [] : ['Mathtype', 'uploadImage'];
            this.$nextTick(() => {
                this.render = true
            })
        },
        editorData() {
            console.log(this.editorData)
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
<style>
.styleEditor {
    /* margin-top: 5px; */
    color: #222;
}
</style>