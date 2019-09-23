<template>
  <div>
    <div class="my-cotainer">
      <div class="my-row">
        <div class="c-12">
          <app-stepper-one></app-stepper-one>
        </div>
      </div>
    </div>
    <div class="my-container">
      <div class="my-row">
        <div class="c-12 c-md-6">
          <app-stepper-two></app-stepper-two>
        </div>
        <div class="c-12 c-md-6">
          <app-stepper-three></app-stepper-three>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import stepperOne from "./stepper1";
import stepperTwo from "./stepper2";
import stepperThree from "./stepper3";
export default {
  components: {
    appStepperOne: stepperOne,
    appStepperTwo: stepperTwo,
    appStepperThree: stepperThree
  }
};
</script>