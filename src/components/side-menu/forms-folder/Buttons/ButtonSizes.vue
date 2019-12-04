<template>
  <bg header="Button Sizes">
    <div class="button-sizes-buttons">
      <app-button-item class="margin" btnText="tiny" :size="'tiny'"></app-button-item>
      <app-button-item class="margin" btnText="small" :size="'small'"></app-button-item>
      <app-button-item class="margin" btnText="medium" :size="'medium'"></app-button-item>
      <app-button-item class="margin" btnText="large" :size="'large'"></app-button-item>
      <app-button-item class="margin" btnText="giant" :size="'giant'"></app-button-item>
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
.button-sizes-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.margin {
  margin: 0 20px 20px 0;
}
</style>