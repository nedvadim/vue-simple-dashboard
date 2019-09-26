<template>
  <div class="tabs-wrapper">
    <div class="my-container">
      <div class="my-row">
        <app-tab-one class="c-12 c-md-6"></app-tab-one>
      </div>
    </div>
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
.tabs-wrapper {
  width: 95%;
  margin: 1.5em auto;
}
</style>