<template>
  <div>
    <bg header="Configuration vue-toastr-2">
      <div class="controls my-container">
        <div class="my-row">
          <div class="c-12 c-lg-3">
            <app-inp
              :inputPlaceholder="'Header'"
              :inputValue="okToastrHeader"
              v-model="okToastrHeader"
            ></app-inp>
            <app-inp
              :inputPlaceholder="'Content'"
              :inputValue="okToastrContent"
              v-model="okToastrContent"
            ></app-inp>
            <my-select
              :options="colorSelectOptions"
              id="color-pick"
              v-model="okToastrColor"
              :selectValue="okToastrColor"
              @change="setOkToastrColor($event)"
            ></my-select>
          </div>

          <div class="c-12 c-lg-5">
            <!-- Timeout -->
            <div class="my-row">
              <label for="timeOutRange" class="c-5">Time Out (ms) {{okToastrOptions.timeOut}}</label>
              <input
                class="range c-7"
                type="range"
                min="0"
                max="5000"
                step="50"
                v-model="okToastrOptions.timeOut"
                id="timeOutRange"
              />
            </div>

            <!-- Extended Timeout Duration -->
            <div class="my-row">
              <label
                for="extendedTimeOutRange"
                class="c-5"
              >Extended Time Out (ms) {{okToastrOptions.extendedTimeOut}}</label>
              <input
                class="range c-7"
                type="range"
                min="0"
                max="3000"
                step="50"
                v-model="okToastrOptions.extendedTimeOut"
                id="extendedTimeOutRange"
              />
            </div>

            <!-- Hide Duration -->
            <div class="my-row">
              <label
                for="hideDuration"
                class="c-5"
              >Hide Duration (ms) {{okToastrOptions.hideDuration}}</label>
              <input
                class="range c-7"
                type="range"
                min="0"
                max="3000"
                step="50"
                v-model="okToastrOptions.hideDuration"
                id="hideDuration"
              />
            </div>

            <!-- Show Duration -->
            <div class="my-row">
              <label
                for="showDuration"
                class="c-5"
              >Show Duration (ms) {{okToastrOptions.showDuration}}</label>
              <input
                class="range c-7"
                type="range"
                min="0"
                max="3000"
                step="50"
                v-model="okToastrOptions.showDuration"
                id="showDuration"
              />
            </div>
          </div>

          <div class="c-12 c-lg-4">
            <my-select
              :options="positionSelectOptions"
              id="color-pick"
              v-model="okToastrOptions.positionClass"
              :selectValue="okToastrOptions.positionClass"
              @change="setOkToastrPosition($event)"
            ></my-select>
            <app-checkbox :data="closeButtonCheckBox" v-model="okToastrOptions.closeButton"></app-checkbox>
            <app-checkbox :data="newestOnTop" v-model="okToastrOptions.newestOnTop"></app-checkbox>
            <app-checkbox :data="progressBar" v-model="okToastrOptions.progressBar"></app-checkbox>
          </div>
        </div>
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
import Checkbox from "../../../forms-folder/FormInputs/CheckboxItem";
import mySelect from "../../../forms-folder/FormInputs/Select";

export default {
  data() {
    return {
      okToastrHeader: "Default header",
      okToastrContent: "Default content",
      okToastrColor: "success",
      okToastrOptions: {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1500",
        timeOut: "2500",
        extendedTimeOut: "1500",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
      },
      closeButtonCheckBox: {
        name: "Close Button",
        value: "closeButton",
        checked: false
      },
      newestOnTop: {
        name: "Newest on Top",
        value: "newestOnTop",
        checked: false
      },
      progressBar: {
        name: "With progress bar",
        value: "withProgressBar",
        checked: false
      },
      colorSelectOptions: [
        { id: 1, value: "success", option: "Success" },
        { id: 2, value: "info", option: "Info" },
        { id: 3, value: "warning", option: "Warning" },
        { id: 4, value: "error", option: "Error" }
      ],
      positionSelectOptions: [
        { id: 1, value: "toast-top-right", option: "Top Right" },
        { id: 2, value: "toast-bottom-right", option: "Bottom Right" },
        { id: 3, value: "toast-bottom-left", option: "Bottom Left" },
        { id: 4, value: "toast-top-left", option: "Top Left" },
        { id: 5, value: "toast-top-full-width", option: "Top Full Width" },
        {
          id: 6,
          value: "toast-bottom-full-width",
          option: "Bottom Full Width"
        },
        { id: 7, value: "toast-top-center", option: "Top Center" },
        { id: 8, value: "toast-bottom-center", option: "Bottom Center" }
      ]
    };
  },
  components: {
    bg,
    mySelect,
    appInp: Inp,
    appBtn: Btn,
    appCheckbox: Checkbox
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
    },
    setOkToastrColor($event) {
      this.okToastrColor = event.target.value;
    },
    setOkToastrPosition($event) {
      this.okToastrOptions.positionClass = event.target.value;
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 5px;
  .controls {
    margin-top: 20px;
    select {
      height: 40px;
    }
  }
}
.range {
  margin-left: 40px;
}
</style>