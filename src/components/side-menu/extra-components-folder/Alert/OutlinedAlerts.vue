<template>
  <bg header="Outlined Alerts">
    <div class="alerts">
      <my-alert variant="outline" class="alert-margin">You have been successfully authenticated!</my-alert>
      <my-alert
        variant="outline"
        class="alert-margin"
        color="info"
      >You have been successfully authenticated!</my-alert>
      <my-alert
        variant="outline"
        class="alert-margin"
        color="success"
      >You have been successfully authenticated!</my-alert>
      <my-alert
        variant="outline"
        class="alert-margin"
        color="warning"
      >You have been successfully authenticated!</my-alert>
      <my-alert
        variant="outline"
        class="alert-margin"
        color="danger"
      >You have been successfully authenticated!</my-alert>
    </div>
  </bg>
</template>
<script>
import Bg from "../../WhiteBack";
import myAlert from "./AlertItem";
export default {
  components: {
    Bg,
    myAlert
  }
};
</script>
<style lang="scss" scoped>
.alerts {
  .alert-margin {
    margin-top: 15px;
  }
}
</style>