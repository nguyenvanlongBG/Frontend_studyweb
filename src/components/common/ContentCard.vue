<template>
<CCard>
<CCardBody>
    <CCardTitle component="h2" class="mb-4">
          <slot name="title1"></slot>
    </CCardTitle>
    <CCardTitle component="h1" class="mb-4">
          <slot name="title2"></slot>
    </CCardTitle>
</CCardBody>
</CCard>
</template>

<script>
export default{
    name: 'ContentCard',
}


</script>