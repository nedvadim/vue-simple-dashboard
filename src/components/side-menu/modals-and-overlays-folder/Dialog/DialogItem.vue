<template>
  <div
    class="screen-overlay"
    :class="[{displayNone: !this.isOpened}, {withoutBackdrop: data.withoutBackdrop}]"
    @click.self="closeDialog()"
  >
    <div class="dialog-window">
      <div class="dialog-header">
        <h1>{{this.data.title}}</h1>
      </div>
      <div class="dialog-content">
        <p>{{data.content}}</p>
        <app-btn class="button" @click.native="closeDialog()" :btnText="data.buttonText"></app-btn>
      </div>
    </div>
  </div>
</template>
<script>
import Btn from "../../forms-folder/Buttons/ButtonItem";
export default {
  data() {
    return {};
  },
  components: {
    appBtn: Btn
  },
  props: ["data"],
  computed: {
    isOpened: function() {
      return this.data.isOpen;
    }
  },
  methods: {
    closeDialog() {
      console.log("emit!");
      this.$emit("close-dialog");
    }
  }
};
</script>
<style lang="scss" scoped>
$dialog-width: 30%;
.screen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  overflow: hidden;
  background: rgba(80, 80, 80, 0.3);
  .dialog-window {
    background-color: #fff;
    width: $dialog-width;
    min-width: 300px;
    height: auto;
    position: relative;
    top: 20%;
    left: 50%;
    padding: 20px;
    margin-left: -($dialog-width/2);
    pointer-events: all;
    .dialog-header {
      h1 {
        font-size: 20px;
        border-bottom: 1px solid $components-header-border-color;
        padding-bottom: 10px;
      }
    }
    .dialog-content {
      .button {
        margin: 10px;
      }
    }
  }
}

.displayNone {
  display: none;
}
.withoutBackdrop {
  background: rgba(80, 80, 80, 0);
  pointer-events: none;
}
</style>