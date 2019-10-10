<template>
  <div class="button-sizes-container">
    <div class="button-sizes-header">
      <p>Button Sizes</p>
      <div class="button-sizes-buttons">
        <app-button-item class="margin" type="default" btnText="tiny" :size="'tiny'"></app-button-item>
        <app-button-item class="margin" type="default" btnText="small" :size="'small'"></app-button-item>
        <app-button-item class="margin" type="default" btnText="medium" :size="'medium'"></app-button-item>
        <app-button-item class="margin" type="default" btnText="large" :size="'large'"></app-button-item>
        <app-button-item class="margin" type="default" btnText="giant" :size="'giant'"></app-button-item>
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
.button-sizes-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  margin-bottom: 30px;
  .button-sizes-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}

.button-sizes-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>