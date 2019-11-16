<template>
  <div>
    <!-- <tr class="header">
        <td v-for="(header, index) in headers" :key="index">{{header.title}}</td>
    </tr>-->
    <tree-grid-item :node="data"></tree-grid-item>
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
</style>