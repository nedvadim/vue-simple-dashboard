<template>
  <div class="default-buttons-container">
    <div class="default-buttons-header">
      <p>ButtonItems</p>
      <div class="default-buttons">
        <app-button-item
          class="margin"
          v-for="(buttonType, index) in buttonTypes"
          :key="index"
          :type="buttonType"
          :btnText="buttonType"
        ></app-button-item>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonItem from "./ButtonItem";
export default {
  data() {
    return {
      buttonTypes: [
        "default",
        "success",
        "warning",
        "danger",
        "info",
        "disabled"
      ]
    };
  },
  components: {
    appButtonItem: ButtonItem
  }
};
</script>
<style lang="scss" scoped>
.default-buttons-container {
  background-color: $component-bg-color;
  padding: 15px 15px 0 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .default-buttons-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}

.default-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>