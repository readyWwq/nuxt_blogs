<template>
    <div>
        <contentHeader></contentHeader>
        <div class="content contenter">
            <nuxt />
        </div>
    </div>
</template>
<script>
    import contentHeader from "../components/header/contentHeader"
    export default {
        name: "content",
        components:{
            contentHeader
        }
    }
</script>
<style scoped>
    .content{
        margin-top: 60px;
    }
</style>