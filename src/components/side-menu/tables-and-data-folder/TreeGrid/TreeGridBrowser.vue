<template>
  <div>
    <table>
      <tr class="header">
        <td v-for="(header, index) in headers" :key="index">{{header.title}}</td>
      </tr>
      <tree-grid-item :node="data"></tree-grid-item>
    </table>
    <br />
  </div>
</template>
<script>
import TreeGridItem from "./TreeGridItem";
export default {
  components: {
    TreeGridItem
  },
  props: {
    data: {
      type: Object
    },
    headers: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #000000;
  tr {
    border-collapse: collapse;
    border: 1px solid #000000;
    td {
      border-collapse: collapse;
      border: 1px solid #000000;
    }
  }
}
</style>