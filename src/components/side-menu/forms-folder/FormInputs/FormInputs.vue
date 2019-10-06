<template>
  <div>
    <div class="my-container">
      <div class="my-row">
        <div class="c-12 c-md-6">
          <app-default-inputs></app-default-inputs>
        </div>
        <div class="c-12 c-md-6">
          <app-select :options="selectOptions"></app-select>
          <app-validation-states></app-validation-states>
          <div class="my-row">
            <app-radiobuttons class="c-12 c-md-6" :RadiobuttonsData="RadiobuttonsData"></app-radiobuttons>
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

export default {
  components: {
    appDefaultInputs: DefaultInputs,
    appSelect: Select,
    appValidationStates: ValidationStates,
    appRadiobuttons: Radiobuttons,
    appCheckboxes: Checkboxes
  },
  data() {
    return {
      selectOptions: [
        { id: 1, value: "rabbit", option: "Rabbit" },
        { id: 2, value: "turtle", option: "Turtle" },
        { id: 3, value: "elephant", option: "Elephant" }
      ],
      RadiobuttonsData: [
        { id: 1, checkId: "north", name: "directions", value: "North" },
        { id: 2, checkId: "south", name: "directions", value: "South" },
        { id: 3, checkId: "east", name: "directions", value: "East" },
        { id: 4, checkId: "west", name: "directions", value: "West" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>