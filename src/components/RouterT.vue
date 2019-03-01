<template>
  <div class="hello">
    <h1>router路由传参</h1>
    <!-- <button @click="greet">事件触发</button> -->
    <p>{{$route.name}}</p>
    <p>{{$route.query.q}}</p>
    <p>{{query.query}}</p>
  </div>
</template>
<script>
export default {
  name: "RouterT",
  // props: ["indexObj"],
  data() {
    return {};
  },
  props: ["query"],
  methods: {}
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
