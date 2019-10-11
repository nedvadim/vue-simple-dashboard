<template>
  <div class="without-lables-container">
    <div class="without-lables-header">
      <p>{{withoutLabelsFormData.formName}}</p>
      <form action="#">
        <div class="my-container">
          <div class="my-row"></div>
          <app-inp :inputPlaceholder="withoutLabelsFormData.firstInputPlaceholder" class="c-12"></app-inp>
          <app-inp :inputPlaceholder="withoutLabelsFormData.secondInputPlaceholder" class="c-12"></app-inp>
          <app-inp
            class="c-12 textarea"
            :inputPlaceholder="withoutLabelsFormData.textareaPlaceholder"
            :inputType="'textarea'"
          ></app-inp>

          <app-btn :type="'success'" :btnText="withoutLabelsFormData.buttonText"></app-btn>
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
  props: ["withoutLabelsFormData"],
  components: {
    appInp: Inp,
    appCheck: Check,
    appBtn: Btn
  }
};
</script>
<style lang="scss" scoped>
.without-lables-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .without-lables-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
form {
  * {
    margin: 10px 0;
  }
}
.textarea {
  width: 70%;
}
</style>