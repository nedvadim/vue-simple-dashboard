<template>
  <div class="open-dialog-container">
    <div class="open-dialog-header">
      <p>Open With Escape Close</p>
    </div>
    <div class="my-container">
      <div class="my-row">
        <app-btn
          @click.native="toggleDialog1()"
          :btnText="'open dialog with escape close'"
          class="c-12 button"
        ></app-btn>

        <app-btn
          @click.native="toggleDialog2()"
          :btnText="'open dialog without escape close'"
          class="c-12 button margin-top0"
        ></app-btn>
      </div>
    </div>
    <app-dialog-item
      :data="dialog1Data"
      @close-dialog="toggleDialog1()"
      @escape-close-dialog="toggleDialog1"
    ></app-dialog-item>
    <app-dialog-item
      :data="dialog2Data"
      @close-dialog="toggleDialog2()"
      @escape-close-dialog="toggleDialog2"
    ></app-dialog-item>
  </div>
</template>
<script>
import DialogItem from "./DialogItem";
import Btn from "../../forms-folder/Buttons/ButtonItem";
export default {
  data() {
    return {
      dialog1Data: {
        id: 3,
        title: "Title of Dialog 1 Component",
        content:
          "The easiest way to try out Vue.js is using the JSFiddle Hello World example. Feel free to open it in another tab and follow along as we go through some basic examples.",
        buttonText: "close",
        isOpen: false,
        withoutBackdrop: false,
        withEscape: true,
        withBackdropClick: true
      },
      dialog2Data: {
        id: 4,
        title: "Title of Dialog 2 Component",
        content: "Hello world!",
        buttonText: "close",
        isOpen: false,
        withoutBackdrop: false,
        withEscape: false,
        withBackdropClick: true
      }
    };
  },
  components: {
    appDialogItem: DialogItem,
    appBtn: Btn
  },

  methods: {
    //
    /* Toggling Dialog Window */
    //
    toggleDialog1() {
      this.dialog1Data.isOpen = !this.dialog1Data.isOpen;
    },
    toggleDialog2() {
      this.dialog2Data.isOpen = !this.dialog2Data.isOpen;
    },
    escapeDialog() {
      this.dialog1Data.isOpen = !this.dialog1Data.isOpen;
    }
  },
  watch: {
    //
    /* Watcher that prevents scrolling, while Dialog Window is opened */
    //
    isDialogOpen: function() {
      if (this.dialog1Data.isOpen || this.dialog2Data.isOpen) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    }
  },
  computed: {
    //
    /* Computed field to identify opened Dialog. Needed to stop scrolling while Dialog is opened */
    //
    isDialogOpen() {
      return this.dialog1Data.isOpen;
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
  .margin-top0 {
    margin-top: 0;
  }
}
</style>