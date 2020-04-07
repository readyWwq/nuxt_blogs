<template>
    <div>
        <div class="contenter">
            <div class="articeContent">
                <div class="title" v-text="artieData.articeTitle"></div>
                <div class="other">
                    <div class="time"><i class="iconfont icon-zuozhe"></i>作者：<span v-text="artieData.author"></span></div>
                    <div class="time"><i class="iconfont icon-yunhang"></i>发布时间：<span v-text="artieData.strTime"></span></div>
                    <div class="check"><i class="iconfont icon-chakangengduo"></i><span v-text="artieData.clickNumber"></span>人已阅读</div>
                </div>
                <div class="des">
                    <span class="ti">简介：</span>
                    <span v-text="artieData.abstract"></span>
                </div>
                <div class="artice" v-highlight v-html="artieData.content"></div>
                <wmessage :articeId="articeId"></wmessage>
            </div>
            <div class="left">
                <div class="card">
                    <div class="card_top"><p>相关推荐</p></div>
                    <div class="card_content">
                        <div class="top recommend hover" v-for="item in recommendList" :key="item.id">
                            <div class="icon">
                                <img :src="'https://www.smartwu.top/'+item.imgurl" alt="">
                            </div>
                            <a :href="'/content/'+item.id" target="_blank">
                                <div>
                                    <p class="name overHidden">{{item.articeTitle}}</p>
                                    <p>{{item.strTime}}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import wmessage from "~/components/page/wmessage"
    export default {
        transition:'test',
        name: "content_id",
        components:{
            wmessage
        },
        data() {
            return {

            }
        },
        async asyncData({app,route}){
            let articeId = route.params.id;
            const {data:recommendList} = await app.$axios.post("/queryRecommend")
            const {data} = await app.$axios.post("/articeInfo",{id:articeId})
            app.head.title = data.data.articeTitle+"-"+process.env.npm_package_name
            return {artieData:data.data,articeId:Number(articeId),recommendList:recommendList.data}
        }
    }
</script>

<style scoped lang="less">
    .contenter{
        overflow: hidden;
        .left,.articeContent{
            float: left;
            background: white;
        }
        .left{
            width: 320px;
            position: fixed;
            padding: 5px;
        }
    }
    .articeContent{
        width: calc(100% - 330px);
        margin-left: 330px;
        padding: 10px;
        box-sizing: border-box;
        .title{
            text-align: left;
            font-size: 20px;
            font-weight: 600;
        }
        .other{
            font-size: 14px;
            color:#797b7c;
            width: 100%;
            margin:30px 0;
            &>div{
                display: inline-block;
                margin-right: 25px;
            }
            .check,.time{
                i{
                    margin-right: 5px;
                    color: red;
                }
            }
        }
        .des{
            width: 100%;
            background: var(--notice-bg);
            box-sizing: border-box;
            font-size: 14px;
            padding: 10px;
            .ti{
                color:black;
                font-weight: 600;
            }
        }
        .artice{
            min-height: 400px;
            line-height: 25px;
            margin-top: 20px;
            letter-spacing: 1px;
            text-align: justify;
        }
    }
    .card{
        background-color: white;
        margin-bottom: 10px;
        border-radius: 4px;
        padding: 10px;
        .card_top{
            p{
                font-weight: bold;
            }
        }
        .card_content{
            .system_list{
                display: flex;
                height: 40px;
                align-items: center;
                font-weight: 800;
                .name{
                    flex: 1;
                    padding-left: 10px;
                }
                .number{
                    background-color: var(--body-bg);
                    padding: 5px 10px;
                    border-radius: 4px;
                }
            }
            .recommend{
                padding-top: 10px;
                &:first-child{
                    padding-top: 0;
                }
                .icon{
                    width: 40px !important;
                    height: 40px !important;
                }
                .name{
                    font-size: 12px;
                    margin-bottom: 5px;
                    width: 190px;
                }
            }
            .top{
                display: flex;
                margin-top: 10px;
                .name{
                    font-weight: 700;
                }
                .icon{
                    width: 30px;
                    height: 30px;
                    border-radius: 4px;
                    overflow: hidden;
                    margin-right: 10px;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
    @media (max-width:970px) {
        .contenter{
            .left{
                width: 100%;
                position: static;
            }
            .articeContent{
                margin-left: 0;
                width: 100%;
            }
        }
    }
</style>