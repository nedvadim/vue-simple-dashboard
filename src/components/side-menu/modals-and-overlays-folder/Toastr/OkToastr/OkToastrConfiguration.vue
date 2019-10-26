<template>
  <div>
    <bg header="Toastr Configuration">
      <div class="controls">
        <app-inp :inputPlaceholder="'Header'" v-model="okToastrHeader"></app-inp>
        <app-inp :inputPlaceholder="'Content'" v-model="okToastrContent"></app-inp>
        <app-inp :inputPlaceholder="'Miliseconds'"></app-inp>
        <select name="color-pick" id="colorPick" v-model="okToastrColor">
          <option value="primary">Primary</option>
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
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
      okToastrHeader: "Title1",
      okToastrContent: "Content1",
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
        timeOut: "5000",
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
      //   if (okToastColor === "success") {
      //     this.$toastr.success("That is so simple", "Did you see it?");
      //   } else if (okToastColor === "warning") {
      //     this.$toastr.warning("That is so simple", "Did you see it?");
      //   }

      this.$toastr.warning(this.okToastrHeader, this.okToastrContent);

      this.$toastr.options = this.okToastrOptions;
    }
  }
};
</script>