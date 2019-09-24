<template>
  <div class="tab-wrapper">
    <app-tab-one></app-tab-one>
  </div>
</template>

<script>
import tabOne from "./tab1";
export default {
  data() {
    return {};
  },
  components: {
    appTabOne: tabOne
  }
};
</script>
<style lang="scss" scoped>
</style>