<template>
    <div>Ok
        <slot name="okCustom"></slot>
    </div>
</template>
<script>
export default {
    name: "CustomOption",
    props: ['option']
}
</script>