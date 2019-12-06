<template>
  <bg header="Default Stepper">
    <div class="my-container">
      <div class="my-row">
        <stepper class="c-12" :data="stepperData"></stepper>
      </div>
    </div>
  </bg>
</template>
<script>
import stepper from "./StepperItem";
import bg from "../../WhiteBack";
export default {
  components: {
    stepper,
    bg
  },
  data() {
    return {
      stepperData: {
        steps: 3,
        content: [
          {
            header: "Stepper #1",
            content: "Hello World!"
          },
          {
            header: "Stepper #2",
            content: "Hello World!"
          },
          {
            header: "Stepper #3",
            content: "Hello World!"
          }
        ]
      }
    };
  }
};
</script>>