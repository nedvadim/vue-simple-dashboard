<template>
  <bg header="Default Buttons">
    <div class="default-buttons">
      <app-button-item
        class="margin"
        v-for="(buttonType, index) in buttonTypes"
        :key="index"
        :type="buttonType"
        :btnText="buttonType"
      ></app-button-item>
    </div>
  </bg>
</template>
<script>
import ButtonItem from "./ButtonItem";
import bg from "../../WhiteBack";
export default {
  data() {
    return {
      buttonTypes: [
        "primary",
        "success",
        "warning",
        "danger",
        "info",
        "disabled"
      ]
    };
  },
  components: {
    appButtonItem: ButtonItem,
    bg
  }
};
</script>
<style lang="scss" scoped>
.default-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>