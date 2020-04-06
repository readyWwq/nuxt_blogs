/**
 * Created by Administrator on 2020/3/7.
 */
import Vue from "vue"
import axios from "@nuxtjs/axios"

export default function ({$axios, redirect}) {
/*    $axios.defaults.baseURL = api.baseURL; //默认请求地址*/
    //防止重复提交
    let pending = [];
    let cancelToken = $axios.CancelToken;
    let removePending = (config)=>{
        for (let p in pending){
            if(pending[p].u+ pending[p].data=== config.url + '&' + config.method+JSON.stringify(config.data)){
                pending[p].f(); //执行取消操作
                pending.splice(p, 1); //把这条记录从数组中移除
            }
        }
    }
    /*请求拦截*/
    $axios.onRequest(config => {
        removePending(config)
        config.cancelToken = new cancelToken((c)=>{
            // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
            pending.push({ u: config.url + '&' + config.method, f: c ,data:JSON.stringify(config.data)});
        });
        return config
    })
    $axios.onResponse(response => {
        removePending(response.config)
        return response
    })
    $axios.onError(error => {
        /*错误拦截*/
        console.log("错误拦截", JSON.stringify(error))
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/error')
        }
    })
    //psot 请求
    function post(url, data = {}) {
        return new Promise((resolve, reject) => {
            $axios.post(url, data)
                .then(response => {
                    if (response.data.code == 200) {
                        resolve(response.data.data);
                    } else {
                    }
                }, err => {
                    console.log(err)
                    reject(err)
                })
        })
    };
    Vue.prototype.$post = post;
}
