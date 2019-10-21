<template>
  <div class="mytemplate-container">
    <div class="mytemplate-header">
      <p>{{header}}</p>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["header"]
};
</script>
<style lang="scss" scoped>
.mytemplate-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .mytemplate-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
</style>