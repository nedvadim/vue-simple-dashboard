<template>
  <div>
    <div class="my-container">
      <div class="my-row">
        <app-default-inputs class="c-12 c-md-6"></app-default-inputs>
        <app-select class="c-12 c-md-6" :options="selectOptions"></app-select>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import DefaultInputs from "./DefaultInputs";
import Select from "./Select";
export default {
  components: {
    appDefaultInputs: DefaultInputs,
    appSelect: Select
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
</style>