/**
 * Created by Administrator on 2020/3/7.
 */
export default function ({$axios, redirect}) {
    /*请求拦截*/
    $axios.onRequest(config => {
        console.log('请求拦截' + config.url)
    })
    $axios.onResponse(response => {
        console.log('响应拦截 ' + response.data)
        return response
    })
    $axios.onError(error => {
        /*错误拦截*/
        console.log("错误拦截",JSON.stringify(error))
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/error')
        }
    })
}