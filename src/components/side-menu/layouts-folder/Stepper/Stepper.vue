<template>
  <div>
    <div class="my-cotainer">
      <div class="my-row">
        <div class="c-12">
          <app-stepper-one></app-stepper-one>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import stepperOne from "./stepper1";
export default {
  components: {
    appStepperOne: stepperOne
  }
};
</script>