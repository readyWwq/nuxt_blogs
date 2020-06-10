<template>
  <div>
    <indexHeader></indexHeader>
    <div class="contenter">
      <nuxt />
    </div>

    <div class="footer" id="footer">
      Copyright 2018 by wuwanqiang&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;渝ICP备19006911号-1
    </div>
  </div>
</template>

<script>
  import indexHeader from "~/components/header/indexHeader"
  export default {
    name: "default",
    components: {
      indexHeader
    },
    mounted(){
      this.init()
    },
    methods:{
      init(){
        function hasScrollbar() {
          return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
        }
        if(!hasScrollbar()){
          document.getElementById('footer').style.position = "fixed"
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .contenter{
    margin-top:70px ;
  }
  .footer {
    text-align: center;
    font-size: 12px;
    line-height: 50px;
    width: 100%;
    bottom: 0;
  }
</style>
