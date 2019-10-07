<template>
  <div class="list-container">
    <div class="list-header">
      <p>Countries</p>
    </div>
    <div class="list">
      <ul>
        <li v-for="c in countries">{{c}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      countries: [
        "Japan",
        "Hungary",
        "USA",
        "Israel",
        "Slovakia",
        "France",
        "Canada",
        "Iran",
        "Bulgaria",
        "India"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
$borderColor: #a0a0a0;

.list-container {
  background-color: $components-bg-color;
  padding: 15px;
  height: fit-content;
  .list-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $borderColor;
    }
  }
  ul {
    li {
      list-style: none;
      padding: 5px 0;
      border-bottom: 1px solid #d8d8d8;
    }
  }
}
</style>