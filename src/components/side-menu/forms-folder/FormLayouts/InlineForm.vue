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
        <div class="flex c-12 c-md-4">
          <app-check class="checkbox" :data="inlineFormData.checkboxData"></app-check>
          <app-btn class="button" type="primary" :btnText="inlineFormData.buttonText"></app-btn>
        </div>
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
  margin-top: 15px;
}
.flex {
  display: flex;
  //justify-content: space-around;
  align-items: baseline;
}
.button {
  margin-top: 15px;
  margin-left: auto;
  width: 50%;
}
</style>