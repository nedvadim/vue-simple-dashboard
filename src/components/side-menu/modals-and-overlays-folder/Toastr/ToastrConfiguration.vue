<template>
  <div>
    <bg header="Toastr Configuration">
      <app-inp :inputPlaceholder="'Header'" v-model="toastrHeader"></app-inp>
      <app-inp :inputPlaceholder="'Content'" v-model="toastrContent"></app-inp>
      <app-btn @click.native="createToastrInstance">Get toastr</app-btn>
      <div ref="toastrContainer"></div>
      <!-- <toastr ref="toast"></toastr> -->
    </bg>
  </div>
</template>
<script>
import Vue from "vue";
import toastr from "./ToastrItem2";
import bg from "../../WhiteBack";
import Inp from "../../forms-folder/FormInputs/TextInputItem";
import Btn from "../../forms-folder/Buttons/ButtonItem";
import ToastrItemVue from "./ToastrItem.vue";
export default {
  components: {
    bg,
    appInp: Inp,
    appBtn: Btn
    // toastr
  },
  data() {
    return {
      toastrHeader: "header from data",
      toastrContent: "passed from data",
      toastrColor: "success"
    };
  },
  methods: {
    showToast() {
      var toastr = this.$refs.toast;
    },
    createToastrInstance() {
      var ToastrComponentClass = Vue.extend(toastr);
      var toastrInstance = new ToastrComponentClass({
        propsData: {
          header: this.toastrHeader,
          content: this.toastrContent,
          color: this.toastrColor
        }
      });
      //toastrInstance.$slots.default = ["my toastr"];
      toastrInstance.$mount();
      this.$refs.toastrContainer.appendChild(toastrInstance.$el);
    },
    destroyToastr() {
      console.log("toastr emit catched");
    }
  },
  mounted() {
    console.log(1);
    // this.$on("destroy-toastr", () => this.destroyToastr());

    // this.$on("destroy-toastr", function() {
    //   console.log("toastr emit catched");
    // });
  }
};
</script>