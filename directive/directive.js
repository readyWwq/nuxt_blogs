/**
 * Created by Administrator on 2020/4/5.
 * 全局指令
 */
import Vue from "vue"
const highlight = Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})
export default highlight;