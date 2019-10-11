<template>
  <div class="checkboxes-container">
    <div class="checkboxes-header">
      <p>Checkboxes</p>
    </div>
    <div class="checkbox-group">
      <app-checkbox-item v-for="data in CheckboxesData" :key="data.id" :data="data"></app-checkbox-item>
    </div>
  </div>
</template>


<script>
import CheckboxItem from "./CheckboxItem";
export default {
  data() {
    return {
      CheckboxesData: [
        { id: 1, name: "Purple", value: "purple", checked: false },
        { id: 2, name: "Green", value: "green", checked: true },
        { id: 3, name: "Orange", value: "orange", checked: false },
        { id: 4, name: "Black", value: "black", checked: true },
        { id: 5, name: "Brown", value: "brown", checked: false }
      ]
    };
  },
  components: {
    appCheckboxItem: CheckboxItem
  }
};
</script>

<style lang="scss" scoped>
.checkboxes-container {
  background-color: $component-bg-color;
  padding: 15px;
  height: fit-content;
  width: $component-width;
  margin: $margin-container;
  .checkboxes-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid $components-header-border-color;
    }
  }
}
.checkbox-group {
  margin-top: 10px;
}
</style>