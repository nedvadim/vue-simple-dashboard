<template>
  <div class="basic-form-container">
    <div class="basic-form-header">
      <p>{{horizontalFormData.formName}}</p>
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
          <div class="my-row">
            <div class="c-4"></div>
            <div class="c-8">
              <app-check
                class="checkbox"
                :status="'success'"
                :data="horizontalFormData.checkboxData"
              ></app-check>
            </div>
          </div>
          <div class="my-row">
            <div class="c-4"></div>
            <div class="c-8">
              <app-btn class="button" :btnText="horizontalFormData.buttonText"></app-btn>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Inp from "../FormInputs/TextInputItem";
import Check from "../FormInputs/CheckboxItem";
import Btn from "../Buttons/ButtonItem";
export default {
  props: ["horizontalFormData"],
  components: {
    appInp: Inp,
    appCheck: Check,
    appBtn: Btn
  }
};
</script>
<style lang="scss" scoped>
.basic-form-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  margin-bottom: 20px;
  .basic-form-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}

form {
  margin: 15px;
}
.label {
  font-size: 14px;
  color: gray;
  font-weight: 600;
}
.form-row {
  margin-top: 10px;
}
.checkbox {
  margin-top: 20px;
}
.button {
  margin-top: 20px;
}
</style>