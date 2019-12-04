<template>
  <bg header="Block Form">
    <form action="#">
      <div class="my-container">
        <div class="my-row">
          <div class="c-12 c-md-6">
            <label class="label">
              {{blockFormData.firstLabel}}
              <app-inp :inputPlaceholder="blockFormData.firstInputPlaceholder" class="input"></app-inp>
            </label>
            <label class="label">
              {{blockFormData.secondLabel}}
              <app-inp :inputPlaceholder="blockFormData.secondInputPlaceholder" class="input"></app-inp>
            </label>
            <app-btn :btnText="blockFormData.buttonText" :type="'info'"></app-btn>
          </div>
          <div class="c-12 c-md-6">
            <label class="label">
              {{blockFormData.thirdLabel}}
              <app-inp :inputPlaceholder="blockFormData.thirdInputPlaceholder" class="input"></app-inp>
            </label>
            <label class="label">
              {{blockFormData.fourthLabel}}
              <app-inp :inputPlaceholder="blockFormData.fourthInputPlaceholder" class="input"></app-inp>
            </label>
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
  props: ["blockFormData"],
  components: {
    appInp: Inp,
    appCheck: Check,
    appBtn: Btn,
    bg
  }
};
</script>
<style lang="scss" scoped>
form {
  margin-top: 15px;
}
.label {
  font-size: 14px;
  color: gray;
  font-weight: 600;
  .input {
    margin: 5px 0 20px 0;
  }
}
</style>