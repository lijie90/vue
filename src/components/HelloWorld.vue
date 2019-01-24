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
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      num: "2",
      price: "5"
    };
  },
  computed: {
    //计算属性，总价随数量和价格的变化而变化（实质就是监听了数量和单价的变化）
    //初始化的时候回执行一次，在此不能操作dom元素，因为dom元素是在mounted函数后才能执行操作，即是挂载完成后
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
