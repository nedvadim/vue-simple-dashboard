<template>
  <div
    class="screen-overlay"
    :class="[{displayNone: !this.isOpened}, {withoutBackdrop: data.withoutBackdrop}]"
    @click.self="closeDialog()"
  >
    <!-- FOR TESTING PURPOSES. DELETE IT AFTER ALL.
      <input
      class="headInp"
      ref="headerinput"
      id="hed"
      @keydown.esc="escapeDialog"
      style="height:80px"
    />-->

    <!-- Simple Modal -->
    <div class="dialog-window" tabindex="0" @keydown.esc="escapeDialog">
      <div class="dialog-header" tabindex="0" @keydown.esc="escapeDialog">
        <h1 tabindex="0" @keydown.esc="escapeDialog">{{this.data.title}}</h1>
      </div>
      <div v-if="!data.withInput" class="dialog-content" tabindex="0" @keydown.esc="escapeDialog">
        <p tabindex="0" @keydown.esc="escapeDialog">{{data.content}}</p>
        <app-btn
          class="button"
          id="closeBtn"
          :reference="'closeButton'"
          @click.native="closeDialogWithButton()"
          @keydown.native.esc="escapeDialog"
          tabindex="0"
          :btnText="data.buttonText"
        ></app-btn>
      </div>

      <!-- Form inside Modal -->
      <div v-else tabindex="0" @keydown.esc="escapeDialog">
        <div class="my-container" tabindex="0" @keydown.esc="escapeDialog">
          <div class="my-row" tabindex="0" @keydown.esc="escapeDialog">
            <!-- INPUT-->
            <app-inp
              :inputPlaceholder="dialogInputPlaceholder"
              class="c-12 input"
              v-model="inputValue"
              @keyup.enter.native="sendResult()"
              @keyup.esc.native="closeDialogWithButton()"
            ></app-inp>
            <!-- !!!!!!!!!!!!!! -->
            <p>{{this.inputValue}}</p>
          </div>
          <div class="my-row" tabindex="0" @keydown.esc="escapeDialog">
            <app-btn
              class="button c-3"
              :type="'warning'"
              @click.native="closeDialogWithButton()"
              id="cancelButton"
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
import Vue from "vue";
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
  watch: {
    data: {
      handler(val) {
        console.log("data changed");
      },
      deep: true
    },
    isOpened: function(val) {
      if (!val) {
        return;
      }
      this.setFocus();
    }
  },
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
      console.log("in event func");
      if (this.data.withEscape) {
        console.log("in event if");
        this.$emit("close-dialog");
      }
    },
    sendResult() {
      var word = this.inputValue;
      this.$emit("send-result", word);
      this.inputValue = "";
    },
    setFocus() {
      Vue.nextTick(function() {
        document.getElementById("closeBtn").focus();
        console.log(document.getElementById("closeBtn"));
      });
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
.withoutVisualFocus {
  &:focus {
    outline: none;
  }
}
</style>