<template>
  <div class="my-container">
    <div class="my-row">
      <app-open-dialog class="c-12 c-md-6"></app-open-dialog>
      <!--<app-open-dialog class="c-12 c-md-6"></app-open-dialog> -->
    </div>
  </div>
</template>

<script>
import OpenDialog from "./OpenDialog";
export default {
  components: {
    appOpenDialog: OpenDialog
  }
};
</script>
<style lang="scss" scoped>
</style>