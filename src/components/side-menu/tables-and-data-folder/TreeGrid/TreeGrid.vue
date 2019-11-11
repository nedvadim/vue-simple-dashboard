<template>
  <div>
    <bg :header="'Tree Grid'">
      <tree-grid-item :data="treeData" :headers="treeHeaders"></tree-grid-item>
    </bg>
  </div>
</template>
<script>
import TreeGridItem from "./TreeGridItem";
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
      treeData: [
        {
          name: "MyProjects",
          kind: "dir",
          items: [
            { name: "project-1.doc", size: 300, kind: "doc" },
            { name: "project-2.doc", size: 670, kind: "doc" },
            { name: "very-important-project.docx", size: 310, kind: "docx" }
          ]
        },
        {
          name: "OldFiles",
          kind: "dir",
          items: [
            { name: "report-1.doc", size: 80, kind: "doc" },
            { name: "logs.doc", size: 100, kind: "doc" }
          ]
        },
        {
          name: "Other",
          kind: "dir",
          items: [
            { name: "backup.bkp", size: 117890, kind: "bkp" },
            { name: "important-notes.txt", size: 3500, kind: "txt" }
          ]
        }
      ]
    };
  },
  components: {
    TreeGridItem,
    bg
  }
};
</script>

<style lang="scss" scoped>
</style>