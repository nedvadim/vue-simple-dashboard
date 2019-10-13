<template>
  <div class="open-dialog-container">
    <div class="open-dialog-header">
      <p>Open Dialog</p>
    </div>
    <div class="my-container">
      <div class="my-row">
        <app-btn
          @click.native="toggleDialog()"
          :btnText="'open dialog with component'"
          class="c-12 button"
        ></app-btn>
      </div>
    </div>

    <app-dialog-item :data="dialog1Data" @close-dialog="toggleDialog()"></app-dialog-item>
  </div>
</template>
<script>
import DialogItem from "./DialogItem";
import Btn from "../../forms-folder/Buttons/ButtonItem";
export default {
  data() {
    return {
      dialog1Data: {
        title: "Title of Dialog Component",
        content:
          "You might be concerned that this whole event listening approach violates the good old rules about “separation of concerns”. Rest assured - since all Vue handler functions and expressions are strictly bound to the ViewModel that’s handling the current view, it won’t cause any maintenance difficulty. ",
        buttonText: "close",
        isOpen: false
      }
    };
  },
  components: {
    appDialogItem: DialogItem,
    appBtn: Btn
  },
  methods: {
    toggleDialog() {
      this.dialog1Data.isOpen = !this.dialog1Data.isOpen;
    }
  },
  watch: {
    openDialog1: function() {
      if (this.dialog1Data.isOpen) {
        document.documentElement.style.overflow = "hidden";
        // document.documentElement is the same as using document.querySelector('#root')
      } else {
        document.documentElement.style.overflow = "auto";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.open-dialog-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .open-dialog-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
  .button {
    margin-top: 20px;
  }
}
</style>