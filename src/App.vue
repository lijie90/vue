<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 点击跳转路由，router-view加载相应的路由组件界面 -->
    <router-link to="/first">路由first</router-link>
    <!-- <router-link to></router-link>
    <router-link to></router-link>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
