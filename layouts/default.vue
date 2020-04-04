<template>
  <div>
    <indexHeader></indexHeader>
    <div class="content contenter">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import indexHeader from "../components/header/indexHeader"
  export default {
    name: "default",
    components:{
      indexHeader
    }
  }
</script>

<style scoped>
  .content{
    margin-top: 70px;
  }
</style>
