<template>
  <bg header="Button Shapes">
    <div class="button-shapes-buttons">
      <app-button-item class="margin" btnText="rectangle" :shape="'rectangle'"></app-button-item>
      <app-button-item class="margin" btnText="semi-round" :shape="'semi-round'"></app-button-item>
      <app-button-item class="margin" btnText="round" :shape="'round'"></app-button-item>
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
.button-shapes-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>