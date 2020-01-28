<template>
  <bg header="Basic Form">
    <form action="#">
      <div class="my-container">
        <div class="my-row">
          <div class="c-12">
            <label class="label">
              E-mail address
              <app-inp class="input" :inputPlaceholder="basicFormData.firstInputPlaceholder"></app-inp>
            </label>
            <label class="label">
              Password
              <app-inp
                class="input"
                :inputPlaceholder="basicFormData.secondInputPlaceholder"
                :inputType="'password'"
              ></app-inp>
            </label>
            <app-check class="c-12 check" :data="basicFormData.checkboxData"></app-check>
            <app-btn :type="'danger'" :btnText="basicFormData.buttonText"></app-btn>
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
  props: ["basicFormData"],
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
  //margin-top: 15px;
}
.label {
  font-size: 14px;
  color: gray;
  font-weight: 600;
  .input {
    //margin-top: 5px;
  }
}
.check {
  margin: 10px 0;
}
</style>