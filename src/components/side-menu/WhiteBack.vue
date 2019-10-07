<template>
  <div class="template-container">
    <div class="template-header">
      <p>{{header}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["header"]
};
</script>
<style lang="scss" scoped>
.template-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .template-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
</style>