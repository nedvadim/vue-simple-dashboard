<template>
  <div class="default-buttons-container">
    <div class="default-buttons-header">
      <p>DefaultButtons</p>
      <div class="default-buttons">
        <app-default-button
          class="margin"
          v-for="(buttonType, index) in buttonTypes"
          :key="index"
          :type="buttonType"
        ></app-default-button>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from "./DefaultButton";
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
    appDefaultButton: DefaultButton
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