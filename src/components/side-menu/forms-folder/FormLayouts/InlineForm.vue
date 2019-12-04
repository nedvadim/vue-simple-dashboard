<template>
  <bg header="Inline Form">
    <div class="my-container">
      <div class="my-row">
        <app-inp class="inp c-12 c-md-4" :inputPlaceholder="inlineFormData.firstInputPlaceholder"></app-inp>
        <app-inp
          class="inp c-12 c-md-4"
          :inputPlaceholder="inlineFormData.secondInputPlaceholder"
          :inputType="'password'"
        ></app-inp>
        <app-check class="checkbox c-6 c-md-1" :data="inlineFormData.checkboxData"></app-check>
        <app-btn class="button c-6 c-md-3" type="primary" :btnText="inlineFormData.buttonText"></app-btn>
      </div>
    </div>
  </bg>
</template>
<script>
import Inp from "../FormInputs/TextInputItem";
import Check from "../FormInputs/CheckboxItem";
import Btn from "../Buttons/ButtonItem";
import bg from "../../WhiteBack";
export default {
  props: ["inlineFormData"],
  components: {
    appInp: Inp,
    appCheck: Check,
    appBtn: Btn,
    bg
  }
};
</script>
<style lang="scss" scoped>
.inp {
  margin-top: 25px;
}
.checkbox {
  margin: 25px 0 0 0;
}
.button {
  margin: 20px 0 0 0;
}
</style>