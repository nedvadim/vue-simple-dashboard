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
  //margin-bottom: $gap-size;
  //margin: $margin-container;
  box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);
  .mytemplate-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
      padding-bottom: 6px;
    }
  }
}
</style>