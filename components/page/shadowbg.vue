<template>
    <div class="shadow">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "shadowbg"
    }
</script>

<style scoped>
    .shadow{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,.5);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
        z-index: 999;
    }
</style>