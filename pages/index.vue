<template>
  <div>
    <list v-for="(item,index) in 10" :item="item" :key="index"></list>
  </div>
</template>
<script>

import {mapGetters,mapActions,mapMutations} from 'vuex'
import list from "../components/page/list"
export default {
  transition: 'test',
  components: {
    list
  },
  computed:{
    ...mapGetters({
      name:"user/getName"
    })
  },
  data(){
    return {

    }
  },
  async asyncData({app}){
    /*const {data} = await app.$axios.post("/queryArtice",{pageNo: 2,pageSize: 10,total: 25,type: 1})
    console.log(data.data.data);
    return {list:data.data.data}*/
  },
  mounted () {

  },
  methods:{
    ...mapActions('user',['restName']),
    ...mapMutations('user',['setName']),
    change(){
      this.restName("456")
    },
  }
}
</script>

<style scoped lang="less">

</style>
