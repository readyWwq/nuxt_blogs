<template>
    <div>
        <!--<wmessage></wmessage>-->
        <login></login>
    </div>
</template>

<script>
    import wmessage from "~/components/page/wmessage"
    import login from "~/components/page/login"
    export default {
        name: "book",
        components:{
            wmessage,login
        },
    }
</script>

<style scoped>

</style>