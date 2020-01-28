<template>
  <div class="my-container">
    <div class="my-row">
      <app-dialog-with-backdrop class="c-12 c-md-6"></app-dialog-with-backdrop>
      <app-dialog-with-escape-close class="c-12 c-md-6"></app-dialog-with-escape-close>

      <app-dialog-with-backdrop-click class="c-12 c-md-6"></app-dialog-with-backdrop-click>
      <app-dialog-with-result class="c-12 c-md-6"></app-dialog-with-result>
    </div>
  </div>
</template>

<script>
import DialogWithBackdrop from "./DialogWithBackdrop";
import DialogWithEscapeClose from "./DialogWithEscapeClose";
import DialogWithBackdropClick from "./DialogWithBackdropClick";
import DialogWithResult from "./DialogWithResult";
export default {
  components: {
    appDialogWithBackdrop: DialogWithBackdrop,
    appDialogWithEscapeClose: DialogWithEscapeClose,
    appDialogWithBackdropClick: DialogWithBackdropClick,
    appDialogWithResult: DialogWithResult
  }
};
</script>
<style lang="scss" scoped>
</style>