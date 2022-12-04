<template>

    <ckeditor :disabled="disabled" :editor="editor" @input="updateField" v-model="editorData" :config="editorConfig"
        id="editor">
    </ckeditor>

</template>

<script>

// import ClassicEditor from 'ckeditor5-build-classic-mathtype';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import ClassicEditor from '@wiris/mathtype-ckeditor5'
export default {
    name: 'LatexComponent',
    mounted() {


    },

    data() {
        // const toolbar = this.isUpdate ? ['Heading', 'MathType', 'ChemType', 'Bold', 'Italic', 'numberedList', 'bulletedList', 'insertTable'] : [];
        const toolbar = this.isUpdate ? ['Bold', 'Mathtype'] : [];
        return {
            editor: ClassicEditor,
            editorData: this.questionDetail,
            editorConfig: {
                // plugins: [MathType],
                toolbar: toolbar,

            },
            disabled: true

        };
    },
    props: ['isUpdate', 'questionDetail'],

    methods: {
        updateField: function () {
            this.$emit('input', "OK");


            console.log(this.editorData)
        }
    },

}
</script>