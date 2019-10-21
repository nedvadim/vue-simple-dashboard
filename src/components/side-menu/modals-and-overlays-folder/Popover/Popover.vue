<template>
  <div class="my-container">
    <div class="my-row">
      <app-simple-popover class="c-12 c-lg-6"></app-simple-popover>
    </div>
  </div>
</template>

<script>
import SimplePopover from "./SimplePopover";
export default {
  components: {
    appSimplePopover: SimplePopover
  }
};
</script>

<style lang="scss" scoped>
</style>
