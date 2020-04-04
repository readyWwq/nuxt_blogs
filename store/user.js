/**
 * Created by Administrator on 2020/3/7.
 */
const state={
    userName:"wuwu"
}
const getters={
    getName:(state)=>{
        return state.userName
    }
}
const mutations = {
    setName(state,value="123123"){
        state.userName = value
    }
}
const actions = {
    async restName({state,commit},val){
        commit('setName',val)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};