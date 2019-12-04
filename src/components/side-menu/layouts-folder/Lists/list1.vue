<template>
  <bg :header="content.title">
    <div class="list">
      <ul class="list-container">
        <li class="list-component" v-for="(c, index) in content.list" :key="index">{{c}}</li>
      </ul>
    </div>
  </bg>
</template>
<script>
import bg from "../../WhiteBack";
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  components: {
    bg
  }
};
</script>
<style lang="scss" scoped>
.list-container {
  background-color: $component-bg-color;
  height: fit-content;
  width: $component-width;

  .list-component {
    list-style: none;
    padding: 5px 0;
    border-bottom: 1px solid #d8d8d8;
  }
}
</style>