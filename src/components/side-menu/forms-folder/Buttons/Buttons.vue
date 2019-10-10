<template>
  <div class="my-container">
    <div class="my-row">
      <app-default-buttons class="c-12"></app-default-buttons>
    </div>
  </div>
</template>
<script>
import DefaultButtons from "./DefaultButtons";
export default {
  components: {
    appDefaultButtons: DefaultButtons
  }
};
</script>