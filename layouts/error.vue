<template>
    <div>
        <!--自定义错误页面{{error.statusCode}}
        <h1 v-if="error.statusCode === 404">页面不存在</h1>
        <h1 v-else>应用发生错误异常</h1>
        <nuxt-link to="/">首 页</nuxt-link>-->
        <div class="box404">
            <div class="box"></div>
            <div class="gif">
                <img src="../static/image/404left.gif" alt="">
                <div class="gifBox">
                    页面不见了404
                </div>
                <div class="btn">
                    <nuxt-link to="/">回去首页</nuxt-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "error",
        props: ['error']
    }
</script>

<style scoped lang="less">
.box404{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    .gifBox{
        text-align: center;
        transform: scale(1.8);
    }
    .btn{
        width: 200px;
        border: 2px solid #7d779c;
        text-align: center;
        padding: 15px 0;
        background-color: #AEA8D3;
        margin-top: 15px;
        position: relative;
        overflow: hidden;
        a{
            color: white;
            font-size: 16px;
        }
        &:after{
            content: "";
            position: absolute;
            width:50%;
            height: 100%;
            background-color: rgba(0,0,0,.2);
            top: 0;
            left: 0;
            transition: all .3s ease;
        }
        &:before{
            content: "";
            position: absolute;
            width:50%;
            height: 100%;
            background-color: rgba(0,0,0,.2);
            right: 0;
            top: 0;
            transition: all .3s ease;
        }
        &:hover{
            &:before{
                right: -50%;
            }
            &:after{
                left: -50%;
            }
        }
    }
}
</style>