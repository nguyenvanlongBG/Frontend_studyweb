<template>
    <div class="styleEditor">
        <div v-if="render">
            <ckeditor :disabled="disabled" :editor="editor" v-model="editorData" :config="editorConfig" id="editor">
                {{ editorData }}
            </ckeditor>
        </div>
    </div>
</template>

<script>

// import ClassicEditor from 'ckeditor5-build-classic-mathtype';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import ClassicEditor from '@wiris/mathtype-ckeditor5'
export default {
    name: 'LatexComponent',
    props: ['isUpdate', 'content'],
    watch: {
        isUpdate() {
            console.log("isUpdate " + this.isUpdate)
            this.disabled = !this.isUpdate
            this.render = false
            this.editorConfig.toolbar = this.disabled ? [] : ['Mathtype', 'uploadImage'];
            this.$nextTick(() => {
                this.render = true
            })
        },

        editorData() {
            this.$emit('update', this.editorData)
        }

    },
    data() {
        return {
            // toolbars: this.isUpdate ? ['Mathtype', 'Image'] : [],
            editor: ClassicEditor,
            // editorData: this.questionDetail,
            editorData: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>x</mi><mo>d</mo><mi>x</mi></math></p>',
            editorConfig: {
                toolbar: [],
            },
            disabled: true,
            render: true

        };
    },
    // mounted() {
    //     console.log("EditorData " + this.editorData)
    // },

    methods: {


    },

}
</script>
<style>
.styleEditor {
    /* margin-top: 5px; */
    color: #222;
}
</style>