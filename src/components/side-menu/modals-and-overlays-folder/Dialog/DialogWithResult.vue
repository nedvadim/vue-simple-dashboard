<template>
  <div class="open-dialog-container">
    <div class="open-dialog-header">
      <p>Return result from Dialog</p>
    </div>
    <div class="my-container">
      <div class="my-row">
        <app-btn
          @click.native="toggleDialog1()"
          :btnText="'open dialog with backdrop click'"
          class="c-12 button"
        ></app-btn>
        <div class="list c-12">
          <h1 class="list-header">Returned Values:</h1>
          <ul>
            <li v-for="item in allReturnedValues" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <p
      v-for="n in 20"
      :key="n"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in sint autem debitis fugiat voluptatibus at nam eligendi doloremque beatae odio nulla rerum, rem deleniti esse. Aliquid qui impedit exercitationem quod. Est rem recusandae eum, repellat rerum inventore corporis iusto.</p>-->
    <app-dialog-item
      :data="dialog1Data"
      :dialogInputPlaceholder="dialogInputPlaceholder"
      @close-dialog="toggleDialog1()"
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
        title: "We can get Value from that Dialog!",
        isOpen: false,
        withoutBackdrop: false,
        withEscape: true,
        withBackdropClick: true,
        withInput: true
      },
      dialogInputPlaceholder: "Enter Name",
      allReturnedValues: ["whale", "kitten", "bug"]
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
    }
  },
  watch: {
    //
    /* Watcher that prevents scrolling, while Dialog Window is opened */
    //
    isDialogOpen: function() {
      if (this.dialog1Data.isOpen) {
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
.list {
  li {
    margin-left: 50px;
  }

  .list-header {
    font-size: 30px;
    margin-left: 30px;
  }
}
</style>