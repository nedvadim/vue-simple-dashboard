<template>
  <div class="inline-form-container">
    <div class="inline-form-header">
      <p>{{inlineFormData.formName}}</p>
    </div>
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
  </div>
</template>
<script>
import Inp from "../FormInputs/TextInputItem";
import Check from "../FormInputs/CheckboxItem";
import Btn from "../Buttons/ButtonItem";
export default {
  props: ["inlineFormData"],
  components: {
    appInp: Inp,
    appCheck: Check,
    appBtn: Btn
  }
};
</script>
<style lang="scss" scoped>
.inline-form-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .inline-form-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
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