<template>
  <div>
    <bg :header="'Tree Grid'">
      <tree-grid-browser :data="treeData" :headers="treeHeaders"></tree-grid-browser>
    </bg>
  </div>
</template>
<script>
import TreeGridBrowser from "./TreeGridBrowser";
import bg from "../../WhiteBack";
export default {
  data() {
    return {
      treeHeaders: [
        { title: "Name" },
        { title: "Size" },
        { title: "Kind" },
        { title: "Items" }
      ],
      treeData: {
        name: "Root Folder",
        children: [
          {
            name: "Projects",
            children: [
              { name: "project-1.doc" },
              { name: "project-2.doc" },
              { name: "project-3.doc" }
            ]
          },
          {
            name: "Music",
            children: [
              { name: "song-4431.mp3" },
              { name: "song-23313.mp3" },
              { name: "song-9833.mp3" }
            ]
          }
        ]
      }
    };
  },
  components: {
    TreeGridBrowser,
    bg
  }
};
</script>

<style lang="scss" scoped>
</style>