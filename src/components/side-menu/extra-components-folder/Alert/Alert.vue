<template>
  <div class="my-container">
    <div class="my-row">
      <div class="c-6">
        <default></default>
      </div>
      <div class="c-6">
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