<template>
  <div>
    <bg header="Toastr Configuration">
      <div class="controls">
        <app-inp :inputPlaceholder="'Header'" v-model="okToastrHeader"></app-inp>
        <app-inp :inputPlaceholder="'Content'" v-model="okToastrContent"></app-inp>
        <app-inp :inputPlaceholder="'Miliseconds'" v-model="okToastrOptions.timeOut"></app-inp>
        <select name="color-pick" id="colorPick" v-model="okToastrColor">
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Danger</option>
        </select>
        <app-btn @click.native="toast()">Get toastr</app-btn>
      </div>
    </bg>
  </div>
</template>

<script>
import Vue from "vue";
import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";

window.toastr = require("toastr");

Vue.use(VueToastr2);

import bg from "../../../WhiteBack";
import Inp from "../../../forms-folder/FormInputs/TextInputItem";
import Btn from "../../../forms-folder/Buttons/ButtonItem";

export default {
  data() {
    return {
      okToastrHeader: "my header", //
      okToastrContent: "my content", //
      okToastrColor: "success",
      okToastrOptions: {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000", //
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
      }
    };
  },
  components: {
    bg,
    appInp: Inp,
    appBtn: Btn
  },
  methods: {
    toast() {
      toastr.options = this.okToastrOptions;

      if (this.okToastrColor === "info") {
        this.$toastr.info(this.okToastrContent, this.okToastrHeader);
      } else if (this.okToastrColor === "warning") {
        this.$toastr.warning(this.okToastrContent, this.okToastrHeader);
      } else if (this.okToastrColor === "error") {
        this.$toastr.error(this.okToastrContent, this.okToastrHeader);
      } else if (this.okToastrColor === "success") {
        this.$toastr.success(this.okToastrContent, this.okToastrHeader);
      }
    }
  }
};
</script>