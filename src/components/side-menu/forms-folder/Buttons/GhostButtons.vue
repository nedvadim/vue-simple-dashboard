<template>
  <div class="ghost-buttons-container">
    <div class="ghost-buttons-header">
      <p>Ghost Buttons</p>
      <div class="ghost-buttons">
        <app-button-item class="margin" type="default" btnText="default" :ghost="true"></app-button-item>
        <app-button-item class="margin" type="success" btnText="success" :ghost="true"></app-button-item>
        <app-button-item class="margin" type="warning" btnText="warning" :ghost="true"></app-button-item>
        <app-button-item class="margin" type="danger" btnText="danger" :ghost="true"></app-button-item>
        <app-button-item class="margin" type="info" btnText="info" :ghost="true"></app-button-item>
        <app-button-item class="margin" type="disabled" btnText="disabled"></app-button-item>
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
.ghost-buttons-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .ghost-buttons-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}

.ghost-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>