<template>
  <div class="hello">
    <h1>引用Tree</h1>
    <ul>
      <Tree @showCityName="updateOpen" :isOpen="isOpen" :treeData="treeData"></Tree>
    </ul>
  </div>
</template>
<script>
import Tree from "@/components/Tree";
export default {
  name: "TestTree",
  components: {
    Tree
  },
  // props: ["indexObj"],
  data() {
    return {
      indexObj: [{ id: "1", message: "Foo" }, { id: "2", message: "Bar" }],
      isOpen: false,
      treeData: [
        {
          id: 1,
          title: "张无忌",
          increment: 0,
          openShow: false,
          isParent: true,
          children: [
            {
              id: 11,
              increment: 1,
              isParent: true,
              openShow: false,
              left: 12,
              title: "张小忌",
              children: [
                {
                  id: 21,
                  increment: 2,
                  left: 12,
                  title: "张x忌",
                  openShow: false
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "谢逊",
          increment: 0,
          openShow: false,
          isParent: true,
          children: [
            {
              id: 21,
              increment: 1,
              isParent: true,
              openShow: false,
              left: 12,
              title: "谢小逊",
              children: [
                {
                  id: 31,
                  increment: 2,
                  left: 12,
                  title: "谢x逊",
                  openShow: false
                }
              ]
            }
          ]
        },
        {
          id: 3,
          increment: 0,
          isParent: false,
          title: "赵敏"
        },
        {
          id: 4,
          increment: 0,
          isParent: false,
          title: "周芷若"
        }
      ]
    };
  },

  methods: {
    updateOpen: function(data) {},
    greet: function(id, event) {
      alert(JSON.stringify(id));
      // alert(JSON.stringify(event.target.key));
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
a {
  color: #42b983;
}
</style>
