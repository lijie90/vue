<template>
  <div class="hello">
    <!-- <h1>Tree</h1> -->
    <!-- <button @click="greet">事件触发</button> -->
    <li
      v-for="(item,index) in treeData"
      :key="item.id"
      :style="{marginLeft:item.increment*12+'px'}"
    >
      <div @click.stop="changeStatus(index)">
        <span v-if="item.isParent">●{{item.title}}</span>
        <span v-if="!item.isParent">○{{item.title}}</span>
      </div>
      <ul>
        <Tree v-if="scopesDefault[index]" :treeData="item.children"></Tree>
      </ul>
    </li>
  </div>
</template>
<script>
export default {
  name: "Tree",
  // props: ["indexObj"],
  data() {
    return {
      indexObj: [{ id: "1", message: "Foo" }, { id: "2", message: "Bar" }],
      isOpen: false,
      scopesDefault: [],
      scopes: []
    };
  },
  props: {
    treeData: Array,
    default: []
    // isOpen: Boolean,
    // default: false
  },
  methods: {
    changeStatus(index) {
      if (this.scopesDefault[index] == true) {
        this.$set(this.scopesDefault, index, false);
      } else {
        this.$set(this.scopesDefault, index, this.scopes[index]);
      }
    },
    scope() {
      this.treeData.forEach((item, index) => {
        this.scopesDefault[index] = false;
        if ("children" in item) {
          this.scopes[index] = true;
        } else {
          this.scopes[index] = false;
        }
      });
    }
  },

  created() {
    this.scope();
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
  /* position: relative; */
  /* width: 20%;
  margin: 0 auto; */
}
ul li {
  text-align: left;

  /* top: 24px; */
}

a {
  color: #42b983;
}
</style>
