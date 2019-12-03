<template>
  <div class="list-container">
    <div class="list-header">
      <p>{{content.title}}</p>
    </div>
    <div class="list">
      <ul>
        <li v-for="(c, index) in content.list" :key="index">{{c}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.list-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .list-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
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