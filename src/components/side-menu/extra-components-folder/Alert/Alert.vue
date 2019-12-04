<template>
  <div class="my-container">
    <div class="my-row">
      <div class="c-md-6 c-12">
        <default></default>
      </div>
      <div class="c-md-6 c-12">
        <outlined></outlined>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultAlerts from "./DefaultAlerts";
import OutlinedAlerts from "./OutlinedAlerts";
export default {
  components: {
    default: DefaultAlerts,
    outlined: OutlinedAlerts
  }
};
</script>
<style lang="scss" scoped>
</style>