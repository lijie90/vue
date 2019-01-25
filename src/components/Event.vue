<template>
  <div class="hello">
    <h1>Event</h1>
    <!-- <button @click="greet">事件触发</button> -->
    <ul>
      <li v-for="item in indexObj" :key="item.id" @click="greet(item.id,$event)">{{item.message}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Event",
  // props: ["indexObj"],
  data() {
    return {
      indexObj: [{ id: "1", message: "Foo" }, { id: "2", message: "Bar" }]
    };
  },
  methods: {
    greet: function(id, event) {
      alert(JSON.stringify(id));
      alert(JSON.stringify(event.target.key));
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
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
