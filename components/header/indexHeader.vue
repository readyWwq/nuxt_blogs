<template>
    <div class="header">
        <div class="contenter con_top">
            <ul class="nav">
                <li class="logo"><span>一二三</span></li>
                <li>
                    <a href="/"><span>首页</span></a>
                </li>
                <li v-for="item in list" :key="item.id">
                    <span  class="icon">{{item.label}}<i v-if="item.children.length" class="iconfont icon-tubiao-"></i></span>
                    <ul class="nav_two" v-if="item.children.length">
                        <li class="hover" v-for="chi in item.children" :key="chi.id"><span>{{chi.label}}</span></li>
                    </ul>
                </li>

            </ul>
            <div class="mobel_nav">
                <div @click="mobles=!mobles" class="iconfont icon-caidan menu"></div>
                <div class="logo">一二三</div>
            </div>
        </div>
        <div class="leftNav" :class="{active:mobles}">
            <div class="head_icon">
                <div class="head">
                    <img src="../../static/image/icon.jpg" alt="">
                </div>
            </div>
            <div class="navList">
                <ul class="list first">
                    <li :class="{active:item.id == leftNav.first}" v-for="item in list">
                        <a @click.stop="firstClick(item)">{{item.label}}<i v-if="item.children.length" class="iconfont icon-tubiao-"></i></a>
                        <ul class="child">
                           <li @click.stop="childClick(chi.id)" :class="{active:chi.id == leftNav.child}" v-for="chi in item.children" :key="chi.id"><a>{{chi.label}}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <transition name="fade">
            <div class="shadow" v-if="mobles" @click="mobles=!mobles"></div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "indexHeader",
        data() {
            return {
                mobles: false,
                leftNav:{
                    first:1,
                    child:1,
                },
                active:{
                    first:1,
                    child:1,
                },
                list:[]
            }
        },
        created(){
          this.getTreeList()
        },
        methods: {
            getTreeList() {
                this.$axios.post('/queryColumn', {
                    type: 2,
                }).then((data) => {
                    this.list = data.data.data;
                });
            },

            firstClick(item) {
                this.active.first = item.id
                this.leftNav.first = item.id
            },
            childClick(id){
                this.active.child = id
                this.leftNav.child = id
            }
        },
    }
</script>

<style scoped lang="less">
    .header{
        width: 100%;
        background: var(--head-bg);
        position: fixed;
        z-index: 90;
        top: 0;
    }
    .con_top{
       height: 60px;
        .nav>li:hover>span{
            cursor: pointer;
            color: var(--cursor-color);
        }
        .mobel_nav{
            display: none;
            line-height: 60px;
            text-align: center;
            .menu{
                position: absolute;
                font-size: 32px;
                margin-left: 15px;
            }
            .logo{
                display: block;
            }
        }
        .nav{
            .logo{
                display: -webkit-inline-box;
                width: 100px;
            }
            &>li{
                float: left;
                font-size: 14px;
                font-weight: bold;
                padding: 0 20px;
                line-height: 60px;
                position: relative;
                display: flex;
                justify-content: center;
                .nav_two{
                    display: none;
                    position: absolute;
                    box-sizing: content-box;
                    padding:5px 10px;
                    border-radius: 6px;
                    top: 70px;
                    width: 150px;
                    background: var(--head-bg);
                    box-shadow: 0 5px 15px 0 rgba(0,0,0,.15);
                    li{
                        text-align: center;
                        line-height: 30px;
                        font-size: 12px;
                    }
                }
                &:hover .nav_two{
                    display: block;
                    animation: any .36s forwards;
                }
            }
        }
    }
    @keyframes any {
        0%{
            opacity: 0;
            top: 70px;
        }
        100%{
            opacity: 1;
            top: 60px;
        }
    }
    .shadow{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 99;
    }
    .leftNav{
        position: fixed;
        width: 260px;
        top: 0;
        bottom: 0;
        background-color: var(--head-bg);
        z-index: 100;
        left: -260px;
        &.active{
            left: 0px;
        }
        .head_icon{
            height: 150px;
            background-color: #3b8070;
            display: flex;
            align-items: center;
            justify-content: center;
            .head{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 3px solid white;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
        }
        .navList{
            height: calc(100vh - 150px);
            overflow: auto;
            .first{
                margin-left: 80px;
                margin-top: 20px;
                .iconfont{
                    font-size: 12px;
                }
                &>li{
                    margin-bottom: 5px;
                    ul{
                        height: 0;
                        transition: all .36s ease;
                        overflow: hidden;
                    }
                }
                &>li>a{
                    padding-left:  10px;
                    display: block;
                    font-size: 14px;
                }
                &>li.active>a{
                    color: #E64F2A;
                }
                &>li.active>ul{
                    height: auto;
                }
            }
            .child{
                padding-left: 25px;
                font-size: 12px;
                li{
                    padding-top: 5px;
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        width: 5px;
                        height: 5px;
                        left: -15px;
                        top: calc(50%);
                    }
                    &.active{
                        &>a{
                            color: #E64F2A;
                        }
                    }
                }
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }



    @media (max-width: 970px) {
        .nav{
            display: none;
        }
        .mobel_nav{
            display: block !important;
        }
    }


</style>