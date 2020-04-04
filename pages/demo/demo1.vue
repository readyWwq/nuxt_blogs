<template>
    <div>我是demo1</div>
</template>

<script>
    export default {
        transition: 'test',
        name: "demo1",
        watch: {
            $route(newValue, oldValue) {
                console.log(oldValue,newValue);
            }
        },
    }
</script>

<style scoped>

</style>