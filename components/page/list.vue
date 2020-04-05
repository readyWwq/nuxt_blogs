<template>
    <div class="list">
        <div class="top">
            <div class="icon">
                <img src="../../static/image/icon.jpg" alt="">
            </div>
            <div>
                <h5>昵称</h5>
                <p>2020-04-05</p>
            </div>
        </div>
        <div class="title">
           <a :href="'/content/'+item"><span>#　</span>我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样我是标题扎样</a>
        </div>
        <div class="abstract">
            <p>我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要</p>
        </div>
        <div class="imgList">
            <img src="../../static/image/banner.jpg" alt="">
        </div>
        <div class="tool">
            <div class="left">
                <div><p><i class="iconfont icon-liuyan"></i>15</p></div>
                <div><p><i class="iconfont icon-ziyuan"></i>15</p></div>
            </div>
            <div class="right">
                <p class="tag">#javaScript</p>
                <p class="tag">#HTML</p>
                <p class="tag">#css3</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        props:["item"],
    }
</script>

<style scoped lang="less">
.list{
    width: 100%;
    margin-bottom: 10px;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    .top{
        display: flex;
        .icon{
            width: 40px;
            height: 40px;
            border-radius: 4px;
            overflow: hidden;
            margin-right: 10px;
            img{
                width: 100%;
            }
        }
    }
    .title{
        border-radius: 4px;
        background-color:var(--body-bg) ;
        padding: 8px;
        margin: 10px 0;
    }
    .abstract{
        margin-bottom: 10px;
    }
    .imgList img{
        max-width: 100%;
        border-radius: 4px;
    }
    .tool{
        margin-top: 10px;
        overflow: hidden;
        &>div{
            float: left;
        }
        .left{
            width: 40%;
            display: flex;
            justify-content: flex-start;
            &>div{
                margin-right: 20px;
                p{
                    font-size: 14px;
                }
                i{
                    margin-right: 5px;
                }
            }
        }
        .right{
            width: 60%;
            display: flex;
            justify-content: flex-end;
            .tag{
                background-color: var(--body-bg);
                border-radius: 4px;
                padding: 5px 10px;
                margin-right: 10px;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
}
</style>