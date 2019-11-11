<template>
  <div>
    <table>
      <tr class="header">
        <td v-for="(header, index) in headers" :key="index">{{header.title}}</td>
      </tr>
    </table>
    <br />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
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