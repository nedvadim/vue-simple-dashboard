<template>
  <div>
    <div class="my-container">
      <div class="my-row">
        <bg class="c-12" header="Horizontal Stepper">
          <stepper :dataStepper="stepper1"></stepper>
        </bg>

        <bg class="c-md-6 c-12" header="Stepper with Input">
          <stepper :withInputs="true" :dataStepper="stepper2"></stepper>
        </bg>
        <bg class="c-md-6 c-12" header="Vertical Stepper">
          <stepper :isVertical="true" :dataStepper="stepper3"></stepper>
        </bg>
      </div>
    </div>
  </div>
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
      stepper1: {
        steps: 4,
        content: [
          {
            header: "Step #1",
            text: "Some interesting content!"
          },
          {
            header: "Step #2",
            text: "Something really exciting!"
          },
          {
            header: "Step #3",
            text: "Awesome step is here!"
          },
          {
            header: "Step #4",
            text: "Even more awesome step is here!"
          }
        ],
        finalStep: {
          header: "Success!",
          text: "Finally!"
        }
      },
      stepper2: {
        steps: 3,
        content: [
          {
            header: "Step #1",
            text: "Your First Name:"
          },
          {
            header: "Step #2",
            text: "Your Last Name:"
          },
          {
            header: "Step #3",
            text: "Your Age:"
          }
        ],
        finalStep: {
          header: "Success!",
          text: "Thank you"
        }
      },
      stepper3: {
        steps: 5,
        content: [
          {
            header: "Step #1",
            text: "First"
          },
          {
            header: "Step #2",
            text: "Second"
          },
          {
            header: "Step #3",
            text: "Third"
          },
          {
            header: "Step #4",
            text: "Fourth"
          },
          {
            header: "Step #5",
            text: "Fifth"
          }
        ],
        finalStep: {
          header: "Success!",
          text: "Thank you"
        }
      }
    };
  }
};
</script>>