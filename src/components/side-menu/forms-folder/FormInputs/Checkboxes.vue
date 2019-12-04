<template>
  <bg header="Checkboxes">
    <div class="checkbox-group">
      <app-checkbox-item v-for="data in CheckboxesData" :key="data.id" :data="data"></app-checkbox-item>
    </div>
  </bg>
</template>


<script>
import CheckboxItem from "./CheckboxItem";
import bg from "../../WhiteBack";
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
    appCheckboxItem: CheckboxItem,
    bg
  }
};
</script>

<style lang="scss" scoped>
.checkbox-group {
  margin-top: 10px;
}
</style>