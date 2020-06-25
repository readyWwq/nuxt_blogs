<template>
    <div class="list">
        <div class="top">
            <div class="icon">
                <img src="../../static/image/icon.jpg" alt="">
            </div>
            <div>
                <h5>{{item.author}}</h5>
                <p>{{item.strTime}}</p>
            </div>
        </div>
        <div class="title">
           <a target="_blank" :href="'/content/'+item.id"><span>#　</span>{{item.articeTitle}}</a>
        </div>
        <div class="abstract">
            <p>{{item.abstract}}</p>
        </div>
        <div class="imgList">
            <div v-for="(img,inx) in imgArr(item.imgurl)" :key="inx" >
                <img :src="img" alt="">
            </div>
        </div>
        <div class="tool">
            <div class="left">
                <div><p><i class="iconfont icon-chakangengduo"></i>{{item.clickNumber}}</p></div>
                <div><p><i class="iconfont icon-liuyan"></i>{{item.commentNum}}</p></div>
            </div>
            <div class="right">
                <p class="tag" v-for="tag in item.tags" :key="tag.id">#{{tag.tag_name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        props:["item"],
        methods: {
            imgArr(str) {
                return str?str.split(','):[]
            }
        },
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
    .imgList{
        display: flex;
        flex-wrap: wrap;
        &>div{
            flex: 1;
            min-width:33%;
            padding: 5px;
        }
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