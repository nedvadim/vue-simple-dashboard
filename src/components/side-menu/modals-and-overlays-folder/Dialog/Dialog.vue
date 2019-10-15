<template>
  <div class="my-container">
    <div class="my-row">
      <app-open-with-backdrop class="c-12 c-md-6"></app-open-with-backdrop>
      <!--<app-open-dialog class="c-12 c-md-6"></app-open-dialog> -->
    </div>
  </div>
</template>

<script>
import OpenWithBackdrop from "./OpenWithBackdrop";
export default {
  components: {
    appOpenWithBackdrop: OpenWithBackdrop
  }
};
</script>
<style lang="scss" scoped>
</style>