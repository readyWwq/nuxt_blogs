<template>
<div>
  <div class="contenter">
    <div class="container content">
      <div class="banner">
        <div class="banner_img"></div>
        <div class="info">
          <div class="left">
            <div class="head">
              <img src="../static/image/chird.png" alt="">
            </div>
            <div class="rhesis">
              <h4>读书百遍，其义自见</h4>
              <h5>Read a hundred times, its righteousness from see</h5>
            </div>
          </div>
          <div class="right">
            <div class="system_tag">
              <h3>7895</h3>
              <h5>artice</h5>
            </div>
            <div class="system_tag">
              <h3>7895</h3>
              <h5>PHOTO</h5>
            </div>
            <div class="system_tag">
              <h3><img style="width: 24px;height: 17px;" src="../static/image/china.png" alt=""></h3>
              <h5>CHINA</h5>
            </div>
            <div class="system_tag">
              <a class="qq" href="tencent://message/?uin=1570769179" target="_blank">QQ</a>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="col-3 left active" :style="{top:+topOfset+'px'}">
          <div class="card">
            <div class="card_top"><p>公告</p></div>
            <div class="card_content">
              <div class="top">
                <div class="icon">
                  <img src="../static/image/icon.jpg" alt="">
                </div>
                <div>
                  <p class="name">昵称</p>
                  <p>2020-04-05</p>
                </div>
              </div>
              <div class="notice">
                <p>我是通知通知他我是通知通知他我是通知通知他我是通知通知他我是通知通知他</p>
              </div>
              <p>@Notice</p>
            </div>
          </div>
          <div class="card">
            <div class="card_top"><p>推荐</p></div>
            <div class="card_content">
              <div class="top recommend hover" v-for="item in 6">
                <div class="icon">
                  <img src="../static/image/icon.jpg" alt="">
                </div>
                <div>
                  <p class="name overHidden">文章标题1文章标题1文章标题1文章标题1文章标题1文章标题1文章标题1</p>
                  <p>2020-04-05</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 center active">
          <list v-for="(item,index) in 10" :item="item" :key="index"></list>
        </div>
        <div class="col-3 right active" :style="{top:+topOfset+'px'}">
          <div class="card">
            <div class="card_top"><p>基本信息</p></div>
            <div class="card_content">
              <ul>
                <li>
                  <div class="system_list">
                    <i class="iconfont icon-zuozhe"></i>
                    <span class="name">留言条数</span>
                    <span class="number">36条</span>
                  </div>
                </li>
                <li>
                  <div class="system_list">
                    <i class="iconfont icon-chakangengduo"></i>
                    <span class="name">留言条数</span>
                    <span class="number">36条</span>
                  </div>
                </li>
                <li>
                  <div class="system_list">
                    <i class="iconfont icon-ziyuan"></i>
                    <span class="name">留言条数</span>
                    <span class="number">306条</span>
                  </div>
                </li>
                <li>
                  <div class="system_list">
                    <i class="iconfont icon-liuyanhui"></i>
                    <span class="name">留言条数</span>
                    <span class="number">0条</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card_top"><p>最近留言</p></div>
            <div class="card_content">
              <div class="top message" v-for="item in 6">
                <div class="icon">
                  <img src="../static/image/icon.jpg" alt="">
                </div>
                <div class="book">
                  <p class="name"><span>用户名</span>&nbsp;&nbsp;&nbsp;<span>一天前</span></p>
                  <div class="message_book">
                    <p>我是留言内容</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="go_top hover" @click="goTop" v-if="show">
        <i class="iconfont icon-xiangshang"></i>
      </div>
    </div>
  </div>
</div>
</template>
<script>

import {mapGetters,mapActions,mapMutations} from 'vuex'
import list from "~/components/page/list"
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
      html:"",
      active:true,
      topOfset:0,
      show:false,
    }
  },
  async asyncData({app}){
    //得到栏目列表queryRecommend
    const {data} = await app.$axios.post("/queryArtice",{pageNo: 1,pageSize: 1,total: 25,type: 1})
    console.log(data.data.data);
    return {list:data.data.data}
  },
  mounted () {
    //t = 280px
    let _this = this;
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离
      if(t>280){
        _this.topOfset = t-290
        _this.show = true
      }else{
        _this.topOfset = 0
        _this.show = false
      }
    }
  },
  methods:{
    ...mapActions('user',['restName']),
    ...mapMutations('user',['setName']),
    change(){
      this.restName("456")
    },
    goTop(){
      window.scroll(0,0)
    }
  }
}
</script>

<style scoped lang="less">

  .content{
    position: relative;
  }
  .banner{
    margin-bottom: 10px;
    position: relative;
    .banner_img{
      min-height: 200px;
      background: url("../static/image/banner.jpg");
      background-size: cover;
      background-position: center center;
      position: relative;
      &::before{
        content: '';
        background-image: url("../static/image/pattern.png");
        background-repeat: repeat;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
    .info{
      min-height: 70px;
      background-color: white;
      overflow: hidden;
      .left{
        float: left;
        width: 50%;
        margin: 20px 0;
        .head{
          width: 90px;
          position: absolute;
          bottom: 0px;
          left: 15px;
          img{
            width: 100%;
          }
        }
        .rhesis{
          text-align: center;
        }
      }
      .right{
        float: left;
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 20px 0;
        .system_tag{
          padding: 0 30px;
          text-align: center;
          position: relative;
          &::after{
            content: "";
            position: absolute;
            height: 25px;
            border-right: 1px solid #eaeaf5;
            right: 0;
            top: 0;
          }
          &:last-child::after{
            display: none;
          }
          h5{
            color:var(--font-abs-color) ;
          }
          .qq{
            font-size: 18px;
            padding: 10px;
            background-color: var(--cursor-color);
            border-radius: 6px;
            color: white;
          }
        }
      }
    }
  }
  .main{
    position: relative;
    overflow: hidden;
    .col-3,.col-6{
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
          .notice{
            background-color: var(--notice-bg);
            padding: 10px;
            margin: 10px 0;
          }
          .message{
            .book{
              width: calc(100% - 50px);
            }
            .icon{
              height: 40px !important;
              width: 40px !important;
            }
            .message_book{
              background-color: var(--notice-bg);
              padding: 10px;
              width: 100%;
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
    }
    .left{
      width: 275px;
      position: absolute;
      transition: none;
    }
    .center{
      width: calc(100% - 570px);
      margin-left: 285px;
      min-height: calc(100vh - 320px);
    }
    .right{
      margin-left: 10px;
      width: 275px;
      position: absolute;
      right: 0;
      transition: none;
    }
  }
  @media (max-width: 1250px) {
    .main{
      .right{
        display: none;
      }
      .center{
        width: calc(100% - 285px);
      }
    }
  }
  @media (max-width: 970px) {
    .main{
      .left{
        display: none;
      }
      .center{
        width: 100%;
        margin-left: 0 !important;
        position: static;
      }
    }

    .banner{
      .info{
        .left{
          width: 100%;
          .head{
            top: 55px;
          }
        }
        .right{
          justify-content: center;
          width: 100%;}
      }
    }
  }
  .go_top{
    position: fixed;
    z-index: 60;
    width: 45px;
    height: 45px;
    background-color: var(--cursor-color);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    font-weight: 800;
    bottom: 30px;
    border-radius: 4px;
  }
</style>
