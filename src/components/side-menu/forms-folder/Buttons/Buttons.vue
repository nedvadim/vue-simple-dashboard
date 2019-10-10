<template>
  <div class="my-container">
    <div class="my-row">
      <app-default-buttons class="c-12"></app-default-buttons>
      <app-outline-buttons class="c-12"></app-outline-buttons>
      <app-ghost-buttons class="c-12"></app-ghost-buttons>
      <app-button-shapes class="c-12"></app-button-shapes>
      <app-button-sizes class="c-12"></app-button-sizes>
    </div>
  </div>
</template>
<script>
import DefaultButtons from "./DefaultButtons";
import OutlineButtons from "./OutlineButtons";
import GhostButtons from "./GhostButtons";
import ButtonShapes from "./ButtonShapes";
import ButtonSizes from "./ButtonSizes";
export default {
  components: {
    appDefaultButtons: DefaultButtons,
    appOutlineButtons: OutlineButtons,
    appGhostButtons: GhostButtons,
    appButtonShapes: ButtonShapes,
    appButtonSizes: ButtonSizes
  }
};
</script>