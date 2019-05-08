import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  count: 1
};
const getters = {
  getCount: state => {
    return state.count;
  }
};
const actions = {
  increment({commit}){
    commit('increment');
  }
}
const mutations = {
  increment:state=>{
    state.count++;
  }
  //在组件中可通过...mapMutation(['方法'])的方式挂载到method或者computed上进行调用
  //其次在不涉及到异步改变状态的前提下，可通过$store.commit('方法')，进行调用
}
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
export default store;

//较大项目时，建议将各个注册文件单独存放，引入的方式进行注册
