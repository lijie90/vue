<template>
  <div class="hello">
    <h1>RoutTestFirst</h1>
    <!-- 列表渲染，*注意key必须唯一，否则报错，没有key vue会警告 -->
    <!-- 当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。
         如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，
         而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。这个类似 Vue 1.x 的 track-by="$index" 。
         这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。
         为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，
    你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的且唯一的 id。-->
    <!-- 列表渲染，可以渲染数组或者对象 -->
    <ul id="example-1">
      <li v-for="(item, index) in indexObj" :key="item.id">{{ item.message }}:{{index}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RoutTestFirst",
  data() {
    return {
      indexObj: [{ id: "1", message: "Foo" }, { id: "2", message: "Bar" }]
    };
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
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
