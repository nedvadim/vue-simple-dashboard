<template>
  <div>
    <div class="my-container">
      <div class="my-row">
        <div class="c-12 c-md-6">
          <app-default-inputs></app-default-inputs>
        </div>
        <div class="c-12 c-md-6">
          <bg header="Select">
            <div class="padding">
              <app-select :options="selectOptions"></app-select>
            </div>
          </bg>
          <app-validation-states></app-validation-states>
          <div class="my-row">
            <app-radiobuttons class="c-12 c-md-6"></app-radiobuttons>
            <app-checkboxes class="c-12 c-md-6"></app-checkboxes>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import DefaultInputs from "./DefaultInputs";
import Select from "./Select";
import ValidationStates from "./ValidationStates";
import Radiobuttons from "./Radiobuttons";
import Checkboxes from "./Checkboxes";
import bg from "../../WhiteBack";

export default {
  components: {
    appDefaultInputs: DefaultInputs,
    appSelect: Select,
    appValidationStates: ValidationStates,
    appRadiobuttons: Radiobuttons,
    appCheckboxes: Checkboxes,
    bg
  },
  data() {
    return {
      selectOptions: [
        { id: 1, value: "rabbit", option: "Rabbit" },
        { id: 2, value: "turtle", option: "Turtle" },
        { id: 3, value: "elephant", option: "Elephant" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.padding {
  padding: 0.9em 0 0.6em;
}
</style>