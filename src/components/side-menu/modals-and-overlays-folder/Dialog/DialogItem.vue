<template>
  <div
    class="screen-overlay"
    :class="[{displayNone: !this.isOpened}, {withoutBackdrop: data.withoutBackdrop}]"
    @click.self="closeDialog()"
  >
    <!-- Simple Modal -->
    <div class="dialog-window withoutVisualFocus" tabindex="0" @keydown.esc.self="escapeDialog">
      <div class="dialog-header withoutVisualFocus" tabindex="0" @keydown.esc.self="escapeDialog">
        <h1
          class="withoutVisualFocus"
          tabindex="0"
          @keydown.esc.self="escapeDialog"
        >{{this.data.title}}</h1>
      </div>

      <div
        v-if="!data.withInput"
        class="dialog-content withoutVisualFocus"
        tabindex="0"
        @keydown.esc.self="escapeDialog"
      >
        <p class="withoutVisualFocus" tabindex="0" @keydown.esc.self="escapeDialog">{{data.content}}</p>
        <app-btn
          class="button"
          :id="closeId"
          :reference="'closeButton'"
          @click.native="closeDialogWithButton()"
          @keydown.native.esc.self="escapeDialog"
          tabindex="0"
          :btnText="data.buttonText"
        ></app-btn>
      </div>

      <!-- Optional Form inside Modal -->
      <div class="withoutVisualFocus" v-else tabindex="0" @keydown.esc.self="escapeDialog">
        <div class="my-container withoutVisualFocus" tabindex="0" @keydown.esc.self="escapeDialog">
          <div class="my-row withoutVisualFocus" tabindex="0" @keydown.esc.self="escapeDialog">
            <app-inp
              :inputPlaceholder="dialogInputPlaceholder"
              :inputValue="inputValueData"
              class="c-12 input"
              v-model="inputValueData"
              @keyup.enter.native="sendResult()"
              @keyup.esc.native="closeDialogWithButton()"
            ></app-inp>
          </div>
          <div class="my-row withoutVisualFocus" tabindex="0" @keydown.esc.self="escapeDialog">
            <app-btn
              class="button c-6"
              :type="'warning'"
              @click.native="closeDialogWithButton()"
              @keydown.native.esc.self="escapeDialog"
              :id="cancelId"
              :btnText="'Cancel'"
            ></app-btn>
            <app-btn class="button c-6" @click.native="sendResult()" :btnText="'Submit'"></app-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Btn from "../../forms-folder/Buttons/ButtonItem";
import Inp from "../../forms-folder/FormInputs/TextInputItem";
import Vue from "vue";
export default {
  data() {
    return {
      inputValueData: ""
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
  //   },
  //   withBackdropClick:{
  //     type:Boolean,
  //     default: true
  //   }
  // }
  watch: {
    isOpened: function(val) {
      if (!val) {
        return;
      }
      if (this.data.withInput) {
        this.setFocus(this.cancelId);
      } else {
        this.setFocus(this.closeId);
      }
    }
  },
  computed: {
    isOpened: function() {
      return this.data.isOpen;
    },
    closeId: function() {
      return "closeBtn" + this.data.id;
    },
    cancelId: function() {
      return "cancelBtn" + this.data.id;
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
        this.$emit("escape-close-dialog");
      }
    },
    sendResult() {
      if (this.inputValueData === "") {
        return;
      }
      var word = this.inputValueData;
      this.$emit("send-result", word);
      this.inputValueData = "";
    },
    setFocus(id) {
      Vue.nextTick(function() {
        document.getElementById(id).focus();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$dialog-width: 40%;
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
    max-height: 550px;
    overflow: scroll;
    top: 20%;
    padding: 20px;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
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
.withoutVisualFocus {
  &:focus {
    outline: none;
  }
}
</style>