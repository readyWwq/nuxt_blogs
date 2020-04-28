/**
 * Created by HIAPAD on 2020/4/28. 状态管理页面
 */
const state = ()=>{
    return{
        loginDia:false //登录弹窗状态
    }
}
const getters={
    getLoginDia:(state)=>{
        return state.loginDia
    }
}
const mutations = {
    setLoginDia(state) {
        state.loginDia = !state.loginDia
    }
}