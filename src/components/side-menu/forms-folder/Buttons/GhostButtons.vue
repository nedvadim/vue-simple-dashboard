<template>
  <bg header="Ghost Buttons">
    <div class="ghost-buttons">
      <app-button-item class="margin" type="primary" btnText="primary" :ghost="true"></app-button-item>
      <app-button-item class="margin" type="success" btnText="success" :ghost="true"></app-button-item>
      <app-button-item class="margin" type="warning" btnText="warning" :ghost="true"></app-button-item>
      <app-button-item class="margin" type="danger" btnText="danger" :ghost="true"></app-button-item>
      <app-button-item class="margin" type="info" btnText="info" :ghost="true"></app-button-item>
      <app-button-item class="margin" type="disabled" btnText="disabled"></app-button-item>
    </div>
  </bg>
</template>
<script>
import ButtonItem from "./ButtonItem";
import bg from "../../WhiteBack";
export default {
  components: {
    appButtonItem: ButtonItem,
    bg
  }
};
</script>
<style lang="scss" scoped>
.ghost-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>