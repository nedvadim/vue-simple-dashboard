<template>
  <bg header="Horizontal Form">
    <form action="#">
      <div class="my-container">
        <div class="my-row form-row">
          <label for="input1" class="c-4 label">{{horizontalFormData.firstLabel}}</label>
          <app-inp
            :inputPlaceholder="horizontalFormData.firstInputPlaceholder"
            class="c-8"
            :inputId="'input1'"
          ></app-inp>
        </div>
        <div class="my-row form-row">
          <label for="input2" class="c-4 label">{{horizontalFormData.secondLabel}}</label>
          <app-inp
            :inputPlaceholder="horizontalFormData.secondInputPlaceholder"
            class="c-8"
            :inputId="'input2'"
            :inputType="'password'"
          ></app-inp>
        </div>

        <div class="my-row form-row">
          <div class="c-4"></div>
          <div class="c-8">
            <app-check class="checkbox" :status="'success'" :data="horizontalFormData.checkboxData"></app-check>
            <app-btn class="button" :btnText="horizontalFormData.buttonText"></app-btn>
          </div>
        </div>
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
  props: ["horizontalFormData"],
  components: {
    appInp: Inp,
    appCheck: Check,
    appBtn: Btn,
    bg
  }
};
</script>
<style lang="scss" scoped>
.label {
  font-size: 14px;
  color: gray;
  font-weight: 600;
}
.form-row {
  margin-top: 10px;
}
.button {
  margin-top: 7px;
  width: 50%;
}
</style>