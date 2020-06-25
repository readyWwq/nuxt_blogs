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
              <h3>{{charts.artice}}</h3>
              <h5>Aritce</h5>
            </div>
            <div class="system_tag">
              <h3>{{charts.comments}}</h3>
              <h5>Comments</h5>
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
                <p>个人博客2.0上新</p>
              </div>
              <p>@Notice</p>
            </div>
          </div>
          <div class="card">
            <div class="card_top"><p>推荐</p></div>
            <div class="card_content">
              <div class="top recommend hover" v-for="item in recommendList" :key="item.id">
                <div class="icon">
                  <img :src="imgStr(item.imgurl)" alt="">
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
        <div class="col-6 center active">
          <list v-for="(item,index) in list" :item="item" :key="index"></list>
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
                    <span class="number">{{charts.comments}}条</span>
                  </div>
                </li>
                <li>
                  <div class="system_list">
                    <i class="iconfont icon-wenzhang"></i>
                    <span class="name">文章数量</span>
                    <span class="number">{{charts.artice}}篇</span>
                  </div>
                </li>
                <li>
                  <div class="system_list">
                    <i class="iconfont icon-icon"></i>
                    <span class="name">用户数量</span>
                    <span class="number">{{charts.user}}</span>
                  </div>
                </li>
                <li>
                  <div class="system_list">
                    <i class="iconfont icon-yunhang"></i>
                    <span class="name">运行天数</span>
                    <span class="number">{{day}}天</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card_top"><p>最近留言</p></div>
            <div class="card_content">
              <div class="top message" v-for="item in commentList" :key="item.id">
                <div class="icon">
                  <img :src="item.image" alt="icon">
                </div>
                <div class="book">
                  <p class="name"><span>{{item.userName}}</span>&nbsp;&nbsp;&nbsp;<span v-text="computedTime(item.creatTime)"></span></p>
                  <div class="message_book">
                    <p v-html="item.title"></p>
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
      day:0
    }
  },
  async asyncData({app,route}){
    let list_id = route.query.list_id;
    let  paging = {
      pageNo: 1,
      pageSize: 6,
      total: 0,
      type:1,
    }
    if(list_id){
      paging.columnId = list_id
    }
    let commentPaging = {
              pageNo: 1,
              pageSize: 6,
              articeId:0
            }
    const {data:recommendList} = await app.$axios.post("/queryRecommend")
    const {data} = await app.$axios.post("/queryArtice",paging)
    console.log(data);
    paging.total = data.data.total
    const {data:commentList} = await app.$axios.post("/queryComment",commentPaging)
    const {data:system} = await app.$axios.post("/queryChart")
    let contentNum = system.data.contentNum
    let charts = {artice:contentNum.artice,user:contentNum.user,comments:contentNum.comments}
    return {list:data.data.data,paging,recommendList:recommendList.data,commentList:commentList.data.data,charts}
  },
  created(){
    this.runDay()
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
      /*到底加载更多数据*/
     _this.ifBottom()
    }
  },
  methods:{
    ...mapActions('user',['restName']),
    ...mapMutations('user',['setName']),
    imgStr(url){
      return url?url.split(',')[0]:''
    },
    change(){
      this.restName("456")
    },
    goTop(){
      window.scroll(0,0)
    },
    computedTime(time){
      let d = time;
      if (typeof time === "string") {
        d = new Date(time).getTime()
      }
      return this.$tool.timeago(d)
    },
    runDay(){
      var urodz= new Date("2019-04-01");
      var now = new Date();
      var ile = now.getTime() - urodz.getTime();
      var dni = Math.floor(ile / (1000 * 60 * 60 * 24));
      this.day = dni
      return dni
    },
    queryArtice() {
      let params = this.paging;
      this.$post(this.$api.queryArtice, params).then((data) => {
        this.list.push(...data.data);
        this.paging.total = data.total;
      });
    },
    /*分页查询*/
    pagingData(){
      if(this.paging.pageNo*this.paging.pageSize < this.paging.total){
        this.paging.pageNo++;
        this.queryArtice()
      }else{
        console.log("没有更多了");
      }
    },
    ifBottom(){
      //滚动条在Y轴上的滚动距离
      function getScrollTop(){
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if(document.body){
          bodyScrollTop = document.body.scrollTop;
        }
        if(document.documentElement){
          documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
      }

//文档的总高度

      function getScrollHeight(){
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if(document.body){
          bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement){
          documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
      }

//浏览器视口的高度

      function getWindowHeight(){
        var windowHeight = 0;
        if(document.compatMode == "CSS1Compat"){
          windowHeight = document.documentElement.clientHeight;
        }else{
          windowHeight = document.body.clientHeight;
        }
        return windowHeight;
      }

      if(getScrollTop() + getWindowHeight() == getScrollHeight()){
       this.pagingData()
      }
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
      background: url("../static/image/banner.png");
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
          padding: 0 20px;
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
            font-size: 16px;
            padding: 10px 6px;
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
