<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <label for="num">数量</label>
    <input type="text" v-model="num">
    <label for="price">单价</label>
    <input type="text" v-model="price">
    <hr>
    <label for="totalPrice">总价:</label>
    <span>{{totalPrice}}</span>
    <hr>
    <!-- 向组件传参，调用组件 -->
    <p>向组件传参，调用组件</p>
    <RoutTestSecond :indexObj="testObj"></RoutTestSecond>
  </div>
</template>
<script>
import RoutTestSecond from "@/components/RoutTestSecond";
export default {
  name: "HelloWorld",
  components: {
    RoutTestSecond
  },

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      num: "2",
      price: "5",
      testObj: [{ id: "1", message: "Foo" }, { id: "2", message: "Bar" }]
    };
  },
  computed: {
    //计算属性，总价随数量和价格的变化而变化（实质就是监听了数量和单价的变化）
    //初始化的时候回执行一次，在此不要操作dom元素，因为组件dom元素是在mounted函数后才挂载完成
    totalPrice: function() {
      console.log("变化");
      return parseInt(this.num) * parseInt(this.price);
    }
  },

  watch: {
    //监听单个属性的变化
    num: function() {
      //监听数量的变化
      console.log("此时的数量变化为" + this.num);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
