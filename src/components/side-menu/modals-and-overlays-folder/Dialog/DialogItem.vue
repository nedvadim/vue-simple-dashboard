<template>
  <div
    class="screen-overlay"
    :class="[{displayNone: !this.isOpened}, {withoutBackdrop: data.withoutBackdrop}]"
    @click.self="closeDialog()"
    tabindex="0"
    @keyup.esc="escapeDialog()"
    autofocus="autofocus"
  >
    <div class="dialog-window">
      <div class="dialog-header">
        <h1>{{this.data.title}}</h1>
      </div>
      <div v-if="!data.withInput" class="dialog-content">
        <p>{{data.content}}</p>
        <app-btn class="button" @click.native="closeDialogWithButton()" :btnText="data.buttonText"></app-btn>
      </div>
      <div v-else>
        <div class="my-container">
          <div class="my-row">
            <!-- INPUUUUUUUUT-->
            <app-inp
              :inputPlaceholder="dialogInputPlaceholder"
              class="c-12 input"
              v-model="inputValue"
            ></app-inp>
            <p>{{inputValue}}!!!</p>
          </div>
          <div class="my-row">
            <app-btn
              class="button c-3"
              :type="'warning'"
              @click.native="closeDialogWithButton()"
              :btnText="'Cancel'"
            ></app-btn>
            <app-btn class="button c-3" @click.native="sendResult()" :btnText="'Submit'"></app-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Btn from "../../forms-folder/Buttons/ButtonItem";
import Inp from "../../forms-folder/FormInputs/TextInputItem";
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    appBtn: Btn,
    appInp: Inp
  },
  props: ["data", "dialogInputPlaceholder"],
  // data:{
  //   title:{
  //     type:String
  //   },
  //   content:{
  //     type:String
  //   },
  //   buttonText:{
  //     type:String
  //   },
  //   isOpen:{
  //     type:Boolean,
  //     default:false
  //   },
  //   withoutBackdrop:{
  //     type:Boolean,
  //     default:false
  //   },
  //   withEscape:{
  //     type:Boolean,
  //     default: false
  //   },withBackdropClick:{
  //     type:Boolean,
  //     default: true
  //   }
  // }
  computed: {
    isOpened: function() {
      return this.data.isOpen;
    }
  },
  methods: {
    closeDialog() {
      if (this.data.withBackdropClick) {
        this.$emit("close-dialog");
      }
    },
    closeDialogWithButton() {
      this.$emit("close-dialog");
    },
    escapeDialog() {
      if (this.data.withEscape) {
        this.$emit("close-dialog");
      }
    },
    sendResult(value) {},
    setResult(value) {
      console.log("value: " + value);
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
.input {
  margin: 20px 10px 0 10px;
}
.button {
  margin: 10px;
}
</style>