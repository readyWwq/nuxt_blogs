<template>
    <div class="articeContent">
        <div class="title" v-text="artieData.articeTitle"></div>
        <div class="other">
            <div class="time"><i class="iconfont icon-zuozhe"></i>作者：<span v-text="artieData.author"></span></div>
            <div class="time"><i class="el-icon-time"></i>发布时间：<span v-text="artieData.strTime"></span></div>
            <div class="check"><i class="iconfont icon-chakangengduo"></i><span v-text="artieData.clickNumber"></span>人已阅读</div>
        </div>
        <div class="des">
            <span class="ti">简介：</span>
            <span v-text="artieData.abstract"></span>
        </div>
        <div class="artice" v-highlight v-html="artieData.content"></div>
    </div>
</template>

<script>
    export default {
        transition:'test',
        name: "content_id",
        data() {
            return {
                artieData:{
                    articeTitle:'我是标题',
                    author:"作者",
                    strTime:"20-25-03",
                    clickNumber:"15",
                    abstract:"简介",
                    content:"<pre><code><p><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><span class=\"hljs-comment\">/**</span><br><span class=\"hljs-comment\"> * Created by dev2 on 2019/11/13.</span><br><span class=\"hljs-comment\"> * state.js //</span><pre宋体';font-size:12.0pt;\"><span class=\"hljs-comment\">定义的数据</span><spansource code=\"\" pro';\"=\"\"><span class=\"hljs-comment\">js文件</span></spansource></pre宋体';font-size:12.0pt;\"><br><span class=\"hljs-comment\"> */</span></presource><br><br><span class=\"hljs-keyword\">var</span> states = {<br>  userState: {<br>    count: <span class=\"hljs-number\">1</span>,<br>    add: {<br>      index: <span class=\"hljs-number\">1</span>,<br>      push: <span class=\"hljs-number\">1</span><br>    }<br>  }<br>}<br><span class=\"hljs-keyword\">export</span> {<br>  states<br>}<br></presource></presource></p><p><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><br></presource></presource></p><p><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><span class=\"hljs-comment\">/**</span><br><span class=\"hljs-comment\"> * Created by dev2 on 2019/11/13.</span><br><span class=\"hljs-comment\"> * userState.js</span><br><span class=\"hljs-comment\"> */</span></presource></p><p><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><span class=\"hljs-keyword\">const</span> {states} = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./state'</span>)</presource><br></presource></p><p><span style=\"font-family: Avenir, Helvetica, Arial, sans-serif;\"><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> userState = {</span><br></p><p><presource code=\"\" pro';font-size:12.0pt;\"=\"\">  state: states.userState,<br>mutations: {</presource></p><p><presource code=\"\" pro';font-size:12.0pt;\"=\"\"><presource code=\"\" pro';font-size:12.0pt;\"=\"\"> <span class=\"hljs-comment\">//</span><span宋体';\"><span class=\"hljs-comment\">这里是恢复的方法 </span></span宋体';\"></presource><pre宋体';font-size:12.0pt;\"><span class=\"hljs-comment\">将</span><spansource code=\"\" pro';\"=\"\"><span class=\"hljs-comment\">storage的数据恢复到</span><spansource code=\"\" pro';\"=\"\"><span class=\"hljs-comment\">state</span></spansource></spansource></pre宋体';font-size:12.0pt;\"><br><span class=\"hljs-comment\">    setUserInit (state, data = {}) {</span><br><span class=\"hljs-comment\">      for (let key in data) {</span><br><span class=\"hljs-comment\">        state[key] = data[key]</span><br><span class=\"hljs-comment\">      }</span><br><span class=\"hljs-comment\">    }</span><br><span class=\"hljs-comment\">  }</span><br><span class=\"hljs-comment\">}</span><br></presource>\n" +
                        "\n" +
                        "<span class=\"hljs-comment\">/**</span><br><span class=\"hljs-comment\"> * Created by dev2 on 2019/11/13.</span><br><span class=\"hljs-comment\"> * entry.js //</span><pre宋体';font-size:12.0pt;\"><span class=\"hljs-comment\">入口文件</span></pre宋体';font-size:12.0pt;\"><br><span class=\"hljs-comment\"> */</span>\n" +
                        "\n" +
                        "</p><p><span class=\"hljs-keyword\">const</span> { store } = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./store'</span>)</p><p><span style=\"font-family: Avenir, Helvetica, Arial, sans-serif;\"><span class=\"hljs-keyword\">const</span> storage = weex.requireModule(<span class=\"hljs-string\">'storage'</span>)</span></p><p><span class=\"hljs-keyword\">new</span> Vue(Vue.util.extend({el: <span class=\"hljs-string\">'#root'</span>, store}, App))</p><p><span class=\"hljs-comment\">/*这是weex提供的storage获取方法*/</span></p>storage.getItem(<span class=\"hljs-string\">'VUEX'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">event</span>) </span>{<br>  <span class=\"hljs-keyword\">if</span> (event.result === <span class=\"hljs-string\">'success'</span> &amp;&amp; event.data) {<br>    <span class=\"hljs-keyword\">var</span> datas = <span class=\"hljs-built_in\">JSON</span>.parse(event.data)\n" +
                        "    store.commit(<span class=\"hljs-string\">'setUserInit'</span>, datas.userState)<span style=\"font-family: Avenir, Helvetica, Arial, sans-serif;\">   <span class=\"hljs-comment\">//调用恢复数据的mutations方法</span></span><br><span class=\"hljs-comment\">  }</span><br><span class=\"hljs-comment\">})</span></code></pre>"
                }
            }
        },
    }
</script>

<style scoped lang="less">
    .articeContent{
        width: 100%;
        background: white;
        padding: 20px;
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
</style>