<template>
  <bg header="Default Stepper">
    <div class="my-container">
      <div class="my-row">
        <stepper class="c-12" :dataStepper="stepperData"></stepper>
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
            text: "Hello World!"
          },
          {
            header: "Stepper #2",
            text: "Hello Worldd!"
          },
          {
            header: "Stepper #3",
            text: "Hello Worlddd!"
          }
          // {
          //   header: "Stepper #4",
          //   text: "Hello Worldddd!"
          // },
          // {
          //   header: "Stepper #5",
          //   text: "Hello Worldddddd!"
          // }
        ],
        finalStep: {
          header: "Success!",
          text: "Hello success!"
        }
      }
    };
  }
};
</script>>