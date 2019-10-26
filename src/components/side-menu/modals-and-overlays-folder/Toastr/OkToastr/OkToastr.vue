<template>
  <div>
    <ok-toastr-config></ok-toastr-config>
  </div>
</template>
<script>
import OkToastrConfig from "./OkToastrConfiguration";
import Vue from "vue";
import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";
window.toastr = require("toastr");

Vue.use(VueToastr2);
export default {
  components: {
    OkToastrConfig: OkToastrConfig
  }
};
</script>

<style lang="scss" scoped></style>