<template>
  <div class="simple-popovers-container">
    <div class="simple-popovers-header">
      <p>Simple Popovers</p>
    </div>
  </div>
</template>
<script>
export default {
  props: []
};
</script>
<style lang="scss" scoped>
.simple-popovers-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .simple-popovers-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
</style>