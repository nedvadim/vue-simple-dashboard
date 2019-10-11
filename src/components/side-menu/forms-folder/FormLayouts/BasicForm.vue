<template>
  <div class="basic-form-container">
    <div class="basic-form-header">
      <p>{{basicFormData.formName}}</p>
      <form action="#">
        <div class="my-container">
          <div class="my-row">
            <label class="c-12 label">
              E-mail address
              <app-inp class="input" :inputPlaceholder="basicFormData.firstInputPlaceholder"></app-inp>
            </label>
            <label class="c-12 label">
              Password
              <app-inp
                class="input"
                :inputPlaceholder="basicFormData.secondInputPlaceholder"
                :inputType="'password'"
              ></app-inp>
            </label>
            <app-check class="c-12" :data="basicFormData.checkboxData"></app-check>
            <app-btn :type="'danger'" :btnText="basicFormData.buttonText"></app-btn>
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
  props: ["basicFormData"],
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
  .basic-form-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
form {
  margin-top: 15px;
}
.label {
  font-size: 14px;
  color: gray;
  font-weight: 600;
  .input {
    margin-top: 5px;
  }
}
</style>