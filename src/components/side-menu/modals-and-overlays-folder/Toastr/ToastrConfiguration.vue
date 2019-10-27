<template>
  <div>
    <bg header="Toastr Configuration">
      <div class="controls">
        <app-inp :inputPlaceholder="'Header'" v-model="toastrHeader"></app-inp>
        <app-inp :inputPlaceholder="'Content'" v-model="toastrContent"></app-inp>
        <app-inp :inputPlaceholder="'Miliseconds'" v-model="toastrDuration"></app-inp>
        <select name="color-pick" id="colorPick" v-model="toastrColor">
          <option value="primary">Primary</option>
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
        <app-btn @click.native="createToastrInstance">Get toastr</app-btn>
      </div>
      <div></div>
      <div ref="toastrContainer" class="toastrBlock"></div>
    </bg>
  </div>
</template>
<script>
import Vue from "vue";
import toastr from "./ToastrItem";
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
      toastrHeader: "Header",
      toastrContent: "passed from data",
      toastrDuration: 2000,
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
          color: this.toastrColor,
          duration: this.toastrDuration
        }
      });
      //toastrInstance.$slots.default = ["my toastr"];
      toastrInstance.$mount();
      var parent = this.$refs.toastrContainer;
      var firstChild = parent.firstChild;
      parent.insertBefore(toastrInstance.$el, firstChild);
      //this.$refs.toastrContainer.appendChild(toastrInstance.$el);
    },
    destroyToastr() {
      console.log("toastr emit catched");
    }
  }
};
</script>
<style lang="scss" scoped>
.toastrBlock {
  border: 1px solid black;
  position: absolute;
  top: 10%;
  right: 1%;
  width: 160px;
  height: auto;
}
* {
  margin: 5px;
  .controls {
    margin-top: 20px;
    select {
      height: 40px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-active,
.fade-leave-to {
  opacity: 0;
}
</style>