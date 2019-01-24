<template>
  <div class="hello">
    <h1>RoutTestSecond</h1>
    <ul id="example-1">
      <li v-for="(item, index) in indexObj" :key="item.id">{{ item.message }}:{{index}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RoutTestSecond",
  props: ["indexObj"],
  data() {
    return {
      // indexObj: [{ id: "1", message: "Foo" }, { id: "2", message: "Bar" }]
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
