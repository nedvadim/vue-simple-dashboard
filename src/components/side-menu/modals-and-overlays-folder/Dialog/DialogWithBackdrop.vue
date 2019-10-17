<template>
  <div class="open-dialog-container">
    <div class="open-dialog-header">
      <p>Open With Backdrop</p>
    </div>
    <div class="my-container">
      <div class="my-row">
        <app-btn
          @click.native="toggleDialog1()"
          :btnText="'open dialog with backdrop'"
          class="c-12 button"
        ></app-btn>

        <app-btn
          @click.native="toggleDialog2()"
          :btnText="'open dialog without backdrop'"
          class="c-12 button margin-top0"
        ></app-btn>
      </div>
    </div>
    <!-- <p
      v-for="n in 20"
      :key="n"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in sint autem debitis fugiat voluptatibus at nam eligendi doloremque beatae odio nulla rerum, rem deleniti esse. Aliquid qui impedit exercitationem quod. Est rem recusandae eum, repellat rerum inventore corporis iusto.</p>-->

    <app-dialog-item :data="dialog1Data" @close-dialog="toggleDialog1()"></app-dialog-item>

    <app-dialog-item :data="dialog2Data" @close-dialog="toggleDialog2()"></app-dialog-item>
  </div>
</template>
<script>
import DialogItem from "./DialogItem";
import Btn from "../../forms-folder/Buttons/ButtonItem";
export default {
  data() {
    return {
      dialog1Data: {
        id: 1,
        title: "Title of Dialog 1 Component",
        content:
          "You might be concerned that this whole event listening approach violates the good old rules about “separation of concerns”. Rest assured - since all Vue handler functions and expressions are strictly bound to the ViewModel that’s handling the current view, it won’t cause any maintenance difficulty. You might be concerned that this whole event listening approach violates the good old rules about “separation of concerns”. Rest assured - since all Vue handler functions and expressions are strictly bound to the ViewModel that’s handling the current view, it won’t cause any maintenance difficulty.",
        buttonText: "close",
        isOpen: false,
        withoutBackdrop: false,
        withEscape: true,
        withBackdropClick: true
      },
      dialog2Data: {
        id: 2,
        title: "Title of Dialog 2 Component",
        content:
          "You might be concerned that this whole event listening approach violates the good old rules about “separation of concerns”. Rest assured - since all Vue handler functions and expressions are strictly bound to the ViewModel that’s handling the current view, it won’t cause any maintenance difficulty. You might be concerned that this whole event listening approach violates the good old rules about “separation of concerns”. Rest assured - since all Vue handler functions and expressions are strictly bound to the ViewModel that’s handling the current view, it won’t cause any maintenance difficulty.",
        buttonText: "close",
        isOpen: false,
        withoutBackdrop: true,
        withEscape: true,
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