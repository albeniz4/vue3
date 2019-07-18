<template>
    <a :href="url" target="new">
        <slot>여기를 클릭</slot>
    </a>
</template>
<script>
export default {
    name: "BlueLink",
    props: {
        url: String
    }
}
</script>
<style scoped>
    a {font-size:20px; font-weight: bold; color:lightcoral;}
</style>

