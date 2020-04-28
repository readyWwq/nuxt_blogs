<template>
    <div class="box">
        <shadowbg>
            <div class="login">

            </div>
        </shadowbg>
    </div>
</template>

<script>
    import shadowbg from "./shadowbg"
    import {mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name: "login",
        components:{
            shadowbg
        },
        computed:{
            ...mapGetters({})
        }
    }
</script>

<style lang="less" scoped>
.login{
    width: 300px;
    height: 300px;
    background-color: white;
}
</style>