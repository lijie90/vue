// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex';
import http from '../static/http'



// {
//   path:'/',
//   component: resolve => require(['../components/mainTem/Filtrate.vue'],resolve),
//   meta:{auth:true,keepAlive: false},
//   name:'Filtrate'
// },//首页

//路由劫持，实现登录验证，路由结构类似上文
// router.beforeEach((to,from,next) => {
//   if(to.matched.some( m => m.meta.auth)) {
//       // console.log("先判断是否登录");
//       if(to.name=='Login'){
//           next();
//       }else{
//         if(localStorage.getItem('token')){

//         //访问服务器缓存数据，判断当前token是否失效
//           Vue.http.get("http:xxxx/Login/UserIsLogin?token="+localStorage.getItem('token')+"&url="+to.name,{withCredentials: true}).then(response => response.json()).then(num => {
//                   // console.log('是否登录',num);
//                   if(num.code==1001){
//                       next();
//                   }else{
//                       alert('您的token已超时，请重新登录');
//                       next('/Login');
//                   }
//           })
//         }else{
//           next('/Login');
//         }

//       }
// 　} else {
//       console.log("请先登录");
//       next()
//   }
// })








Vue.prototype.http = http;
Vue.config.productionTip = false
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
