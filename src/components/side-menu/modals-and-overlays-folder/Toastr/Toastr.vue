<template>
  <div class="my-container">
    <div class="my-row">
      <config class="c-12"></config>
      <div class="c-12">
        <tst></tst>
      </div>
    </div>
  </div>
</template>
<script>
import ToastrConfiguration from "./ToastrConfiguration";
import OkToast from "./OkToastr/OkToastr";
export default {
  components: {
    config: ToastrConfiguration,
    tst: OkToast
  }
};
</script>