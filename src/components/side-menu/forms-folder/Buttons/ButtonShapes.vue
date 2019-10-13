<template>
  <div class="button-shapes-container">
    <div class="button-shapes-header">
      <p>Button Shapes</p>
      <div class="button-shapes-buttons">
        <app-button-item class="margin" btnText="rectangle" :shape="'rectangle'"></app-button-item>
        <app-button-item class="margin" btnText="semi-round" :shape="'semi-round'"></app-button-item>
        <app-button-item class="margin" btnText="round" :shape="'round'"></app-button-item>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonItem from "./ButtonItem";
export default {
  components: {
    appButtonItem: ButtonItem
  }
};
</script>
<style lang="scss" scoped>
.button-shapes-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .button-shapes-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}

.button-shapes-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>