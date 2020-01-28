<template>
  <bg header="Without labels">
    <form action="#">
      <div class="my-container">
        <div class="my-row"></div>
        <app-inp
          :inputPlaceholder="withoutLabelsFormData.firstInputPlaceholder"
          class="c-12 margin-top-10"
        ></app-inp>
        <app-inp
          :inputPlaceholder="withoutLabelsFormData.secondInputPlaceholder"
          class="c-12 margin-top-10"
        ></app-inp>
        <app-inp
          class="c-12 textarea margin-top-10"
          :inputPlaceholder="withoutLabelsFormData.textareaPlaceholder"
          :inputType="'textarea'"
        ></app-inp>

        <app-btn class="button" :type="'success'" :btnText="withoutLabelsFormData.buttonText"></app-btn>
      </div>
    </form>
  </bg>
</template>
<script>
import Inp from "../FormInputs/TextInputItem";
import Check from "../FormInputs/CheckboxItem";
import Btn from "../Buttons/ButtonItem";
import bg from "../../WhiteBack";
export default {
  props: ["withoutLabelsFormData"],
  components: {
    appInp: Inp,
    appCheck: Check,
    appBtn: Btn,
    bg
  }
};
</script>
<style lang="scss" scoped>
.margin-top-10 {
  margin-top: 10px;
}
.button {
  margin-top: 7px;
}
.textarea {
  width: 100%;
}
</style>